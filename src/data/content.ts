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
      title: 'Sharon Rodríguez Liendo — QA Automation Engineer',
      description:
        'QA Automation Engineer con más de 2 años en un SaaS de RRHH y Payroll en producción. Suites E2E y de APIs en Playwright, Cypress y Postman integradas a CI/CD, performance con JMeter y validación de datos con SQL.',
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
      role: 'QA Automation Engineer',
      tagline: 'Playwright · Cypress · TypeScript · API Testing · CI/CD',
      location: 'Buenos Aires, Argentina',
      intro:
        'Más de 2 años asegurando la calidad de una plataforma SaaS de RRHH y Payroll usada por clientes de LatAm. En un producto así un defecto no es un bug: es un sueldo mal liquidado. Por eso automatizo la regresión y las APIs sobre el pipeline de CI/CD, y valido con SQL que los datos lleguen íntegros de una aplicación a la otra.',
      cta: 'Descargar CV',
      cvHref: '/cv/CV-Sharon-Rodriguez-QA-ES.pdf',
      ctaSecondary: 'Contacto',
      photoAlt: 'Retrato de Sharon Rodríguez Liendo',
    },
    highlights: [
      { value: '+2 años', label: 'en QA sobre un SaaS de RRHH y Payroll en producción' },
      { value: '1 día → 1 h', label: 'ciclo de regresión, automatizado con Cypress y Postman sobre CI/CD' },
      { value: '2.000/min', label: 'empleados procesados sin caídas: carga con JMeter, métricas en AWS' },
      { value: '+10', label: 'practicantes de QA formados en buenas prácticas y autonomía' },
    ],
    about: {
      kicker: '01 — Perfil',
      title: 'Automatizar lo que se repite, explorar lo que no',
      blurb: '',
      body: [
        'Diseño, codifico y mantengo suites automatizadas E2E y de APIs REST en Cypress, Playwright y Postman, integradas al pipeline de CI/CD (Jenkins) para que la regresión corra en cada entrega. Codifico en JavaScript y TypeScript, valido con SQL la consistencia de los datos entre servicios, y sostengo pruebas de carga y estrés con JMeter.',
        'Uso asistentes de IA dentro del flujo de testing —generación de casos, scaffolding de automatización y análisis de fallos— validando críticamente cada salida antes de integrarla. Lo que no conviene automatizar lo cubro con testing exploratorio basado en riesgo, priorizando por impacto en el negocio.',
        'Traduzco el conocimiento del producto en estrategias de testing que detectan riesgos temprano, en equipos ágiles junto a Desarrollo, Producto y Análisis Funcional.',
      ],
      rolesTitle: 'Roles que busco',
      roles: ['QA Automation Engineer', 'QA Automation', 'Automation Tester', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 — Experiencia',
      title: 'Dónde trabajé',
      blurb: 'Más de dos años en un producto vivo, con releases continuos y usuarios reales.',
      items: [
        {
          role: 'QA Analyst',
          company: 'Visma LatAm',
          period: 'Abril 2024 – Julio 2026',
          place: 'Argentina · Híbrido',
          context:
            'Plataforma SaaS de RRHH y Payroll: recibos con firma digital, vacaciones, licencias y ciclo de vida del colaborador.',
          bullets: [
            'Reduje el ciclo de regresión de 1 día a 1 hora diseñando, codificando y manteniendo la suite automatizada en Cypress y Postman, integrando las suites en el pipeline de Jenkins.',
            'Validé el ingreso de 1.000 a 2.000 empleados por minuto sin caídas configurando y ejecutando pruebas de carga y estrés con JMeter, y analizando en AWS las métricas de estabilidad resultantes.',
            'Participé en 60 sprints validados end-to-end, transformando criterios de aceptación e historias de usuario en planes y casos de prueba trazables, bajo los estándares de calidad ISO 9001 de la compañía y su auditoría externa anual.',
            'Cubrí con testing exploratorio basado en riesgo las áreas de mayor impacto en el negocio y mayor probabilidad de falla, y reservé la automatización para los flujos estables y repetitivos.',
            'Detecté defectos de integración invisibles en la interfaz contrastando con SQL la consistencia de los datos entre RRHH, Payroll y Gestión de Desempeño, antes de que impactaran en liquidaciones reales.',
            'Analicé los reportes de ejecución para aislar si la falla era de infraestructura o de código, y gestioné los defectos en Jira dentro de un equipo ágil (Scrum), coordinando con Desarrollo la priorización y dando seguimiento hasta su resolución en cada sprint.',
            'Participé como tester de una herramienta interna de IA Generativa para generación de casos de prueba y flujos en Postman, evaluando validez funcional, fidelidad al requerimiento y consistencia de la salida.',
            'Acompañé a más de 10 practicantes de QA en su formación y construí el material de referencia del equipo documentando funcionalidades y procesos en Confluence, reduciendo el tiempo de onboarding.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 — Proyectos',
      title: 'Trabajo que se puede mirar',
      blurb: 'Automatización y desarrollo propio, con el código público en GitHub.',
      items: [
        {
          name: 'Sociedad Patitas — Suite E2E con Playwright',
          meta: 'Proyecto personal · Testing E2E sobre proyecto JavaScript, CoderHouse (2026)',
          body: '17 tests end-to-end con Playwright sobre el simulador de adopción: carga sin errores, estructura del DOM, renderizado dinámico, validación de formularios, búsqueda, alta y persistencia en localStorage, flujo completo de adopción (happy path), padrinazgo, reserva, tránsito, rechazo y reinicio. Servidor HTTP local con redirección de CDN para ejecución offline e interacción con modales de SweetAlert2.',
          tags: ['Playwright', 'JavaScript', 'Node.js', 'E2E Testing'],
          links: [
            { label: 'Ver app', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            {
              label: 'Ver código',
              href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js',
            },
          ],
        },
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
          name: 'Sociedad Patitas — Simulador de adopción con JavaScript',
          meta: 'Proyecto final · JavaScript, CoderHouse (2026)',
          body: 'Aplicación interactiva con consumo de APIs externas (Fetch, async/await), manipulación del DOM, persistencia con localStorage/sessionStorage, validación de formularios, manejo de errores (try/catch) y librerías de terceros (SweetAlert2, Toastify). Es la aplicación que después automaticé con Playwright.',
          tags: ['JavaScript', 'HTML', 'SASS/CSS', 'APIs REST'],
          links: [
            { label: 'Ver sitio', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            { label: 'Ver código', href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js' },
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
          name: 'Automatización',
          items: [
            'Playwright',
            'Cypress',
            'Selenium',
            'Postman',
            'JMeter',
            'Jenkins (CI/CD)',
            'GitHub Actions',
            'Git',
            'GitHub',
          ],
        },
        {
          name: 'Testing',
          items: [
            'Automatización E2E',
            'API Testing (REST)',
            'Regresión',
            'Integración',
            'Performance',
            'Exploratorio basado en riesgo',
            'Planes y casos de prueba',
            'Reporte de defectos',
          ],
        },
        {
          name: 'Datos y código',
          items: ['JavaScript', 'TypeScript', 'Python', 'SQL (MySQL / PostgreSQL)', 'AWS'],
        },
        {
          name: 'IA aplicada a QA',
          items: ['Claude Code', 'Claude (agents, subagents, agent skills)', 'ChatGPT', 'Gemini'],
        },
        {
          name: 'Gestión y ágil',
          items: ['Jira', 'Confluence', 'Scrum', 'Kanban', 'Slack', 'VS Code'],
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
      title: 'Sharon Rodríguez Liendo — QA Automation Engineer',
      description:
        'QA Automation Engineer with 2+ years on a production HR and Payroll SaaS platform. End-to-end and API suites in Playwright, Cypress and Postman integrated into CI/CD, performance testing with JMeter and data validation with SQL.',
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
      role: 'QA Automation Engineer',
      tagline: 'Playwright · Cypress · TypeScript · API Testing · CI/CD',
      location: 'Buenos Aires, Argentina',
      intro:
        'Over 2 years assuring the quality of a SaaS HR and Payroll platform used by clients across Latin America. On a product like that a defect is not just a bug: it is someone\u2019s paycheck. That is why I automate regression and API testing on the CI/CD pipeline, and use SQL to check that data stays intact as it moves from one application to the next.',
      cta: 'Download CV',
      cvHref: '/cv/CV-Sharon-Rodriguez-QA-EN.pdf',
      ctaSecondary: 'Get in touch',
      photoAlt: 'Portrait of Sharon Rodríguez Liendo',
    },
    highlights: [
      { value: '2+ years', label: 'in QA on a production HR and Payroll SaaS platform' },
      { value: '1 day → 1 h', label: 'regression cycle, automated with Cypress and Postman on CI/CD' },
      { value: '2,000/min', label: 'employees processed with no downtime: load run in JMeter, metrics in AWS' },
      { value: '10+', label: 'QA interns trained in best practices and autonomy' },
    ],
    about: {
      kicker: '01 — About',
      title: 'Automate what repeats, explore what does not',
      blurb: '',
      body: [
        'I design, code and maintain end-to-end and REST API automated suites in Cypress, Playwright and Postman, integrated into the CI/CD pipeline (Jenkins) so regression runs on every delivery. I code in JavaScript and TypeScript, use SQL to validate data consistency across services, and run load and stress tests with JMeter.',
        'I bring AI assistants into the testing workflow — test case generation, automation scaffolding and failure analysis — critically validating every output before integrating it. What is not worth automating I cover with risk-based exploratory testing, prioritised by business impact.',
        'I turn product knowledge into testing strategies that surface risks early, working in agile teams alongside Development, Product and Business Analysis.',
      ],
      rolesTitle: 'Roles I am targeting',
      roles: ['QA Automation Engineer', 'QA Automation', 'Automation Tester', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 — Experience',
      title: 'Where I have worked',
      blurb: 'Two-plus years on a live product with continuous releases and real users.',
      items: [
        {
          role: 'QA Analyst',
          company: 'Visma LatAm',
          period: 'April 2024 – July 2026',
          place: 'Argentina · Hybrid',
          context:
            'HR and Payroll SaaS platform: digitally signed payslips, vacation and leave management, and employee lifecycle.',
          bullets: [
            'Reduced the regression cycle from 1 day to 1 hour by building and maintaining the automated suite in Cypress and Postman, and integrating it into the Jenkins pipeline.',
            'Validated the onboarding of 1,000 to 2,000 employees per minute with no downtime by setting up and running load and stress tests with JMeter, and analyzing stability metrics in AWS.',
            'Took part in 60 sprints validated end-to-end, turning acceptance criteria and user stories into traceable test plans and test cases, under the company\u2019s ISO 9001 quality standards and its annual external audit.',
            'Covered the areas with the highest business impact and failure likelihood through risk-based exploratory testing, reserving automation for stable, repetitive flows.',
            'Found integration bugs not visible in the UI by using SQL to check data consistency across HR, Payroll and Performance Management, before they affected real paychecks.',
            'Analyzed execution reports to isolate whether a failure came from infrastructure or code, and managed defects in Jira within an Agile team (Scrum), coordinating with Development to prioritize fixes and tracking them through resolution in each sprint.',
            'Participated as tester of an internal Generative AI tool for test case generation and Postman flows, evaluating functional validity, requirement fidelity, and output consistency.',
            'Supported the training of 10+ QA interns and built the team\u2019s reference material by documenting features and processes in Confluence, reducing onboarding time.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 — Projects',
      title: 'Work you can look at',
      blurb: 'Automation and personal development work, with the source public on GitHub.',
      items: [
        {
          name: 'Sociedad Patitas — E2E Suite with Playwright',
          meta: 'Personal project · E2E Testing on JavaScript project, CoderHouse (2026)',
          body: '17 end-to-end tests with Playwright on the adoption simulator: error-free loading, DOM structure, dynamic rendering, form validation, search, CRUD and localStorage persistence, full adoption flow (happy path), sponsorship, reservation, transit, rejection and reset. Local HTTP server with CDN redirection for offline execution and SweetAlert2 modal interaction.',
          tags: ['Playwright', 'JavaScript', 'Node.js', 'E2E Testing'],
          links: [
            { label: 'View app', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            {
              label: 'View code',
              href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js',
            },
          ],
        },
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
          name: 'Sociedad Patitas — Adoption Simulator with JavaScript',
          meta: 'Capstone project · JavaScript, CoderHouse (2026)',
          body: 'Interactive app consuming external APIs (Fetch, async/await), DOM manipulation, localStorage/sessionStorage persistence, form validation, error handling (try/catch) and third-party libraries (SweetAlert2, Toastify). It is the application I later automated with Playwright.',
          tags: ['JavaScript', 'HTML', 'SASS/CSS', 'REST APIs'],
          links: [
            { label: 'View site', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            { label: 'View code', href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js' },
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
          name: 'Automation',
          items: [
            'Playwright',
            'Cypress',
            'Selenium',
            'Postman',
            'JMeter',
            'Jenkins (CI/CD)',
            'GitHub Actions',
            'Git',
            'GitHub',
          ],
        },
        {
          name: 'Testing',
          items: [
            'End-to-end automation',
            'API testing (REST)',
            'Regression',
            'Integration',
            'Performance',
            'Risk-based exploratory testing',
            'Test plans and test cases',
            'Defect reporting',
          ],
        },
        {
          name: 'Data & code',
          items: ['JavaScript', 'TypeScript', 'Python', 'SQL (MySQL / PostgreSQL)', 'AWS'],
        },
        {
          name: 'AI applied to QA',
          items: ['Claude Code', 'Claude (agents, subagents, agent skills)', 'ChatGPT', 'Gemini'],
        },
        {
          name: 'Agile & tools',
          items: ['Jira', 'Confluence', 'Scrum', 'Kanban', 'Slack', 'VS Code'],
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
