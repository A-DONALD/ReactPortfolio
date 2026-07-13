// Link of NavBar
export const navLinks = [
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Education',
        hash: '#formation',
    },
    {
        name: 'Certifications',
        hash: '#certifications',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
];

// Hero section bio
export const bio = "Computer and network engineer, I'm driven by the desire to take on new challenges and broaden my skills in computer science. I want to join a stimulating, welcoming company where I can keep learning, get fully involved, and grow on a personal level.";

// Data of technical skills, grouped by category
export const technicalSkills = [
    {
        category: 'Programming Languages',
        items: ['Python (pandas, numpy…)', 'R', 'Java', 'C#', '.NET', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Selenium', 'SQL', 'T-SQL', 'PL/SQL', 'GraphQL'],
    },
    {
        category: 'Practical knowledge',
        items: ['AI', 'Machine Learning', 'Deep Learning', 'RAG', 'CI/CD', 'Test automation'],
    },
    {
        category: 'Tools',
        items: ['Git', 'Spark', 'Kafka', 'Hadoop', 'TensorFlow', 'Keras', 'Okta', 'Auth0', 'Flask', 'Dataiku', 'Power BI', 'Postman', 'Jira', 'Confluence', 'Docker', 'Terraform'],
    },
];

// Data of personal skills / soft skills section
export const softSkills = [
    {
        title: 'Dynamic'
    },
    {
        title: 'Analytical and synthesis skills'
    },
    {
        title: 'Curiosity'
    },
    {
        title: 'Teamwork'
    },
    {
        title: 'Quick adaptability'
    },
    {
        title: 'Self-reliant'
    },
];

// Languages
export const languages = [
    {
        name: 'French',
        level: 'Native language',
    },
    {
        name: 'English',
        level: 'Bilingual',
    },
    {
        name: 'German',
        level: 'Basic knowledge',
    },
];

// Data of professional experience section
export const experiences = [
    {
        role: 'CIAM Developer',
        company: 'Lyvoc',
        location: 'Paris, FRANCE',
        period: 'February 2026 - Present',
        details: [
            "Preparing project workshops (architecture, configuration & security, application integration and user migration) for French and international clients",
            "Configuring Auth0 tenants and implementing Terraform to automate deployments",
            "Building a test automation tool",
            "Implementing Okta workflows",
        ],
    },
    {
        role: 'DevOps Intern',
        company: 'Alcuin Software',
        location: 'Angers, FRANCE',
        period: 'April 2025 - September 2025',
        details: [
            "Designed and deployed five new client workspaces by creating menus and records in the ERP",
            "Improved the automated testing framework to extend functional coverage to new modules",
            "Monitored continuous integration (CI) and fixed anomalies detected during test campaigns",
        ],
    },
    {
        role: 'RAG Developer Intern',
        company: 'Ravensburg-Weingarten University of Applied Sciences',
        location: 'Ravensburg, GERMANY',
        period: 'February 2025 - March 2025',
        details: [
            "LLMS: Current Research & Practical Implementation",
            "Read the most cited papers and document myself about Large Language Models (LLMS) and RAG (retrieval augmented generation)",
            "Use LangChain as a framework for building AI Agents with JavaScript",
        ],
    },
    {
        role: 'QA Tester Intern',
        company: 'Alcuin Software',
        location: 'Angers, FRANCE',
        period: 'June 2024 - August 2024',
        details: [
            "Wrote and automated around thirty functional test scenarios using the internal framework (based on Selenium)",
            "Developed and integrated 50 new test features to extend the framework's coverage",
            "Worked closely with the DevOps team to improve software quality and delivery speed",
        ],
    },
    {
        role: 'Corporate Project',
        company: 'École Supérieure des Agricultures',
        location: 'Angers, FRANCE',
        period: 'January 2024 - April 2024',
        details: [
            "Managed cyber risk within ESA's IT department",
            "Wrote the Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP), and formalized the crisis management unit",
        ],
    },
];

// Data of projects section
export const projects = [
    {
        title: "Salaries Predicition",
        imageSrc: '/images/projects/machine-learning-blog.jpg',
        details: 'A jupyter notebook of ML prediction for data analysis based on US kaggle dataset',
        projectLink: 'https://github.com/A-DONALD/SalariesPrediction',
    },
    {
        title: 'iOS Backup Extractor',
        imageSrc: '/images/projects/ios.png',
        details: 'A python implementation of an extractor of iOS backup datas (contacts, photos, etc.)',
        projectLink: 'https://github.com/A-DONALD/iBackup-Extractor',
    },
    {
        title: 'AI - Classifier',
        imageSrc: '/images/projects/python.jpg',
        details: 'A text classificator with Machine Learning (Scikit-Learn)',
        projectLink: 'https://github.com/A-DONALD/AI-Classifier',
    },
    {
        title: "Design for Green 2023",
        imageSrc: '/images/projects/d4g.jpg',
        details: 'contest project to create the most energy efficient website for a sustainable future',
        projectLink: 'https://jdac2023.vercel.app',
    },
    {
        title: "Citadelles",
        imageSrc: '/images/projects/citadelles.png',
        details: 'A java implementation of citadelles game without GUI',
        projectLink: 'https://github.com/A-DONALD/Citadelles',
    },
    {
        title: "NodeJS Server",
        imageSrc: '/images/projects/node.png',
        details: 'An Express Node JS Server with mongoDB, RBAC, JWT authentication and refresh token system',
        projectLink: 'https://github.com/A-DONALD/CMRentServer',
    },
    {
        title: "React portfolio",
        imageSrc: '/images/cover2.jpg',
        details: 'A personal portfolio website built with React and Tailwind CSS',
        projectLink: 'https://github.com/A-DONALD/ReactPortfolio',
    },
];

// Data of formation section
export const studies = [
    {
        title: "Engineering Degree in Computer Science and Networks",
        schoolName: 'ESAIP - Ecole d\'ingénieurs',
        period: 'September 2022 - October 2025',
        location: 'Angers, FRANCE',
        imageSrc: '/images/education/esaip.png',
        additionalDetails: 'Front and back-end programming, networks, virtualisation and cybersecurity, databases, data integration & visualization',
    },
    {
        title: 'Erasmus LV2: Computer Science',
        schoolName: 'Hochschule Ravensburg Weingarten (RWU)',
        period: 'September 2024 - February 2025',
        location: 'Weingarten, GERMANY',
        imageSrc: '/images/education/rwu.webp',
        additionalDetails: 'German, English, Deep learning with Python (TensorFlow, Keras), real-time programming (VHDL) and embedded systems (Arduino, Raspberry Pi)',
    },
    {
        title: 'Erasmus LV1: Computer Science and Engineering',
        schoolName: 'Západočeská univerzita v Plzni (ZCU)',
        period: 'February 2023 - May 2023',
        location: 'Pilsen, CZECH REPUBLIC',
        imageSrc: '/images/education/zcu.png',
        additionalDetails: 'English, project management, Python (AI with scikit-learn) and Java programming (Apache Maven, data structure & algorithms, complexity analysis, ...)',
    },
    {
        title: 'MPCSI Preparatory Classes',
        schoolName: 'Institut universitaire de la côte (IUC)',
        period: 'September 2019 - June 2022',
        location: 'Douala, CAMEROON',
        imageSrc: '/images/education/iuc.png',
        additionalDetails: "University preparatory classes (physics, chemistry, mathematics and engineering sciences). Introduction to OOP programming, basic electronics tools, and 3D modeling (AutoCAD, SolidWorks)",
    },
];

// Data of certification section
export const certificates = [
    {
        title: 'Auth0 Certified Developer',
        imageSrc: '/images/certifs/auth0-certified-developer.png',
        organization: 'Okta / Auth0',
        date: 'May 2026',
        url: 'https://www.credly.com/badges/1bf3d040-f6e0-4c0c-a706-2e1895e9d9cd/public_url',
    },
    {
        title: 'IBM Data Engineering Essentials',
        imageSrc: '/images/certifs/data-engineering-essentials.png',
        organization: 'IBM',
        date: 'November 2025',
        url: 'https://www.credly.com/badges/14c40f63-d878-4b36-8faa-c453c8a4c45b/public_url',
    },
    {
        title: 'Google AI Essentials',
        imageSrc: '/images/certifs/gcc-aie.png',
        organization: 'Google / Coursera',
        date: 'November 2025',
        url: 'https://www.coursera.org/account/accomplishments/verify/UPHXGBIU78CE',
    },
    {
        title: 'TOEIC - level B2 (900/990)',
        imageSrc: '/images/certifs/toeic.png',
        organization: 'ETS Global',
        date: 'March 2025',
        url: '',
    },
    {
        title: 'Microsoft Certified: Azure AI Fundamentals',
        imageSrc: '/images/certifs/microsoft-certified-azure-ai-fundamentals.png',
        organization: 'Microsoft',
        date: 'October 2023',
        url: 'https://www.credly.com/badges/a207c4dc-09fd-43e7-bc75-2f0b299ffbc7/public_url',
    },
    {
        title: 'See more on credly.com',
        imageSrc: '/images/certifs/credly.png',
        organization: 'Credly',
        date: '',
        url: 'https://www.credly.com/users/aime-donald-youngoua-foze/edit/badges/credly',
    },
];

// Elements of contact section
export const contactsLinks = [
    {
        iconSrc: '/images/contacts/linkedin.webp',
        networkName: 'LinkedIn',
        link: 'https://www.linkedin.com/in/donald-youngoua-3b573a257/',
    },
    {
        iconSrc: '/images/contacts/github.png',
        networkName: 'GitHub',
        link: 'https://github.com/A-DONALD',
    },
    {
        iconSrc: '/images/contacts/gmail.png',
        networkName: 'Gmail',
        link: 'mailto:donaldyoungoua@gmail.com',
    },
];
