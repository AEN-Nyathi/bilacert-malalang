import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Twitter, Linkedin, Facebook, Tag, Folder } from 'lucide-react';
import { getBlogPostBySlug, getAllPublishedBlogSlugs, getBlogPostsByCategory, getAuthorByName } from '@/lib/supabase/blog';import { format } from 'date-fns';
import Image from 'next/image';
import { RelatedPosts, StickyShare, TableOfContents, AboutAuthor } from '@/components/blog';

export async function generateStaticParams() {
  const slugs = await getAllPublishedBlogSlugs();
  return slugs.map((item) => ({ slug: item.slug }));

}
interface Props {
	params: Promise<{
		slug: string;
	}>;
}
export default async function BlogPostPage({ params }: Props){
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = post.author_name;
  const relatedPosts = post.category ? await getBlogPostsByCategory(post.category, 3) : [];

  return (
    <div className="min-h-screen">
      <StickyShare />
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {post.category && (
                <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {post.category}
                </div>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    {post.excerpt}
                </p>
            )}
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {post.created_at && format(new Date(post.created_at), 'PP')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {post.featured_image && (
        <div className="relative h-64 md:h-96 max-w-5xl mx-auto my-8 rounded-lg overflow-hidden">
            <Image src={post.featured_image} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row-reverse">
            <div className="w-1/4 pl-8 sticky top-24 self-start">
                <TableOfContents content={post.content || ''} />
            </div>
            <div className="w-3/4">
                <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
                    <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />
                </div>
                 {author && <AboutAuthor author={author} />}

                 <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 mt-8">
                     <div className="flex items-center space-x-4">
                         <div className="flex items-center space-x-2">
                             <Folder className="h-5 w-5 text-gray-600" />
                             <span className="text-gray-600">{post.category}</span>
                         </div>
                         <div className="flex items-center space-x-2">
                            <Tag className="h-5 w-5 text-gray-600" />
                            {/* {(post.tags || []).map((tag: string) => (
                                <span key={tag} className="text-gray-600">{tag}</span>
                            ))} */}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Found this helpful?</h3>
            <div className="flex justify-center space-x-4 mb-8">
				<button className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
					<Twitter className="h-5 w-5" />
					<span>Twitter</span>
				</button>
				<button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
					<Linkedin className="h-5 w-5" />
					<span>LinkedIn</span>
				</button>
				<button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
					<Facebook className="h-5 w-5" />
					<span>Facebook</span>
				</button>
            </div>
            <div className="border-t pt-8">
              <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-block">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
}