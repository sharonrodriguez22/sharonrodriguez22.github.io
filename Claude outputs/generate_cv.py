#!/usr/bin/env python3
"""Generate Sharon's optimized CV as a clean ATS-friendly PDF using reportlab."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch, mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ── Colors ──
DARK = HexColor("#1a1a1a")
ACCENT = HexColor("#0d7377")  # Dark teal / turquesa oscuro
GRAY = HexColor("#4b5563")
LIGHT_LINE = HexColor("#d1d5db")

# ── Page setup ──
PAGE_W, PAGE_H = letter
MARGIN_LR = 0.55 * inch
MARGIN_TB = 0.35 * inch

doc = SimpleDocTemplate(
    "/home/claude/CV_Sharon_Rodriguez_QA_EPAM.pdf",
    pagesize=letter,
    leftMargin=MARGIN_LR,
    rightMargin=MARGIN_LR,
    topMargin=MARGIN_TB,
    bottomMargin=MARGIN_TB,
)

# ── Styles ──
s_name = ParagraphStyle(
    "Name", fontSize=16, leading=19, textColor=DARK,
    fontName="Helvetica-Bold", alignment=TA_LEFT, spaceAfter=1,
)
s_subtitle = ParagraphStyle(
    "Subtitle", fontSize=9, leading=12, textColor=ACCENT,
    fontName="Helvetica", alignment=TA_LEFT, spaceAfter=1,
)
s_contact = ParagraphStyle(
    "Contact", fontSize=8, leading=10, textColor=GRAY,
    fontName="Helvetica", alignment=TA_LEFT, spaceAfter=0,
)
s_section = ParagraphStyle(
    "Section", fontSize=10, leading=13, textColor=ACCENT,
    fontName="Helvetica-Bold", spaceBefore=5, spaceAfter=2,
)
s_body = ParagraphStyle(
    "Body", fontSize=8.5, leading=11.5, textColor=DARK,
    fontName="Helvetica", alignment=TA_JUSTIFY, spaceAfter=1,
)
s_body_bold_intro = ParagraphStyle(
    "BodyBoldIntro", fontSize=8.5, leading=11.5, textColor=DARK,
    fontName="Helvetica", alignment=TA_JUSTIFY, spaceAfter=0,
)
s_bullet = ParagraphStyle(
    "Bullet", fontSize=8.5, leading=11.5, textColor=DARK,
    fontName="Helvetica", alignment=TA_JUSTIFY,
    leftIndent=10, firstLineIndent=0, spaceAfter=1,
    bulletIndent=0, bulletFontSize=8.5, bulletFontName="Helvetica",
)
s_metrics = ParagraphStyle(
    "Metrics", fontSize=8, leading=11, textColor=ACCENT,
    fontName="Helvetica-Bold", spaceAfter=2, spaceBefore=1,
)
s_small = ParagraphStyle(
    "Small", fontSize=8, leading=10, textColor=GRAY,
    fontName="Helvetica", spaceAfter=0,
)
s_skill_label = ParagraphStyle(
    "SkillLabel", fontSize=8.5, leading=11, textColor=DARK,
    fontName="Helvetica-Bold", spaceAfter=0,
)
s_project_title = ParagraphStyle(
    "ProjectTitle", fontSize=8.5, leading=11, textColor=DARK,
    fontName="Helvetica-Bold", spaceAfter=0,
)
s_cert = ParagraphStyle(
    "Cert", fontSize=7.5, leading=9.5, textColor=DARK,
    fontName="Helvetica", spaceAfter=0,
)

# ── Helpers ──
def section_title(text):
    return [
        Paragraph(text.upper(), s_section),
        HRFlowable(width="100%", thickness=0.5, color=LIGHT_LINE, spaceAfter=2),
    ]

def bullet(text):
    return Paragraph(f"•  {text}", s_bullet)

# ── Content ──
story = []

# ─── HEADER ───
story.append(Paragraph("Sharon Rodríguez Liendo", s_name))
story.append(Paragraph(
    "QA Analyst &amp; Automation  ·  JavaScript  ·  Cypress  ·  API Testing  ·  CI/CD",
    s_subtitle,
))
story.append(Paragraph(
    "Buenos Aires, Argentina  ·  +54 9 11 2254-8168  ·  sharonrodriguezliendo22@gmail.com",
    s_contact,
))
story.append(Paragraph(
    '<link href="https://linkedin.com/in/sharonrodriguezliendo" color="#0d7377">linkedin.com/in/sharonrodriguezliendo</link>'
    '  ·  '
    '<link href="https://github.com/sharonrodriguez22" color="#0d7377">github.com/sharonrodriguez22</link>'
    '  ·  '
    '<link href="https://sharonrodriguez22.github.io" color="#0d7377">sharonrodriguez22.github.io</link>',
    s_contact,
))

# ─── PERFIL PROFESIONAL ───
story.extend(section_title("Perfil Profesional"))
story.append(Paragraph(
    "QA Analyst &amp; Automation con más de 2 años de experiencia sobre una "
    "<b>plataforma SaaS de RRHH y Payroll en producción</b> para clientes de LatAm, "
    "un dominio donde un error no genera un ticket: genera un sueldo mal liquidado. "
    "Diseñé y mantuve la <b>regresión automatizada en Cypress y Postman</b>, "
    "la integré al pipeline de Jenkins y <b>bajé el ciclo completo de 1 día a 1 hora</b>. "
    "Cubro funcional, regresión, integración, APIs y performance, y trabajo con "
    "<b>SQL</b> para validar la consistencia de datos entre sistemas integrados. "
    "Aplico <b>IA generativa</b> como herramienta de productividad en QA y también <b>testeo agentes y skills de IA</b>. "
    "Formé a más de 10 practicantes y documenté la referencia técnica del equipo en Confluence.",
    s_body,
))
story.append(Paragraph(
    "60 sprints validados end-to-end  ·  "
    "Regresión de 1 día a 1 hora  ·  "
    "1.000 a 2.000 empleados/min validados bajo carga  ·  "
    "+10 practicantes formados",
    s_metrics,
))

# ─── COMPETENCIAS TÉCNICAS ───
story.extend(section_title("Competencias Técnicas"))

skills_data = [
    ("Automatización:", "Cypress · Playwright · Postman · Selenium · JMeter · automatización sobre interfaz web y servicios (APIs REST)."),
    ("Tipos de prueba:", "funcional · regresión · integración · APIs · performance y estrés · testing manual y automatizado · análisis de causa raíz."),
    ("CI/CD y versionado:", "Jenkins · Git · GitHub · ejecución de suites en cada entrega."),
    ("Lenguajes y datos:", "JavaScript · Python · SQL (MySQL / PostgreSQL) · AWS · validación de integridad y consistencia de datos entre sistemas."),
    ("Gestión y ágil:", "Jira · Confluence · Scrum · Kanban · Slack · VS Code · documentación técnica y de onboarding."),
    ("IA aplicada a QA:", "uso de IA generativa como herramienta de productividad (generación de datos de prueba, análisis de reportes) · testing de agentes y skills de IA que crean casos de prueba y flujos en Postman, validando la calidad de sus salidas (Claude Code, ChatGPT, Gemini)."),
]
for label, detail in skills_data:
    story.append(Paragraph(f"<b>{label}</b> {detail}", s_body_bold_intro))

# ─── EXPERIENCIA PROFESIONAL ───
story.extend(section_title("Experiencia Profesional"))

story.append(Paragraph(
    "<b>QA Analyst &amp; Automation - Visma LatAm</b>"
    "&nbsp;&nbsp;&nbsp;Abril 2024 - Julio 2026 · Buenos Aires, Argentina · Híbrido",
    s_body_bold_intro,
))
story.append(Paragraph(
    "<i>Plataforma SaaS de RRHH y Payroll en producción para clientes de LatAm "
    "(recibos con firma digital, vacaciones, licencias y ciclo de vida del colaborador).</i>",
    s_small,
))

exp_bullets = [
    "<b>Reduje el ciclo de regresión de 1 día a 1 hora</b> diseñando, codificando y manteniendo la suite automatizada en <b>Cypress y Postman</b>, integrando las suites en el pipeline de <b>Jenkins</b>.",
    "<b>Validé el ingreso de 1.000 a 2.000 empleados por minuto sin caídas</b> configurando y ejecutando pruebas de carga y estrés con <b>JMeter</b>, y analizando en <b>AWS</b> las métricas de estabilidad resultantes.",
    "Participé en <b>60 sprints validados end-to-end</b>, transformando criterios de aceptación e historias de usuario en planes y casos de prueba trazables.",
    "Detecté <b>defectos de integración invisibles en la interfaz</b> contrastando con <b>SQL</b> la consistencia de los datos entre RRHH, Payroll y Gestión de Desempeño, antes de que impactaran en liquidaciones reales.",
    "Aceleré la corrección de fallas analizando los reportes de ejecución para aislar si el origen era de infraestructura o de código, y registrando los defectos en <b>Jira</b> priorizados por riesgo.",
    "Acompañé a <b>más de 10 practicantes de QA</b> en su formación y construí el material de referencia del equipo documentando funcionalidades y procesos en <b>Confluence</b>, reduciendo el tiempo de onboarding.",
]
for b in exp_bullets:
    story.append(bullet(b))

# ─── PROYECTOS ───
story.extend(section_title("Proyectos"))

story.append(Paragraph(
    "<b>Ticketazo - Framework de automatización E2E con Cypress</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;Proyecto final de QA Automation · XAcademy, Santex &amp; TWPF (2025)",
    s_project_title,
))
story.append(Paragraph(
    "Automatización end-to-end de casos funcionales y no funcionales sobre una plataforma real de venta de entradas, "
    "con escenarios positivos y negativos, trabajo colaborativo en GitHub por ramas y metodología ágil. "
    '<link href="https://github.com/sharonrodriguez22/TicketazoG10Automatizado" color="#0d7377">'
    "github.com/sharonrodriguez22/TicketazoG10Automatizado</link>",
    s_body,
))

story.append(Spacer(1, 1))

story.append(Paragraph(
    "<b>Sociedad Patitas - Simulador de adopción con JavaScript</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;Proyecto final de JavaScript · CoderHouse (2026)",
    s_project_title,
))
story.append(Paragraph(
    "Aplicación interactiva con consumo de APIs externas (Fetch, async/await), "
    "manipulación del DOM, persistencia con localStorage/sessionStorage, validación de formularios, "
    "manejo de errores (try/catch) y librerías de terceros (SweetAlert2, Toastify). "
    '<link href="https://github.com/sharonrodriguez22/sociedad-patitas-js" color="#0d7377">'
    "github.com/sharonrodriguez22/sociedad-patitas-js</link>",
    s_body,
))

story.append(Spacer(1, 1))

story.append(Paragraph(
    "<b>Sociedad Patitas - Suite E2E con Playwright</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;Proyecto personal · Testing E2E sobre proyecto JavaScript (2026)",
    s_project_title,
))
story.append(Paragraph(
    "17 tests end-to-end con Playwright sobre el simulador de adopción: validación de formularios, "
    "flujo completo de adopción (happy path), persistencia en localStorage, búsqueda, padrinazgo, "
    "reserva, tránsito, rechazo y reinicio. Servidor HTTP local con redirección de CDN para ejecución "
    "offline e interacción con modales de SweetAlert2. "
    '<link href="https://github.com/sharonrodriguez22/sociedad-patitas-js" color="#0d7377">'
    "github.com/sharonrodriguez22/sociedad-patitas-js</link>",
    s_body,
))

# ─── FORMACIÓN Y CERTIFICACIONES ───
story.extend(section_title("Formación y Certificaciones"))

certs = [
    "<b>Carrera Desarrollo de Aplicaciones</b> (Desarrollo Web, JavaScript y React JS) - CoderHouse · en curso",
    "<b>Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial</b> - IFTS N.º 18 · en curso",
    "<b>Claude: Subagents &amp; Agent Skills</b> - Anthropic (2026)",
    "<b>QA Automation</b> - XAcademy, Santex &amp; TWPF (2025)",
    "<b>QA Engineer</b> - Udemy (2025)",
    "<b>Professional Testing Master</b> - UTN FRBA (2024)",
    "<b>QA Manual y Automatizado</b> - Argentina Programa &amp; MindHub (2023)",
]
for c in certs:
    story.append(Paragraph(c, s_cert))

# ─── IDIOMAS (inline after certs) ───
story.append(Spacer(1, 3))
story.append(Paragraph(
    "<b>Idiomas:</b>  Español nativo  ·  Inglés intermedio (B1), lectura técnica y documentación.",
    s_body,
))

# ── Build ──
doc.build(story)
print("CV generated: CV_Sharon_Rodriguez_QA_EPAM.pdf")
