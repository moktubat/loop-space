export type ImageConfig = {
    src: string;
    alt: string;
    width: string;
    aspectRatio: string;
    position: { top?: string; bottom?: string; left?: string; right?: string; transform?: string };
    parallax: number;
};

export type TimelineEntry = {
    id: string;
    year: string;
    images: ImageConfig[];
    title: string;
    desc: string;
    contentPosition: { top?: string; bottom?: string; left?: string; right?: string; transform?: string };
};

export const TIMELINE_ENTRIES: TimelineEntry[] = [
    {
        id: 'entry-2025',
        year: '2025',
        title: 'The Founding <br /> Journey of Loop Space',
        desc: 'Loop Space was established with a clear vision to create functional, stylish, and timeless interiors that elevate everyday living experiences and bring unique design concepts to life.',
        contentPosition: { bottom: '25%', right: '80px' },
        images: [
            {
                position: { top: '0', left: '0' },
                width: '35vw',
                aspectRatio: '16/9',
                src: '/portrait1.jpg',
                alt: 'Image 1',
                parallax: 35,
            },
            {
                position: { bottom: '0', left: '10%' },
                width: '215.625px',
                aspectRatio: '1/1',
                src: '/square1.jpg',
                alt: 'Image 2',
                parallax: 25,
            },
            {
                position: { top: '0', right: '0' },
                width: '215.625px',
                aspectRatio: '3/4',
                src: '/logo1.png',
                alt: 'Image 3',
                parallax: 10,
            }
        ],
    },
    {
        id: 'entry-2024',
        year: '2024',
        title: 'Expanding <br /> Our Design Vision',
        desc: 'In 2024, we continued to push the boundaries of interior design, introducing innovative solutions and expanding our portfolio with bold new projects.',
        contentPosition: { bottom: '0', left: '50%', transform: 'translateX(-50%)' },
        images: [
            {
                position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
                width: '35vw',
                aspectRatio: '16/9',
                src: '/portrait2.jpg',
                alt: 'Image 1',
                parallax: 35,
            },
            {
                position: { top: '0', right: '0' },
                width: '215.625px',
                aspectRatio: '1/1',
                src: '/square2.jpg',
                alt: 'Image 2',
                parallax: 25,
            },
            {
                position: { top: '25%', left: '0' },
                width: '215.625px',
                aspectRatio: '3/4',
                src: '/logo2.png',
                alt: 'Image 3',
                parallax: 10,
            }
        ]
    },
    {
        id: 'entry-2023',
        year: '2023',
        title: 'Building <br /> Strong Foundations',
        desc: 'Our journey began with a commitment to excellence and a passion for transforming spaces into experiences that resonate with our clients.',
        contentPosition: { bottom: '25%', right: '80px' },
        images: [
            {
                position: { top: '0', left: '0' },
                width: '35vw',
                aspectRatio: '16/9',
                src: '/portrait3.jpg',
                alt: 'Image 1',
                parallax: 35,
            },
            {
                position: { bottom: '0', left: '10%' },
                width: '215.625px',
                aspectRatio: '1/1',
                src: '/square3.jpg',
                alt: 'Image 2',
                parallax: 25,
            },
            {
                position: { top: '0', right: '0' },
                width: '215.625px',
                aspectRatio: '3/4',
                src: '/logo3.png',
                alt: 'Image 3',
                parallax: 10,
            }
        ]
    }
]

export const getYears = TIMELINE_ENTRIES.map(entry => entry.year);