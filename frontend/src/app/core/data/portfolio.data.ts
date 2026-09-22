import {
    Profile,
    Experience,
    Education,
    Skills,
    ServiceItem,
    Project,
    Certification,
    Review,
    JourneyEntry,
    Thought,
    Philosophy,
    PortfolioMeta,
    NavItem,
} from '../models/portfolio.model';

export const PROFILE: Profile = {
    name: 'Annu Mudgal',
    headline: 'Software Engineer | Web Developer | Innovator',
    shortRole: 'Software Engineer',
    alternateRole: 'Web Developer',
    currentTitle: 'Junior Software Engineer',
    profileImage: 'https://annu-portfolio.onrender.com/images/IMG_2694.png',
    resume: 'https://annu-portfolio.onrender.com/assets/Annu_Resume.pdf',
    introduction:
        'I engineer scalable, user-centric web solutions with robust code and cutting-edge technologies. Let’s drive impactful innovation.',
    dynamicRoles: ['Developer', 'Innovator'],
    portfolioUrl: 'https://annu-portfolio.onrender.com',
    email: 'Akshitmudgal001@gmail.com',
    phone: '+91-8506850066',
    social: {
        linkedin: 'https://www.linkedin.com/in/annumudgal001/',
        github: 'https://github.com/annumudgal001',
        twitter: 'https://twitter.com/annumudgal001',
        instagram: 'https://www.instagram.com/annu_mudgal/',
    },
};

export const NAV_ITEMS: NavItem[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Projects', route: '/projects' },
    { name: 'Skills', route: '/skills' },
    { name: 'Services', route: '/services' },
    { name: 'Journey', route: '/journey' },
    { name: 'Thoughts', route: '/thoughts' },
    { name: 'Reviews', route: '/reviews' },
    { name: 'Contact', route: '/contact' },
];

export const EXPERIENCE: Experience[] = [
    {
        company: 'Infosys',
        position: 'Software Developer Intern',
        duration: 'July 2025 – Present',
        location: 'Chandigarh',
        industry: 'Software Development',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
        description:
            'In the process of learning and streamlining scalable full-stack applications, delivering client-focused solutions with optimized APIs.',
    },
    {
        company: 'Byld Group',
        position: 'Apprentice Web Developer (MERN)',
        duration: 'Jan 2025 – July 2025',
        location: 'Gurugram',
        industry: 'Software Development',
        logo: 'https://annu-portfolio.onrender.com/images/Byld.png',
        description:
            'Streamlining scalable MERN stack applications, delivering client-focused solutions with optimized APIs.',
    },
    {
        company: 'K.R. Mangalam University',
        position: 'AI/ML Intern',
        duration: 'July 2024 – Aug 2024',
        location: 'Gurugram',
        industry: 'AI/ML',
        logo: 'https://annu-portfolio.onrender.com/images/KRMU.jpg',
        description:
            'Engineered innovative ML models with Python and TensorFlow, advancing research-driven AI solutions.',
    },
];

export const EDUCATION: Education[] = [
    {
        institution: 'K.R. Mangalam University',
        degree: 'Master of Computer Applications',
        duration: '2023 – Present',
        expectedCompletion: '2025',
        location: 'Gurugram',
        score: { value: 8.2, unit: 'CGPA', description: '8.20 CGPA (Till Now)' },
        logo: 'https://annu-portfolio.onrender.com/images/KRMU.jpg',
        coursework: ['Scalable Web Architectures', 'AI-Driven Solutions', 'Cloud Computing'],
        description: 'Mastering advanced full-stack and AI technologies for impactful software solutions.',
    },
    {
        institution: 'MDU',
        fullInstitutionName: 'Maharshi Dayanand University',
        degree: 'Bachelor of Computer Applications',
        duration: '2020 – Aug 2023',
        location: 'Rohtak',
        score: { value: 70, unit: 'percentage', equivalent: '~7.0 CGPA' },
        logo: 'https://annu-portfolio.onrender.com/images/MDU.jpg',
        coursework: ['Modern Web Technologies', 'Data Optimization'],
        description: 'Developed a robust foundation in programming and web development.',
    },
];

export const SKILLS: Skills = {
    frontend: [
        { name: 'HTML5', level: 90, description: 'Proficient in semantic HTML5 to create structured, accessible web pages.' },
        { name: 'CSS3', level: 90, description: 'Expert in crafting responsive layouts using Flexbox, Grid, and CSS Variables.' },
        { name: 'Bootstrap', level: 90, description: "Skilled in building responsive and fast-loading websites with Bootstrap's grid system and components." },
        { name: 'Tailwind CSS', level: 90, description: 'Experience with Tailwind CSS for utility-first design, creating flexible and efficient UIs.' },
        { name: 'React', level: 80, description: 'Building dynamic, single-page applications using React, with state management through Redux and Context API.' },
        { name: 'Material UI', level: 80, description: 'Building responsive, visually appealing user interfaces using Material UI, focusing on design consistency and ease of use.' },
    ],
    backend: [
        { name: 'Node.js', level: 75, description: 'Building scalable and efficient server-side applications using Node.js.' },
        { name: 'Express.js', level: 75, description: 'Building RESTful APIs and server-side logic using Express.js.' },
        { name: 'MongoDB', level: 60, description: 'NoSQL database expertise with Mongoose ODM, CRUD operations, and data modeling.' },
    ],
    fullStack: [
        { name: 'Databases', level: 50, technologies: ['MySQL', 'MongoDB', 'PostgreSQL'], description: 'Experience with both SQL and NoSQL databases.' },
        { name: 'Cloud Services', level: 50, technologies: ['AWS', 'Heroku', 'DigitalOcean'], description: 'Deploying applications on cloud platforms.' },
    ],
    versionControl: [
        { name: 'Git & GitHub', level: 70, description: 'Using Git for version control and GitHub for collaboration on open-source projects.' },
    ],
    testing: [
        { name: 'Unit & Integration Testing', level: 75, technologies: ['Jest', 'Mocha'], description: 'Writing test cases using frameworks like Jest and Mocha for reliable, maintainable applications.' },
    ],
    programmingLanguages: ['JavaScript', 'Python', 'C++', 'Java'],
    tools: ['Git', 'GitHub', 'NPM', 'MongoDB', 'Linux'],
    coreSkills: [
        { name: 'Analytical Thinking', level: 80, description: 'Ability to analyze complex problems and break them into smaller, solvable parts.' },
        { name: 'Problem Solving', level: 85, description: 'Finding creative solutions to solve technical challenges efficiently.' },
        { name: 'Team Collaboration', level: 90, description: 'Excelling in collaborative environments, ensuring effective communication in teams.' },
    ],
};

export const SERVICES: ServiceItem[] = [
    {
        name: 'Freelancing',
        level: 100,
        icon: 'laptop-code',
        description:
            'Offering web development services for dynamic, responsive websites using modern technologies like React, Node.js, and Tailwind CSS.',
    },
    {
        name: 'Team Collaboration',
        level: 90,
        icon: 'users',
        description:
            'Collaborating with teams to build scalable and maintainable web applications, focusing on Agile methodologies and version control.',
    },
    {
        name: 'Full-Stack Development',
        level: 75,
        icon: 'cogs',
        description:
            'Offering both frontend and backend development services, from building intuitive UIs with React to developing REST APIs with Node.js and Express.',
    },
    {
        name: 'SEO Optimization',
        level: 80,
        icon: 'search',
        description:
            'Enhancing website performance and visibility with SEO best practices, including keyword research, on-page optimization, and technical SEO.',
    },
    {
        name: 'Testing & Quality Assurance',
        level: 85,
        icon: 'check-circle',
        description:
            'Ensuring the quality of your product with manual testing practices, covering functional, performance and security testing.',
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'basic-portfolio',
        name: 'Basic Portfolio',
        image: 'https://annu-portfolio.onrender.com/images/basicportfolio.png',
        description:
            'An advanced personal portfolio using HTML, CSS, JavaScript, Node.js, Express.js, Mongoose and backend logic.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
        liveDemo: 'https://annu-portfolio.onrender.com',
        sourceCode: 'https://github.com/annumudgal001/basicportfolio',
        status: 'completed',
        problem: 'Needed a full-stack portfolio with real backend capabilities.',
        solution: 'Built a Node/Express + MongoDB backend with a clean static frontend.',
        architecture: 'Express REST API + Mongoose models + static frontend served from the same origin.',
        features: ['Dynamic content', 'Contact form', 'Project showcase'],
        challenges: ['Deployment on Render', 'Image optimization'],
        lessons: ['Separation of concerns and environment configuration matter early.'],
    },
    {
        id: 'worldatlas-annu',
        name: 'WorldAtlas-Annu',
        image: 'https://annu-portfolio.onrender.com/images/WorldAtlas-annu.png',
        description: 'Interactive world atlas built with React and Vite, featuring a modern UI for exploring geographical data.',
        technologies: ['React', 'Vite'],
        liveDemo: 'https://worldatlas-annu.netlify.app/',
        sourceCode: 'https://github.com/annumudgal001/WorldAtlas-Annu',
        status: 'completed',
    },
    {
        id: 'annu-portfolio-react',
        name: 'Annu-Portfolio-React',
        image: 'https://annu-portfolio.onrender.com/images/Annu-Portfolio-React.png',
        description: 'Dynamic single-page portfolio showcasing skills and projects, built with React for a responsive experience.',
        technologies: ['React'],
        liveDemo: 'https://akshit001.netlify.app/',
        sourceCode: 'https://github.com/annumudgal001/ReactPortfolioSPA',
        status: 'completed',
    },
    {
        id: 'blogapi',
        name: 'BlogAPI',
        image: 'https://annu-portfolio.onrender.com/images/blogapi.png',
        description: 'RESTful API using Node.js, Express and MongoDB.',
        technologies: ['Node.js', 'Express.js', 'MongoDB'],
        liveDemo: 'https://annu-blogapi.onrender.com/',
        sourceCode: 'https://github.com/annumudgal001/BlogAPI',
        status: 'completed',
    },
    {
        id: 'livetrack',
        name: 'LiveTrack',
        image: 'https://raw.githubusercontent.com/annumudgal001/LiveTrack/refs/heads/master/public/images/map.png',
        description: 'Real-time tracking application using Node.js and WebSocket.',
        technologies: ['Node.js', 'WebSocket'],
        liveDemo: null,
        sourceCode: 'https://github.com/annumudgal001/LiveTrack',
        status: 'completed',
    },
    {
        id: 'neurauser',
        name: 'NeuraUser',
        image: 'https://annu-portfolio.onrender.com/images/neurauser.png',
        description: 'User management application with create, view, edit and delete functionality using Node.js, Express.js and MongoDB.',
        technologies: ['Node.js', 'Express.js', 'MongoDB'],
        liveDemo: null,
        sourceCode: 'https://github.com/annumudgal001/NeuraUser',
        status: 'completed',
    },
    {
        id: 'nova-smart-solution',
        name: 'NOVA-Smart-Solution',
        image: 'https://annu-portfolio.onrender.com/images/smart-aid.png',
        description: 'Python-powered smart desktop support virtual assistant.',
        technologies: ['Python'],
        liveDemo: null,
        sourceCode: 'https://github.com/annumudgal001/NOVA-Smart-Solution',
        status: 'completed',
    },
];

export const CERTIFICATIONS: Certification[] = [
    {
        name: 'Data Structures and Algorithms',
        provider: 'Infosys Springboard',
        image: 'https://annu-portfolio.onrender.com/images/DSA-1.png',
        credential: 'https://annu-portfolio.onrender.com/images/DSA-1.png',
    },
    {
        name: 'Database Management System - Part 2',
        provider: 'Infosys Springboard',
        image: 'https://annu-portfolio.onrender.com/images/DBMS-2.png',
        credential: 'https://annu-portfolio.onrender.com/images/DBMS-2.png',
    },
    {
        name: 'Programming using Java',
        provider: 'Infosys Springboard',
        image: 'https://annu-portfolio.onrender.com/images/JAVA.png',
        credential: 'https://annu-portfolio.onrender.com/images/JAVA.png',
    },
    {
        name: 'Object Oriented Programming - Python',
        provider: 'Infosys Springboard',
        image: 'https://annu-portfolio.onrender.com/images/OOPS%20in%20Python.png',
        credential: 'https://annu-portfolio.onrender.com/images/OOPS%20in%20Python.png',
    },
    {
        name: 'Database Management System - Part 1',
        provider: 'Infosys Springboard',
        image: 'https://annu-portfolio.onrender.com/images/DBMS-1.png',
        credential: 'https://annu-portfolio.onrender.com/images/DBMS-1.png',
    },
];

export const REVIEWS: Review[] = [
    {
        id: '1',
        name: 'Asheesh Kumar',
        role: 'Reporting Manager',
        organization: 'Byld Group',
        avatar: 'https://annu-portfolio.onrender.com/images/avatar.png',
        rating: 5,
        testimonial:
            'Annu’s expertise in MERN development at Byld Group is exceptional. He streamlines workflows, delivering scalable, high-quality solutions.',
        date: '2025-06',
    },
    {
        id: '2',
        name: 'Rupesh Kumar Tipu',
        role: 'Research Faculty',
        organization: 'KRMU',
        avatar: 'https://annu-portfolio.onrender.com/images/avatar.png',
        rating: 5,
        testimonial:
            'Annu demonstrated technical excellence during his AI/ML internship at KRMU, contributing innovative models to our research.',
        date: '2024-08',
    },
    {
        id: '3',
        name: 'Keshav Sharma',
        role: 'Colleague & Hackathon Teammate',
        organization: null,
        avatar: 'https://annu-portfolio.onrender.com/images/avatar.png',
        rating: 5,
        testimonial:
            'Annu’s rapid learning and advanced skills shone in Hack KRMU 2.0. His Python-powered virtual assistant secured us a top 50 spot.',
        date: '2024-10',
    },
];

export const JOURNEY: JourneyEntry[] = [
    ...EXPERIENCE.map((e, i) => ({
        id: `exp-${i}`,
        type: 'experience' as const,
        title: e.position,
        subtitle: e.company,
        period: e.duration,
        location: e.location,
        description: e.description,
        logo: e.logo,
    })),
    ...EDUCATION.map((e, i) => ({
        id: `edu-${i}`,
        type: 'education' as const,
        title: e.degree,
        subtitle: e.institution,
        period: e.duration,
        location: e.location,
        description: e.description,
        logo: e.logo,
    })),
];

export const THOUGHTS: Thought[] = [
    {
        id: 'always-building',
        title: 'Always Building, Always Growing',
        excerpt: 'A developer is never done—every line of code is a step toward something greater.',
        date: '2025-08-12',
        tags: ['mindset', 'career'],
        readTime: '3 min',
    },
    {
        id: 'learning-never-stops',
        title: 'Learning Never Stops',
        excerpt: 'Every challenge is a chance to grow. The best engineers treat learning as a continuous practice.',
        date: '2025-07-01',
        tags: ['learning', 'growth'],
        readTime: '4 min',
    },
];

export const PHILOSOPHY: Philosophy = {
    building: 'Always Building, Always Growing',
    developerQuote: 'A developer is never done—every line of code is a step toward something greater.',
    learning: 'Learning never stops—every challenge is a chance to grow.',
    closingMessage:
        'Thank you for exploring my portfolio! I’m passionate about crafting innovative solutions and eager to collaborate on transformative projects. Let’s connect!',
};

export const PORTFOLIO_META: PortfolioMeta = {
    copyright: '© 2025 Annu Mudgal. All Rights Reserved.',
    designedAndDevelopedBy: 'Annu Mudgal',
    github: 'https://github.com/annumudgal001',
};