import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const { data: service } = await supabase
		.from('services')
		.select('*')
		.eq('href', `/services/${params.slug}`)
		.single();

	if (!service) {
		return {
			title: 'Service Not Found - Bilacert',
		};
	}

	return {
		title: `${service.title} - Bilacert`,
		description: service.description,
		keywords: [
			service.title.toLowerCase(),
			service.category?.toLowerCase(),
			'licensing',
			'certification',
			'ICASA',
			'South Africa',
		],
		openGraph: {
			title: service.title,
			description: service.short_description || service.description,
			url: `https://bilacert.co.za/services/${params.slug}`,
			type: 'website',
			images: service.image ? [{ url: service.image }] : [],
		},
		alternates: {
			canonical: `https://bilacert.co.za/services/${params.slug}`,
		},
	};
}

export default async function ServiceDetailPage({ params }: Props) {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	const { data: service } = await supabase
		.from('services')
		.select('*')
		.eq('href', `/services/${params.slug}`)
		.single();

	if (!service) {
		notFound();
	}

	const features = Array.isArray(service.features) ? service.features : [];
	const requirements = Array.isArray(service.requirements) ? service.requirements : [];

	return (
		<div className='min-h-screen'>
			{/* Navigation */}
			<section className='bg-gray-50 border-b border-gray-200'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<Link
						href='/services'
						className='flex items-center gap-2 text-accent hover:text-accent-dark font-semibold transition-colors'>
						<ArrowLeft className='h-5 w-5' />
						Back to Services
					</Link>
				</div>
			</section>

			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-start gap-6'>
						<div className='text-5xl'>{service.icon}</div>
						<div className='flex-1'>
							<h1 className='text-4xl lg:text-5xl font-bold mb-4'>{service.title}</h1>
							<p className='text-xl text-gray-100 mb-4'>{service.short_description}</p>
							{service.category && (
								<span className='inline-block bg-accent/20 px-4 py-2 rounded-lg text-sm font-semibold'>
									Category: {service.category}
								</span>
							)}
						</div>
					</div>
				</div>
			</section>

			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
					{/* Main Content */}
					<div className='lg:col-span-2 space-y-12'>
						{/* Overview */}
						<div>
							<h2 className='text-3xl font-bold text-primary mb-6'>Service Overview</h2>
							<div className='prose prose-lg max-w-none text-gray-700 leading-relaxed'>
								{service.content ||
									service.description.split('\n').map((para: string, idx: number) => (
										<p key={idx}>{para}</p>
									))}
							</div>
						</div>

						{/* Features */}
						{features.length > 0 && (
							<div>
								<h2 className='text-3xl font-bold text-primary mb-6'>What's Included</h2>
								<ul className='space-y-4'>
									{features.map((feature: string, idx: number) => (
										<li key={idx} className='flex items-start gap-4'>
											<div className='flex-shrink-0 mt-1'>
												<Check className='h-6 w-6 text-accent' />
											</div>
											<span className='text-lg text-gray-700'>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)}

						{/* Requirements */}
						{requirements.length > 0 && (
							<div>
								<h2 className='text-3xl font-bold text-primary mb-6'>Requirements</h2>
								<ul className='space-y-4'>
									{requirements.map((req: string, idx: number) => (
										<li key={idx} className='flex items-start gap-4'>
											<div className='flex-shrink-0 mt-1'>
												<div className='flex items-center justify-center h-6 w-6 rounded-full bg-accent/10 text-accent text-sm font-bold'>
													✓
												</div>
											</div>
											<span className='text-lg text-gray-700'>{req}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* Sidebar */}
					<div className='lg:col-span-1'>
						{/* Info Card */}
						<div className='bg-secondary-gray rounded-xl p-8 mb-8 sticky top-4'>
							{service.processing_time && (
								<div className='mb-6 pb-6 border-b border-gray-300'>
									<p className='text-sm text-gray-600 font-semibold mb-2'>PROCESSING TIME</p>
									<p className='text-2xl font-bold text-primary'>{service.processing_time}</p>
								</div>
							)}

							{service.pricing && (
								<div className='mb-6 pb-6 border-b border-gray-300'>
									<p className='text-sm text-gray-600 font-semibold mb-2'>PRICING</p>
									<p className='text-2xl font-bold text-primary'>
										{service.pricing.currency} {service.pricing.amount}
									</p>
								</div>
							)}

							<Link
								href={`/contact?service=${encodeURIComponent(service.title)}`}
								className='block w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg text-center transition-colors mb-4'>
								Request Service
							</Link>

							<a
								href='tel:0754304433'
								className='block w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg text-center transition-colors'>
								Call 075 430 4433
							</a>
						</div>

						{/* Quick Links */}
						<div className='bg-white border border-gray-200 rounded-xl p-8'>
							<h3 className='font-bold text-primary mb-4'>Related Services</h3>
							<ul className='space-y-3'>
								<li>
									<Link href='/services' className='text-accent hover:text-accent-dark font-semibold'>
										View All Services
									</Link>
								</li>
								<li>
									<Link href='/contact' className='text-accent hover:text-accent-dark font-semibold'>
										Get in Touch
									</Link>
								</li>
								<li>
									<Link href='/about' className='text-accent hover:text-accent-dark font-semibold'>
										About Us
									</Link>
								</li>
								<li>
									<Link href='/faq' className='text-accent hover:text-accent-dark font-semibold'>
										FAQ
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Ready to Get Started?</h2>
						<p className='text-xl text-gray-600'>
							Fill out the form below or call us directly to discuss your needs.
						</p>
					</div>
					<ContactForm defaultService={service.title} />
				</div>
			</section>
		</div>
	);
}
