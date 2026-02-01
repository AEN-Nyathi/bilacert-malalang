import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Radio, CheckCircle, Clock, Users, Shield, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
	title: 'License Exemptions',
	description:
		'Expert ECS/ECNS license exemption services for South African businesses. We help determine if your business qualifies for ICASA license exemptions and provide compliance documentation.',
	keywords: [
		'license exemption',
		'ECS exemption',
		'ECNS exemption',
		'ICASA exemption',
		'license exemption South Africa',
		'exemption verification',
		'compliance exemption',
		'regulatory exemption',
	],
	openGraph: {
		title: 'License Exemptions - ECS/ECNS Exemption Services',
		description:
			'Expert ECS/ECNS license exemption services for South African businesses. We help determine if your business qualifies for ICASA license exemptions and provide compliance documentation.',
		url: 'https://bilacert.co.za/services/license-exemptions',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/license-exemptions',
	},
};

export default function LicenseExemptionsPage() {
	const servicePlans = [
		{
			title: 'Basic',
			description: 'Eligibility Assessment',
			features: ['Business model assessment', 'Exemption verification', 'Basic guidance'],
			price: 'R2,500',
			popular: false,
		},
		{
			title: 'Standard',
			description: 'Full Documentation & ICASA Confirmation',
			features: [
				'Full documentation preparation',
				'ICASA confirmation',
				'Compliance documentation',
				'Verification process',
			],
			price: 'R6,800',
			popular: true,
		},
		{
			title: 'Premium',
			description: 'End-to-End Exemption Processing',
			features: [
				'Complete end-to-end service',
				'Ongoing compliance support',
				'Priority processing',
				'Annual compliance review',
			],
			price: 'R8,000',
			popular: false,
		},
	];

	const process = [
		{
			step: '1',
			title: 'Consultation & Business Model Assessment',
			description: 'We review your business model to determine if an ECS/ECNS exemption applies.',
		},
		{
			step: '2',
			title: 'Documentation & Compliance Review',
			description: 'We compile the necessary paperwork to support your exemption claim.',
		},
		{
			step: '3',
			title: 'ICASA Confirmation (If Required)',
			description:
				'For certain cases, we submit a request to ICASA for official exemption confirmation.',
		},
		{
			step: '4',
			title: 'Exemption Approval & Compliance Assurance',
			description:
				'Once verified, we provide you with the necessary documentation to prove your exemption status.',
		},
		{
			step: '5',
			title: 'Ongoing Compliance Monitoring',
			description:
				'We track regulatory changes to ensure your exemption remains valid and your business stays compliant.',
		},
	];

	const benefits = [
		{
			icon: <Clock className='h-6 w-6' />,
			title: '30 Days',
			description: 'Standard processing time with our structured approach.',
		},
		{
			icon: <Shield className='h-6 w-6' />,
			title: 'Accurate Assessment',
			description: 'We analyze your business model to determine if you qualify for an exemption.',
		},
		{
			icon: <Users className='h-6 w-6' />,
			title: 'Cost Savings',
			description: 'Avoid unnecessary licensing fees by confirming your exemption status.',
		},
		{
			icon: <Zap className='h-6 w-6' />,
			title: 'Faster Market Entry',
			description: 'Operate without licensing delays when you qualify for exemptions.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/ecs-ecns-licensing-explained.jpg'
					alt='License Exemptions'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<Radio className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>License Exemptions</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								ECS/ECNS License Exemption Services
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for ECS/ECNS license exemptions. We help determine if your business
								qualifies for exemptions and provide the necessary documentation for compliance
								assurance.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/license-exemptions'
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
										<h3 className='font-semibold'>30 wroking Days</h3>
										<p className='text-gray-300'>Standard processing time</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Shield className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Cost Savings</h3>
										<p className='text-gray-300'>Avoid unnecessary licensing fees</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Users className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Faster Market Entry</h3>
										<p className='text-gray-300'>Operate without licensing delays</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What are License Exemptions */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What are ECS/ECNS License Exemptions?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								Not all businesses providing electronic communications services or infrastructure
								require an ICASA ECS (Electronic Communications Service) or ECNS (Electronic
								Communications Network Service) license. Some may qualify for an ICASA License
								Exemption, allowing them to operate legally without the need for a full licensing
								process.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								However, determining whether your business qualifies for an exemption can be
								complex. We simplify the process, ensuring you have the right exemption in place to
								avoid unnecessary costs and compliance risks.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Available for specific business models</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Under ICASA&apos;s exemption list</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Avoids full licensing process</span>
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
							Our License Exemption Services
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer a structured approach to securing and maintaining your ICASA license
							exemption
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Eligibility Verification</h3>
							<p className='text-gray-600 text-sm'>
								Assessing whether your business qualifies for an exemption
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Shield className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Compliance Documentation</h3>
							<p className='text-gray-600 text-sm'>
								Preparing the necessary documents to support your exemption claim
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Users className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>ICASA Confirmation</h3>
							<p className='text-gray-600 text-sm'>
								Obtaining formal confirmation from ICASA when required
							</p>
						</div>

						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<Award className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Ongoing Monitoring</h3>
							<p className='text-gray-600 text-sm'>
								Ensuring your business remains exempt as regulations evolve
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
									href='/forms/license-exemptions'
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
							A proven 5-step process for license exemption verification
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
								<strong>Scenario:</strong> A software company offering cloud-based VoIP services
								assumed they needed an ECS license.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They were unsure about their licensing requirements and
								wanted to avoid unnecessary costs and regulatory hurdles.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert assessed their operations and confirmed they
								qualified for an exemption, saving them licensing costs.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The company now operates legally under an exemption,
								avoiding unnecessary licensing fees while maintaining full compliance with ICASA
								regulations.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>
						Ready to Check Your Exemption Status?
					</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Ensure your business qualifies for an ECS/ECNS exemption with our expert guidance. Avoid
						unnecessary licensing and operate with confidence through our seamless process.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/license-exemptions'
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
