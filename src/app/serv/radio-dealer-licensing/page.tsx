import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Headphones, CheckCircle, Clock, Users, Shield, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Radio Dealer Licensing',
	description:
		'Complete Radio Dealer License services for South African businesses selling radio communication equipment. Expert ICASA licensing support and compliance guidance.',
	keywords: [
		'radio dealer license',
		'ICASA radio license',
		'radio communication license',
		'two-way radio license',
		'radio equipment dealer',
		'ICASA dealer license',
		'radio licensing South Africa',
		'communication equipment license',
	],
	openGraph: {
		title: 'Radio Dealer Licensing - ICASA License Services',
		description:
			'Complete Radio Dealer License services for South African businesses selling radio communication equipment. Expert ICASA licensing support and compliance guidance.',
		url: 'https://bilacert.co.za/services/radio-dealer-licensing',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/radio-dealer-licensing',
	},
};

export default function RadioDealerLicensingPage() {
	const servicePlans = [
		{
			title: 'Basic',
			description: 'Consultation & Application Review',
			features: ['Eligibility assessment', 'Application review', 'Basic guidance'],
			price: 'R1,000',
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
				'Renewal management',
			],
			price: 'R4,000',
			popular: false,
		},
	];

	const process = [
		{
			step: '1',
			title: 'Consultation & Eligibility Check',
			description:
				'We assess whether your business requires a Radio Dealer License and identify necessary documentation.',
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
			description: 'Once approved, we ensure you receive your official Radio Dealer License.',
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
			title: 'Regulatory Expertise',
			description: 'Deep understanding of ICASA regulations ensures smooth approval process.',
		},
		{
			icon: <Users className='h-6 w-6' />,
			title: 'Fast & Hassle-Free',
			description: 'We handle all paperwork, reducing application time significantly.',
		},
		{
			icon: <Zap className='h-6 w-6' />,
			title: 'Ongoing Support',
			description: 'We assist with renewals, amendments, and regulatory updates.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Radio-Dealer.jpg'
					alt='Radio Dealer Licensing'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<Headphones className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>Radio Dealer Licensing</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								Complete Radio Dealer Licensing Support
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for Radio Dealer License applications. We handle eligibility
								assessment, documentation preparation, ICASA liaison, and ongoing compliance
								support.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/radio-dealer-licensing'
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
										<h3 className='font-semibold'>30 Workins Days</h3>
										<p className='text-gray-300'>Standard processing time</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Shield className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Regulatory Expertise</h3>
										<p className='text-gray-300'>ICASA regulations specialist</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Users className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Hassle-Free Process</h3>
										<p className='text-gray-300'>We handle all paperwork</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What is Radio Dealer License */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What is a Radio Dealer License?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								Any business that sells, distributes, or supplies radio communication equipment in
								South Africa must hold a valid Radio Dealer License issued by ICASA. Without this
								license, trading in such equipment is illegal and can result in hefty fines or
								business disruptions.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								We simplify the licensing process, ensuring your business remains compliant while
								you focus on growth.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>
										Required for radio communication equipment sales
									</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Issued by ICASA</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Mandatory for legal trading</span>
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
							Our Radio Dealer Licensing Services
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer a full-service approach to obtaining and maintaining your Radio Dealer
							License
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Eligibility Assessment</h3>
							<p className='text-gray-600 text-sm'>
								Determining whether your business requires a Radio Dealer License
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Shield className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Documentation Preparation</h3>
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
							<h3 className='text-lg font-semibold text-primary mb-2'>Ongoing Compliance</h3>
							<p className='text-gray-600 text-sm'>Keeping your license valid and up to date</p>
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
							Flexible plans to suit businesses of all sizes
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
									href='/forms/radio-dealer-licensing'
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
							A proven 5-step process for Radio Dealer License approval
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
								<strong>Scenario:</strong> A two-way radio distributor was unaware of the ICASA
								licensing requirements and faced operational risks.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They needed a Radio Dealer License urgently to avoid
								business disruption and legal penalties.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert swiftly secured their Radio Dealer License,
								ensuring they could continue trading legally.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The distributor now operates without disruptions,
								maintaining full compliance with ICASA regulations and avoiding costly penalties.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>
						Ready to Get Your Radio Dealer License?
					</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Ensure your business stays compliant with a Radio Dealer License from Bilacert. Let us
						handle the licensing process so you can focus on what you do best.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/radio-dealer-licensing'
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
