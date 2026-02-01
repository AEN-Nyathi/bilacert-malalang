import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, CheckCircle, Users, FileText, Award } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Class ECS/ECNS Licensing',
	description:
		'Professional ECS and ECNS licensing services for South African telecommunications providers. Expert guidance for Electronic Communications Service and Network Service licenses.',
	keywords: [
		'ECS license',
		'ECNS license',
		'electronic communications service',
		'electronic communications network service',
		'telecommunications license',
		'ICASA ECS ECNS',
		'VoIP license',
		'network service license',
	],
	openGraph: {
		title: 'Class ECS/ECNS Licensing - Telecommunications License Services',
		description:
			'Professional ECS and ECNS licensing services for South African telecommunications providers. Expert guidance for Electronic Communications Service and Network Service licenses.',
		url: 'https://bilacert.co.za/services/class-ecs-ecns-licensing',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/class-ecs-ecns-licensing',
	},
};

export default function ClassECSECNSLicensingPage() {
	const servicePlans = [
		{
			title: 'Basic',
			description: 'Consultation & Application Review',
			features: ['Eligibility assessment', 'Application review', 'Basic guidance'],
			price: 'R3,000',
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
			price: 'R7,500',
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
			price: 'R9,500',
			popular: false,
		},
	];

	const process = [
		{
			step: '1',
			title: 'Consultation & Eligibility Check',
			description:
				'We assess whether your business requires a Class ECS or ECNS license and identify necessary documentation.',
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
			description: 'Once approved, we ensure you receive your official ICASA license.',
		},
		{
			step: '5',
			title: 'Post-License Compliance',
			description:
				'We provide ongoing support for license renewals, amendments, and regulatory compliance updates.',
		},
	];

	const licenseTypes = [
		{
			title: 'ECS License',
			description:
				'Electronic Communications Service license allows businesses to provide electronic communication services without owning the infrastructure.',
			icon: <FileText className='h-6 w-6' />,
		},
		{
			title: 'ECNS License',
			description:
				'Electronic Communications Network Service license allows businesses to build and operate network infrastructure.',
			icon: <Shield className='h-6 w-6' />,
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/class-ens-ecns.jpg'
					alt='Class ECS ECNS Licensing'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<Shield className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>Class ECS/ECNS Licensing</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								Professional ECS/ECNS Licensing Services
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for Class Electronic Communications Service (ECS) and Electronic
								Communications Network Service (ECNS) licensing. We handle the entire process from
								assessment to approval.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/class-ecs-ecns-licensing'
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
										<h3 className='font-semibold'>Regulatory Expertise</h3>
										<p className='text-gray-300'>ICASA licensing specialist</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Users className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Tailored Solutions</h3>
										<p className='text-gray-300'>Personalized guidance</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What is ECS/ECNS */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What are ECS/ECNS Licenses?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								Businesses providing electronic communications services or network infrastructure
								may require a Class Electronic Communications Service (ECS) or Electronic
								Communications Network Service (ECNS) license from ICASA. Without the appropriate
								license, your operations could be at risk of non-compliance, fines, or shutdowns.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								We simplify the licensing process, ensuring your business remains compliant while
								you focus on innovation and growth.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>
										Required for electronic communication services
									</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Issued by ICASA</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Essential for legal operations</span>
								</div>
							</div>
						</div>
						<div className='bg-secondary-gray p-8 rounded-2xl'>
							<h3 className='text-2xl font-bold text-primary mb-6'>License Types</h3>
							<div className='space-y-6'>
								{licenseTypes.map((type, index) => (
									<div
										key={index}
										className='flex items-start space-x-4'>
										<div className='bg-accent p-2 rounded-lg'>{type.icon}</div>
										<div>
											<h4 className='font-semibold text-primary mb-1'>{type.title}</h4>
											<p className='text-gray-600 text-sm'>{type.description}</p>
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
							Our ECS/ECNS Licensing Services
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer a full-service approach to obtaining and maintaining your ICASA Class
							ECS/ECNS license
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 rounded-xl shadow-sm'>
							<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
								<CheckCircle className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-lg font-semibold text-primary mb-2'>Eligibility Assessment</h3>
							<p className='text-gray-600 text-sm'>
								Determining whether your business needs a Class ECS or ECNS license
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
									href='/forms/class-ecs-ecns-licensing'
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
							A proven 5-step process for ECS/ECNS license approval
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
								<strong>Scenario:</strong> A startup launching a VoIP communication platform needed
								an ECS license to operate legally.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They were unfamiliar with ICASA&apos;s licensing
								requirements and needed guidance on the application process.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert assessed their needs, filed their application,
								and ensured they met ICASA&apos;s operational requirements.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The startup received their ECS license efficiently,
								allowing them to launch their VoIP platform legally and focus on growing their
								business.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>
						Ready to Get Your ECS/ECNS License?
					</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Ensure your business stays compliant with an ECS or ECNS license from Bilacert. Let us
						handle the licensing process so you can focus on delivering exceptional services.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/class-ecs-ecns-licensing'
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
