/**
 * Contenido del sitio en ES / EN
 */

export type Lang = 'es' | 'en';

export const profile = {
  name: 'Sharon Rodríguez Liendo',
  email: 'sharonrodriguezliendo22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sharonrodriguezliendo/',
  github: 'https://github.com/sharonrodriguez22',
  photo: '/img/sharon-portrait.jpg',
  // Imagen 1200x630 que se muestra al compartir el link en LinkedIn, WhatsApp, Slack.
  // Se genera aparte; no se usa dentro del sitio.
  ogImage: { es: '/img/og-es.jpg', en: '/img/og-en.jpg' },
};

export const content = {
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Sharon Rodríguez Liendo — QA Analyst & Automation',
      description:
        'QA Analyst & Automation con más de 2 años en SaaS de RRHH y Payroll. Regresión automatizada en Cypress y Postman sobre CI/CD, performance con JMeter y testing de APIs e integraciones.',
    },
    nav: {
      about: 'Perfil',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Stack',
      certs: 'Certificaciones',
      contact: 'Contacto',
    },
    langSwitch: { label: 'English', href: '/en/', code: 'EN' },
    hero: {
      role: 'QA Analyst & Automation',
      tagline: 'Testing Manual y Automatizado · APIs & Performance Testing',
      location: 'Buenos Aires, Argentina',
      intro:
        'QA Analyst con más de 2 años asegurando la calidad de una plataforma SaaS de RRHH y Payroll en producción para clientes de LatAm. Automatizo, rompo cosas a propósito y me aseguro de que lo que llega al usuario funcione.',
      cta: 'Descargar CV',
      cvHref: '/cv/CV-Sharon-Rodriguez-QA-ES.pdf',
      ctaSecondary: 'Contacto',
      photoAlt: 'Retrato de Sharon Rodríguez Liendo',
    },
    highlights: [
      { value: '+2 años', label: 'en QA sobre un SaaS de RRHH y Payroll en producción' },
      { value: '2 días → 3 h', label: 'ciclo de regresión, automatizado con Cypress y Postman sobre CI/CD' },
      { value: '2.000/min', label: 'empleados procesados sin caídas: carga con JMeter, métricas en AWS' },
      { value: '+10', label: 'practicantes de QA formados en buenas prácticas y autonomía' },
    ],
    about: {
      kicker: '01 — Perfil',
      title: 'Calidad como estrategia, no como último paso',
      blurb: '',
      body: [
        'Combino testing manual y automatizado: pruebas funcionales, de regresión, integración, APIs y performance, con la regresión automatizada en Cypress y Postman sobre pipelines de CI/CD (Jenkins).',
        'Traduzco el conocimiento del negocio en estrategias de testing que detectan riesgos temprano, en equipos ágiles junto a Desarrollo, Producto y Análisis Funcional.',
      ],
      rolesTitle: 'Roles que busco',
      roles: ['QA Automation', 'QA Automation Engineer', 'QA Manual & Automation', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 — Experiencia',
      title: 'Dónde trabajé',
      blurb: 'Más de dos años en un producto vivo, con releases continuos y usuarios reales.',
      items: [
        {
          role: 'QA Analyst & Automation',
          company: 'Visma LatAm',
          period: 'Abril 2024 – Julio 2026',
          place: 'Argentina · Híbrido',
          context:
            'Plataforma SaaS de RRHH y Payroll: recibos con firma digital, vacaciones, licencias y ciclo de vida del colaborador.',
          bullets: [
            'Automaticé la regresión con Cypress y Postman integrada al pipeline de CI/CD (Jenkins), migrando validaciones manuales a automatizadas y reduciendo el ciclo de regresión de 2 días a 3 horas.',
            'Diseñé y ejecuté pruebas manuales y automatizadas —funcionales, de regresión, integración y de APIs— sobre cada entrega, elaborando planes y casos de prueba y reportando defectos con criterio de riesgo.',
            'Ejecuté pruebas de performance con JMeter validando el ingreso de 1.000 a 2.000 empleados por minuto a la firma de recibos y otras gestiones web sin caídas de la aplicación, y analicé en AWS las métricas de estabilidad resultantes.',
            'Participé como tester de una herramienta interna de IA Generativa para generación de casos de prueba y flujos en Postman, evaluando validez funcional, fidelidad al requerimiento y consistencia de la salida.',
            'Validé integraciones entre RRHH, Payroll y Gestión de Desempeño, verificando con SQL la consistencia de los datos y la continuidad de los procesos de negocio entre aplicaciones.',
            'Gestioné incidencias y requerimientos en Jira junto a Desarrollo, Producto y Análisis Funcional en entornos Scrum y Kanban, y documenté funcionalidades y procesos de QA en Confluence.',
            'Capacité y acompañé a más de 10 practicantes, acelerando su autonomía y la adopción de buenas prácticas de QA.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 — Proyectos',
      title: 'Trabajo que se puede mirar',
      blurb: 'Proyectos finales de formación, con el código público en GitHub.',
      items: [
        {
          name: 'Ticketazo — Automatización E2E con Cypress',
          meta: 'Proyecto final · QA Automation, Santex & TWPF (2025)',
          body: 'Automatización end-to-end de casos funcionales y no funcionales sobre una plataforma real de venta de entradas, con escenarios positivos y negativos y trabajo colaborativo en GitHub bajo metodología ágil.',
          tags: ['Cypress', 'JavaScript', 'GitHub', 'Scrum'],
          links: [
            {
              label: 'Ver código',
              href: 'https://github.com/sharonrodriguez22/TicketazoG10Automatizado',
            },
          ],
        },
        {
          name: 'Este sitio — Portfolio y CV bilingüe',
          meta: 'Proyecto personal · 2026',
          body: 'Lo construí y lo publiqué de punta a punta. El contenido vive en una única fuente tipada en TypeScript que genera las versiones en español e inglés, así los dos idiomas no se desincronizan. Cada push a main dispara un pipeline de GitHub Actions que compila y despliega solo, sin pasos manuales.',
          tags: ['Astro', 'TypeScript', 'GitHub Actions'],
          links: [
            {
              label: 'Ver código',
              href: 'https://github.com/sharonrodriguez22/sharonrodriguez22.github.io',
            },
          ],
        },
        {
          name: 'Sociedad Patitas — Sitio web para ONG',
          meta: 'Proyecto final · Desarrollo Web, CoderHouse (2026)',
          body: 'Sitio de adopción responsable de perros desarrollado de cero hasta el deploy: maquetación responsive, arquitectura de estilos con SASS, HTML semántico y SEO.',
          tags: ['HTML', 'SASS', 'Responsive', 'SEO'],
          links: [
            { label: 'Ver sitio', href: 'https://proyecto-coder-web-a5ur.vercel.app' },
            { label: 'Ver código', href: 'https://github.com/sharonrodriguez22/proyecto-coder-web' },
          ],
        },
      ],
    },
    skills: {
      kicker: '04 — Stack técnico',
      title: 'Skills',
      blurb: 'Herramientas usadas a diario en un entorno de producción con releases continuos.',
      groups: [
        {
          name: 'Testing',
          items: [
            'Testing manual y automatizado',
            'Funcional',
            'Regresión',
            'Integración',
            'APIs',
            'Performance',
            'Planes y casos de prueba',
            'Reporte de defectos',
          ],
        },
        {
          name: 'Automatización',
          items: [
            'Cypress',
            'Postman',
            'Selenium',
            'JMeter',
            'Jenkins (CI/CD)',
            'Git',
            'GitHub',
            'Playwright (en formación)',
          ],
        },
        {
          name: 'Datos y código',
          items: ['SQL (MySQL / PostgreSQL)', 'JavaScript', 'Python', 'AWS'],
        },
        {
          name: 'Gestión y ágil',
          items: ['Jira', 'Confluence', 'Scrum', 'Kanban', 'Slack', 'VS Code'],
        },
        {
          name: 'IA aplicada a QA',
          items: ['Claude Code', 'Claude (agents, subagents, agent skills)', 'ChatGPT', 'Gemini'],
        },
      ],
    },
    education: {
      title: 'Formación',
      items: [
        {
          name: 'Carrera de Desarrollo de Aplicaciones',
          org: 'CoderHouse',
          period: '2026 – en curso',
        },
        {
          name: 'Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial',
          org: 'IFTS N.º 18',
          period: '2025 – en curso',
        },
        
      ],
    },
    certs: {
      kicker: '05 — Formación',
      title: 'Certificaciones y estudios',
      blurb: 'Formación continua en testing, datos e IA aplicada a QA.',
      items: [
        { name: 'QA Automation', org: 'XAcademy Santex & Technology with Purpose Foundation', year: '2025' },
        { name: 'Professional Testing Master', org: 'Centro de e-Learning UTN FRBA', year: '2024' },
        { name: 'QA Manual y Automatizado', org: 'Argentina Programa & MindHub', year: '2023' },
        { name: 'Claude Code in Action', org: 'Anthropic', year: '2026' },
        { name: 'Introduction to Subagents', org: 'Anthropic', year: '2026' },
        { name: 'Introduction to Agent Skills', org: 'Anthropic', year: '2026' },
        { name: 'Desarrollo Web', org: 'CoderHouse', year: '2026' },
        { name: 'Base de Datos y SQL', org: 'EducacionIT', year: '2020' },
      ],
    },
    languages: {
      title: 'Idiomas',
      items: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Intermedio (B1) — lectura técnica y documentación' },
      ],
    },
    contact: {
      kicker: '06 — Contacto',
      title: 'Hablemos',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      cvLabel: 'CV en PDF',
      copyLabel: 'Copiar',
      copiedLabel: 'Copiado',
    },
    footer: {
      place: 'Buenos Aires, Argentina',
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Sharon Rodríguez Liendo — QA Analyst & Automation',
      description:
        'QA Analyst & Automation with 2+ years on a production HR and Payroll SaaS platform. Regression automated with Cypress and Postman on CI/CD, performance testing with JMeter, API and integration testing.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Stack',
      certs: 'Certifications',
      contact: 'Contact',
    },
    langSwitch: { label: 'Español', href: '/', code: 'ES' },
    hero: {
      role: 'QA Analyst & Automation',
      tagline: 'Manual & Automated Testing · API & Performance Testing',
      location: 'Buenos Aires, Argentina',
      intro:
        'QA Analyst with 2+ years ensuring the quality of a production HR and Payroll SaaS platform serving clients across Latin America. I automate, break things on purpose, and make sure what reaches the user actually works.',
      cta: 'Download CV',
      cvHref: '/cv/CV-Sharon-Rodriguez-QA-EN.pdf',
      ctaSecondary: 'Get in touch',
      photoAlt: 'Portrait of Sharon Rodríguez Liendo',
    },
    highlights: [
      { value: '2+ years', label: 'in QA on a production HR and Payroll SaaS platform' },
      { value: '2 days → 3 h', label: 'regression cycle, automated with Cypress and Postman on CI/CD' },
      { value: '2,000/min', label: 'employees processed with no downtime: load run in JMeter, metrics in AWS' },
      { value: '10+', label: 'QA interns trained in best practices and autonomy' },
    ],
    about: {
      kicker: '01 — About',
      title: 'Quality as a strategy, not a final step',
      blurb: '',
      body: [
        'I combine manual and automated testing: functional, regression, integration, API and performance testing, with the regression suite automated in Cypress and Postman on CI/CD pipelines (Jenkins).',
        'I turn business knowledge into testing strategies that surface risks early, working in agile teams alongside Development, Product and Business Analysis.',
      ],
      rolesTitle: 'Roles I am targeting',
      roles: ['QA Automation', 'QA Automation Engineer' , 'QA Manual & Automation', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 — Experience',
      title: 'Where I have worked',
      blurb: 'Two-plus years on a live product with continuous releases and real users.',
      items: [
        {
          role: 'QA Analyst & Automation',
          company: 'Visma LatAm',
          period: 'April 2024 – July 2026',
          place: 'Argentina · Hybrid',
          context:
            'HR and Payroll SaaS platform: digitally signed payslips, vacation and leave management, and employee lifecycle.',
          bullets: [
            'Automated the regression suite with Cypress and Postman integrated into the CI/CD pipeline (Jenkins), migrating manual checks to automated ones and cutting the regression cycle from 2 days to 3 hours.',
            'Designed and executed manual and automated tests — functional, regression, integration and API — for every release, writing test plans and test cases and reporting defects based on business risk.',
            'Ran performance tests with JMeter validating 1,000 to 2,000 employees per minute signing payslips and running other web transactions with no application downtime, and analysed the resulting stability metrics in AWS.',
            'Participated as tester of an internal Generative AI tool for test case generation and Postman flows, evaluating functional validity, requirement fidelity, and output consistency.',
            'Validated integrations across HR, Payroll and Performance Management, using SQL to verify data consistency and business process continuity between applications.',
            'Managed issues and requirements in Jira alongside Development, Product and Business Analysis in Scrum and Kanban environments, and documented features and QA processes in Confluence.',
            'Trained and mentored 10+ QA interns, accelerating their autonomy and adoption of QA best practices.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 — Projects',
      title: 'Work you can look at',
      blurb: 'Capstone projects from my training, with the source public on GitHub.',
      items: [
        {
          name: 'Ticketazo — End-to-End Automation with Cypress',
          meta: 'Capstone project · QA Automation, Santex & TWPF (2025)',
          body: 'End-to-end automation of functional and non-functional test cases on a real ticket-sales platform, covering positive and negative scenarios, with collaborative work on GitHub under an agile methodology.',
          tags: ['Cypress', 'JavaScript', 'GitHub', 'Scrum'],
          links: [
            {
              label: 'View code',
              href: 'https://github.com/sharonrodriguez22/TicketazoG10Automatizado',
            },
          ],
        },
        {
          name: 'This site — Bilingual portfolio and CV',
          meta: 'Personal project · 2026',
          body: 'I built and shipped it end to end. All content lives in a single typed TypeScript source that generates both the Spanish and English versions, so the two never drift apart. Every push to main triggers a GitHub Actions pipeline that builds and deploys on its own, with no manual steps.',
          tags: ['Astro', 'TypeScript', 'GitHub Actions'],
          links: [
            {
              label: 'View code',
              href: 'https://github.com/sharonrodriguez22/sharonrodriguez22.github.io',
            },
          ],
        },
        {
          name: 'Sociedad Patitas — NGO Website',
          meta: 'Capstone project · Web Development, CoderHouse (2026)',
          body: 'Responsible dog adoption website built from scratch through deployment: responsive layout, SASS-based style architecture, semantic HTML and SEO.',
          tags: ['HTML', 'SASS', 'Responsive', 'SEO'],
          links: [
            { label: 'View site', href: 'https://proyecto-coder-web-a5ur.vercel.app' },
            { label: 'View code', href: 'https://github.com/sharonrodriguez22/proyecto-coder-web' },
          ],
        },
      ],
    },
    skills: {
      kicker: '04 — Technical stack',
      title: 'Skills',
      blurb: 'Tools used daily in a production environment with continuous releases.',
      groups: [
        {
          name: 'Testing',
          items: [
            'Manual and automated testing',
            'Functional',
            'Regression',
            'Integration',
            'APIs',
            'Performance',
            'Test plans and test cases',
            'Defect reporting',
          ],
        },
        {
          name: 'Automation',
          items: [
            'Cypress',
            'Postman',
            'Selenium',
            'JMeter',
            'Jenkins (CI/CD)',
            'Git',
            'GitHub',
            'Playwright (learning)',
          ],
        },
        {
          name: 'Data & code',
          items: ['SQL (MySQL / PostgreSQL)', 'JavaScript', 'Python', 'AWS'],
        },
        {
          name: 'Agile & tools',
          items: ['Jira', 'Confluence', 'Scrum', 'Kanban', 'Slack', 'VS Code'],
        },
        {
          name: 'AI applied to QA',
          items: ['Claude Code', 'Claude (agents, subagents, agent skills)', 'ChatGPT', 'Gemini'],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          name: 'Application Development Program',
          org: 'CoderHouse',
          period: '2026 – in progress',
        },
        {
          name: 'Associate Degree in Data Science and Artificial Intelligence',
          org: 'IFTS N.º 18, Buenos Aires',
          period: '2025 – in progress',
        },
      ],
    },
    certs: {
      kicker: '05 — Education',
      title: 'Certifications and studies',
      blurb: 'Continuous training in testing, data and AI applied to QA.',
      items: [
        { name: 'QA Automation', org: 'XAcademy Santex & Technology with Purpose Foundation', year: '2025' },
        { name: 'Professional Testing Master', org: 'UTN FRBA e-Learning Centre', year: '2024' },
        { name: 'Manual and Automated QA', org: 'Argentina Programa & MindHub', year: '2023' },
        { name: 'Claude Code in Action', org: 'Anthropic', year: '2026' },
        { name: 'Introduction to Subagents', org: 'Anthropic', year: '2026' },
        { name: 'Introduction to Agent Skills', org: 'Anthropic', year: '2026' },
        { name: 'Web Development', org: 'CoderHouse', year: '2026' },
        { name: 'Databases and SQL', org: 'EducacionIT', year: '2020' },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Intermediate (B1) — technical reading and documentation' },
      ],
    },
    contact: {
      kicker: '06 — Contact',
      title: "Let's talk",
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      cvLabel: 'CV (PDF)',
      copyLabel: 'Copy',
      copiedLabel: 'Copied',
    },
    footer: {
      place: 'Buenos Aires, Argentina',
    },
  },
} as const;
