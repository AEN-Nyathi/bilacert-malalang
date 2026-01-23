import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceConfig, getAllServiceIds } from '@/lib/services-config';
import { ServiceHero } from '@/components/service/ServiceHero';
import { WhatIsSection } from '@/components/service/WhatIsSection';
import { ServicesGrid } from '@/components/service/ServicesGrid';
import { PricingPlans } from '@/components/service/PricingPlans';
import { ProcessSteps } from '@/components/service/ProcessSteps';
import { SuccessStory } from '@/components/service/SuccessStory';
import { CTASection } from '@/components/service/CTASection';

interface ServicePageProps {
	params: {
		serviceId: string;
	};
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
	const service = getServiceConfig(params.serviceId);

	if (!service) {
		notFound();
	}

	const safeService = service; // Type narrowing

	return {
		title: safeService.metadata.title,
		description: safeService.metadata.description,
		keywords: safeService.metadata.keywords,
		openGraph: {
			title: `${safeService.metadata.title} - Licensing Services`,
			description: safeService.metadata.description,
			url: safeService.metadata.url,
			type: 'website',
		},
		alternates: {
			canonical: safeService.metadata.url,
		},
	};
}

export function generateStaticParams() {
	return getAllServiceIds().map((id) => ({
		serviceId: id,
	}));
}

export default function ServicePage({ params }: ServicePageProps) {
	const service = getServiceConfig(params.serviceId);

	if (!service) {
		notFound();
	}

	const safeService = service; // Type narrowing

	// For services with additional offerings (like 4 service items)
	const serviceOfferings = [
		{
			icon: 'CheckCircle',
			title: safeService.servicePlans[0].title,
			description: safeService.servicePlans[0].description,
		},
		{
			icon: 'Shield',
			title: safeService.servicePlans[1].title,
			description: safeService.servicePlans[1].description,
		},
		{
			icon: 'Users',
			title: safeService.servicePlans[2].title,
			description: safeService.servicePlans[2].description,
		},
		{
			icon: 'Award',
			title: 'Ongoing Support',
			description: 'Comprehensive support throughout your entire journey with us',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<ServiceHero
				title={safeService.title}
				subtitle={safeService.hero.subtitle}
				iconName={safeService.hero.icon}
				imageSrc={safeService.hero.image}
				stats={safeService.heroStats}
				formPath={safeService.formPath}
				phone={safeService.phone}
			/>

			{/* What is X Section */}
			<WhatIsSection
				title={safeService.whatIsSection.title}
				firstParagraph={safeService.whatIsSection.firstParagraph}
				secondParagraph={safeService.whatIsSection.secondParagraph}
				checkpoints={safeService.whatIsSection.checkpoints}
				sideContent={safeService.whatIsSection.additionalContent === 'benefitsBox' ? 'benefitsBox' : safeService.whatIsSection.additionalContent === 'licenseTypes' ? 'licenseTypes' : undefined}
				licenseTypes={safeService.licenseTypes}
				benefits={safeService.benefitsBox}
			/>

			{/* Our Services Grid */}
			<ServicesGrid
				title={`Our ${safeService.title} Services`}
				subtitle={`We offer a full-service approach to obtaining and maintaining your ${safeService.title.toLowerCase()}`}
				items={serviceOfferings}
				bgColor='bg-secondary-gray'
			/>

			{/* Pricing Plans */}
			<PricingPlans
				title='Pricing Plans'
				subtitle='Flexible plans to suit businesses of all sizes'
				plans={safeService.servicePlans}
				formPath={safeService.formPath}
			/>

			{/* Our Process */}
			<ProcessSteps
				title='Our Process'
				subtitle={`A proven ${safeService.processSteps.length}-step process for ${safeService.title.toLowerCase()} approval`}
				steps={safeService.processSteps}
				bgColor='bg-secondary-gray'
			/>

			{/* Success Story */}
			<SuccessStory
				scenario={safeService.successStory.scenario}
				challenge={safeService.successStory.challenge}
				solution={safeService.successStory.solution}
				result={safeService.successStory.result}
			/>

			{/* CTA Section */}
			<CTASection
				heading={safeService.ctaHeading}
				description={`Ensure your business stays compliant with ${safeService.title.toLowerCase()} from Bilacert. Let us handle the licensing process so you can focus on delivering exceptional services.`}
				primaryCTA={{
					label: 'Get Free Consultation',
					href: safeService.formPath,
				}}
				secondaryCTA={{
					label: `Call ${safeService.phone}`,
					href: `tel:${safeService.phone.replace(/\s+/g, '')}`,
				}}
			/>
		</div>
	);
}
