import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                {post.featured_image && (
                  <Image src={post.featured_image} alt={post.title} layout="fill" className="object-cover" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-primary group-hover:text-primary-light transition-colors duration-200 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
