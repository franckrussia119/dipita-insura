import { BLOG_POSTS } from '@/lib/data';
import { BlogDetailContent } from './_components/blog-detail-content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return (BLOG_POSTS ?? []).map((p: any) => ({ slug: p?.slug ?? '' }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (BLOG_POSTS ?? []).find((p: any) => p?.slug === slug);
  if (!post) return notFound();
  return <BlogDetailContent post={post} />;
}
