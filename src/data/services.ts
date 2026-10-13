import residentialImg1 from "@/assets/residentialImg1.webp";
import residentialImg2 from "@/assets/residentialImg2.webp";
import commercialImg1 from "@/assets/commercialImg1.webp";
import commercialImg2 from "@/assets/commercialImg2.webp";
import renovationImg1 from "@/assets/renovationImg1.webp";
import renovationImg2 from "@/assets/renovationImg2.webp";
import customImg1 from "@/assets/customImg1.webp";
import customImg2 from "@/assets/customImg2.webp";

// Home page card images
import serviceImg1 from "@/assets/serviceImg1.webp";
import serviceImg2 from "@/assets/serviceImg2.webp";
import serviceImg3 from "@/assets/serviceImg3.webp";
import serviceImg4 from "@/assets/serviceImg4.webp";

export interface Service {
    id: string;
    slug: string;
    title: string;
    excerpt: string;

    hero: {
        description: string;
        image: string;
        imageAlt: string;
    };

    overview: {
        heading: string;
        description: string[];
        image: string;
        imageAlt: string;
    };

    points: string[];
    bullets: string[];

    offers: {
        title: string;
        description: string;
        image?: string;
    }[];

    featuredProjects: {
        title: string;
        category: string;
        location: string;
        image: string;
        imageAlt: string;
        slug: string;
    }[];

    gallery: {
        image: string;
        imageAlt: string;
        orientation: "portrait" | "landscape" | "square";
    }[];

    process: {
        step: string;
        title: string;
        description: string;
    }[];

    benefits: {
        title: string;
        description: string;
    }[];

    testimonials: {
        name: string;
        role: string;
        quote: string;
        image?: string;
        rating: number;
    }[];

    faqs: {
        question: string;
        answer: string;
    }[];

    cardImage: string;
    images: {
        tall: string;
        wide: string;
    };

    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };

    relatedServices: string[];
}

export const services: Service[] = [

    {
        id: "1",
        slug: "residential-design",
        title: "Residential Design",

        excerpt:
            "Crafting personalized living spaces that reflect your unique style and enhance daily life.",

        hero: {
            description:
                "Thoughtfully designed living spaces that bring together comfort, functionality, and timeless aesthetics.",
            image: residentialImg1.src,
            imageAlt: "Contemporary residential interior design",
        },

        overview: {
            heading: "Spaces Designed Around the Way You Live",
            description: [
                "Your home should reflect your personality, lifestyle, and aspirations. Our residential design service transforms ideas into thoughtfully planned living environments.",
                "From space planning and material selection to lighting and finishing details, we bring every element together to create a cohesive home.",
            ],
            image: residentialImg2.src,
            imageAlt: "Elegant residential living space",
        },

        points: [
            "Space Planning",
            "Color Palette",
            "Material Selection",
            "Mood Board Creation",
        ],

        bullets: [
            "Full home interior design",
            "Single-room makeovers",
            "Space planning and layout optimization",
            "Lighting and color scheme coordination",
            "Smart home and automation solutions",
        ],

        offers: [
            {
                title: "Living Room Design",
                description:
                    "Create welcoming living spaces with balanced layouts, comfortable furniture, and carefully selected finishes.",
                image: residentialImg1.src,
            },
            {
                title: "Bedroom Interiors",
                description:
                    "Design restful personal spaces with thoughtful lighting, storage, textures, and harmonious colors.",
                image: residentialImg2.src,
            },
            {
                title: "Kitchen Design",
                description:
                    "Combine efficient workflows, practical storage, and refined materials for a functional kitchen.",
            },
            {
                title: "Space Planning",
                description:
                    "Make the most of every room through considered layouts, furniture placement, and circulation.",
            },
            {
                title: "Lighting Design",
                description:
                    "Layer ambient, task, and accent lighting to create comfortable and adaptable interiors.",
            },
            {
                title: "Material Selection",
                description:
                    "Choose complementary finishes, textures, and materials that support your design vision.",
            },
        ],

        featuredProjects: [
            {
                title: "The Contemporary Residence",
                category: "Residential Interior",
                location: "Project Location",
                image: residentialImg1.src,
                imageAlt: "Contemporary residential interior",
                slug: "contemporary-residence",
            },
            {
                title: "The Minimalist Home",
                category: "Residential Interior",
                location: "Project Location",
                image: residentialImg2.src,
                imageAlt: "Minimalist home interior",
                slug: "minimalist-home",
            },
        ],

        gallery: [
            {
                image: residentialImg1.src,
                imageAlt: "Contemporary living room",
                orientation: "landscape",
            },
            {
                image: residentialImg2.src,
                imageAlt: "Residential interior details",
                orientation: "portrait",
            },
        ],

        process: [
            {
                step: "01",
                title: "Discovery & Consultation",
                description:
                    "We discuss your lifestyle, preferences, requirements, budget, and project goals.",
            },
            {
                step: "02",
                title: "Concept & Planning",
                description:
                    "We develop layouts, mood boards, and a cohesive direction for your interior.",
            },
            {
                step: "03",
                title: "Design Development",
                description:
                    "We refine materials, finishes, furniture, lighting, and design details.",
            },
            {
                step: "04",
                title: "Execution & Handover",
                description:
                    "We coordinate the agreed implementation process and review the completed space.",
            },
        ],

        benefits: [
            {
                title: "Personalized Design",
                description:
                    "Every concept is developed around your preferences, lifestyle, and practical needs.",
            },
            {
                title: "Thoughtful Space Planning",
                description:
                    "We prioritize functionality, circulation, and effective use of available space.",
            },
            {
                title: "Carefully Selected Materials",
                description:
                    "We help coordinate finishes, textures, and materials into a cohesive interior.",
            },
            {
                title: "Attention to Detail",
                description:
                    "From the overall layout to the finishing touches, each decision supports the design vision.",
            },
        ],

        testimonials: [
            {
                name: "Client Name",
                role: "Residential Client",
                quote:
                    "The team understood our requirements and developed a design that reflected our lifestyle and preferences.",
                rating: 5,
            },
            {
                name: "Client Name",
                role: "Homeowner",
                quote:
                    "The planning and attention to detail made the entire design process feel organized and clear.",
                rating: 5,
            },
        ],

        faqs: [
            {
                question: "What does residential interior design include?",
                answer:
                    "Depending on the agreed scope, residential design can include space planning, furniture layouts, material and color selection, lighting concepts, and interior design documentation.",
            },
            {
                question: "Can you design a single room?",
                answer:
                    "Yes. Projects can focus on one room, selected areas, or an entire home, depending on your requirements.",
            },
            {
                question: "Can I share my own design ideas?",
                answer:
                    "Absolutely. Your references, preferences, and ideas help us develop a design that suits your vision.",
            },
            {
                question: "How long does a residential design project take?",
                answer:
                    "The timeline depends on the project's size, complexity, approvals, and implementation requirements. We establish a suitable timeline during consultation.",
            },
            {
                question: "Do you handle implementation as well?",
                answer:
                    "Implementation and project coordination can be discussed during consultation and confirmed according to the agreed scope.",
            },
        ],

        cardImage: serviceImg1.src,

        images: {
            tall: residentialImg1.src,
            wide: residentialImg2.src,
        },

        cta: {
            title: "Let's Design a Home That Feels Like You",
            description:
                "Tell us about your space, ideas, and goals. Let's explore how we can bring your vision to life.",
            buttonText: "Discuss Your Project",
            buttonLink: "/contact",
        },

        relatedServices: [
            "commercial-design",
            "renovation",
            "custom-furniture",
        ],
    },

    {
        id: "2",
        slug: "commercial-design",
        title: "Commercial Design",

        excerpt:
            "Developing functional and aesthetically pleasing environments that align with your brand identity.",

        hero: {
            description:
                "Transform your business environment with thoughtfully designed commercial spaces that combine brand identity, functionality, and contemporary aesthetics.",
            image: commercialImg1.src,
            imageAlt: "Contemporary commercial interior design",
        },

        overview: {
            heading: "Commercial Spaces That Inspire Business",
            description: [
                "A well-designed commercial space does more than look impressive. It shapes customer experiences, supports employee productivity, and communicates what your brand stands for. We create environments that balance visual appeal with practical business needs.",
                "From modern corporate offices and retail showrooms to restaurants and hospitality spaces, our team develops tailored design solutions that make every square foot work harder for your business.",
            ],
            image: commercialImg2.src,
            imageAlt: "Modern commercial space with thoughtfully designed interiors",
        },

        points: [
            "Office Layout Planning",
            "Brand Integration",
            "Lighting Design",
            "Space Flow Analysis",
        ],

        bullets: [
            "Modern office space design",
            "Retail store and showroom planning",
            "Café and restaurant interior design",
            "Hotel and hospitality interiors",
            "Commercial lighting and material selection",
            "Functional layouts and circulation planning",
        ],

        offers: [
            {
                title: "Office Interior Design",
                description:
                    "Create productive workplaces with ergonomic layouts, collaborative zones, meeting rooms, and thoughtfully designed workstations.",
                image: commercialImg1.src,
            },
            {
                title: "Retail & Showroom Design",
                description:
                    "Present your products effectively with engaging displays, intuitive customer journeys, and layouts that reflect your brand.",
                image: commercialImg2.src,
            },
            {
                title: "Restaurant & Café Design",
                description:
                    "Develop inviting dining environments with comfortable seating, considered lighting, and a cohesive atmosphere.",
            },
            {
                title: "Hospitality Interior Design",
                description:
                    "Design welcoming environments for hotels, lounges, and hospitality businesses with attention to comfort and guest experience.",
            },
            {
                title: "Workspace Planning",
                description:
                    "Optimize available space through efficient zoning, clear circulation, and a balance between private and collaborative areas.",
            },
            {
                title: "Brand-Focused Interiors",
                description:
                    "Translate your brand identity into colors, materials, finishes, and visual details that create a consistent customer experience.",
            },
        ],

        featuredProjects: [
            {
                title: "The Modern Workspace",
                category: "Corporate Office",
                location: "Project Location",
                image: commercialImg1.src,
                imageAlt: "Modern office interior with contemporary furnishings",
                slug: "modern-workspace",
            },
            {
                title: "The Signature Showroom",
                category: "Retail & Commercial",
                location: "Project Location",
                image: commercialImg2.src,
                imageAlt: "Contemporary commercial showroom interior",
                slug: "signature-showroom",
            },
        ],

        gallery: [
            {
                image: commercialImg1.src,
                imageAlt: "Contemporary office interior",
                orientation: "landscape",
            },
            {
                image: commercialImg2.src,
                imageAlt: "Commercial interior design details",
                orientation: "portrait",
            },
        ],

        process: [
            {
                step: "01",
                title: "Consultation & Discovery",
                description:
                    "We learn about your business, brand identity, operational needs, target audience, budget, and project objectives.",
            },
            {
                step: "02",
                title: "Space Analysis & Planning",
                description:
                    "We assess the available space and develop functional layouts that support movement, workflow, customer experience, and efficient space utilization.",
            },
            {
                step: "03",
                title: "Concept & Design Development",
                description:
                    "We establish the visual direction, refine materials and finishes, coordinate lighting concepts, and develop the design details.",
            },
            {
                step: "04",
                title: "Implementation & Handover",
                description:
                    "We coordinate the agreed project execution process, review design details, and work toward delivering a cohesive commercial environment.",
            },
        ],

        benefits: [
            {
                title: "Business-Focused Design",
                description:
                    "We align spatial planning and interior aesthetics with your operational requirements and business objectives.",
            },
            {
                title: "Consistent Brand Identity",
                description:
                    "We incorporate your brand's character into the space through coordinated materials, colors, finishes, and visual elements.",
            },
            {
                title: "Efficient Space Utilization",
                description:
                    "We plan layouts to support comfortable movement, practical workflows, and effective use of available space.",
            },
            {
                title: "Customer & Employee Experience",
                description:
                    "We consider the people using your space, creating environments that feel welcoming, functional, and comfortable.",
            },
            {
                title: "Attention to Every Detail",
                description:
                    "We coordinate furniture, lighting, materials, and finishing elements to create a cohesive commercial interior.",
            },
        ],

        testimonials: [
            {
                name: "Client Name",
                role: "Business Owner",
                quote:
                    "The design concept reflected our business identity and helped us clarify how we wanted our commercial space to function.",
                rating: 5,
            },
            {
                name: "Client Name",
                role: "Commercial Client",
                quote:
                    "The planning process helped us think through our workspace layout, materials, and the experience we wanted to create for our customers.",
                rating: 5,
            },
        ],

        faqs: [
            {
                question: "What types of commercial spaces do you design?",
                answer:
                    "We design a variety of commercial environments, including offices, retail stores, showrooms, cafés, restaurants, and hospitality spaces. The scope depends on your project requirements.",
            },
            {
                question: "Can you incorporate our existing brand identity?",
                answer:
                    "Yes. We can incorporate your existing brand colors, visual identity, and business values into the interior concept to create a cohesive environment.",
            },
            {
                question: "Can you design a small office or retail space?",
                answer:
                    "Absolutely. We tailor layouts and design solutions to the available space, business requirements, and project budget.",
            },
            {
                question: "How long does a commercial design project take?",
                answer:
                    "The timeline depends on the size and complexity of the space, the design scope, approval requirements, and implementation schedule. We discuss the expected timeline during consultation.",
            },
            {
                question: "Do you provide construction and implementation services?",
                answer:
                    "Implementation, contractor coordination, and related services depend on the agreed project scope. We clarify the responsibilities and deliverables before work begins.",
            },
            {
                question: "Can you work within our business budget?",
                answer:
                    "Yes. We discuss your budget early in the process and prioritize design decisions, materials, and solutions according to your requirements.",
            },
        ],

        cardImage: serviceImg2.src,

        images: {
            tall: commercialImg1.src,
            wide: commercialImg2.src,
        },

        cta: {
            title: "Let's Create a Space for Your Business",
            description:
                "Whether you're planning a new office, a retail showroom, or a hospitality space, let's discuss your goals and create a design that works for your business.",
            buttonText: "Discuss Your Project",
            buttonLink: "/contact",
        },

        relatedServices: [
            "residential-design",
            "renovation",
            "custom-furniture",
        ],
    },

    {
        id: "3",
        slug: "renovation",
        title: "Renovation",

        excerpt:
            "Transforming existing spaces to meet new needs and modern aesthetics.",

        hero: {
            description:
                "Reimagine your existing space with thoughtful renovations that combine modern aesthetics, improved functionality, and lasting quality.",
            image: renovationImg1.src,
            imageAlt: "Renovated interior featuring contemporary design and finishes",
        },

        overview: {
            heading: "Transform Your Space Into Something Extraordinary",
            description: [
                "Every space has the potential to become something better. Our renovation services help you rethink existing interiors, improve functionality, and introduce a fresh design direction without losing sight of what makes your space unique.",
                "From individual room upgrades to comprehensive interior transformations, we coordinate layouts, finishes, materials, and design details to create spaces that feel more comfortable, cohesive, and suited to your needs.",
            ],
            image: renovationImg2.src,
            imageAlt: "Contemporary renovated interior with refined finishes",
        },

        points: [
            "Full Remodeling",
            "Structural Updates",
            "Modern Finishes",
            "Project Coordination",
        ],

        bullets: [
            "Full interior remodeling",
            "Kitchen and bathroom transformations",
            "Flooring and wall enhancements",
            "Space reconfiguration and layout improvements",
            "Lighting and electrical design coordination",
            "Material upgrades and finish selection",
        ],

        offers: [
            {
                title: "Complete Interior Remodeling",
                description:
                    "Refresh your interior with a coordinated renovation plan covering layouts, finishes, materials, and essential design details.",
                image: renovationImg1.src,
            },
            {
                title: "Kitchen Renovation",
                description:
                    "Improve kitchen functionality with better layouts, practical storage, updated finishes, and carefully selected materials.",
                image: renovationImg2.src,
            },
            {
                title: "Bathroom Renovation",
                description:
                    "Create a more comfortable and refined bathroom with updated surfaces, fixtures, lighting, and space-conscious planning.",
            },
            {
                title: "Flooring & Wall Upgrades",
                description:
                    "Refresh your interiors with coordinated flooring, wall treatments, textures, and finishes that complement the overall design.",
            },
            {
                title: "Space Reconfiguration",
                description:
                    "Reconsider room layouts and spatial arrangements to improve circulation, usability, and the way different areas connect.",
            },
            {
                title: "Lighting & Finish Upgrades",
                description:
                    "Enhance the atmosphere of your space through considered lighting concepts, modern finishes, and coordinated design details.",
            },
        ],

        featuredProjects: [
            {
                title: "The Modern Home Revival",
                category: "Residential Renovation",
                location: "Project Location",
                image: renovationImg1.src,
                imageAlt: "Modern residential renovation with updated interior finishes",
                slug: "modern-home-revival",
            },
            {
                title: "The Refined Interior",
                category: "Interior Remodeling",
                location: "Project Location",
                image: renovationImg2.src,
                imageAlt: "Renovated interior with contemporary materials and finishes",
                slug: "refined-interior",
            },
        ],

        gallery: [
            {
                image: renovationImg1.src,
                imageAlt: "Renovated contemporary living space",
                orientation: "landscape",
            },
            {
                image: renovationImg2.src,
                imageAlt: "Renovation finishes and interior details",
                orientation: "portrait",
            },
        ],

        process: [
            {
                step: "01",
                title: "Site Assessment & Consultation",
                description:
                    "We discuss your goals, evaluate the existing space, identify priorities, and understand your budget and renovation requirements.",
            },
            {
                step: "02",
                title: "Planning & Design Concept",
                description:
                    "We develop layout improvements, material directions, finish selections, and a coordinated design plan for the proposed transformation.",
            },
            {
                step: "03",
                title: "Renovation Preparation",
                description:
                    "We finalize the agreed scope, coordinate material selections, and plan the implementation sequence and relevant project requirements.",
            },
            {
                step: "04",
                title: "Execution & Final Review",
                description:
                    "The agreed renovation work is coordinated, design details are reviewed, and the completed space is checked against the approved scope.",
            },
        ],

        benefits: [
            {
                title: "A Fresh Design Perspective",
                description:
                    "We help you rethink your existing interior and explore practical ways to make it more functional and visually cohesive.",
            },
            {
                title: "Better Use of Existing Space",
                description:
                    "Thoughtful layout improvements can help make rooms more usable and support the way you live or work.",
            },
            {
                title: "Coordinated Materials & Finishes",
                description:
                    "We bring together flooring, wall treatments, lighting, and other finishes to create a consistent design direction.",
            },
            {
                title: "Solutions Tailored to Your Needs",
                description:
                    "Each renovation plan considers the existing space, your priorities, the intended outcome, and your available budget.",
            },
            {
                title: "Attention to Detail",
                description:
                    "We consider the finishing touches and connections between design elements to achieve a polished overall result.",
            },
        ],

        testimonials: [
            {
                name: "Client Name",
                role: "Homeowner",
                quote:
                    "The renovation planning helped us see new possibilities for our existing space and make more informed design decisions.",
                rating: 5,
            },
            {
                name: "Client Name",
                role: "Residential Client",
                quote:
                    "We appreciated the thoughtful material choices and the focus on making our interior more functional for everyday living.",
                rating: 5,
            },
        ],

        faqs: [
            {
                question: "What types of renovation projects do you handle?",
                answer:
                    "Depending on the agreed scope, we can help with interior remodeling, kitchen and bathroom upgrades, flooring, wall finishes, lighting improvements, and layout changes.",
            },
            {
                question: "Can you renovate just one room?",
                answer:
                    "Yes. A renovation can focus on a single room, a specific area, or multiple spaces throughout a property.",
            },
            {
                question: "Can you modernize my existing interior without changing everything?",
                answer:
                    "Yes. We can identify opportunities to improve selected finishes, lighting, furniture arrangements, and other elements while retaining suitable existing features.",
            },
            {
                question: "How much does a renovation project cost?",
                answer:
                    "Costs depend on the project's size, existing conditions, material choices, labor requirements, and scope of work. We discuss your budget before finalizing the proposed solution.",
            },
            {
                question: "How long does a renovation take?",
                answer:
                    "The timeline varies according to project complexity, site conditions, material availability, approvals, and the extent of the work. A project-specific schedule can be discussed during planning.",
            },
            {
                question: "Do renovation projects include structural changes?",
                answer:
                    "Structural work depends on the project scope and requires appropriate professional assessment, approvals, and qualified contractors where applicable.",
            },
        ],

        cardImage: serviceImg3.src,

        images: {
            tall: renovationImg1.src,
            wide: renovationImg2.src,
        },

        cta: {
            title: "Ready to Reimagine Your Space?",
            description:
                "Tell us what you want to improve, what isn't working, and what you envision for your space. Let's explore the possibilities together.",
            buttonText: "Plan Your Renovation",
            buttonLink: "/contact",
        },

        relatedServices: [
            "residential-design",
            "commercial-design",
            "custom-furniture",
        ],
    },

    {
        id: "4",
        slug: "custom-furniture",
        title: "Custom Furniture",

        excerpt:
            "Designing and crafting bespoke furniture pieces that perfectly fit your space and style.",

        hero: {
            description:
                "Discover furniture designed around your space, your lifestyle, and your vision, combining thoughtful craftsmanship with functional design.",
            image: customImg1.src,
            imageAlt: "Custom-designed furniture in a contemporary interior",
        },

        overview: {
            heading: "Furniture Made for Your Space and Your Story",
            description: [
                "The right furniture brings a space together. Our custom furniture service turns individual ideas into considered designs that complement your interior, suit your practical needs, and make better use of available space.",
                "From statement pieces and built-in storage to bespoke tables, seating, and bedroom furniture, we help you explore dimensions, materials, finishes, and functional details to create furniture tailored to your requirements.",
            ],
            image: customImg2.src,
            imageAlt: "Bespoke furniture and carefully selected interior materials",
        },

        points: [
            "Bespoke Designs",
            "Material Selection",
            "Functional Planning",
            "Craftsmanship & Finishing",
        ],

        bullets: [
            "Custom sofas and seating",
            "Bespoke dining and coffee tables",
            "Built-in wardrobes and storage",
            "Custom beds and bedroom furniture",
            "Office desks and workstations",
            "Multifunctional and space-saving furniture",
        ],

        offers: [
            {
                title: "Custom Living Room Furniture",
                description:
                    "Create sofas, accent chairs, coffee tables, and statement pieces designed to complement your living space.",
                image: customImg1.src,
            },
            {
                title: "Bespoke Bedroom Furniture",
                description:
                    "Design beds, bedside tables, wardrobes, and storage solutions that balance comfort, aesthetics, and everyday practicality.",
                image: customImg2.src,
            },
            {
                title: "Dining Tables & Chairs",
                description:
                    "Choose dimensions, materials, finishes, and design details that suit your dining area and how you use it.",
            },
            {
                title: "Built-In Storage Solutions",
                description:
                    "Make effective use of available space with tailored wardrobes, shelving, cabinets, and integrated storage.",
            },
            {
                title: "Office & Workspace Furniture",
                description:
                    "Develop desks, workstations, and storage pieces that support your workflow and complement your working environment.",
            },
            {
                title: "Multifunctional Furniture",
                description:
                    "Explore practical furniture concepts that combine multiple uses and help make compact spaces more versatile.",
            },
        ],

        featuredProjects: [
            {
                title: "The Signature Living Collection",
                category: "Custom Living Room Furniture",
                location: "Project Location",
                image: customImg1.src,
                imageAlt: "Custom furniture concept for a contemporary living space",
                slug: "signature-living-collection",
            },
            {
                title: "The Tailored Interior",
                category: "Bespoke Furniture",
                location: "Project Location",
                image: customImg2.src,
                imageAlt: "Bespoke furniture integrated into a modern interior",
                slug: "tailored-interior",
            },
        ],

        gallery: [
            {
                image: customImg1.src,
                imageAlt: "Custom-designed furniture in a living space",
                orientation: "landscape",
            },
            {
                image: customImg2.src,
                imageAlt: "Bespoke furniture design details",
                orientation: "portrait",
            },
        ],

        process: [
            {
                step: "01",
                title: "Consultation & Requirements",
                description:
                    "We discuss your ideas, intended use, preferred style, available space, budget, and any functional requirements.",
            },
            {
                step: "02",
                title: "Concept & Design",
                description:
                    "We explore furniture concepts, dimensions, proportions, materials, finishes, and design details suited to your space.",
            },
            {
                step: "03",
                title: "Design Approval & Production Planning",
                description:
                    "We finalize the agreed design specifications, material selections, and production details before moving forward.",
            },
            {
                step: "04",
                title: "Crafting & Delivery",
                description:
                    "The approved furniture is produced according to the agreed specifications, with delivery and installation arrangements confirmed for your project.",
            },
        ],

        benefits: [
            {
                title: "Designed Around Your Space",
                description:
                    "Furniture dimensions and proportions can be tailored to your layout instead of relying entirely on standard sizes.",
            },
            {
                title: "Personalized Style",
                description:
                    "Choose design details, materials, finishes, and colors that complement your existing interior and personal preferences.",
            },
            {
                title: "Functional by Design",
                description:
                    "Every piece can be planned around its intended use, storage requirements, available space, and everyday routines.",
            },
            {
                title: "Material & Finish Choices",
                description:
                    "Explore suitable materials and finishes based on your design goals, maintenance preferences, and budget.",
            },
            {
                title: "A Cohesive Interior",
                description:
                    "Custom furniture can be coordinated with your wider interior design to create a more unified look and feel.",
            },
        ],

        testimonials: [
            {
                name: "Client Name",
                role: "Residential Client",
                quote:
                    "The custom furniture concept helped us make better use of our available space while keeping the design consistent with our interior.",
                rating: 5,
            },
            {
                name: "Client Name",
                role: "Furniture Client",
                quote:
                    "Being able to discuss the dimensions, materials, and details gave us a clearer idea of how the finished piece would fit our needs.",
                rating: 5,
            },
        ],

        faqs: [
            {
                question: "What types of custom furniture can you design?",
                answer:
                    "Depending on your requirements, we can develop concepts for sofas, tables, beds, wardrobes, shelving, cabinets, office furniture, and other bespoke pieces.",
            },
            {
                question: "Can furniture be designed for a small space?",
                answer:
                    "Yes. Custom dimensions and carefully considered layouts can help furniture fit compact rooms, unusual layouts, and specific storage needs.",
            },
            {
                question: "Can I choose the materials and finishes?",
                answer:
                    "Material and finish options can be discussed during design development, considering your preferred appearance, intended use, maintenance requirements, and budget.",
            },
            {
                question: "Can you match furniture to my existing interior?",
                answer:
                    "Yes. We can use your existing furniture, color palette, finishes, and interior references to guide the design direction.",
            },
            {
                question: "How long does custom furniture take to complete?",
                answer:
                    "Production timelines depend on the design complexity, materials, approval process, manufacturing requirements, and delivery arrangements. We confirm an estimated timeline once the scope is established.",
            },
            {
                question: "How much does custom furniture cost?",
                answer:
                    "Pricing depends on the dimensions, design complexity, materials, finishes, hardware, and production requirements. We can discuss your budget before finalizing the specifications.",
            },
        ],

        cardImage: serviceImg4.src,

        images: {
            tall: customImg1.src,
            wide: customImg2.src,
        },

        cta: {
            title: "Let's Create Furniture That Fits You",
            description:
                "Have an idea for a statement piece, a better storage solution, or furniture made specifically for your space? Let's bring your concept to life.",
            buttonText: "Discuss Custom Furniture",
            buttonLink: "/contact",
        },

        relatedServices: [
            "residential-design",
            "commercial-design",
            "renovation",
        ],
    },
];