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
  ogImage: { es: '/img/og-es.jpg', en: '/img/og-en.jpg' },
};

export const content = {
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Sharon Rodríguez Liendo - QA Automation Engineer',
      description:
        'QA Automation Engineer con más de 2 años en SaaS de RRHH y Payroll. Regresión automatizada en Cypress y Postman sobre CI/CD, performance con JMeter y testing de APIs e integraciones.',
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
      tagline: 'Testing Manual y Automatizado · APIs & Performance Testing',
      location: 'Buenos Aires, Argentina',
      intro:
        'QA Automation Engineer con más de 2 años asegurando la calidad de una plataforma SaaS de RRHH y Payroll en producción para clientes de LatAm. Automatizo, rompo cosas a propósito y me aseguro de que lo que llega al usuario funcione.',
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
      kicker: '01 - Perfil',
      title: 'Calidad como estrategia, no como último paso',
      blurb: '',
      body: [
        'Combino testing manual y automatizado: pruebas funcionales, de regresión, integración, APIs y performance, con la regresión automatizada en Cypress y Postman sobre pipelines de CI/CD (Jenkins). Valido la consistencia de datos con SQL y aplico IA generativa como herramienta de productividad y para testing de agentes y skills de IA.',
        'Traduzco el conocimiento del negocio en estrategias de testing que detectan riesgos temprano, en equipos ágiles junto a Desarrollo, Producto y Análisis Funcional.',
      ],
      rolesTitle: 'Roles que busco',
      roles: ['QA Automation', 'QA Automation Engineer', 'QA Manual & Automation', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 - Experiencia',
      title: 'Dónde trabajé',
      blurb: 'Más de dos años en un producto vivo, con releases continuos y usuarios reales.',
      items: [
        {
          role: 'QA Analyst & Automation Engineer',
          company: 'Visma LatAm',
          period: 'Abril 2024 – Julio 2026',
          place: 'Argentina · Híbrido',
          context:
            'Plataforma SaaS de RRHH y Payroll: recibos con firma digital, vacaciones, licencias y ciclo de vida del colaborador.',
          bullets: [
            'Automatización E2E y de APIs: diseñé, codifiqué y mantuve la regresión automatizada en Cypress y Postman sobre interfaz web y servicios, migrando validaciones manuales a automatizadas y reduciendo el ciclo de regresión de 1 día a 1 hora.',
            'Integración en CI/CD: integré y ejecuté las suites automatizadas dentro del pipeline de Jenkins, dejando la regresión corriendo en cada entrega en lugar de al cierre del sprint.',
            'De criterios de aceptación a pruebas: transformé historias de usuario y criterios de aceptación en planes y casos de prueba trazables, sobre 60 sprints validados end-to-end.',
            'Performance Testing: configuré y ejecuté pruebas de carga y estrés con JMeter, validando el ingreso de 1.000 a 2.000 empleados por minuto a la firma de recibos y otras gestiones web sin caídas de la aplicación, y analicé en AWS las métricas de estabilidad resultantes.',
            'Análisis de resultados y triage de defectos: analicé los reportes de ejecución para aislar si la falla era de infraestructura o de código, y registré los defectos en Jira priorizados por riesgo, haciendo seguimiento con Desarrollo hasta su resolución.',
            'Validación de integraciones y datos: verifiqué el flujo entre RRHH, Payroll y Gestión de Desempeño, contrastando con SQL la consistencia de los datos y la continuidad de los procesos de negocio entre aplicaciones.',
            'Estándares, documentación y mentoring: documenté funcionalidades y procesos de QA en Confluence creando el material de onboarding del equipo, y acompañé en su formación a más de 10 practicantes de QA.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 - Proyectos',
      title: 'Trabajo que se puede mirar',
      blurb: 'Proyectos finales de formación, con el código público en GitHub.',
      items: [
        {
          name: 'Sociedad Patitas - Suite E2E con Playwright',
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
          name: 'Ticketazo - Automatización E2E con Cypress',
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
          name: 'Este sitio - Portfolio y CV bilingüe',
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
          name: 'Sociedad Patitas - Simulador de adopción con JavaScript',
          meta: 'Proyecto final · JavaScript, CoderHouse (2026)',
          body: 'Aplicación interactiva con consumo de APIs externas (Fetch, async/await), manipulación del DOM, persistencia con localStorage/sessionStorage, validación de formularios, manejo de errores (try/catch) y librerías de terceros (SweetAlert2, Toastify).',
          tags: ['JavaScript', 'HTML', 'SASS/CSS', 'APIs REST'],
          links: [
            { label: 'Ver sitio', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            { label: 'Ver código', href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js' },
          ],
        },
        {
          name: 'Sociedad Patitas - Sitio web para ONG',
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
      kicker: '04 - Stack técnico',
      title: 'Skills',
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
            'GitHub Actions',
            'Git',
            'GitHub',
            'Playwright',
          ],
        },
        {
          name: 'Datos y código',
          items: ['SQL (MySQL / PostgreSQL)', 'JavaScript', 'TypeScript', 'Python', 'AWS'],
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
      kicker: '05 - Formación',
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
        { name: 'JavaScript', org: 'CoderHouse', year: '2026' },
        { name: 'Base de Datos y SQL', org: 'EducacionIT', year: '2020' },
      ],
    },
    languages: {
      title: 'Idiomas',
      items: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Intermedio (B1) - lectura técnica y documentación' },
      ],
    },
    contact: {
      kicker: '06 - Contacto',
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
      title: 'Sharon Rodríguez Liendo - QA Automation Engineer',
      description:
        'QA Automation Engineer with 2+ years on a production HR and Payroll SaaS platform. Regression automated with Cypress and Postman on CI/CD, performance testing with JMeter, API and integration testing.',
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
      tagline: 'Manual & Automated Testing · API & Performance Testing',
      location: 'Buenos Aires, Argentina',
      intro:
        'QA Automation Engineer with 2+ years ensuring the quality of a production HR and Payroll SaaS platform serving clients across Latin America. I automate, break things on purpose, and make sure what reaches the user actually works.',
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
      kicker: '01 - About',
      title: 'Quality as a strategy, not a final step',
      blurb: '',
      body: [
        'I combine manual and automated testing: functional, regression, integration, API and performance testing, with the regression suite automated in Cypress and Postman on CI/CD pipelines (Jenkins). I validate data consistency with SQL and leverage Generative AI as a productivity tool and for testing AI agents and skills.',
        'I turn business knowledge into testing strategies that surface risks early, working in agile teams alongside Development, Product and Business Analysis.',
      ],
      rolesTitle: 'Roles I am targeting',
      roles: ['QA Automation', 'QA Automation Engineer' , 'QA Manual & Automation', 'QA Analyst', 'QA Tester'],
    },
    experience: {
      kicker: '02 - Experience',
      title: 'Where I have worked',
      blurb: 'Two-plus years on a live product with continuous releases and real users.',
      items: [
        {
          role: 'QA Analyst & Automation Engineer',
          company: 'Visma LatAm',
          period: 'April 2024 – July 2026',
          place: 'Argentina · Hybrid',
          context:
            'HR and Payroll SaaS platform: digitally signed payslips, vacation and leave management, and employee lifecycle.',
          bullets: [
            'End-to-end and API automation: designed, coded and maintained the automated regression suite in Cypress and Postman across web interface and services, migrating manual checks to automated ones and cutting the regression cycle from 1 day to 1 hour.',
            'CI/CD integration: integrated and ran the automated suites inside the Jenkins pipeline, keeping regression running on every delivery instead of at the end of the sprint.',
            'From acceptance criteria to tests: turned user stories and acceptance criteria into traceable test plans and test cases, across 60 sprints validated end-to-end.',
            'Performance testing: set up and ran load and stress tests with JMeter, validating 1,000 to 2,000 employees per minute signing payslips and running other web operations with no application downtime, and analysed the resulting stability metrics in AWS.',
            'Results analysis and defect triage: analysed execution reports to isolate whether a failure came from infrastructure or code, and logged defects in Jira prioritised by risk, following up with Development through to resolution.',
            'Integration and data validation: verified the flow across HR, Payroll and Performance Management, using SQL to check data consistency and business process continuity between applications.',
            'Standards, documentation and mentoring: documented QA features and processes in Confluence, creating the team´s onboarding material, and supported the training of 10+ QA interns.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 - Projects',
      title: 'Work you can look at',
      blurb: 'Capstone projects from my training, with the source public on GitHub.',
      items: [
        {
          name: 'Sociedad Patitas - E2E Suite with Playwright',
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
          name: 'Ticketazo - End-to-End Automation with Cypress',
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
          name: 'This site - Bilingual portfolio and CV',
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
          name: 'Sociedad Patitas - Adoption Simulator with JavaScript',
          meta: 'Capstone project · JavaScript, CoderHouse (2026)',
          body: 'Interactive app consuming external APIs (Fetch, async/await), DOM manipulation, localStorage/sessionStorage persistence, form validation, error handling (try/catch) and third-party libraries (SweetAlert2, Toastify).',
          tags: ['JavaScript', 'HTML', 'SASS/CSS', 'REST APIs'],
          links: [
            { label: 'View site', href: 'https://sharonrodriguez22.github.io/sociedad-patitas-js/' },
            { label: 'View code', href: 'https://github.com/sharonrodriguez22/sociedad-patitas-js' },
          ],
        },
        {
          name: 'Sociedad Patitas - NGO Website',
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
      kicker: '04 - Technical stack',
      title: 'Skills',
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
            'GitHub Actions',
            'Git',
            'GitHub',
            'Playwright',
          ],
        },
        {
          name: 'Data & code',
          items: ['SQL (MySQL / PostgreSQL)', 'JavaScript', 'TypeScript', 'Python', 'AWS'],
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
      kicker: '05 - Education',
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
        { name: 'JavaScript', org: 'CoderHouse', year: '2026' },
        { name: 'Databases and SQL', org: 'EducacionIT', year: '2020' },
      ],
    },
    languages: {
      title: 'Languages',
      items: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Intermediate (B1) - technical reading and documentation' },
      ],
    },
    contact: {
      kicker: '06 - Contact',
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
