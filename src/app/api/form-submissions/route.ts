import { createClient } from '@/lib/supabase/server';
import { getServiceBySlug } from '@/lib/supabase/services';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { formType, serviceId, fullName, email, phone, company, industry, details } = body;

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
					company: company || null,
					industry: industry || null,
					details: details || null,
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

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const submissionId = searchParams.get('submissionId');
		const serviceId = searchParams.get('serviceId');

		const supabase = await createClient();

		if (serviceId) {
			const service = await getServiceBySlug(serviceId);

			if (!service) {
				return NextResponse.json({ error: 'Service not found' }, { status: 404 });
			}
			return NextResponse.json(service);
		}

		if (submissionId) {
			const { data: { user } } = await supabase.auth.getUser();
			if (!user) {
				return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
			}

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

			const { data, error } = await supabase
				.from('form_submissions')
				.select('*')
				.eq('id', submissionId)
				.single();

			if (error) {
				return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
			}
			return NextResponse.json(data);
		}

		return NextResponse.json(
			{ error: 'submissionId or serviceId query parameter required' },
			{ status: 400 }
		);
	} catch (error) {
		console.error('Form retrieval error:', error);
		return NextResponse.json(
			{ error: 'An unexpected error occurred' },
			{ status: 500 }
		);
	}
}
