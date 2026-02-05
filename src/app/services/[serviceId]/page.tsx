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
	WhyChooseUs
} from '@/components/service';
import { ProcessStep, PricingPlan } from '@/types';

interface Props {
	params: Promise<{ serviceId: string }>;
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
		title: service.seo_title || `${service.title} - Bilacert`,
		description: service.seo_description || service.description,
		keywords: service.seo_keywords || [
			service.title.toLowerCase(),
			...(service.category?.split(', ').map((c: string) => c.toLowerCase()) || []),
			'licensing',
			'certification',
			'ICASA',
			'South Africa',
		],
		openGraph: {
			title: service.seo_title || service.title,
			description: service.seo_description || service.short_description,
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

	const formPath = `/services/${serviceId}/form`;

	return (
		<div className='min-h-screen'>
			<ServiceHero
				title={service.title}
				subtitle={service.short_description || ''}
				iconName={service.icon || ''}
				imageSrc={service.image || ''}
				stats={[]}
				formPath={formPath}
				phone={'075 430 4433'}
			/>

			{service.content && <WhatIsSection title={`What is this ${service.title}?`} firstParagraph={service.content} secondParagraph="" checkpoints={[]} />}
			
			<WhyChooseUs />

			{service.process_steps && <ProcessSteps title="Our Process" subtitle="A streamlined approach to get you certified." steps={(service.process_steps as unknown as ProcessStep[]).map(step => ({...step, step: step.step.toString()}))} />}

			{service.pricing_plans && <PricingPlans title="Pricing Plans" subtitle="Choose the best plan for your needs." plans={(service.pricing_plans as unknown as PricingPlan[]).map(plan => ({...plan, title: plan.name, popular: false, description: plan.description || ''}))} formPath={formPath} />}

			{service.success_story && <SuccessStory {...service.success_story as any} />}

			<CTASection
				heading="Ready to get started?"
				description="Contact us today for a free consultation."
				primaryCTA={{ label: 'Contact Us', href: '/contact' }}
				secondaryCTA={{ label: 'Learn More', href: '/about' }}
			/>
		</div>
	);
}
