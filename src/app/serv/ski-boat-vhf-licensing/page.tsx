import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Ship, CheckCircle, Clock, Users, Shield, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Ski Boat VHF Licensing',
	description:
		'Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.',
	keywords: [
		'VHF radio license',
		'ski boat VHF',
		'marine radio license',
		'boat VHF license',
		'yacht radio license',
		'maritime radio license',
		'ICASA VHF license',
		'marine communication license',
	],
	openGraph: {
		title: 'Ski Boat VHF Licensing - Marine Radio License Services',
		description:
			'Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.',
		url: 'https://bilacert.co.za/services/ski-boat-vhf-licensing',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/ski-boat-vhf-licensing',
	},
};

export default function SkiBoatVHFLicensingPage() {
	const servicePlans = [
		{
			title: 'Basic',
			description: 'Consultation & Application Review',
			features: ['Vessel assessment', 'Application review', 'Basic guidance'],
			price: 'R1,800',
			popular: false,
		},
		{
			title: 'Standard',
			description: 'Full Documentation Submission & Liaison',
			features: [
				'Full documentation preparation',
				'ICASA submission',
				'Liaison & tracking',
				'Application management',
			],
			price: 'R3,000',
			popular: true,
		},
		{
			title: 'Premium',
			description: 'End-to-End Approval & Ongoing Support',
			features: [
				'Complete end-to-end service',
				'Ongoing compliance support',
				'Priority processing',
				'Fleet licensing',
			],
			price: 'R4,500',
			popular: false,
		},
	];

	const process = [
		{
			step: '1',
			title: 'Consultation & Eligibility Check',
			description:
				'We assess whether your ski boat or vessel requires a VHF license and identify necessary documentation.',
		},
		{
			step: '2',
			title: 'Application Preparation',
			description:
				'Our experts compile, review, and prepare all required documents for complete and accurate submission.',
		},
		{
			step: '3',
			title: 'Submission & ICASA Liaison',
			description:
				'We submit the application and manage all interactions with ICASA to streamline the approval process.',
		},
		{
			step: '4',
			title: 'License Approval & Issuance',
			description: 'Once approved, we ensure you receive your official ICASA VHF Radio License.',
		},
		{
			step: '5',
			title: 'Post-License Compliance',
			description:
				'We provide ongoing support for license renewals, amendments, and regulatory compliance updates.',
		},
	];

	const benefits = [
		{
			icon: <Clock className='h-6 w-6' />,
			title: '30 Days',
			description: 'Standard processing time with our streamlined approach.',
		},
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Expert Guidance',
			description:
				'We ensure your application meets all ICASA requirements for maritime communication.',
		},
		{
			icon: <Users className='h-6 w-6' />,
			title: 'Hassle-Free Processing',
			description: 'We handle all documentation and submissions on your behalf.',
		},
		{
			icon: <Zap className='h-6 w-6' />,
			title: 'Faster Approvals',
			description: 'Our efficient process minimizes delays, getting you on the water sooner.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Ski-Boat-VHF.jpg'
					alt='Ski Boat VHF Licensing'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<Ship className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>Ski Boat VHF Licensing</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								Professional VHF Radio Licensing for Marine Vessels
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for Ski Boat VHF Radio licensing. We handle vessel assessment,
								application preparation, ICASA liaison, and ensure compliance with maritime
								communication regulations.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/ski-boat-vhf-licensing'
									className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 text-center'>
									Get Free Consultation
								</Link>
								<Link
									href='tel:0754304433'
									className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 text-center'>
									Call 075 430 4433
								</Link>
							</div>
						</div>
						<div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8'>
							<div className='space-y-6'>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<CheckCircle className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>30 working Days</h3>
										<p className='text-gray-300'>Standard processing time</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Shield className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Maritime Compliance</h3>
										<p className='text-gray-300'>ICASA maritime regulations specialist</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Users className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Fleet Licensing</h3>
										<p className='text-gray-300'>Multiple vessel support</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What is VHF Licensing */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What is VHF Radio Licensing?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								In South Africa, ski boats and other vessels using VHF radios for marine
								communication are required to have a valid VHF Radio License from ICASA. This
								ensures that all maritime radio communication remains safe, legal, and
								interference-free.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								We simplify the process of obtaining your Ski Boat VHF License, ensuring compliance
								with ICASA regulations while allowing you to focus on your boating experience.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Required for marine VHF radio communication</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Issued by ICASA</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Essential for safe maritime operations</span>
								</div>
							</div>
						</div>
						<div className='bg-secondary-gray p-8 rounded-2xl'>
							<h3 className='text-2xl font-bold text-primary mb-6'>Why Choose Our Service?</h3>
							<div className='space-y-6'>
								{benefits.map((benefit, index) => (
									<div
										key={index}
										className='flex items-start space-x-4'>
										<div className='bg-accent p-2 rounded-lg'>{benefit.icon}</div>
										<div>
											<h4 className='font-semibold text-primary mb-1'>{benefit.title}</h4>
											<p className='text-gray-600 text-sm'>{benefit.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Services */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
							Our VHF Licensing Services
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer a full-service approach to obtaining and maintaining your VHF Radio License
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Eligibility Assessment</h3>
							<p className='text-gray-600 text-sm'>
								Confirming if your vessel requires a VHF license
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Shield className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Application Preparation</h3>
							<p className='text-gray-600 text-sm'>
								Ensuring all required paperwork is accurate and complete
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>ICASA Liaison</h3>
							<p className='text-gray-600 text-sm'>
								Managing all interactions with ICASA for smooth approval
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Award className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Maritime Compliance</h3>
							<p className='text-gray-600 text-sm'>
								Helping vessel owners stay compliant with maritime radio regulations
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Plans */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Pricing Plans</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Flexible plans to suit individual and commercial boating needs
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{servicePlans.map((plan, index) => (
							<div
								key={index}
								className={`bg-white p-8 rounded-xl shadow-sm relative ${
									plan.popular ? 'ring-2 ring-accent' : ''
								}`}>
								{plan.popular && (
									<div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
										<span className='bg-accent text-white px-4 py-1 rounded-full text-sm font-medium'>
											Most Popular
										</span>
									</div>
								)}
								<h3 className='text-2xl font-bold text-primary mb-2'>{plan.title}</h3>
								<p className='text-gray-600 mb-6'>{plan.description}</p>
								<div className='text-3xl font-bold text-primary mb-6'>{plan.price}</div>
								<ul className='space-y-3 mb-8'>
									{plan.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className='flex items-center text-sm text-gray-600'>
											<CheckCircle className='h-4 w-4 text-accent mr-2 flex-shrink-0' />
											{feature}
										</li>
									))}
								</ul>
								<Link
									href='/forms/ski-boat-vhf-licensing'
									className={`w-full px-4 py-3 rounded-lg font-medium text-center transition-colors duration-200 ${
										plan.popular
											? 'bg-accent text-white hover:bg-accent-light'
											: 'bg-primary text-white hover:bg-primary-light'
									}`}>
									Get Started
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Our Process</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							A proven 5-step process for VHF Radio License approval
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						{process.map((step, index) => (
							<div
								key={index}
								className='text-center'>
								<div className='bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4'>
									{step.step}
								</div>
								<h3 className='text-lg font-semibold text-primary mb-2'>{step.title}</h3>
								<p className='text-gray-600 text-sm'>{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Story */}
			<section className='py-20'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-white p-8 rounded-xl shadow-sm'>
						<h2 className='text-2xl font-bold text-primary mb-6'>Success Story</h2>
						<div className='prose prose-lg max-w-none'>
							<p className='text-gray-600 mb-4'>
								<strong>Scenario:</strong> A fishing charter company needed multiple VHF licenses
								for its fleet of boats.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They needed to ensure all vessels were legally compliant
								before peak season and were unfamiliar with the licensing process.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert managed the entire process, ensuring all vessels
								were legally compliant with maritime regulations.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The charter company received all their VHF licenses
								efficiently, allowing them to operate legally during peak season without any
								compliance issues.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>Ready to Get Your VHF License?</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Ensure your vessel stays compliant with a Ski Boat VHF License from Bilacert. Let us
						handle the licensing process so you can enjoy safe and legal marine communication.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/ski-boat-vhf-licensing'
							className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1'>
							Get Free Consultation
						</Link>
						<Link
							href='tel:0754304433'
							className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200'>
							Call 075 430 4433
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
