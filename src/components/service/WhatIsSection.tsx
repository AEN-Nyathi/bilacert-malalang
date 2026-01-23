import { getIcon } from '@/lib/services-config';

interface WhatIsSectionProps {
	title: string;
	firstParagraph: string;
	secondParagraph: string;
	checkpoints: string[];
	sideContent?: 'licenseTypes' | 'benefitsBox';
	licenseTypes?: Array<{ title: string; description: string; icon: string }>;
	benefits?: Array<{ icon: string; title: string; description: string }>;
}

export function WhatIsSection({
	title,
	firstParagraph,
	secondParagraph,
	checkpoints,
	sideContent,
	licenseTypes,
	benefits,
}: WhatIsSectionProps) {
	const CheckCircleIcon = getIcon('CheckCircle');

	return (
		<section className='py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-6'>{title}</h2>
						<p className='text-lg text-gray-600 mb-6'>{firstParagraph}</p>
						<p className='text-lg text-gray-600 mb-8'>{secondParagraph}</p>
						<div className='space-y-4'>
							{checkpoints.map((checkpoint, index) => (
								<div
									key={index}
									className='flex items-center space-x-3'>
									<CheckCircleIcon className='h-5 w-5 text-accent' />
									<span className='text-gray-700'>{checkpoint}</span>
								</div>
							))}
						</div>
					</div>

					<div className='bg-secondary-gray p-8 rounded-2xl'>
						{sideContent === 'licenseTypes' && licenseTypes ? (
							<>
								<h3 className='text-2xl font-bold text-primary mb-6'>License Types</h3>
								<div className='space-y-6'>
									{licenseTypes.map((type, index) => {
										const Icon = getIcon(type.icon);
										return (
											<div
												key={index}
												className='flex items-start space-x-4'>
												<div className='bg-accent p-2 rounded-lg'>
													<Icon className='h-6 w-6 text-white' />
												</div>
												<div>
													<h4 className='font-semibold text-primary mb-1'>{type.title}</h4>
													<p className='text-gray-600 text-sm'>{type.description}</p>
												</div>
											</div>
										);
									})}
								</div>
							</>
						) : sideContent === 'benefitsBox' && benefits ? (
							<>
								<h3 className='text-2xl font-bold text-primary mb-6'>Why Choose Our Service?</h3>
								<div className='space-y-6'>
									{benefits.map((benefit, index) => {
										const Icon = getIcon(benefit.icon);
										return (
											<div
												key={index}
												className='flex items-start space-x-4'>
												<div className='bg-accent p-2 rounded-lg'>
													<Icon className='h-6 w-6 text-white' />
												</div>
												<div>
													<h4 className='font-semibold text-primary mb-1'>{benefit.title}</h4>
													<p className='text-gray-600 text-sm'>{benefit.description}</p>
												</div>
											</div>
										);
									})}
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
