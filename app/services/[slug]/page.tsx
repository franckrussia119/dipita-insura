import { SERVICES } from '@/lib/data';
import { ServiceDetailContent } from './_components/service-detail-content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return (SERVICES ?? []).map((s: any) => ({ slug: s?.slug ?? '' }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = (SERVICES ?? []).find((s: any) => s?.slug === slug);
  if (!service) return notFound();
  return <ServiceDetailContent service={service} />;
}
