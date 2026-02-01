
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllPublishedServiceSlugs } from '@/lib/supabase/services';
import {
	ServiceHero,
	WhatIsSection,
	ProcessSteps,
	PricingPlans,
	SuccessStory,
	CTASection,
} from '@/components/service';

interface Props {
	params: Promise<{
		serviceId: string;
	}>;
}

export async function generateStaticParams() {
	const slugs = await getAllPublishedServiceSlugs();
	return slugs.map((item) => ({ serviceId: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { serviceId } = await params;
	const service = await getServiceBySlug(serviceId);

	if (!service) {
		return {
			title: 'Service Not Found - Bilacert',
		};
	}

	return {
		title: service.seoTitle || `${service.title} - Bilacert`,
		description: service.seoDescription || service.description,
		keywords: service.seoKeywords || [
			service.title.toLowerCase(),
			...service.category.split(', ').map((c: string) => c.toLowerCase()),
			'licensing',
			'certification',
			'ICASA',
			'South Africa',
		],
		openGraph: {
			title: service.seoTitle || service.title,
			description: service.seoDescription || service.shortDescription,
			url: `https://bilacert.co.za/services/${serviceId}`,
			type: 'website',
			images: service.image ? [{ url: service.image }] : [],
		},
		alternates: {
			canonical: `https://bilacert.co.za/services/${serviceId}`,
		},
	};
}

export default async function ServiceDetailPage({ params }: Props) {
	const { serviceId } = await params;
	const service = await getServiceBySlug(serviceId);

	if (!service) {
		notFound();
	}

	return (
		<div className='min-h-screen'>
			<ServiceHero
				title={service.title}
				subtitle={service.shortDescription || ''}
				iconName={service.icon || ''}
				imageSrc={service.image || ''}
				stats={[]}
				formPath={service.href || ''}
				phone={''}
			/>

			{service.content && <WhatIsSection title="What is this service?" firstParagraph={service.content} secondParagraph="" checkpoints={[]} />}

			{service.processSteps && <ProcessSteps title="Our Process" subtitle="A streamlined approach to get you certified." steps={service.processSteps} />}

			{service.pricingPlans && <PricingPlans title="Pricing Plans" subtitle="Choose the best plan for your needs." plans={service.pricingPlans} formPath={service.href || ''} />}

			{service.successStory && <SuccessStory {...service.successStory} />}

			<CTASection 
				heading="Ready to get started?" 
				description="Contact us today for a free consultation." 
				primaryCTA={{ label: 'Contact Us', href: '/contact' }}
				secondaryCTA={{ label: 'Learn More', href: '/about' }}
			/>
		</div>
	);
}
