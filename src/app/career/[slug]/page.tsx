import { notFound } from "next/navigation";
import { careers } from "@/data/career";
import CareerDetails from "@/components/pages/Career/CareerDetails";

interface CareerPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return careers.map((job) => ({ slug: job.slug }));
}

export default async function CareerDetailsPage({ params }: CareerPageProps) {
    const { slug } = await params;
    const job = careers.find((item) => item.slug === slug);

    if (!job) {
        notFound();
    }

    const relatedJobs = job.relatedJobs
        .map((relatedSlug) => careers.find((item) => item.slug === relatedSlug))
        .filter((item): item is NonNullable<typeof item> => item !== undefined);

    return <CareerDetails job={job} relatedJobs={relatedJobs} />;
}