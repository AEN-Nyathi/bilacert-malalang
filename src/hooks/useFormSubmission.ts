import { useState, useCallback } from 'react';

export interface FormSubmissionPayload {
	formType: string; // 'contact', 'service-form', etc.
	serviceId?: string; // Optional: which service the form is for
	fullName: string;
	email: string;
	phone?: string;
	message?: string;
}

export interface FormSubmissionResponse {
	success: boolean;
	message: string;
	submissionId?: string;
	error?: string;
}

export interface UseFormSubmissionState {
	isLoading: boolean;
	isSuccess: boolean;
	error: string | null;
	successMessage: string | null;
}

/**
 * Hook for submitting forms to Supabase via the /api/form-submissions endpoint
 *
 * Usage:
 * ```tsx
 * const { isLoading, error, success, handleSubmit, reset } = useFormSubmission();
 *
 * const onSubmit = async (e: FormEvent) => {
 *   e.preventDefault();
 *   await handleSubmit({
 *     formType: 'service-form',
 *     serviceId: 'class-ecs-ecns-licensing',
 *     fullName: formData.fullName,
 *     email: formData.email,
 *     phone: formData.phone,
 *     message: formData.message,
 *   });
 * };
 * ```
 */
export function useFormSubmission() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);

	const handleSubmit = useCallback(
		async (payload: FormSubmissionPayload): Promise<FormSubmissionResponse | null> => {
			setIsLoading(true);
			setError(null);
			setSuccessMessage(null);

			try {
				const response = await fetch('/api/form-submissions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(payload),
				});

				const data = (await response.json()) as FormSubmissionResponse;

				if (!response.ok) {
					const errorMessage = data.error || 'Failed to submit form. Please try again.';
					setError(errorMessage);
					return { success: false, message: errorMessage };
				}

				setSuccessMessage(data.message);
				return data;
			} catch (err) {
				const errorMessage =
					err instanceof Error ? err.message : 'An unexpected error occurred';
				setError(errorMessage);
				return { success: false, message: errorMessage };
			} finally {
				setIsLoading(false);
			}
		},
		[]
	);

	const reset = useCallback(() => {
		setError(null);
		setSuccessMessage(null);
		setIsLoading(false);
	}, []);

	return {
		isLoading,
		error,
		isSuccess: successMessage !== null,
		successMessage,
		handleSubmit,
		reset,
	};
}

/**
 * Hook for fetching a single form submission (admin only)
 *
 * Usage:
 * ```tsx
 * const { data, isLoading, error } = useFetchSubmission(submissionId);
 * ```
 */
export function useFetchSubmission(submissionId: string | null) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchSubmission = useCallback(async () => {
		if (!submissionId) return;

		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(`/api/form-submissions?submissionId=${submissionId}`);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Failed to fetch submission');
			}

			const submissionData = await response.json();
			setData(submissionData);
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : 'An error occurred';
			setError(errorMessage);
		} finally {
			setIsLoading(false);
		}
	}, [submissionId]);

	// Auto-fetch when submissionId changes
	React.useEffect(() => {
		fetchSubmission();
	}, [fetchSubmission]);

	return { data, isLoading, error, refetch: fetchSubmission };
}
