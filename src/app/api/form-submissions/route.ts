import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { formType, serviceId, fullName, email, phone, message } = body;

		// Validate required fields
		if (!formType || !fullName || !email) {
			return NextResponse.json(
				{ error: 'Missing required fields: formType, fullName, email' },
				{ status: 400 }
			);
		}

		// Create Supabase client
		const supabase = await createClient();

		// Insert form submission
		const { data, error } = await supabase
			.from('form_submissions')
			.insert([
				{
					form_type: formType,
					service_id: serviceId || null,
					full_name: fullName,
					email,
					phone: phone || null,
					message: message || null,
					status: 'pending',
				},
			])
			.select();

		if (error) {
			console.error('Supabase error:', error);
			return NextResponse.json(
				{ error: 'Failed to submit form: ' + error.message },
				{ status: 500 }
			);
		}

		// Log the submission for monitoring
		console.log(`✓ Form submission received: ${formType} from ${email}`);

		// TODO: Send email notification to admin
		// await sendAdminNotificationEmail({ ...body, submissionId: data[0].id });

		// TODO: Send confirmation email to user
		// await sendUserConfirmationEmail(email, formType);

		return NextResponse.json(
			{
				success: true,
				message: 'Form submitted successfully. We will review and contact you soon.',
				submissionId: data?.[0]?.id,
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error('Form submission error:', error);
		return NextResponse.json(
			{ error: 'An unexpected error occurred. Please try again.' },
			{ status: 500 }
		);
	}
}

/**
 * Optional: GET endpoint to retrieve submission status (for authenticated admins only)
 * Usage: GET /api/form-submissions?submissionId=xxx
 */
export async function GET(request: NextRequest) {
	try {
		const submissionId = request.nextUrl.searchParams.get('submissionId');

		if (!submissionId) {
			return NextResponse.json(
				{ error: 'submissionId query parameter required' },
				{ status: 400 }
			);
		}

		const supabase = await createClient();

		// Check user is authenticated and is an admin
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}

		// Fetch user profile to check role
		const { data: userProfile } = await supabase
			.from('users')
			.select('role')
			.eq('auth_id', user.id)
			.single();

		if (userProfile?.role !== 'admin') {
			return NextResponse.json(
				{ error: 'Forbidden: Only admins can view submissions' },
				{ status: 403 }
			);
		}

		// Retrieve submission
		const { data, error } = await supabase
			.from('form_submissions')
			.select('*')
			.eq('id', submissionId)
			.single();

		if (error) {
			return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error('Form retrieval error:', error);
		return NextResponse.json(
			{ error: 'An unexpected error occurred' },
			{ status: 500 }
		);
	}
}
