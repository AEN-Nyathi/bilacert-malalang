


import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';
import { getAllPublishedBlogPosts } from '@/lib/supabase/blog';
import { BlogPost } from '@/types';

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.',
	keywords: [
		'ICASA compliance blog',
		'NRCS LOA news',
		'compliance articles South Africa',
		'type approval guides',
		'licensing updates',
		'regulatory compliance news',
		'ICASA NRCS insights',
	],
	openGraph: {
		title: 'Blog - ICASA & NRCS Compliance Insights',
		description:
			'Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.',
		url: 'https://bilacert.co.za/blog',
		type: 'website',
	},
	alternates: {
		canonical: 'https://bilacert.co.za/blog',
	},
};

export default async function BlogPage() {
	const categories = [
		'All',
		'ICASA Approvals',
		'NRCS Compliance',
		'Licensing',
		'Telecom Licensing',
		'Business Strategy',
		'Marine Compliance',
	];

	const blogPosts = await getAllPublishedBlogPosts();

	if (blogPosts.length === 0) {
		return <div className="min-h-screen text-center py-20">No blog posts found.</div>;
	}

	return (
		<div className='min-h-screen w-screen'>
			{/* Hero Section */}
			<section className='relative text-white py-20'>
				<Image
					src='/herosetion/Blog.jpg'
					alt='Compliance Insights & Updates'
					fill
					priority
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-black/40' />
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl lg:text-5xl font-bold mb-6'>Compliance Insights & Updates</h1>
						<p className='text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto'>
							Stay informed with the latest compliance news, regulatory updates, and expert insights
							to keep your business ahead of the curve.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Post */}
			<section className='py-16 bg-secondary-gray'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
							<div className='bg-gradient-to-br from-primary to-primary-light p-8 lg:p-12 flex items-center'>
								<div>
									<div className='inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-medium mb-4'>
										Featured Article
									</div>
									<h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
										{blogPosts[0].title}
									</h2>
									<p className='text-xl text-gray-200 mb-6'>{blogPosts[0].excerpt}</p>
									<div className='flex items-center space-x-4 text-gray-200 mb-6'>
										<div className='flex items-center space-x-2'>
											<User className='h-4 w-4' />
											<span>{blogPosts[0].author_name}</span>
										</div>
										<div className='flex items-center space-x-2'>
											<Calendar className='h-4 w-4' />
											<span>
												{new Date(blogPosts[0].created_at).toLocaleDateString('en-ZA', {
													year: 'numeric',
													month: 'long',
													day: 'numeric',
												})}
											</span>
										</div>
										<span>{blogPosts[0].read_time}</span>
									</div>
									<Link
										href={`/blog/${blogPosts[0].slug}`}
										className='inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors duration-200'>
										Read Article
										<ArrowRight className='h-4 w-4 ml-2' />
									</Link>
								</div>
							</div>
							<div className='p-8 lg:p-12 flex items-center'>
								<div className='relative w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
									<Image
										src={blogPosts[0].featured_image!}
										alt={blogPosts[0].title}
										fill
										className='rounded-lg object-cover'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl lg:text-4xl font-bold text-primary mb-4'>Latest Articles</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Expert insights and practical guidance to help you navigate South African compliance
							requirements
						</p>
					</div>

					{/* Category Filter */}
					<div className='flex flex-wrap justify-center gap-4 mb-12'>
						{categories.map((category) => (
							<button
								key={category}
								className='px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200'>
								{category}
							</button>
						))}
					</div>

					{/* Posts Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{blogPosts.slice(1).map((post: BlogPost) => (
							<Link
								key={post.id}
								href={`/blog/${post.slug}`}
								className='bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'>
								<div className=' relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden'>
									<Image
										src={post.featured_image!}
										alt={post.title}
										fill
										style={{ objectFit: 'cover' }}
										className='rounded-lg'
									/>
								</div>
								<div className='p-6'>
									<div className='flex items-center justify-between mb-3'>
										<span className='bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium'>
											{post.category}
										</span>
										<span className='text-sm text-gray-500'>{post.read_time}</span>
									</div>
									<h3 className='text-xl font-semibold text-primary mb-3 line-clamp-2'>
										{post.title}
									</h3>
									<p className='text-gray-600 mb-4 line-clamp-3'>{post.excerpt}</p>
									<div className='flex items-center justify-between text-sm text-gray-500'>
										<div className='flex items-center space-x-2'>
											<User className='h-4 w-4' />
											<span>{post.author_name}</span>
										</div>
										<div className='flex items-center space-x-2'>
											<Calendar className='h-4 w-4' />
											<span>
												{new Date(post.created_at).toLocaleDateString('en-ZA', {
													month: 'short',
													day: 'numeric',
												})}
											</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className='py-20 bg-primary text-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl lg:text-4xl font-bold mb-6'>Stay Updated</h2>
					<p className='text-xl mb-8 text-gray-200'>
						Subscribe to our newsletter for the latest compliance insights, regulatory updates, and
						expert guidance delivered to your inbox.
					</p>
					<form className='max-w-md mx-auto flex gap-4'>
						<input
							type='email'
							placeholder='Enter your email'
							className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent'
						/>
						<button
							type='submit'
							className='bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors duration-200'>
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
