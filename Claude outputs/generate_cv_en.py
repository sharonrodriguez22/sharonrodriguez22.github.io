#!/usr/bin/env python3
"""Generate Sharon's CV in English (B1 level) as a clean ATS-friendly PDF."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable
)

# ── Colors ──
DARK = HexColor("#1a1a1a")
ACCENT = HexColor("#0d7377")
GRAY = HexColor("#4b5563")
LIGHT_LINE = HexColor("#d1d5db")

# ── Page setup ──
PAGE_W, PAGE_H = letter
MARGIN_LR = 0.55 * inch
MARGIN_TB = 0.35 * inch

doc = SimpleDocTemplate(
    "/home/claude/CV_Sharon_Rodriguez_QA_EN.pdf",
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
story.append(Paragraph("Sharon Rodriguez Liendo", s_name))
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

# ─── PROFESSIONAL SUMMARY ───
story.extend(section_title("Professional Summary"))
story.append(Paragraph(
    "QA Analyst &amp; Automation with 2+ years of experience on a "
    "<b>production SaaS platform for HR and Payroll</b> serving LatAm clients. "
    "In this domain, a bug does not just create a ticket - it causes a wrong paycheck. "
    "I built and maintained the <b>automated regression suite in Cypress and Postman</b>, "
    "integrated it into the Jenkins pipeline, and <b>reduced the full cycle from 1 day to 1 hour</b>. "
    "I cover functional, regression, integration, API and performance testing, and I use "
    "<b>SQL</b> to check data consistency across integrated systems. "
    "I use <b>generative AI</b> as a productivity tool in QA and I also <b>test AI agents and skills</b>. "
    "I trained 10+ interns and wrote the team's reference documentation in Confluence.",
    s_body,
))
story.append(Paragraph(
    "60 sprints validated end-to-end  ·  "
    "Regression cut from 1 day to 1 hour  ·  "
    "1,000-2,000 employees/min validated under load  ·  "
    "10+ interns trained",
    s_metrics,
))

# ─── TECHNICAL SKILLS ───
story.extend(section_title("Technical Skills"))

skills_data = [
    ("Automation:", "Cypress · Playwright · Postman · Selenium · JMeter · web UI and API service automation (REST APIs)."),
    ("Test types:", "functional · regression · integration · API · performance and stress · manual and automated testing · root cause analysis."),
    ("CI/CD and version control:", "Jenkins · Git · GitHub · test suite execution on every release."),
    ("Languages and data:", "JavaScript · Python · SQL (MySQL / PostgreSQL) · AWS · data integrity and consistency validation across systems."),
    ("Management and Agile:", "Jira · Confluence · Scrum · Kanban · Slack · VS Code · technical and onboarding documentation."),
    ("AI applied to QA:", "generative AI as a productivity tool (test data generation, report analysis) · testing AI agents and skills that create test cases and Postman flows, validating the quality of their outputs (Claude Code, ChatGPT, Gemini)."),
]
for label, detail in skills_data:
    story.append(Paragraph(f"<b>{label}</b> {detail}", s_body_bold_intro))

# ─── PROFESSIONAL EXPERIENCE ───
story.extend(section_title("Professional Experience"))

story.append(Paragraph(
    "<b>QA Analyst &amp; Automation - Visma LatAm</b>"
    "&nbsp;&nbsp;&nbsp;April 2024 - July 2026 · Buenos Aires, Argentina · Hybrid",
    s_body_bold_intro,
))
story.append(Paragraph(
    "<i>Production SaaS platform for HR and Payroll serving LatAm clients "
    "(digital-signature pay slips, leave management, and employee lifecycle).</i>",
    s_small,
))

exp_bullets = [
    "<b>Reduced the regression cycle from 1 day to 1 hour</b> by building and maintaining the automated suite in <b>Cypress and Postman</b>, and integrating it into the <b>Jenkins</b> pipeline.",
    "<b>Validated the onboarding of 1,000 to 2,000 employees per minute with no downtime</b> by setting up and running load and stress tests with <b>JMeter</b>, and analyzing stability metrics in <b>AWS</b>.",
    "Took part in <b>60 sprints validated end-to-end</b>, turning acceptance criteria and user stories into traceable test plans and test cases.",
    "Found <b>integration bugs not visible in the UI</b> by using <b>SQL</b> to check data consistency across HR, Payroll and Performance Management, before they affected real paychecks.",
    "Sped up bug fixing by analyzing execution reports to find if the root cause was infrastructure or code, and logging defects in <b>Jira</b> sorted by risk.",
    "Trained <b>10+ QA interns</b> and built the team's reference material by documenting features and processes in <b>Confluence</b>, reducing onboarding time.",
]
for b in exp_bullets:
    story.append(bullet(b))

# ─── PROJECTS ───
story.extend(section_title("Projects"))

story.append(Paragraph(
    "<b>Ticketazo - E2E Automation Framework with Cypress</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;QA Automation Final Project · XAcademy, Santex &amp; TWPF (2025)",
    s_project_title,
))
story.append(Paragraph(
    "End-to-end automation of functional and non-functional test cases on a real ticket sales platform. "
    "Positive and negative scenarios, collaborative work in GitHub with branches and Agile methodology. "
    '<link href="https://github.com/sharonrodriguez22/TicketazoG10Automatizado" color="#0d7377">'
    "github.com/sharonrodriguez22/TicketazoG10Automatizado</link>",
    s_body,
))

story.append(Spacer(1, 1))

story.append(Paragraph(
    "<b>Sociedad Patitas - Adoption Simulator with JavaScript</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;JavaScript Final Project · CoderHouse (2026)",
    s_project_title,
))
story.append(Paragraph(
    "Interactive app with external API consumption (Fetch, async/await), "
    "DOM manipulation, localStorage/sessionStorage persistence, form validation, "
    "error handling (try/catch) and third-party libraries (SweetAlert2, Toastify). "
    '<link href="https://github.com/sharonrodriguez22/sociedad-patitas-js" color="#0d7377">'
    "github.com/sharonrodriguez22/sociedad-patitas-js</link>",
    s_body,
))

story.append(Spacer(1, 1))

story.append(Paragraph(
    "<b>Sociedad Patitas - E2E Suite with Playwright</b>"
    "&nbsp;&nbsp;·&nbsp;&nbsp;Personal project · E2E Testing on JavaScript project (2026)",
    s_project_title,
))
story.append(Paragraph(
    "17 end-to-end tests with Playwright on the adoption simulator: form validation, "
    "full adoption flow (happy path), localStorage persistence, search, sponsorship, "
    "reservation, transit, rejection and reset. Local HTTP server with CDN redirection "
    "for offline execution and SweetAlert2 modal interaction. "
    '<link href="https://github.com/sharonrodriguez22/sociedad-patitas-js" color="#0d7377">'
    "github.com/sharonrodriguez22/sociedad-patitas-js</link>",
    s_body,
))

# ─── EDUCATION AND CERTIFICATIONS ───
story.extend(section_title("Education and Certifications"))

certs = [
    "<b>Application Development Program</b> (Web Development, JavaScript and React JS) - CoderHouse · in progress",
    "<b>Data Science and Artificial Intelligence Degree</b> - IFTS No. 18 · in progress",
    "<b>Claude: Subagents &amp; Agent Skills</b> - Anthropic (2026)",
    "<b>QA Automation</b> - XAcademy, Santex &amp; TWPF (2025)",
    "<b>QA Engineer</b> - Udemy (2025)",
    "<b>Professional Testing Master</b> - UTN FRBA (2024)",
    "<b>Manual and Automated QA</b> - Argentina Programa &amp; MindHub (2023)",
]
for c in certs:
    story.append(Paragraph(c, s_cert))

# ─── LANGUAGES (inline after certs) ───
story.append(Spacer(1, 3))
story.append(Paragraph(
    "<b>Languages:</b>  Spanish native  ·  English intermediate (B1), technical reading and documentation.",
    s_body,
))

# ── Build ──
doc.build(story)
print("CV generated: CV_Sharon_Rodriguez_QA_EN.pdf")
