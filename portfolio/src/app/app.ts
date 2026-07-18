import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
};

type ValueCard = {
  title: string;
  text: string;
};

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
};

type DomainCard = {
  title: string;
  strapline: string;
  details: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ProjectCard = {
  year: string;
  title: string;
  description: string;
  tags: string[];
};

type LinkCard = {
  label: string;
  href: string;
  note: string;
  external: boolean;
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
    role: 'Senior Fullstack Engineer',
    summary:
      'Mid-senior Java fullstack engineer with 6+ years of experience delivering enterprise banking, regulatory reporting, and SaaS hiring products with Spring Boot, Angular, Docker, AWS, and GCP.',
    location: 'Yangon, Myanmar',
    email: '446thuya446@gmail.com',
    phone: '+959795552585',
    linkedin: 'https://www.linkedin.com/in/thu-ya-891778a9',
    github: 'https://github.com/ThuYa446'
  };

  readonly navItems: NavItem[] = [
    { label: 'Experience', href: '#experience' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  readonly stats: Stat[] = [
    { value: '6+', label: 'Years shipping production systems' },
    { value: 'BFSI', label: 'Banking and regulatory domain depth' },
    { value: 'Angular + Spring', label: 'Frontend and backend ownership' },
    { value: 'AWS / GCP', label: 'Cloud deployment experience' }
  ];

  readonly badges = [
    'Spring Boot architecture',
    'Angular dashboards',
    'Secure API design',
    'Multi-currency reporting',
    'Dockerized delivery',
    'ATS product workflows'
  ];

  readonly introPoints = [
    'Built enterprise MIS and Cheque Truncation platforms for regulated financial institutions.',
    'Delivered recruiter-focused ATS features including AI-assisted resume parsing and workflow automation.',
    'Combines clean architecture, practical debugging, and cross-functional communication to keep delivery moving.'
  ];

  readonly valueCards: ValueCard[] = [
    {
      title: 'Enterprise delivery',
      text: 'Comfortable owning the full path from requirement discussions and architecture through implementation, testing, deployment, and continuous enhancement.'
    },
    {
      title: 'Security and stability',
      text: 'Strong with authentication, authorization, transaction-heavy flows, query optimization, and production-ready releases for systems where mistakes are expensive.'
    },
    {
      title: 'Clear collaboration',
      text: 'Experienced translating business needs from product teams, recruiters, and regulated institutions into maintainable technical solutions.'
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'Senior Fullstack Web Developer',
      company: 'ProgressionSearch Pte. Ltd.',
      location: 'Remote / Singapore',
      period: '04/2024 - 02/2026',
      summary:
        'Designed and delivered a full-featured applicant tracking system using Angular and Spring Boot, with product ownership spanning recruiter workflows, parsing, dashboards, and cloud deployment.',
      achievements: [
        'Implemented resume parsing, candidate tracking, workflow automation, and dashboards that improved recruiter operations.',
        'Integrated Google Gemini-based parsing flows to extract and normalize candidate data.',
        'Built responsive Angular Material interfaces with reusable components and consistent UX patterns.',
        'Worked with AWS, GCP, and CI/CD pipelines to support hosting, file handling, and stable releases.'
      ]
    },
    {
      role: 'Senior Fullstack Web Developer',
      company: 'Myanmar Information Technology (MIT)',
      location: 'Yangon, Myanmar',
      period: '10/2019 - 04/2024',
      summary:
        'Built large-scale banking platforms with strong domain depth in reporting, settlement, and secure business workflows while partnering closely with functional teams and financial stakeholders.',
      achievements: [
        'Developed Management Information Systems and Cheque Truncation Systems for banking and financial institutions.',
        'Implemented secure dashboards, authentication, authorization, and reporting modules with reusable domain-driven designs.',
        'Built data-intensive processing with optimized SQL for trial balances, reconciliation, and regulatory reporting accuracy.',
        'Collaborated with business teams and regulated stakeholders to turn complex requirements into stable releases.'
      ]
    }
  ];

  readonly domains: DomainCard[] = [
    {
      title: 'MIS and Regulatory Reporting',
      strapline: 'High-accuracy financial reporting for regulated institutions.',
      details: [
        'CBM and financial institution reporting workflows',
        'GL mapping between CBM-defined and institution-specific codes',
        'Daily, monthly, and yearly report generation',
        'Multi-currency processing and trial balance calculations'
      ]
    },
    {
      title: 'Cheque Truncation and Settlement',
      strapline: 'Operational systems for clearing, settlement, and reconciliation.',
      details: [
        'Cheque scanner integration for image capture',
        'Image Cash Letter file generation',
        'Forward and return cycle support between banks and CBM',
        'Settlement and reconciliation across participating institutions'
      ]
    },
    {
      title: 'HR-Tech and ATS',
      strapline: 'Workflow-heavy SaaS products built for recruiter speed.',
      details: [
        'Resume parsing and candidate profile normalization',
        'Candidate tracking and recruiter dashboards',
        'Workflow automation across hiring stages',
        'AI-assisted extraction with Google Gemini'
      ]
    }
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend',
      items: [
        'Java',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'Hibernate / JPA',
        'REST APIs',
        'GraphQL APIs',
        'JUnit',
        'Mockito'
      ]
    },
    {
      title: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Reactive Forms',
        'Angular Material UI',
        'HTML',
        'CSS',
        'JavaScript'
      ]
    },
    {
      title: 'Data and Reporting',
      items: [
        'MySQL',
        'PostgreSQL',
        'SQL Server',
        'Oracle',
        'SSRS',
        'Jasper Reports',
        'Query optimization'
      ]
    },
    {
      title: 'Cloud and Delivery',
      items: [
        'Docker',
        'AWS EC2',
        'AWS S3',
        'GCP',
        'CI/CD',
        'Linux',
        'Maven',
        'GitHub',
        'Bitbucket',
        'Jira'
      ]
    }
  ];

  readonly projects: ProjectCard[] = [
    {
      year: '2024 - 2026',
      title: 'Applicant Tracking System',
      description:
        'Full-featured ATS platform with resume parsing, candidate tracking, workflow automation, dashboards, and cloud-backed file operations for recruiter teams.',
      tags: ['Angular', 'Spring Boot', 'Google Gemini', 'AWS', 'GCP']
    },
    {
      year: '2019 - 2024',
      title: 'Banking MIS Platform',
      description:
        'Data-intensive banking and reporting system focused on GL mapping, multi-currency processing, trial balances, and accurate regulatory reporting.',
      tags: ['BFSI', 'SQL optimization', 'Reporting', 'Secure workflows']
    },
    {
      year: '2019 - 2024',
      title: 'Cheque Truncation System',
      description:
        'Clearing and settlement workflows with cheque image capture, Image Cash Letter generation, bank-to-bank exchange cycles, and reconciliation support.',
      tags: ['Settlement', 'Reconciliation', 'File processing', 'Operations']
    },
    {
      year: '03/2024',
      title: 'School Management System',
      description:
        'Personal project focused on role-based access control, authentication, and end-to-end system design with protections against common web threats.',
      tags: ['RBAC', 'Spring Security', 'Angular', 'Web security']
    }
  ];

  readonly education = {
    degree: 'Bachelor of Computer Science (B.C.Sc)',
    school: 'University of Computer Studies, Yangon',
    period: '2014 - 2019',
    certification: 'ITIL V4 Foundation'
  };

  readonly collaborationPoints = [
    'Communicated with the Central Bank of Myanmar and multiple financial institutions on reporting and delivery requirements.',
    'Explained technical tradeoffs clearly to non-technical stakeholders and maintained dependable documentation.',
    'Worked actively in Agile and Scrum environments with peer collaboration, mentoring, and release coordination.'
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
