interface ServicesGridProps {
	title: string;
	subtitle: string;
	items: Array<{
		icon: string;
		title: string;
		description: string;
	}>;
	bgColor?: string;
}

import { getIcon } from '@/lib/services-config';

export function ServicesGrid({ title, subtitle, items, bgColor = 'bg-secondary-gray' }: ServicesGridProps) {
	return (
		<section className={`py-20 ${bgColor}`}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>{title}</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>{subtitle}</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{items.map((item, index) => {
						const Icon = getIcon(item.icon);
						return (
							<div
								key={index}
								className='bg-white p-6 rounded-xl shadow-sm'>
								<div className='bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
									<Icon className='h-6 w-6 text-accent' />
								</div>
								<h3 className='text-lg font-semibold text-primary mb-2'>{item.title}</h3>
								<p className='text-gray-600 text-sm'>{item.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
