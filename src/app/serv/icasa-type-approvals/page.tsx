import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle, Clock, Users, Shield, Zap } from 'lucide-react';
import {WhyChooseUs} from '@/components/service/WhyChooseUs';

export const metadata: Metadata = {
	title: 'ICASA Type Approvals',
	description:
		'Expert ICASA type approval services for South African businesses. We handle Standard, Simplified, Tested, and Untested approvals with fast processing and comprehensive support.',
	keywords: [
		'ICASA type approval',
		'ICASA certification',
		'telecommunications approval',
		'radio frequency approval',
		'electronic device approval',
		'ICASA compliance',
		'type approval South Africa',
		'ICASA testing',
	],
	openGraph: {
		title: 'ICASA Type Approvals - Expert Certification Services',
		description:
			'Expert ICASA type approval services for South African businesses. We handle Standard, Simplified, Tested, and Untested approvals with fast processing and comprehensive support.',
		url: 'https://bilacert.co.za/services/icasatype-approvals',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/services/icasa-type-approvals',
	},
};

export default function ICASATypeApprovalsPage() {
	const approvalTypes = [
		{
			title: 'Standard Type Approval',
			description: 'Required for any equipment that has not been type approved before by the Authority',
			features: ['Comprehensive testing', 'Full documentation', 'Complete compliance review'],
			price: 'From R5,000',
		},
		{
			title: 'Simplified Type Approval',
			description: 'Available for products that already obtained type Approval from Authority',
			features: ['Streamlined process', 'Reduced documentation', 'Faster approval'],
			price: 'From R4,500',
		},
		{
			title: 'Tested & Untested Approvals',
			description:
				'We guide you through the decision-making process for the right approval method.',
			features: ['Expert guidance', 'Risk assessment', 'Optimal pathway selection'],
			price: 'From R4,500',
		},
	];

	const process = [
		{
			step: '1',
			title: 'Pre-Assessment',
			description: 'We evaluate your product and determine the most efficient approval pathway.',
		},
		{
			step: '2',
			title: 'Documentation',
			description:
				'We compile and review all required documentation for accuracy and completeness.',
		},
		{
			step: '3',
			title: 'Testing Coordination',
			description: 'We arrange laboratory testing with accredited facilities when required.',
		},
		{
			step: '4',
			title: 'Submission',
			description: 'We submit your application to ICASA and manage all communications.',
		},
		{
			step: '5',
			title: 'Approval',
			description: 'We track progress and ensure timely approval of your certification.',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Type-Approval.jpg'
					alt='ICASA Type Approvals'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<div className='flex items-center space-x-2 mb-4'>
								<Award className='h-8 w-8 text-accent' />
								<span className='text-accent font-semibold'>ICASA Type Approvals</span>
							</div>
							<h1 className='text-4xl lg:text-5xl font-bold mb-6'>
								Streamlined ICASA Type Approval Process
							</h1>
							<p className='text-xl text-gray-200 mb-8'>
								Expert guidance for ICASA type approval applications. We handle Standard,
								Simplified, Tested, and Untested approvals with a proven track record of success.
							</p>
							<div className='flex flex-col sm:flex-row gap-4'>
								<Link
									href='/forms/icasa-type-approvals'
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
										<h3 className='font-semibold'>30 Working Days</h3>
										<p className='text-gray-300'>Standard processing time</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Shield className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>100% Success Rate</h3>
										<p className='text-gray-300'>On first-time applications</p>
									</div>
								</div>
								<div className='flex items-center space-x-4'>
									<div className='bg-accent p-3 rounded-lg'>
										<Users className='h-6 w-6 text-white' />
									</div>
									<div>
										<h3 className='font-semibold'>Expert Support</h3>
										<p className='text-gray-300'>Throughout the process</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What is ICASA Type Approval */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>
								What is ICASA Type Approval?
							</h2>
							<p className='text-lg text-gray-600 mb-6'>
								ICASA (Independent Communications Authority of South Africa) requires all electronic
								communication equipment to be type-approved before being sold or used in South
								Africa. This ensures devices meet regulatory, technical, and safety standards.
							</p>
							<p className='text-lg text-gray-600 mb-8'>
								Our team simplifies this complex process, handling all documentation, testing
								coordination, and regulatory communications to ensure your products reach the market
								quickly and compliantly.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>All telecommunications equipment</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Radio frequency devices</span>
								</div>
								<div className='flex items-center space-x-3'>
									<CheckCircle className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>Electronic communication products</span>
								</div>
							</div>
						</div>
						<WhyChooseUs />
					</div>
				</div>
			</section>

			{/* Approval Types */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>
							Types of ICASA Approvals
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We offer comprehensive support for all types of ICASA type approval applications
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{approvalTypes.map((type, index) => (
							<div
								key={index}
								className='bg-white p-6 rounded-xl shadow-sm'>
								<h3 className='text-xl font-semibold text-primary mb-3'>{type.title}</h3>
								<p className='text-gray-600 mb-4'>{type.description}</p>
								<ul className='space-y-2 mb-6'>
									{type.features.map((feature, featureIndex) => (
										<li
											key={featureIndex}
											className='flex items-center text-sm text-gray-600'>
											<CheckCircle className='h-4 w-4 text-accent mr-2 flex-shrink-0' />
											{feature}
										</li>
									))}
								</ul>
								<div className='text-lg font-semibold text-primary mb-4'>{type.price}</div>
								<Link
									href='/forms/icasa-type-approvals'
									className='w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors duration-200 text-center inline-block'>
									Get Started
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Process */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Our Process</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							A proven 5-step process that ensures your ICASA type approval is successful
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

			{/* Example Scenario */}
			<section className='py-20 bg-secondary-gray'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-white p-8 rounded-xl shadow-sm'>
						<h2 className='text-2xl font-bold text-primary mb-6'>Success Story</h2>
						<div className='prose prose-lg max-w-none'>
							<p className='text-gray-600 mb-4'>
								<strong>Scenario:</strong> A technology company wanted to import a new range of
								wireless routers into South Africa.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Challenge:</strong> They needed ICASA type approval but were unfamiliar with
								the regulatory requirements and documentation process.
							</p>
							<p className='text-gray-600 mb-4'>
								<strong>Solution:</strong> Bilacert managed their ICASA type approval application
								from start to finish, ensuring compliance and timely market entry.
							</p>
							<p className='text-gray-600'>
								<strong>Result:</strong> The company received approval 30% faster than industry
								average, allowing them to launch their products on schedule and capture market
								opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary-light text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>
						Ready to Get Your ICASA Type Approval?
					</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Let our experts guide you through the ICASA type approval process. Get a free
						consultation and start your compliance journey today.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/forms/icasa-type-approvals'
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
