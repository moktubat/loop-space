export interface CareerJob {
    id: string;
    slug: string;
    title: string;
    type: string;
    workplace: string;
    salary: string;
    salaryPeriod: string;
    deadline: string;
    experience: string;
    location: string;

    hero: {
        description: string;
    };

    overview: {
        heading: string;
        description: string[];
    };

    responsibilities: {
        title: string;
        description: string;
    }[];

    requirements: {
        title: string;
        description: string;
    }[];

    benefits: {
        title: string;
        description: string;
    }[];

    faqs: {
        question: string;
        answer: string;
    }[];

    cta: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    };

    relatedJobs: string[];
}

export const careers: CareerJob[] = [
    {
        id: "1",
        slug: "interior-designer",
        title: "Interior Designer",
        type: "Full Time",
        workplace: "Onsite",
        salary: "$700 - $1000",
        salaryPeriod: "/Month",
        deadline: "21 Nov 2025",
        experience: "2+ Years",
        location: "Loop Space Studio",

        hero: {
            description:
                "Join Loop Space as an Interior Designer and craft thoughtful, functional spaces that reflect our clients' vision, lifestyle, and brand identity.",
        },

        overview: {
            heading: "Design Spaces That Tell Stories",
            description: [
                "As an Interior Designer at Loop Space, you'll collaborate closely with our creative team to conceptualize and deliver spaces that balance aesthetics, function, and sustainability.",
                "We're looking for a designer who thinks in materials, light, and proportion — someone who can translate client needs into thoughtful spatial solutions, from initial sketches to final installation.",
            ],
        },

        responsibilities: [
            {
                title: "Concept Development",
                description:
                    "Translate client briefs into design concepts, mood boards, and visual narratives that align with lifestyle and brand goals.",
            },
            {
                title: "Space Planning",
                description:
                    "Develop efficient layouts, furniture plans, and circulation flows for residential and commercial interiors.",
            },
            {
                title: "Material & Finish Selection",
                description:
                    "Curate palettes of materials, finishes, lighting, and textures that support the overall design direction.",
            },
            {
                title: "3D Visualization",
                description:
                    "Produce 3D renderings and visual mockups to communicate design intent to clients and stakeholders.",
            },
            {
                title: "Technical Documentation",
                description:
                    "Prepare drawings, schedules, and design documentation for execution and contractor coordination.",
            },
            {
                title: "Project Coordination",
                description:
                    "Work with architects, contractors, and vendors to ensure design intent is realized on site.",
            },
        ],

        requirements: [
            {
                title: "Education",
                description:
                    "Bachelor's degree in Interior Design, Architecture, or a related design discipline.",
            },
            {
                title: "Experience",
                description:
                    "2+ years of professional experience in interior design with a portfolio of completed projects.",
            },
            {
                title: "Software Skills",
                description:
                    "Proficiency in AutoCAD, SketchUp, 3ds Max, V-Ray, and Adobe Creative Suite.",
            },
            {
                title: "Design Knowledge",
                description:
                    "Strong understanding of materials, lighting, color theory, and spatial composition.",
            },
            {
                title: "Communication",
                description:
                    "Excellent presentation and client-facing communication skills in English.",
            },
            {
                title: "Attention to Detail",
                description:
                    "A meticulous eye for proportion, finish quality, and design coherence.",
            },
        ],

        benefits: [
            {
                title: "Flexible Hours",
                description:
                    "We support a balanced work-life rhythm with flexible scheduling options.",
            },
            {
                title: "Annual Bonus",
                description:
                    "Performance-based annual bonus tied to project and team contributions.",
            },
            {
                title: "Health Insurance",
                description:
                    "Comprehensive medical coverage for you and your dependents.",
            },
            {
                title: "Learning Budget",
                description:
                    "Annual budget for courses, workshops, and design industry events.",
            },
            {
                title: "Creative Studio",
                description:
                    "Work in a beautifully designed studio alongside passionate creatives.",
            },
            {
                title: "Project Perks",
                description:
                    "Access to industry partnerships, material libraries, and trade discounts.",
            },
        ],

        faqs: [
            {
                question: "What does an Interior Designer do at Loop Space?",
                answer:
                    "Our interior designers lead projects from concept through execution — developing layouts, selecting materials, producing 3D visuals, and coordinating with contractors on site.",
            },
            {
                question: "Is this a remote or onsite role?",
                answer:
                    "This is an onsite role based at our design studio, as it involves frequent collaboration with the team, material samples, and client presentations.",
            },
            {
                question: "Do I need a portfolio to apply?",
                answer:
                    "Yes. A portfolio showcasing residential, commercial, or renovation projects (including sketches, 3D renders, and final photos) is required.",
            },
            {
                question: "What software should I be proficient in?",
                answer:
                    "AutoCAD, SketchUp, 3ds Max with V-Ray, and Adobe Creative Suite. Knowledge of Revit or Rhino is a plus.",
            },
            {
                question: "What is the career growth path?",
                answer:
                    "Interior Designers can grow into Senior Designer, Project Lead, or Studio Director roles depending on experience, leadership, and performance.",
            },
        ],

        cta: {
            title: "Ready to Design the Future With Us?",
            description:
                "Send us your portfolio, CV, and a few words about why you'd love to join Loop Space.",
            buttonText: "Apply Now",
            buttonLink: "/contact",
        },

        relatedJobs: ["project-manager", "3d-visualizer"],
    },

    {
        id: "2",
        slug: "project-manager",
        title: "Project Manager",
        type: "Full Time",
        workplace: "Onsite",
        salary: "$1000 - $1500",
        salaryPeriod: "/Month",
        deadline: "21 Nov 2025",
        experience: "3+ Years",
        location: "Loop Space Studio",

        hero: {
            description:
                "Lead interior design projects from kickoff to handover, ensuring quality, timeline, and budget align with client expectations.",
        },

        overview: {
            heading: "Lead Projects That Shape Spaces",
            description: [
                "As a Project Manager at Loop Space, you'll oversee the execution of residential and commercial interior projects, coordinating between designers, clients, contractors, and vendors.",
                "We're looking for an organized, detail-driven professional who thrives on bringing creative visions to life — on time, on budget, and beyond expectations.",
            ],
        },

        responsibilities: [
            {
                title: "Project Planning",
                description:
                    "Develop project timelines, milestones, and resource plans in collaboration with the design team.",
            },
            {
                title: "Budget Management",
                description:
                    "Track project budgets, manage vendor quotes, and ensure cost efficiency without compromising quality.",
            },
            {
                title: "Stakeholder Communication",
                description:
                    "Act as the primary point of contact between clients, designers, and contractors throughout the project lifecycle.",
            },
            {
                title: "Site Supervision",
                description:
                    "Conduct site visits, monitor progress, and resolve on-site challenges to keep projects on schedule.",
            },
            {
                title: "Quality Control",
                description:
                    "Review installations, finishes, and design details against approved drawings and specifications.",
            },
            {
                title: "Documentation",
                description:
                    "Maintain project records, change orders, and handover documentation for every completed project.",
            },
        ],

        requirements: [
            {
                title: "Education",
                description:
                    "Bachelor's degree in Interior Design, Architecture, Construction Management, or related field.",
            },
            {
                title: "Experience",
                description:
                    "3+ years of project management experience in interior design, architecture, or construction.",
            },
            {
                title: "Software Skills",
                description:
                    "Familiarity with MS Project, Trello, Notion, and basic AutoCAD or SketchUp for drawing review.",
            },
            {
                title: "Leadership",
                description:
                    "Strong team coordination, conflict resolution, and decision-making skills.",
            },
            {
                title: "Communication",
                description:
                    "Excellent verbal and written communication in English; client-facing experience preferred.",
            },
            {
                title: "Problem-Solving",
                description:
                    "Ability to anticipate risks and proactively resolve project challenges.",
            },
        ],

        benefits: [
            {
                title: "Flexible Hours",
                description:
                    "Balanced work-life rhythm with flexible scheduling when site visits allow.",
            },
            {
                title: "Annual Bonus",
                description:
                    "Performance-based bonus tied to project delivery and client satisfaction.",
            },
            {
                title: "Health Insurance",
                description:
                    "Comprehensive medical coverage for you and your dependents.",
            },
            {
                title: "Learning Budget",
                description:
                    "Annual stipend for project management certifications and industry events.",
            },
            {
                title: "Travel Allowance",
                description:
                    "Reimbursement for site visits, client meetings, and project-related travel.",
            },
            {
                title: "Career Growth",
                description:
                    "Clear path to Senior PM, Operations Lead, or Studio Director roles.",
            },
        ],

        faqs: [
            {
                question: "What types of projects will I manage?",
                answer:
                    "A mix of residential, commercial, and renovation projects ranging from single-room makeovers to full-scale interiors.",
            },
            {
                question: "Do I need design experience?",
                answer:
                    "Yes, a background in interior design or architecture is preferred so you can review drawings and finishes confidently.",
            },
            {
                question: "Is travel required?",
                answer:
                    "Local site visits are part of the role. Long-distance travel is occasional and fully reimbursed.",
            },
            {
                question: "What's the team size I'll work with?",
                answer:
                    "You'll collaborate with designers, 3D visualizers, contractors, and clients on each project.",
            },
            {
                question: "What tools does the team use?",
                answer:
                    "We use Notion for project tracking, Trello for task management, and Slack for communication, alongside AutoCAD and SketchUp.",
            },
        ],

        cta: {
            title: "Lead Projects That Define Spaces",
            description:
                "Tell us about your project management experience and how you'd contribute to Loop Space's growth.",
            buttonText: "Apply Now",
            buttonLink: "/contact",
        },

        relatedJobs: ["interior-designer", "3d-visualizer"],
    },

    {
        id: "3",
        slug: "3d-visualizer",
        title: "3D Visualizer",
        type: "Full Time",
        workplace: "Onsite",
        salary: "$600 - $800",
        salaryPeriod: "/Month",
        deadline: "21 Nov 2025",
        experience: "1+ Years",
        location: "Loop Space Studio",

        hero: {
            description:
                "Bring interior concepts to life through photorealistic 3D renderings that communicate design intent with clarity and emotion.",
        },

        overview: {
            heading: "Render the Spaces We Dream Of",
            description: [
                "As a 3D Visualizer at Loop Space, you'll transform design concepts into stunning photorealistic visuals that help clients experience spaces before they're built.",
                "We're looking for someone with a strong eye for light, material, and composition — a storyteller who can render mood, scale, and atmosphere with precision.",
            ],
        },

        responsibilities: [
            {
                title: "3D Modeling",
                description:
                    "Build accurate 3D models of interior spaces based on 2D drawings, sketches, and design references.",
            },
            {
                title: "Lighting & Materials",
                description:
                    "Set up realistic lighting scenarios and apply materials that reflect the intended mood and finish.",
            },
            {
                title: "Rendering",
                description:
                    "Produce high-resolution still renders and basic animations for client presentations.",
            },
            {
                title: "Post-Production",
                description:
                    "Enhance renders in Photoshop, adding context, people, and atmospheric details for final delivery.",
            },
            {
                title: "Asset Library",
                description:
                    "Maintain and expand the studio's library of 3D furniture, materials, and lighting presets.",
            },
            {
                title: "Collaboration",
                description:
                    "Work closely with designers to ensure renders accurately reflect the design direction.",
            },
        ],

        requirements: [
            {
                title: "Education",
                description:
                    "Degree or diploma in 3D Design, Animation, Interior Design, or related field.",
            },
            {
                title: "Experience",
                description:
                    "1+ year of professional 3D visualization experience, ideally in interior design or architecture.",
            },
            {
                title: "Software Skills",
                description:
                    "Expert in 3ds Max, V-Ray/Corona, SketchUp, and Adobe Photoshop.",
            },
            {
                title: "Design Eye",
                description:
                    "Strong sense of composition, lighting, color, and material realism.",
            },
            {
                title: "Portfolio",
                description:
                    "A portfolio showcasing photorealistic interior renders with attention to detail.",
            },
            {
                title: "Time Management",
                description:
                    "Ability to deliver high-quality renders within project timelines.",
            },
        ],

        benefits: [
            {
                title: "Flexible Hours",
                description:
                    "Flexible scheduling with core collaboration hours at the studio.",
            },
            {
                title: "Annual Bonus",
                description:
                    "Performance-based bonus tied to render quality and project delivery.",
            },
            {
                title: "Health Insurance",
                description:
                    "Comprehensive medical coverage for you and your dependents.",
            },
            {
                title: "Software Perks",
                description:
                    "Access to premium plugins, render farms, and asset libraries.",
            },
            {
                title: "Learning Budget",
                description:
                    "Budget for courses on new rendering engines, lighting, and post-production.",
            },
            {
                title: "Creative Studio",
                description:
                    "Work in a beautifully designed studio alongside passionate creatives.",
            },
        ],

        faqs: [
            {
                question: "What render engine do you use?",
                answer:
                    "We primarily use V-Ray with 3ds Max. Familiarity with Corona Renderer is a plus.",
            },
            {
                question: "Do I need interior design knowledge?",
                answer:
                    "Not strictly, but an understanding of interior materials, lighting, and spatial composition will help you create more accurate renders.",
            },
            {
                question: "What kind of projects will I work on?",
                answer:
                    "Residential, commercial, and hospitality interiors — from a single living room to full office spaces.",
            },
            {
                question: "Will I create animations too?",
                answer:
                    "Primarily still renders, but occasional walkthrough animations for key projects.",
            },
            {
                question: "Is this role remote-friendly?",
                answer:
                    "This is an onsite role to enable close collaboration with designers and access to studio hardware.",
            },
        ],

        cta: {
            title: "Render the Future of Interior Design",
            description:
                "Share your portfolio of interior renders and tell us about the visual stories you love to create.",
            buttonText: "Apply Now",
            buttonLink: "/contact",
        },

        relatedJobs: ["interior-designer", "project-manager"],
    },
];