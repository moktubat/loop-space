import { blogs } from "@/data/blogs";
import BlogDetails from "@/components/pages/Blog/BlogDetails";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    const relatedPosts = blogs.filter((b) => b.slug !== slug).slice(0, 3);

    return <BlogDetails blog={blog} relatedPosts={relatedPosts} />;
}