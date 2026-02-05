'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { FormSubmissionPayload, Service } from '@/types'; // Assuming you have this type
import { AlertCircle, CheckCircle, Send, Loader } from 'lucide-react';

export default function ServiceApplicationForm() {
	const params = useParams();
	const serviceSlug = params.serviceId as string;

	const [service, setService] = useState<Service | null>(null);
	const [isFetchingService, setIsFetchingService] = useState(true);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		company: '',
		industry: '',
		details: '',
	});

	const { isLoading, error, isSuccess, successMessage, handleSubmit, reset } = useFormSubmission();

	useEffect(() => {
		const fetchService = async () => {
			if (!serviceSlug) return;
			setIsFetchingService(true);
			try {
				const response = await fetch(`/api/form-submissions?serviceId=${serviceSlug}`);
				if (!response.ok) {
					throw new Error('Service not found');
				}
				const serviceData: Service = await response.json();
				setService(serviceData);
			} catch (err) {
				console.error('Failed to fetch service:', err);
				// Optionally, set an error state to show in the UI
			} finally {
				setIsFetchingService(false);
			}
		};

		fetchService();
	}, [serviceSlug]);

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!service) {
			console.error('Attempted to submit form without a loaded service.');
			// You might want to show an error to the user here
			return;
		}

		const payload: FormSubmissionPayload = {
			formType: 'service-inquiry',
			serviceId: service.id, // Use the fetched UUID
			service_name: serviceSlug, // Use the service slug
			fullName: formData.fullName,
			email: formData.email,
			phone: formData.phone,
			company: formData.company,
			industry: formData.industry,
			details: { message: formData.details }, // Wrap details in a JSON object if needed
		};

		const result = await handleSubmit(payload);

		if (result?.success) {
			setFormData({ fullName: '', email: '', phone: '', company: '', industry: '', details: '' });
			setTimeout(reset, 5000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	if (isFetchingService) {
		return (
			<div className='flex justify-center items-center min-h-[50vh]'>
				<Loader className='animate-spin h-8 w-8 text-primary' />
				<p className='ml-4 text-gray-600'>Loading form...</p>
			</div>
		);
	}

	if (!service) {
		return (
			<div className='max-w-2xl mx-auto py-12 px-4 text-center'>
				<h2 className='text-2xl font-bold text-red-600 mb-4'>Error</h2>
				<p className='text-gray-700'>
					The service you are looking for could not be found. Please return to the services page and try again.
				</p>
			</div>
		);
	}

	return (
		<div className='max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
			<div className='bg-white p-8 rounded-xl shadow-sm'>
				<h2 className='text-2xl font-bold text-primary mb-6 text-center'>
					Apply for {service.title}
				</h2>

				{isSuccess && successMessage && (
					<div className='bg-green-50 border border-green-200 rounded-lg p-4 mb-6'>
						<div className='flex items-center'>
							<CheckCircle className='h-5 w-5 text-green-500 mr-2' />
							<p className='text-green-700'>{successMessage}</p>
						</div>
					</div>
				)}

				{error && (
					<div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-6'>
						<div className='flex items-center'>
							<AlertCircle className='h-5 w-5 text-red-500 mr-2' />
							<p className='text-red-700'>{error}</p>
						</div>
					</div>
				)}

				<form onSubmit={onSubmit} className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-2'>
								Full Name *
							</label>
							<input
								type='text'
								id='fullName'
								name='fullName'
								required
								value={formData.fullName}
								onChange={handleChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
								placeholder='Your full name'
							/>
						</div>

						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
								Email Address *
							</label>
							<input
								type='email'
								id='email'
								name='email'
								required
								value={formData.email}
								onChange={handleChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
								placeholder='your.email@example.com'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
								Phone Number
							</label>
							<input
								type='tel'
								id='phone'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
								placeholder='+27 XX XXX XXXX'
							/>
						</div>

						<div>
							<label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'>
								Company
							</label>
							<input
								type='text'
								id='company'
								name='company'
								value={formData.company}
								onChange={handleChange}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
								placeholder='Your company name'
							/>
						</div>
					</div>

					<div>
						<label htmlFor='industry' className='block text-sm font-medium text-gray-700 mb-2'>
							Industry
						</label>
						<input
							type='text'
							id='industry'
							name='industry'
							value={formData.industry}
								onChange={handleChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
							placeholder='e.g., Technology, Manufacturing, etc.'
						/>
					</div>

					<div>
						<label htmlFor='details' className='block text-sm font-medium text-gray-700 mb-2'>
							Details
						</label>
						<textarea
							id='details'
							name='details'
							rows={6}
							value={formData.details}
							onChange={handleChange}
							className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent'
							placeholder='Provide any additional details...'
						/>
					</div>

					<button
						type='submit'
						disabled={isLoading || isFetchingService}
						className='w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'>
						{isLoading ? (
							<>
								<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
								Sending...
							</>
						) : (
							<>
								<Send className='h-5 w-5 mr-2' />
								Submit Application
							</>
						)}
					</button>
				</form>
			</div>
		</div>
	);
}
