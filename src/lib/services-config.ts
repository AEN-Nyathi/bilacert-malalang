import type { Metadata } from 'next';
import {
	Shield,
	Award,
	Radio,
	FileText,
	Headphones,
	Ship,
	CheckCircle,
	Clock,
	Users,
	Zap,
} from 'lucide-react';

export interface HeroStat {
	title: string;
	description: string;
}

export interface ServicePlan {
	title: string;
	description: string;
	features: string[];
	price: string;
	popular: boolean;
}

export interface ProcessStep {
	step: string;
	title: string;
	description: string;
}

export interface Benefit {
	icon: string; // Icon name as string
	title: string;
	description: string;
}

export interface WhatIsCheckpoint {
	text: string;
}

export interface WhatIsSection {
	title: string;
	firstParagraph: string;
	secondParagraph: string;
	checkpoints: string[];
	additionalContent?: 'licenseTypes' | 'none';
}

export interface LicenseType {
	title: string;
	description: string;
	icon: string;
}

export interface SuccessStory {
	scenario: string;
	challenge: string;
	solution: string;
	result: string;
}

export interface ServiceConfig {
	id: string;
	title: string;
	hero: {
		title: string;
		subtitle: string;
		icon: string;
		image: string;
	};
	processingTime: string;
	heroStats: HeroStat[];
	servicePlans: ServicePlan[];
	processSteps: ProcessStep[];
	benefitsBox: Benefit[];
	whatIsSection: WhatIsSection;
	licenseTypes?: LicenseType[];
	successStory: SuccessStory;
	ctaHeading: string;
	metadata: {
		title: string;
		description: string;
		keywords: string[];
		url: string;
	};
	formPath: string;
	phone: string;
}

const ICON_MAP: Record<string, any> = {
	Shield,
	Award,
	Radio,
	FileText,
	Headphones,
	Ship,
	CheckCircle,
	Clock,
	Users,
	Zap,
};

export function getIcon(iconName: string) {
	return ICON_MAP[iconName] || Shield;
}

export const servicesConfig: Record<string, ServiceConfig> = {
	'class-ecs-ecns-licensing': {
		id: 'class-ecs-ecns-licensing',
		title: 'Class ECS/ECNS Licensing',
		hero: {
			title: 'Professional ECS/ECNS Licensing Services',
			subtitle:
				'Expert guidance for Class Electronic Communications Service (ECS) and Electronic Communications Network Service (ECNS) licensing. We handle the entire process from assessment to approval.',
			icon: 'Shield',
			image: '/class-ens-ecns.jpg',
		},
		processingTime: '30 working Days',
		heroStats: [
			{
				title: '30 working Days',
				description: 'Standard processing time',
			},
			{
				title: 'Regulatory Expertise',
				description: 'ICASA licensing specialist',
			},
			{
				title: 'Tailored Solutions',
				description: 'Personalized guidance',
			},
		],
		servicePlans: [
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
		],
		processSteps: [
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
		],
		benefitsBox: [
			{
				icon: 'CheckCircle',
				title: 'Eligibility Assessment',
				description: 'Determining whether your business needs a Class ECS or ECNS license',
			},
			{
				icon: 'Shield',
				title: 'Application Preparation',
				description: 'Ensuring all required paperwork is accurate and complete',
			},
			{
				icon: 'Users',
				title: 'ICASA Liaison',
				description: 'Managing all interactions with ICASA for smooth approval',
			},
			{
				icon: 'Award',
				title: 'Ongoing Compliance',
				description: 'Keeping your license valid and up to date',
			},
		],
		whatIsSection: {
			title: 'What are ECS/ECNS Licenses?',
			firstParagraph:
				'Businesses providing electronic communications services or network infrastructure may require a Class Electronic Communications Service (ECS) or Electronic Communications Network Service (ECNS) license from ICASA. Without the appropriate license, your operations could be at risk of non-compliance, fines, or shutdowns.',
			secondParagraph:
				'We simplify the licensing process, ensuring your business remains compliant while you focus on innovation and growth.',
			checkpoints: [
				'Required for electronic communication services',
				'Issued by ICASA',
				'Essential for legal operations',
			],
			additionalContent: 'licenseTypes',
		},
		licenseTypes: [
			{
				title: 'ECS License',
				description:
					'Electronic Communications Service license allows businesses to provide electronic communication services without owning the infrastructure.',
				icon: 'FileText',
			},
			{
				title: 'ECNS License',
				description:
					'Electronic Communications Network Service license allows businesses to build and operate network infrastructure.',
				icon: 'Shield',
			},
		],
		successStory: {
			scenario: 'A startup launching a VoIP communication platform needed an ECS license to operate legally.',
			challenge:
				"They were unfamiliar with ICASA's licensing requirements and needed guidance on the application process.",
			solution:
				'Bilacert assessed their needs, filed their application, and ensured they met ICASA\'s operational requirements.',
			result:
				'The startup received their ECS license efficiently, allowing them to launch their VoIP platform legally and focus on growing their business.',
		},
		ctaHeading: 'Ready to Get Your ECS/ECNS License?',
		metadata: {
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
			url: 'https://bilacert.co.za/services/class-ecs-ecns-licensing',
		},
		formPath: '/forms/class-ecs-ecns-licensing',
		phone: '075 430 4433',
	},

	'icasa-type-approvals': {
		id: 'icasa-type-approvals',
		title: 'ICASA Type Approvals',
		hero: {
			title: 'Streamlined ICASA Type Approval Process',
			subtitle:
				'Expert guidance for ICASA type approval applications. We handle Standard, Simplified, Tested, and Untested approvals with a proven track record of success.',
			icon: 'Award',
			image: '/herosetion/Type-Approval.jpg',
		},
		processingTime: '30 Working Days',
		heroStats: [
			{
				title: '30 Working Days',
				description: 'Standard processing time',
			},
			{
				title: '100% Success Rate',
				description: 'On first-time applications',
			},
			{
				title: 'Expert Support',
				description: 'Throughout the process',
			},
		],
		servicePlans: [
			{
				title: 'Standard Type Approval',
				description: 'Required for any equipment that has not been type approved before by the Authority',
				features: ['Comprehensive testing', 'Full documentation', 'Complete compliance review'],
				price: 'From R5,000',
				popular: false,
			},
			{
				title: 'Simplified Type Approval',
				description: 'Available for products that already obtained type Approval from Authority',
				features: ['Streamlined process', 'Reduced documentation', 'Faster approval'],
				price: 'From R4,500',
				popular: true,
			},
			{
				title: 'Tested & Untested Approvals',
				description: 'We guide you through the decision-making process for the right approval method.',
				features: ['Expert guidance', 'Risk assessment', 'Optimal pathway selection'],
				price: 'From R4,500',
				popular: false,
			},
		],
		processSteps: [
			{
				step: '1',
				title: 'Pre-Assessment',
				description: 'We evaluate your product and determine the most efficient approval pathway.',
			},
			{
				step: '2',
				title: 'Documentation',
				description: 'We compile and review all required documentation for accuracy and completeness.',
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
		],
		benefitsBox: [
			{
				icon: 'Clock',
				title: '30% Faster Processing',
				description: 'Our streamlined process reduces approval times compared to industry average.',
			},
			{
				icon: 'Shield',
				title: '100% Success Rate',
				description: 'We maintain a perfect record on first-time applications.',
			},
			{
				icon: 'Users',
				title: 'Expert Guidance',
				description: 'Our team has deep knowledge of ICASA requirements and processes.',
			},
			{
				icon: 'Zap',
				title: 'Ongoing Support',
				description: 'We provide continued support for renewals and compliance updates.',
			},
		],
		whatIsSection: {
			title: 'What is ICASA Type Approval?',
			firstParagraph:
				'ICASA (Independent Communications Authority of South Africa) requires all electronic communication equipment to be type-approved before being sold or used in South Africa. This ensures devices meet regulatory, technical, and safety standards.',
			secondParagraph:
				'Our team simplifies this complex process, handling all documentation, testing coordination, and regulatory communications to ensure your products reach the market quickly and compliantly.',
			checkpoints: [
				'All telecommunications equipment',
				'Radio frequency devices',
				'Electronic communication products',
			],
		},
		successStory: {
			scenario: 'A technology company wanted to import a new range of wireless routers into South Africa.',
			challenge:
				'They needed ICASA type approval but were unfamiliar with the regulatory requirements and documentation process.',
			solution:
				'Bilacert managed their ICASA type approval application from start to finish, ensuring compliance and timely market entry.',
			result:
				'The company received approval 30% faster than industry average, allowing them to launch their products on schedule and capture market opportunities.',
		},
		ctaHeading: 'Ready to Get Your ICASA Type Approval?',
		metadata: {
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
			url: 'https://bilacert.co.za/services/icasa-type-approvals',
		},
		formPath: '/forms/icasa-type-approvals',
		phone: '075 430 4433',
	},

	'license-exemptions': {
		id: 'license-exemptions',
		title: 'License Exemptions',
		hero: {
			title: 'ECS/ECNS License Exemption Services',
			subtitle:
				'Expert guidance for ECS/ECNS license exemptions. We help determine if your business qualifies for exemptions and provide the necessary documentation for compliance assurance.',
			icon: 'Radio',
			image: '/ecs-ecns-licensing-explained.jpg',
		},
		processingTime: '30 working Days',
		heroStats: [
			{
				title: '30 Days',
				description: 'Standard processing time with our structured approach.',
			},
			{
				title: 'Accurate Assessment',
				description: 'We analyze your business model to determine if you qualify for an exemption.',
			},
			{
				title: 'Cost Savings',
				description: 'Avoid unnecessary licensing fees by confirming your exemption status.',
			},
		],
		servicePlans: [
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
		],
		processSteps: [
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
				description: 'For certain cases, we submit a request to ICASA for official exemption confirmation.',
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
		],
		benefitsBox: [
			{
				icon: 'Clock',
				title: '30 Days',
				description: 'Standard processing time with our structured approach.',
			},
			{
				icon: 'Shield',
				title: 'Accurate Assessment',
				description: 'We analyze your business model to determine if you qualify for an exemption.',
			},
			{
				icon: 'Users',
				title: 'Cost Savings',
				description: 'Avoid unnecessary licensing fees by confirming your exemption status.',
			},
			{
				icon: 'Zap',
				title: 'Faster Market Entry',
				description: 'Operate without licensing delays when you qualify for exemptions.',
			},
		],
		whatIsSection: {
			title: 'What are ECS/ECNS License Exemptions?',
			firstParagraph:
				'Not all businesses providing electronic communications services or infrastructure require an ICASA ECS (Electronic Communications Service) or ECNS (Electronic Communications Network Service) license. Some may qualify for an ICASA License Exemption, allowing them to operate legally without the need for a full licensing process.',
			secondParagraph:
				'However, determining whether your business qualifies for an exemption can be complex. We simplify the process, ensuring you have the right exemption in place to avoid unnecessary costs and compliance risks.',
			checkpoints: [
				'Available for specific business models',
				"Under ICASA's exemption list",
				'Avoids full licensing process',
			],
		},
		successStory: {
			scenario: 'A software company offering cloud-based VoIP services assumed they needed an ECS license.',
			challenge:
				'They were unsure about their licensing requirements and wanted to avoid unnecessary costs and regulatory hurdles.',
			solution:
				'Bilacert assessed their operations and confirmed they qualified for an exemption, saving them licensing costs.',
			result:
				'The company now operates legally under an exemption, avoiding unnecessary licensing fees while maintaining full compliance with ICASA regulations.',
		},
		ctaHeading: 'Ready to Check Your Exemption Status?',
		metadata: {
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
			url: 'https://bilacert.co.za/services/license-exemptions',
		},
		formPath: '/forms/license-exemptions',
		phone: '075 430 4433',
	},

	'nrcs-loa-applications': {
		id: 'nrcs-loa-applications',
		title: 'NRCS LOA Applications',
		hero: {
			title: 'Streamlined NRCS Letter of Authority Applications',
			subtitle:
				'Expert guidance for NRCS LOA applications. We handle product eligibility assessment, technical documentation, testing coordination, and ensure smooth approval processes.',
			icon: 'FileText',
			image: '/NRCS.jpg',
		},
		processingTime: '120 Days',
		heroStats: [
			{
				title: '120 Days',
				description: 'Standard processing time',
			},
			{
				title: 'Regulatory Expertise',
				description: 'NRCS requirements specialist',
			},
			{
				title: 'Hassle-Free Process',
				description: 'We handle all paperwork',
			},
		],
		servicePlans: [
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
		],
		processSteps: [
			{
				step: '1',
				title: 'Consultation & Product Review',
				description: "We assess your product's technical specifications and determine LOA requirements.",
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
				description: 'For products needing laboratory testing, we coordinate with accredited testing facilities.',
			},
			{
				step: '5',
				title: 'Approval & Certification',
				description:
					'Once approved, we deliver your NRCS LOA certificate and provide ongoing compliance support.',
			},
		],
		benefitsBox: [
			{
				icon: 'Clock',
				title: '30 working Days',
				description: 'Standard processing time with our efficient approach.',
			},
			{
				icon: 'Shield',
				title: 'Regulatory Expertise',
				description:
					'Our team understands NRCS requirements and ensures applications meet all standards.',
			},
			{
				icon: 'Users',
				title: 'Hassle-Free Processing',
				description: 'We handle all paperwork and application submissions on your behalf.',
			},
			{
				icon: 'Zap',
				title: 'Faster Approvals',
				description: 'Our efficient process minimizes delays and accelerates market entry.',
			},
		],
		whatIsSection: {
			title: 'What is an NRCS LOA?',
			firstParagraph:
				'The National Regulator for Compulsory Specifications (NRCS) mandates that certain electrical and electronic products must receive a Letter of Authority (LOA) before entering the South African market. This certification ensures products meet South African safety and quality standards.',
			secondParagraph:
				'Our team streamlines the NRCS LOA application process, ensuring businesses obtain approvals efficiently while staying fully compliant with regulatory requirements.',
			checkpoints: [
				'Electrical and electronic products',
				'Safety and quality standards compliance',
				'Mandatory before importation or sale',
			],
		},
		successStory: {
			scenario: 'An electronics importer wanted to bring in a new range of LED lighting products but was unaware of NRCS LOA requirements.',
			challenge:
				'They needed an LOA but lacked the technical knowledge and documentation required for NRCS compliance.',
			solution:
				'Bilacert confirmed the LOA requirement, handled their submission, and ensured a smooth approval process.',
			result:
				'The company received their NRCS LOA efficiently, allowing them to import and sell their LED products legally in South Africa without delays.',
		},
		ctaHeading: 'Ready to Get Your NRCS LOA?',
		metadata: {
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
			url: 'https://bilacert.co.za/services/nrcs-loa-applications',
		},
		formPath: '/forms/nrcs-loa-applications',
		phone: '075 430 4433',
	},

	'radio-dealer-licensing': {
		id: 'radio-dealer-licensing',
		title: 'Radio Dealer Licensing',
		hero: {
			title: 'Complete Radio Dealer Licensing Support',
			subtitle:
				'Expert guidance for Radio Dealer License applications. We handle eligibility assessment, documentation preparation, ICASA liaison, and ongoing compliance support.',
			icon: 'Headphones',
			image: '/herosetion/Radio-Dealer.jpg',
		},
		processingTime: '30 Days',
		heroStats: [
			{
				title: '30 Days',
				description: 'Standard processing time with our streamlined approach.',
			},
			{
				title: 'Regulatory Expertise',
				description: 'Deep understanding of ICASA regulations ensures smooth approval process.',
			},
			{
				title: 'Hassle-Free Process',
				description: 'We handle all paperwork, reducing application time significantly.',
			},
		],
		servicePlans: [
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
		],
		processSteps: [
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
		],
		benefitsBox: [
			{
				icon: 'Clock',
				title: '30 Days',
				description: 'Standard processing time with our streamlined approach.',
			},
			{
				icon: 'Shield',
				title: 'Regulatory Expertise',
				description: 'Deep understanding of ICASA regulations ensures smooth approval process.',
			},
			{
				icon: 'Users',
				title: 'Fast & Hassle-Free',
				description: 'We handle all paperwork, reducing application time significantly.',
			},
			{
				icon: 'Zap',
				title: 'Ongoing Support',
				description: 'We assist with renewals, amendments, and regulatory updates.',
			},
		],
		whatIsSection: {
			title: 'What is a Radio Dealer License?',
			firstParagraph:
				'Any business that sells, distributes, or supplies radio communication equipment in South Africa must hold a valid Radio Dealer License issued by ICASA. Without this license, trading in such equipment is illegal and can result in hefty fines or business disruptions.',
			secondParagraph: 'We simplify the licensing process, ensuring your business remains compliant while you focus on growth.',
			checkpoints: [
				'Required for radio communication equipment sales',
				'Issued by ICASA',
				'Mandatory for legal trading',
			],
		},
		successStory: {
			scenario: 'A two-way radio distributor was unaware of the ICASA licensing requirements and faced operational risks.',
			challenge: 'They needed a Radio Dealer License urgently to avoid business disruption and legal penalties.',
			solution:
				'Bilacert swiftly secured their Radio Dealer License, ensuring they could continue trading legally.',
			result:
				'The distributor now operates without disruptions, maintaining full compliance with ICASA regulations and avoiding costly penalties.',
		},
		ctaHeading: 'Ready to Get Your Radio Dealer License?',
		metadata: {
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
			url: 'https://bilacert.co.za/services/radio-dealer-licensing',
		},
		formPath: '/forms/radio-dealer-licensing',
		phone: '075 430 4433',
	},

	'ski-boat-vhf-licensing': {
		id: 'ski-boat-vhf-licensing',
		title: 'Ski Boat VHF Licensing',
		hero: {
			title: 'Professional VHF Radio Licensing for Marine Vessels',
			subtitle:
				'Expert guidance for Ski Boat VHF Radio licensing. We handle vessel assessment, application preparation, ICASA liaison, and ensure compliance with maritime communication regulations.',
			icon: 'Ship',
			image: '/herosetion/Ski-Boat-VHF.jpg',
		},
		processingTime: '30 working Days',
		heroStats: [
			{
				title: '30 working Days',
				description: 'Standard processing time',
			},
			{
				title: 'Maritime Compliance',
				description: 'ICASA maritime regulations specialist',
			},
			{
				title: 'Fleet Licensing',
				description: 'Multiple vessel support',
			},
		],
		servicePlans: [
			{
				title: 'Basic',
				description: 'Consultation & Application Review',
				features: ['Vessel assessment', 'Application review', 'Basic guidance'],
				price: 'R1,800',
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
					'Fleet licensing',
				],
				price: 'R4,500',
				popular: false,
			},
		],
		processSteps: [
			{
				step: '1',
				title: 'Consultation & Eligibility Check',
				description:
					'We assess whether your ski boat or vessel requires a VHF license and identify necessary documentation.',
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
				description: 'Once approved, we ensure you receive your official ICASA VHF Radio License.',
			},
			{
				step: '5',
				title: 'Post-License Compliance',
				description:
					'We provide ongoing support for license renewals, amendments, and regulatory compliance updates.',
			},
		],
		benefitsBox: [
			{
				icon: 'Clock',
				title: '30 Days',
				description: 'Standard processing time with our streamlined approach.',
			},
			{
				icon: 'Shield',
				title: 'Expert Guidance',
				description:
					'We ensure your application meets all ICASA requirements for maritime communication.',
			},
			{
				icon: 'Users',
				title: 'Hassle-Free Processing',
				description: 'We handle all documentation and submissions on your behalf.',
			},
			{
				icon: 'Zap',
				title: 'Faster Approvals',
				description: 'Our efficient process minimizes delays, getting you on the water sooner.',
			},
		],
		whatIsSection: {
			title: 'What is VHF Radio Licensing?',
			firstParagraph:
				'In South Africa, ski boats and other vessels using VHF radios for marine communication are required to have a valid VHF Radio License from ICASA. This ensures that all maritime radio communication remains safe, legal, and interference-free.',
			secondParagraph:
				'We simplify the process of obtaining your Ski Boat VHF License, ensuring compliance with ICASA regulations while allowing you to focus on your boating experience.',
			checkpoints: [
				'Required for marine VHF radio communication',
				'Issued by ICASA',
				'Essential for safe maritime operations',
			],
		},
		successStory: {
			scenario: 'A fishing charter company needed multiple VHF licenses for its fleet of boats.',
			challenge:
				'They needed to ensure all vessels were legally compliant before peak season and were unfamiliar with the licensing process.',
			solution:
				'Bilacert managed the entire process, ensuring all vessels were legally compliant with maritime regulations.',
			result:
				'The charter company received all their VHF licenses efficiently, allowing them to operate legally during peak season without any compliance issues.',
		},
		ctaHeading: 'Ready to Get Your VHF License?',
		metadata: {
			title: 'Ski Boat VHF Licensing',
			description:
				'Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.',
			keywords: [
				'VHF radio license',
				'ski boat VHF',
				'marine radio license',
				'boat VHF license',
				'yacht radio license',
				'maritime radio license',
				'ICASA VHF license',
				'marine communication license',
			],
			url: 'https://bilacert.co.za/services/ski-boat-vhf-licensing',
		},
		formPath: '/forms/ski-boat-vhf-licensing',
		phone: '075 430 4433',
	},
};

export function getServiceConfig(serviceId: string): ServiceConfig | null {
	return servicesConfig[serviceId] || null;
}

export function getAllServiceIds(): string[] {
	return Object.keys(servicesConfig);
}
