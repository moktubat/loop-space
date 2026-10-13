
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServiceDetails from "@/components/pages/Services/ServiceDetails";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: ServicePageProps) {
    const { slug } = await params;

    const service = services.find((item) => item.slug === slug);

    if (!service) {
        notFound();
    }

    const relatedServices = service.relatedServices
        .map((relatedSlug) =>
            services.find((item) => item.slug === relatedSlug)
        )
        .filter((item) => item !== undefined);

    return (
        <ServiceDetails
            service={service}
            relatedServices={relatedServices}
        />
    );
}
