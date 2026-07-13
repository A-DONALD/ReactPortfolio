// Link of NavBar
export const navLinks = [
    {
        name: 'About',
        hash: '#about',
    },
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
export const bio = "Aux portes de ma carrière d’ingénieur, je suis animé par l’envie de relever de nouveaux défis et d’élargir mes compétences en informatique. Je souhaite intégrer une entreprise stimulante et accueillante où je pourrai apprendre, m’impliquer pleinement et grandir sur le plan personnel.";

// Data of technical skills, grouped by category
export const technicalSkills = [
    {
        category: 'Langages',
        items: ['Python (pandas, numpy…)', 'R', 'Java', 'C#', '.NET', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Selenium', 'SQL', 'T-SQL', 'PL/SQL', 'GraphQL'],
    },
    {
        category: 'Connaissances pratiques',
        items: ['IA', 'Machine Learning', 'Deep Learning', 'RAG', 'Intégration CI/CD', 'Automatisation des tests'],
    },
    {
        category: 'Outils',
        items: ['Git', 'Spark', 'Kafka', 'Hadoop', 'TensorFlow', 'Keras', 'Okta', 'Auth0', 'Flask', 'Dataiku', 'Power BI', 'Postman', 'Jira', 'Confluence', 'Docker', 'Terraform'],
    },
];

// Data of personal skills / soft skills section
export const softSkills = [
    {
        title: 'Dynamique'
    },
    {
        title: 'Capacité d’analyse et de synthèse'
    },
    {
        title: 'Curiosité'
    },
    {
        title: 'Travail en équipe'
    },
    {
        title: 'Adaptation rapide'
    },
    {
        title: 'Autonome'
    },
];

// Languages
export const languages = [
    {
        name: 'Français',
        level: 'Langue maternelle',
    },
    {
        name: 'Anglais',
        level: 'Bilingue (B2 certifié)',
    },
    {
        name: 'Allemand',
        level: 'Notions',
    },
];

// Data of projects section
export const projects = [
    {
        title: "Salaries Predicition",
        imageSrc: '/images/projects/machine-learning-blog.jpg',
        details: 'An jupyter notebook of ML predicition for data analyst based on US kaggle dataset',
        projectLink: 'https://github.com/A-DONALD/SalariesPrediction',
    },
    {
        title: 'iOS Backup Extractor',
        imageSrc: '/images/projects/ios.png',
        details: 'This is an python implementation of an extractor of iOS backup',
        projectLink: 'https://github.com/A-DONALD/iBackup-Extractor',
    },
    {
        title: 'AI - Classifier',
        imageSrc: '/images/projects/python.jpg',
        details: 'Python implementation of text classificator with Machine Learning (Scikit-Learn)',
        projectLink: 'https://github.com/A-DONALD/AI-Classifier',
    },
    {
        title: "Design for Green 2023",
        imageSrc: '/images/projects/d4g.jpg',
        details: 'a web application for the design4green contest',
        projectLink: 'https://jdac2023.vercel.app',
    },
    {
        title: "Citadelles",
        imageSrc: '/images/projects/citadelles.png',
        details: 'A java implementation of citadelles game',
        projectLink: 'https://github.com/A-DONALD/Citadelles',
    },
    {
        title: "NodeJS Server",
        imageSrc: '/images/projects/node.png',
        details: 'A Express Node JS Server with mongoDB that provides authentication and roles based authorization',
        projectLink: 'https://github.com/A-DONALD/CMRentServer',
    },
];

// Data of professional experience section
export const experiences = [
    {
        role: 'Développeur CIAM',
        company: 'Lyvoc',
        location: 'Paris, FRANCE',
        period: 'Février 2026 - En cours',
        details: [
            "Préparation des ateliers projets (architecture, conf & sécu, intégration d’applications et migration d’utilisateurs) pour des clients français et internationaux",
            "Configuration des tenants Auth0 et implémentation de Terraform pour automatiser les déploiements",
            "Implémentation d’un outil d’automatisation des tests",
            "Implémentation de workflows Okta",
        ],
    },
    {
        role: 'Stagiaire DevOps',
        company: 'Alcuin Software',
        location: 'Angers, FRANCE',
        period: 'Avril 2025 - Septembre 2025',
        details: [
            "Conception et déploiement de cinq nouveaux espaces de travail clients à travers la création de menus et fiches dans l’ERP",
            "Amélioration du framework de tests automatisés pour intégrer la couverture fonctionnelle des nouveaux modules",
            "Suivi de l’intégration continue (CI) et correction des anomalies détectées lors des campagnes de test",
        ],
    },
    {
        role: 'RAG Developer Internship',
        company: 'Ravensburg-Weingarten University of Applied Sciences',
        location: 'Ravensburg, GERMANY',
        period: 'février 2025 - mars 2025',
        details: [
            "LLMS: Current Research & Practical Implementation",
            "Read the most cited papers and document myself about Large Language Models (LLMS) and RAG (retrieval augmented generation)",
            "Use LangChain as a framework for building AI Agents with JavaScript",
        ],
    },
    {
        role: 'Stagiaire Testeur QA',
        company: 'Alcuin Software',
        location: 'Angers, FRANCE',
        period: 'Juin 2024 - Août 2024',
        details: [
            "Rédaction et automatisation d’une trentaine de scénarios de tests fonctionnels via le framework interne (basé sur Selenium)",
            "Développement et intégration de 50 nouvelles fonctionnalités de test pour étendre la couverture du framework",
            "Collaboration étroite avec l’équipe DevOps pour optimiser la qualité logicielle et la rapidité de livraison",
        ],
    },
    {
        role: 'Projet entreprise',
        company: 'École Supérieure des Agricultures',
        location: 'Angers, FRANCE',
        period: 'Janvier 2024 - Avril 2024',
        details: [
            "Gestion des risques cyber au sein de la DSI de l’ESA",
            "Rédaction du PCA, PRA et formalisation de la cellule de gestion de crise",
        ],
    },
];

// Data of formation section
export const studies = [
    {
        title: "Diplôme d’ingénieur en informatique et réseau",
        schoolName: 'ESAIP - école d’ingénieur',
        period: 'Septembre 2022 - Août 2025',
        location: 'Angers, FRANCE',
        imageSrc: '/images/education/esaip.png',
        additionalDetails: 'Programmation front-end et back-end, réseaux et systèmes (CISCO Packet Tracer), bases de données et SQL.',
    },
    {
        title: 'Erasmus LV2 : Computer Science',
        schoolName: 'Hochschule Ravensburg Weingarten (RWU)',
        period: 'Septembre 2024 - Février 2025',
        location: 'Weingarten, ALLEMAGNE',
        imageSrc: '/images/education/rwu.webp',
        additionalDetails: 'Semestre d’échange académique en Allemagne.',
    },
    {
        title: 'Erasmus LV1 : Computer Science and Engineering',
        schoolName: 'Západočeská univerzita v Plzni (ZCU)',
        period: 'Février 2023 - Mai 2023',
        location: 'Pilsen, RÉPUBLIQUE TCHÈQUE',
        imageSrc: '/images/education/zcu.png',
        additionalDetails: 'Programmation Python et Java (Apache Maven), anglais, gestion de projet.',
    },
    {
        title: 'Classes préparatoires PCSI',
        schoolName: 'Institut universitaire de la côte',
        period: 'Septembre 2019 - Juin 2022',
        location: 'Douala, CAMEROUN',
        imageSrc: '/images/education/iuc.png',
        additionalDetails: "Initiation à la programmation C et Java, manipulation des outils d’électronique de base et de modélisation 3D (AutoCAD, SolidWorks).",
    },
];

// Data of certification section
export const certificates = [
    {
        title: 'Microsoft Certified: Azure AI Fundamentals',
        imageSrc: '/images/certifs/microsoft-certified-azure-ai-fundamentals.png',
        organization: 'Microsoft',
        date: 'Octobre 2023',
        url: 'https://www.credly.com/badges/a207c4dc-09fd-43e7-bc75-2f0b299ffbc7/public_url',
    },
    {
        title: 'IBM Data Engineering Essentials',
        imageSrc: '/images/certifs/data-engineering-essentials.png',
        organization: 'IBM',
        date: 'November 2025',
        url: 'https://www.credly.com/badges/14c40f63-d878-4b36-8faa-c453c8a4c45b/public_url',
    },
    {
        title: 'Auth0 Certified Developer',
        imageSrc: '/images/certifs/auth0-certified-developer.png',
        organization: 'Okta / Auth0',
        date: 'May 2026',
        url: 'https://www.credly.com/badges/1bf3d040-f6e0-4c0c-a706-2e1895e9d9cd/public_url',
    },
    {
        title: 'TOEIC - level B2 (900/990)',
        imageSrc: '/images/certifs/toeic.png',
        organization: 'ETS Global',
        date: '',
        url: '',
    },
    {
        title: 'Google AI Essentials',
        imageSrc: '/images/certifs/gcc-aie.png',
        organization: 'Google / Coursera',
        date: 'November 2025',
        url: 'https://www.coursera.org/account/accomplishments/verify/UPHXGBIU78CE',
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
    {
        iconSrc: '/images/contacts/tel.png',
        networkName: 'Téléphone',
        link: 'tel:0751382550',
    },
];
