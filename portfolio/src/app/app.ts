import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
  note: string;
};

type FocusArea = {
  title: string;
  text: string;
  tags: string[];
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  stack: string[];
  achievements: string[];
};

type DomainCard = {
  title: string;
  strapline: string;
  details: string[];
};

type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

type ProjectCard = {
  period: string;
  category: string;
  title: string;
  overview: string;
  outcomes: string[];
  stack: string[];
};

type LinkCard = {
  label: string;
  href: string;
  note: string;
  external: boolean;
};

type Credential = {
  title: string;
  detail: string;
  note: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly profile = {
    name: 'Thuya Oo',
    role: 'Senior / Team Lead Fullstack Software Engineer',
    summary:
      'Senior fullstack engineer with 6+ years of experience delivering regulated banking platforms, AI-assisted applicant tracking systems, and cloud-ready microservices with Java, Spring Boot, Angular, Docker, AWS, and GCP.',
    location: 'Yangon, Myanmar',
    email: '446thuya446@gmail.com',
    phone: '+959795552585',
    linkedin: 'https://www.linkedin.com/in/thu-ya-891778a9',
    github: 'https://github.com/ThuYa446'
  };

  readonly navItems: NavItem[] = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly stats: Stat[] = [
    {
      value: '6+',
      label: 'Years in production engineering',
      note: 'Enterprise delivery across banking platforms and SaaS products since October 2019.'
    },
    {
      value: '3',
      label: 'Core domains',
      note: 'Banking MIS, cheque truncation and settlement, plus HR-tech applicant tracking.'
    },
    {
      value: 'Java + Angular',
      label: 'Primary delivery stack',
      note: 'Spring Boot backend architecture paired with workflow-heavy Angular user interfaces.'
    },
    {
      value: 'AWS / GCP',
      label: 'Cloud-ready execution',
      note: 'Dockerized releases, CI/CD coordination, hosted services, and multi-environment delivery.'
    }
  ];

  readonly heroPoints = [
    'Owns the path from requirement analysis and architecture through testing, deployment, troubleshooting, and continuous enhancement.',
    'Brings together enterprise BFSI depth, recruiter-product thinking, and modern Angular frontend execution.',
    'Comfortable across secure APIs, reporting-heavy workflows, cloud delivery, and cross-functional collaboration.'
  ];

  readonly focusAreas: FocusArea[] = [
    {
      title: 'Architecture and APIs',
      text: 'Designs layered Spring Boot services with secure REST and GraphQL APIs, domain-aligned boundaries, and maintainable backend patterns.',
      tags: ['Java 8/11/17', 'Spring Boot', 'Spring Security', 'OAuth2 / OIDC', 'JWT', 'REST', 'GraphQL']
    },
    {
      title: 'Microservices and resilience',
      text: 'Uses practical distributed-system patterns to keep enterprise flows stable under load and easier to operate.',
      tags: ['API Gateway', 'Netflix Eureka', 'OpenFeign', 'Redis', 'Resilience4j', 'Correlation IDs']
    },
    {
      title: 'Product-facing frontend delivery',
      text: 'Builds recruiter dashboards, reporting screens, and enterprise forms with reusable Angular UI and clear workflow thinking.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Reactive Forms', 'Route Guards', 'Lazy Loading']
    },
    {
      title: 'Reporting and cloud operations',
      text: 'Comfortable with data-intensive reporting, multi-environment delivery, and release coordination across cloud infrastructure.',
      tags: ['MySQL', 'PostgreSQL', 'Oracle', 'Jasper Reports', 'SSRS', 'Docker', 'Kubernetes-ready', 'GitHub Actions']
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'Senior Full-Stack Web Developer',
      company: 'ProgressionSearch Pte. Ltd.',
      location: 'Remote / Singapore',
      period: 'Apr 2024 - Feb 2026',
      summary:
        'Led delivery on a full-featured applicant tracking system that combined Angular, Spring Boot, AI-assisted resume parsing, and recruiter workflow automation.',
      stack: ['Angular', 'Spring Boot', 'Google Gemini', 'AWS EC2 / S3', 'GCP', 'Azure ML collaboration'],
      achievements: [
        'Built ATS capabilities spanning resume parsing, candidate tracking, screening, scheduling, feedback, dashboards, and recruiter workflows.',
        'Integrated Google Gemini for AI-driven resume extraction and candidate profile normalization from uploaded resumes.',
        'Delivered reusable Angular Material components, reactive forms, validation patterns, and responsive recruiter-facing interfaces.',
        'Implemented secure APIs, file-processing workflows, and cloud-backed operations for hosted application services.',
        'Worked directly with the CTO, QA, and distributed developers to shape features, investigate issues, and ship stable remote releases.'
      ]
    },
    {
      role: 'Senior Full-Stack Web Developer',
      company: 'Myanmar Information Technology (MIT)',
      location: 'Yangon, Myanmar',
      period: 'Oct 2019 - Apr 2024',
      summary:
        'Built large-scale banking platforms including MIS and cheque truncation systems, with strong ownership across microservices architecture, reporting accuracy, settlement workflows, and production support.',
      stack: ['Core Java', 'Spring Boot', 'Angular', 'Redis', 'Docker', 'Oracle / SQL Server'],
      achievements: [
        'Designed Spring Boot microservices behind an API Gateway with service registration, configuration separation, and domain-aligned service boundaries.',
        'Applied OpenFeign, Redis-backed rate limiting and caching, Resilience4j safeguards, and centralized error handling to improve reliability.',
        'Implemented complex SQL for trial balances, multi-currency processing, reconciliation, and high-volume regulatory reporting operations.',
        'Built reusable Angular modules, dashboards, route guards, interceptors, and enterprise forms for internal banking users.',
        'Integrated MICR cheque-scanning modules and Image Cash Letter workflows to support clearing, return cycles, reconciliation, and settlement through the Central Bank.'
      ]
    }
  ];

  readonly domains: DomainCard[] = [
    {
      title: 'MIS and Regulatory Reporting',
      strapline: 'High-accuracy financial reporting for regulated institutions and compliance-heavy teams.',
      details: [
        'CBM and financial institution reporting workflows',
        'GL mapping between CBM-defined and institution-specific codes',
        'Daily, monthly, and yearly report generation',
        'Multi-currency processing and trial balance calculations',
        'Compliance-focused dashboards and reporting screens'
      ]
    },
    {
      title: 'Cheque Truncation and Settlement',
      strapline: 'Operational systems for clearing, settlement, and reconciliation.',
      details: [
        'MICR cheque reader integration for automated image and data capture',
        'Image Cash Letter (.ICL) generation',
        'Forward and return cycle support between banks and CBM',
        'Settlement and reconciliation across participating institutions',
        'Secure flow between specialized hardware and banking systems'
      ]
    },
    {
      title: 'HR-Tech and ATS',
      strapline: 'Workflow-heavy SaaS products built for recruiter speed and structured candidate data.',
      details: [
        'Resume parsing and candidate profile normalization',
        'Candidate tracking and recruiter dashboards',
        'Workflow automation across hiring stages',
        'AI-assisted extraction with Google Gemini',
        'Interview scheduling across Google and Microsoft calendar ecosystems'
      ]
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend and API engineering',
      summary: 'Secure services, business workflows, and maintainable backend architecture.',
      items: [
        'Java 8/11/17',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'OAuth2 / OIDC',
        'JWT',
        'Hibernate / JPA',
        'REST APIs',
        'GraphQL APIs',
        'C# / .NET'
      ]
    },
    {
      title: 'Architecture and integration',
      summary: 'Distributed-system patterns that improve clarity, resilience, and operational stability.',
      items: [
        'Microservices',
        'API Gateway',
        'Netflix Eureka',
        'OpenFeign',
        'Redis caching',
        'Rate limiting',
        'Resilience4j',
        'Clean / layered architecture',
        'Domain-driven design',
        'Centralized error handling',
        'Correlation IDs'
      ]
    },
    {
      title: 'Frontend systems',
      summary: 'Workflow-heavy Angular applications designed for enterprise users and recruiter teams.',
      items: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Reactive Forms',
        'Angular Material UI',
        'Route Guards',
        'Lazy Loading',
        'HTML',
        'CSS',
        'JavaScript'
      ]
    },
    {
      title: 'Data and Reporting',
      summary: 'SQL-heavy systems, reporting modules, and financial data processing.',
      items: [
        'MySQL',
        'PostgreSQL',
        'SQL Server',
        'Oracle',
        'Complex SQL',
        'SSRS',
        'Jasper Reports',
        'Query optimization',
        'Regulatory reporting'
      ]
    },
    {
      title: 'Cloud and Delivery',
      summary: 'Deployment workflows, hosted infrastructure, and release coordination across environments.',
      items: [
        'Docker',
        'Kubernetes-ready deployment',
        'AWS EC2',
        'AWS S3',
        'GCP',
        'CI/CD',
        'GitHub Actions',
        'Bitbucket Pipelines',
        'Maven',
        'Linux',
        'Health checks',
        'Environment-based configuration'
      ]
    },
    {
      title: 'Quality and collaboration',
      summary: 'Testing, debugging, and delivery habits that keep teams moving.',
      items: [
        'JUnit',
        'Mockito',
        'Integration testing',
        'Bitbucket',
        'Git',
        'GitHub',
        'Jira'
      ]
    }
  ];

  readonly projects: ProjectCard[] = [
    {
      period: '2024 - 2026',
      category: 'SaaS / HR-Tech',
      title: 'Applicant Tracking System',
      overview:
        'Full-featured ATS platform built with Angular and Spring Boot for recruiter teams managing candidate pipelines, structured resume data, and workflow automation.',
      outcomes: [
        'Integrated Google Gemini parsing to extract and normalize candidate information from uploaded resumes.',
        'Delivered recruiter dashboards, screening flows, feedback loops, and interview scheduling integrations.',
        'Supported secure file workflows and cloud-hosted operations with AWS-backed delivery.'
      ],
      stack: ['Angular', 'Spring Boot', 'Google Gemini', 'AWS', 'GCP']
    },
    {
      period: '2019 - 2024',
      category: 'Banking / Reporting',
      title: 'Banking MIS and Regulatory Reporting Platform',
      overview:
        'Enterprise MIS platform focused on GL mapping, trial balances, multi-currency processing, and accurate reporting for banking and financial institutions.',
      outcomes: [
        'Implemented high-volume SQL processing and reporting flows for daily, monthly, and yearly compliance outputs.',
        'Built microservice-based backend services and secure Angular dashboards for enterprise users.',
        'Worked with regulated stakeholders to translate complex reporting requirements into tested production releases.'
      ],
      stack: ['Spring Boot', 'Angular', 'Oracle', 'Jasper Reports', 'SSRS']
    },
    {
      period: '2019 - 2024',
      category: 'Banking / Operations',
      title: 'Cheque Truncation System',
      overview:
        'Clearing and settlement system supporting cheque image capture, MICR data handling, Image Cash Letter generation, and interbank operational workflows.',
      outcomes: [
        'Integrated C#-based cheque scanning with the core Java banking platform for secure image and transaction flow.',
        'Supported forward and return cheque cycles, reconciliation, and settlement processes through the Central Bank.',
        'Built practical expertise around cheque truncation, MICR processing, and operations-heavy financial lifecycles.'
      ],
      stack: ['Core Java', 'Spring Boot', 'C#', '.NET', 'MICR / ICL']
    },
    {
      period: 'Mar 2024',
      category: 'Personal Project',
      title: 'School Management System',
      overview:
        'Personal project exploring secure full-stack application design with role-based access control and end-to-end feature architecture.',
      outcomes: [
        'Designed role-based access control across menus, buttons, and user roles.',
        'Applied authentication and authorization patterns backed by Spring Security.',
        'Added protections against SQL injection, XSS, CSRF, and other common web threats.'
      ],
      stack: ['RBAC', 'Spring Security', 'Angular', 'Web security']
    }
  ];

  readonly credentials: Credential[] = [
    {
      title: 'Bachelor of Computer Science (B.C.Sc)',
      detail: 'University of Computer Studies, Yangon',
      note: '2014 - 2019'
    },
    {
      title: 'ITIL 4 Foundation',
      detail: 'Certification',
      note: 'Service management fundamentals that support structured delivery and operational thinking.'
    }
  ];

  readonly collaborationPoints = [
    'Translates product ideas and regulated business requirements into practical technical delivery.',
    'Worked directly with CTOs, functional consultants, QA teams, and financial stakeholders to align implementation with real-world constraints.',
    'Strong remote collaboration habits across distributed teams working on frontend, backend, AI/ML, and cloud integration streams.',
    'Known for debugging tough issues, doing root-cause analysis, and owning fixes through release.'
  ];

  readonly contactLinks: LinkCard[] = [
    {
      label: 'Email',
      href: 'mailto:446thuya446@gmail.com',
      note: '446thuya446@gmail.com',
      external: false
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thu-ya-891778a9',
      note: 'Professional profile and network',
      external: true
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ThuYa446',
      note: 'Code, experiments, and projects',
      external: true
    }
  ];
}
