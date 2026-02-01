'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className='bg-white shadow-sm sticky top-0 z-50'>
			{/* Top bar with contact info */}
			<div className='bg-primary text-white py-2'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center text-sm'>
						<div className='flex items-center space-x-6'>
							<div className='flex items-center space-x-2'>
								<Phone className='h-4 w-4' />
								<span>075 430 4433</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Mail className='h-4 w-4' />
								<span>info@bilacert.co.za</span>
							</div>
						</div>
						<div className='hidden md:block'>
							<span>Your Compliance Partner.</span>
						</div>
					</div>
				</div>
			</div>

			{/* Main navigation */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					{/* Logo */}
					<Link
						href='/'
						className='relative h-11 w-40 flex-shrink-0 flex items-center'>
						<Image
							src='/logo.png'
							alt='Bilacert Logo'
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							className='rounded-lg object-cover'
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-gray-700 hover:text-primary transition-colors duration-200 font-medium'>
								{item.name}
							</Link>
						))}
					</nav>

					{/* CTA Button */}
					<div className='hidden md:block'>
						<Link
							href='/contact'
							className='bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-accent-light transition-all duration-200 transform hover:-translate-y-0.5'>
							Get Free Consultation
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-gray-700 hover:text-primary'>
							{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className='md:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className='block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}>
									{item.name}
								</Link>
							))}
							<div className='px-3 py-2'>
								<Link
									href='/contact'
									className='block w-full bg-accent text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-accent-light transition-colors duration-200'
									onClick={() => setIsMenuOpen(false)}>
									Get Free Consultation
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
