import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, CheckCircle, Clock, Users, Shield, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
	title: 'NRCS LOA Applications',
	description:
		'Professional NRCS Letter of Authority (LOA) application services for South African businesses. Expert guidance for electrical and electronic product compliance.',
	keywords: [
		'NRCS LOA',
		'NRCS Letter of Authority',
		'NRCS certification',
		'electrical product approval',
		'electronic product compliance',
		'NRCS South Africa',
		'LOA application',
		'NRCS testing',
	],
	openGraph: {
		title: 'NRCS LOA Applications - Expert Certification Services',
		description:
			'Professional NRCS Letter of Authority (LOA) application services for South African businesses. Expert guidance for electrical and electronic product compliance.',
		url: 'https://bilacert.co.za/services/nrcs-loa-applications',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/nrcs-loa-applications',
	},
};

export default function NRCSLOAApplicationsPage() {
	const servicePlans = [
		{
			title: 'Basic',
			description: 'Eligibility Assessment & Document Review',
			features: ['Product eligibility assessment', 'Document review', 'Basic guidance'],
			price: 'R3,500',
			popular: false,
		},
		{
			title: 'Standard',
			description: 'Full Application Submission & NRCS Liaison',
			features: [
				'Full documentation preparation',
				'NRCS submission',
				'Liaison & tracking',
				'Testing coordination',
			],
			price: 'R7,000',
			popular: true,
		},
		{
			title: 'Premium',
			description: 'End-to-End Approval & Compliance Support',
			features: [
				'Complete end-to-end service',
				'Testing coordination',
				'Ongoing compliance support',
				'Priority processing',
			],
			price: 'R10,500',
			popular: false,
		},
	];

	const process = [
		{
			step: '1',
			title: 'Consultation & Product Review',
			description:
				"We assess your product's technical specifications and determine LOA requirements.",
		},
		{
			step: '2',
			title: 'Documentation & Compliance Check',
			description: 'We compile and verify all necessary compliance documents before submission.',
		},
		{
			step: '3',
			title: 'Submission & NRCS Liaison',
			description: 'Bilacert submits the application and manages all communication with NRCS.',
		},
		{
			step: '4',
			title: 'Testing (If Required)',
			description:
				'For products needing laboratory testing, we coordinate with accredited testing facilities.',
		},
		{
			step: '5',
			title: 'Approval & Certification',
			description:
				'Once approved, we deliver your NRCS LOA certificate and provide ongoing compliance support.',
		},
	];

	const benefits = [
		{
			icon: <Clock className='h-6 w-6' />,
			title: '30 working Days',
			description: 'Standard processing time with our efficient approach.',
		},
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Regulatory Expertise',
			description:
				'Our team understands NRCS requirements and ensures applications meet all standards.',
		},
		{
			icon: <Users className='h-6 w-6' />,
			title: 'Hassle-Free Processing',
			description: 'We handle all paperwork and application submissions on your behalf.',
		},
		{
			icon: <Zap className='h-6 w-6' />,
			title: 'Faster Approvals',
			description: 'Our efficient process minimizes delays and accelerates market entry.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/NRCS.jpg'
					alt='NRCS LOA'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<FileText className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>NRCS LOA Applications</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								Streamlined NRCS Letter of Authority Applications
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for NRCS LOA applications. We handle product eligibility assessment,
								technical documentation, testing coordination, and ensure smooth approval processes.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/nrcs-loa-applications'
									className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1 text-center'>
									Get Started
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
										<h3 className='font-semibold'>120 Days</h3>
										<p className='text-gray-300'>Standard processing time</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Shield className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Regulatory Expertise</h3>
										<p className='text-gray-300'>NRCS requirements specialist</p>
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

			{/* What is NRCS LOA */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What is an NRCS LOA?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								The National Regulator for Compulsory Specifications (NRCS) mandates that certain
								electrical and electronic products must receive a Letter of Authority (LOA) before
								entering the South African market. This certification ensures products meet South
								African safety and quality standards.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								Our team streamlines the NRCS LOA application process, ensuring businesses obtain
								approvals efficiently while staying fully compliant with regulatory requirements.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Electrical and electronic products</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Safety and quality standards compliance</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Mandatory before importation or sale</span>
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
							Our NRCS LOA Services
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer a full-service solution to obtaining and maintaining NRCS LOA certification
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<FileText className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>
								Product Eligibility Assessment
							</h3>
							<p className='text-gray-600 text-sm'>Determining if your product requires an LOA</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Shield className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Technical Documentation</h3>
							<p className='text-gray-600 text-sm'>
								Ensuring compliance with safety and quality standards
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Application Submission</h3>
							<p className='text-gray-600 text-sm'>
								Managing submissions and tracking approval status
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Award className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Testing Coordination</h3>
							<p className='text-gray-600 text-sm'>Arranging third-party testing where necessary</p>
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
									href='/forms/nrcs-loa-applications'
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
							A proven 5-step process for NRCS LOA certification
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
								<strong>Scenario:</strong> An electronics importer wanted to bring in a new range of
								LED lighting products but was unaware of NRCS LOA requirements.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They needed an LOA but lacked the technical knowledge
								and documentation required for NRCS compliance.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert confirmed the LOA requirement, handled their
								submission, and ensured a smooth approval process.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The company received their NRCS LOA efficiently, allowing
								them to import and sell their LED products legally in South Africa without delays.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>Ready to Get Your NRCS LOA?</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Ensure your products are NRCS-certified with our expert guidance. Avoid costly delays
						and regulatory risks with our seamless approval process.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/nrcs-loa-applications'
							className='bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-1'>
							Get Started
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
