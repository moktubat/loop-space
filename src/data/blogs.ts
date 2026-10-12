import blogImage1 from "@/assets/blogImage1.webp";
import blogImage2 from "@/assets/blogImage2.webp";
import blogImage3 from "@/assets/blogImage3.webp";
import blogImage4 from "@/assets/blogImage4.webp";

// Featured images (hero images for blog details)
import blogFeaturedImage1 from "@/assets/blogImage1.webp";
import blogFeaturedImage2 from "@/assets/blogImage1.webp";
import blogFeaturedImage3 from "@/assets/blogImage1.webp";
import blogFeaturedImage4 from "@/assets/blogImage1.webp";

// Design principles images
import designPrinciples1 from "@/assets/blogImage1.webp";
import designPrinciples2 from "@/assets/blogImage1.webp";
import designPrinciples3 from "@/assets/blogImage1.webp";
import designPrinciples4 from "@/assets/blogImage1.webp";

// Lighting & textures images
import lightingTextures1 from "@/assets/blogImage1.webp";
import lightingTextures2 from "@/assets/blogImage1.webp";
import lightingTextures3 from "@/assets/blogImage1.webp";
import lightingTextures4 from "@/assets/blogImage1.webp";

// Author images
import member1 from "@/assets/member1.webp";
import member2 from "@/assets/member2.webp";
import member3 from "@/assets/member3.webp";
import member4 from "@/assets/member4.webp";

export type BlogCategory = "All" | "Interior Design" | "Architecture" | "Sustainability" | "Lighting";

export const blogCategories: BlogCategory[] = [
    "All",
    "Interior Design",
    "Architecture",
    "Sustainability",
    "Lighting"
];

export interface BlogPost {
    id: string;
    slug: string; // Added slug for SEO friendly URLs
    title: string;
    category: string;
    excerpt: string;
    publisher: string;
    date: string;
    readingTime: string;
    author: string;
    authorBio: string;
    authorImage: string;
    thumbnail: string;
    featuredImage: string;
    introduction: string[];
    designPrinciples: {
        title: string;
        description: string;
        bullets: string[];
        image: string;
    };
    lightingTextures: {
        title: string;
        description: string;
        bullets: string[];
        bulbs?: string[];
        image: string;
    };
    pros: string[];
    cons: string[];
    comparison: {
        headers: string[];
        rows: string[][];
    };
    takeaway: string;
}

export const blogs: BlogPost[] = [
    {
        id: "1",
        slug: "the-future-of-sustainable-interior-design",
        title: "The Future of Sustainable Interior Design",
        category: "Sustainability",
        excerpt: "Discover how eco-friendly materials and smart design are shaping the homes of tomorrow.",
        publisher: "Architectural Digest",
        date: "Oct 2026",
        readingTime: "5 min read",
        author: "Sarah Johnson",
        authorBio: "Lead Designer at Loop Space with a passion for eco-friendly living.",
        authorImage: member1.src,
        thumbnail: blogImage1.src,
        featuredImage: blogFeaturedImage1.src,
        introduction: [
            "Sustainable interior design is no longer just a trend; it's a necessity. As we move towards a more eco-conscious future, the way we design and furnish our spaces is evolving rapidly.",
            "In this article, we explore the key elements that define sustainable interiors, from material selection to energy-efficient lighting, and how they contribute to a healthier planet."
        ],
        designPrinciples: {
            title: "Eco-Friendly Material Selection",
            description: "Choosing the right materials is the foundation of sustainable design.",
            bullets: [
                "Bamboo and cork flooring",
                "Reclaimed wood furniture",
                "Low-VOC paints and finishes",
                "Recycled metal and glass accents"
            ],
            image: designPrinciples1.src
        },
        lightingTextures: {
            title: "Energy-Efficient Lighting & Textiles",
            description: "Layering natural light with organic textures creates warmth without waste.",
            bullets: [
                "LED and smart lighting systems",
                "Organic cotton and linen fabrics",
                "Hemp and jute rugs",
                "Maximizing natural daylight"
            ],
            image: lightingTextures1.src
        },
        pros: [
            "Reduces environmental impact",
            "Improves indoor air quality",
            "Highly durable and long-lasting",
            "Unique aesthetic appeal"
        ],
        cons: [
            "Higher upfront costs",
            "Limited availability of some materials",
            "Requires careful sourcing",
            "Can be time-consuming to implement"
        ],
        comparison: {
            headers: ["Feature", "Bamboo Flooring", "Hardwood Flooring"],
            rows: [
                ["Sustainability", "Highly renewable", "Takes decades to mature"],
                ["Durability", "Very durable", "Extremely durable"],
                ["Cost", "Moderate", "Often higher"],
                ["Maintenance", "Easy to clean", "Requires periodic refinishing"]
            ]
        },
        takeaway: "Sustainable design is an investment in both our future and our well-being."
    },
    {
        id: "2",
        slug: "minimalism-less-is-more-in-modern-homes",
        title: "Minimalism: Less is More in Modern Homes",
        category: "Interior Design",
        excerpt: "Exploring the principles of minimalist design and how to achieve a clutter-free, elegant home.",
        publisher: "Design Milk Magazine",
        date: "Oct 2026",
        readingTime: "4 min read",
        author: "Michael Smith",
        authorBio: "Co-Founder & Architect specializing in modern minimalist spaces.",
        authorImage: member2.src,
        thumbnail: blogImage2.src,
        featuredImage: blogFeaturedImage2.src,
        introduction: [
            "Minimalism is not about creating an empty, sterile room. It's about intentionality—curating your space to include only what adds value and joy, while eliminating the unnecessary.",
            "By focusing on clean lines, functional furniture, and a neutral color palette, you can create a serene retreat from the chaos of everyday life."
        ],
        designPrinciples: {
            title: "Decluttering Your Space",
            description: "The first step to minimalism is removing what doesn't serve a purpose.",
            bullets: [
                "Adopt the 'one in, one out' rule",
                "Use hidden storage solutions",
                "Keep surfaces clear of knick-knacks",
                "Focus on multi-functional furniture"
            ],
            image: designPrinciples2.src
        },
        lightingTextures: {
            title: "Neutral Palettes & Textures",
            description: "Using subtle textures to add warmth to a minimalist room without adding clutter.",
            bullets: [
                "Layering shades of white and beige",
                "Incorporating natural wood tones",
                "Using linen and wool for softness",
                "Adding a single statement plant"
            ],
            image: lightingTextures2.src
        },
        pros: [
            "Easier to clean and maintain",
            "Creates a calming environment",
            "Makes small spaces feel larger",
            "Reduces visual stress"
        ],
        cons: [
            "Can feel too cold or stark",
            "Difficult to maintain with children",
            "Requires disciplined organization",
            "Limited space for displaying collections"
        ],
        comparison: {
            headers: ["Feature", "Minimalist Design", "Maximalist Design"],
            rows: [
                ["Visual Focus", "Clean and open", "Layered and dense"],
                ["Color Palette", "Neutral and muted", "Bold and contrasting"],
                ["Maintenance", "Low effort", "High effort"],
                ["Best for", "Small spaces", "Large, expressive areas"]
            ]
        },
        takeaway: "Minimalism is the art of living with less but appreciating it more."
    },
    {
        id: "3",
        slug: "how-lighting-transforms-a-living-space",
        title: "How Lighting Transforms a Living Space",
        category: "Lighting",
        excerpt: "From ambient to task lighting, learn how to layer light for both function and aesthetics.",
        publisher: "By Sarah Johnson",
        date: "Oct 2026",
        readingTime: "6 min read",
        author: "Emily Davis",
        authorBio: "Senior Designer with expertise in architectural lighting design.",
        authorImage: member3.src,
        thumbnail: blogImage3.src,
        featuredImage: blogFeaturedImage3.src,
        introduction: [
            "Lighting is the unsung hero of interior design. It dictates the mood, highlights architectural features, and allows a space to function as needed. A well-lit room rarely relies on a single light source.",
            "Understanding the three main types of lighting—ambient, task, and accent—is crucial for creating a balanced and beautiful living space."
        ],
        designPrinciples: {
            title: "Layering Your Lighting",
            description: "Combining different light sources creates depth and functionality.",
            bullets: [
                "Ambient lighting for general illumination",
                "Task lighting for reading and working",
                "Accent lighting to highlight art or textures",
                "Using dimmer switches for flexibility"
            ],
            image: designPrinciples3.src
        },
        lightingTextures: {
            title: "Color Temperature & Bulbs",
            description: "Choosing the right warmth of light can make or break a room's cozy factor.",
            bulbs: [],
            bullets: [
                "Warm white (2700K-3000K) for living areas",
                "Cool white (3500K-4100K) for kitchens",
                "Daylight (5000K+) for reading nooks",
                "Smart bulbs for adjustable ambiance"
            ],
            image: lightingTextures3.src
        },
        pros: [
            "Instantly changes the mood of a room",
            "Highlights architectural features",
            "Improves functionality of workspaces",
            "Relatively low-cost upgrade"
        ],
        cons: [
            "Requires careful planning of outlets",
            "Can create glare if incorrectly placed",
            "Smart lighting setups can be complex",
            "Heat output from certain bulbs"
        ],
        comparison: {
            headers: ["Feature", "LED Lighting", "Halogen Lighting"],
            rows: [
                ["Energy Efficiency", "Highly efficient", "Less efficient"],
                ["Lifespan", "Up to 25,000 hours", "Around 2,000 hours"],
                ["Heat Emission", "Very low", "High"],
                ["Best for", "General home use", "Accent and display lighting"]
            ]
        },
        takeaway: "Good lighting doesn't just illuminate a room; it sculpts it."
    },
    {
        id: "4",
        slug: "blending-vintage-and-modern-aesthetics",
        title: "Blending Vintage and Modern Aesthetics",
        category: "Architecture",
        excerpt: "Learn how to seamlessly mix old-world charm with contemporary design for a unique home.",
        publisher: "Interior Design Today",
        date: "Oct 2026",
        readingTime: "5 min read",
        author: "John Williams",
        authorBio: "Project Manager with a love for restoring historical homes.",
        authorImage: member4.src,
        thumbnail: blogImage4.src,
        featuredImage: blogFeaturedImage4.src,
        introduction: [
            "Blending vintage and modern elements creates a home that feels both curated and comfortable. This style, often called 'transitional' or 'eclectic', prevents a space from looking like a sterile showroom while maintaining a contemporary edge.",
            "The secret lies in balance: letting modern conveniences shine while honoring the craftsmanship of the past."
        ],
        designPrinciples: {
            title: "Balancing Old and New",
            description: "Create harmony by using vintage pieces as focal points in modern rooms.",
            bullets: [
                "Pair a sleek modern sofa with a vintage rug",
                "Use antique lighting fixtures in a minimalist kitchen",
                "Keep color palettes cohesive to tie styles together",
                "Mix materials like raw steel and aged wood"
            ],
            image: designPrinciples4.src
        },
        lightingTextures: {
            title: "Restoration vs. Reproduction",
            description: "Deciding when to restore an original piece or buy a modern replica.",
            bullets: [
                "Restoring preserves historical integrity",
                "Reproductions offer modern durability",
                "Mixing both creates an authentic feel",
                "Focusing on craftsmanship over pure age"
            ],
            image: lightingTextures4.src
        },
        pros: [
            "Creates a highly personalized space",
            "Adds character and warmth",
            "Sustainable by reusing existing pieces",
            "Timeless appeal that doesn't follow trends"
        ],
        cons: [
            "Can easily look cluttered if not balanced",
            "Vintage pieces may require maintenance",
            "Harder to source matching items",
            "Requires a good eye for scale and proportion"
        ],
        comparison: {
            headers: ["Feature", "Restored Vintage", "Modern Reproduction"],
            rows: [
                ["Authenticity", "High historical value", "Contemporary imitation"],
                ["Cost", "Often higher", "Often more affordable"],
                ["Maintenance", "Requires special care", "Standard modern care"],
                ["Best for", "Characteristic interiors", "High-use functional areas"]
            ]
        },
        takeaway: "A home should tell a story; blending eras allows you to write your own chapter."
    }
];