import { 
  EducationItem, 
  EmploymentItem,
  ResearchExperienceItem, 
  ConferenceItem, 
  LeadershipItem, 
  CertificateItem, 
  SkillCategory 
} from '../types';

export const personalInfo = {
  name: "G.H. Mohiuddin Ahmad Munna",
  title: "Researcher & Data Analyst",
  email: "mohiuddinmunna308@gmail.com",
  phone: "+880 1625-482308",
  location: "Sylhet, Bangladesh",
  linkedin: "https://www.linkedin.com/in/anthrowebs-mohiuddinmunna",
  portfolio: "Portfolio/mohiuddinmunna",
  profileSummary: "A highly skilled professional with expertise in data analysis, project management, CRM administration, web development, and AI-assisted productivity. Have practical experience in coordinating multiple projects across development, academic, and digital sectors. Proficient in Power BI, SPSS, ATLAS.ti, SurveyCTO, HubSpot, WordPress, Trello, ClickUp, Microsoft 365 and Google Workspace, with certifications from Google, Microsoft, and the University of Maryland. Selected as an Aspire Leaders Alumnus by the Aspire Institute, USA and recognised as both a Google Certified Educator and Gemini Certified professional. Fluent in English and Bengali, adept at working independently or within teams, and equally effective in office, field, or remote environments."
};

export const coreCompetencies = [
  "Data Analysis & Visualisation",
  "Remote & Digital Work",
  "Project Management",
  "Report Writing & Documentation",
  "Digital Content Creation",
  "Web Development",
  "AI Assisted Productivity",
  "Client & Stakeholder Management",
  "Cross-Cultural Communication",
  "Public Speaking & Presentation",
  "Team Collaboration",
  "CRM Administration",
  "Process Improvement",
  "Academic & Professional Writing",
  "Time Management"
];

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    qualification: "MSS (Anthropology)",
    institution: "Shahjalal University of Science & Technology",
    boardUniversity: "SUST",
    year: "2026 (Expected)",
    result: "Enrolled"
  },
  {
    id: "edu-2",
    qualification: "BSS (Anthropology)",
    institution: "Shahjalal University of Science & Technology",
    boardUniversity: "SUST",
    year: "2025",
    result: "3.44 / 4.00"
  },
  {
    id: "edu-3",
    qualification: "HSC (Science)",
    institution: "Jalalabad Cantonment Public School & College",
    boardUniversity: "Sylhet Board",
    year: "2019",
    result: "5.00 / 5.00"
  },
  {
    id: "edu-4",
    qualification: "SSC (Science)",
    institution: "Chhatak Cement Factory High School",
    boardUniversity: "Sylhet Board",
    year: "2017",
    result: "5.00 / 5.00"
  }
];

export const employmentExperience: EmploymentItem[] = [
  {
    id: "emp-1",
    role: "Intern",
    organisation: "Directorate General of Family Planning (DGFP) | District Family Planning Office, Sylhet",
    period: "13 July 2026 – 12 September 2026",
    bullets: [
      "Conducted field visits to Upazila and Union-level Family Planning offices, satellite clinics and household sites within Sylhet district to observe service delivery and community-based outreach.",
      "Compiled field observation reports and reviewed institutional documentation to analyze family planning service structures across district, upazila and union level.",
      "Prepared and delivered a progress presentation on internship findings to senior government officials."
    ]
  }
];

export const technicalSkills: SkillCategory[] = [
  {
    id: "skills-research",
    name: "Research & Data Analysis",
    skills: ["SPSS", "ATLAS.ti", "SurveyCTO", "Power BI", "EndNote 20"]
  },
  {
    id: "skills-design",
    name: "Design & Web",
    skills: ["WordPress", "Elementor", "Canva", "Figma", "CMS"]
  },
  {
    id: "skills-crm",
    name: "CRM & Project Management",
    skills: ["HubSpot", "OnePageCRM", "Monday CRM", "Trello", "ClickUp"]
  },
  {
    id: "skills-office",
    name: "Office & Productivity",
    skills: ["Microsoft 365 (Word • Excel • PowerPoint)", "Google Workspace", "Teams", "Zoom"]
  },
  {
    id: "skills-ai",
    name: "AI & Emerging Tech",
    skills: ["Google Gemini", "Claude", "Perplexity", "ChatGPT", "NotebookLM", "Microsoft Copilot", "Generative AI Tools"]
  }
];

export const certificatesList: CertificateItem[] = [
  { id: "cert-1", title: "AI and Career Empowerment", issuer: "University of Maryland, Smith School of Business", year: "2026", badgeColor: "bg-amber-100 text-amber-800", image: "/1.jpg" },
  { id: "cert-18", title: "AI Workflows and Agents", issuer: "Grameenphone Academy", year: "2026", badgeColor: "bg-emerald-100 text-emerald-800" },
  { id: "cert-2", title: "Analyzing Data with Power BI", issuer: "Analytics Vidhya", year: "2026", badgeColor: "bg-blue-100 text-blue-800", image: "/2.jpg" },
  { id: "cert-3", title: "Cyber Hygiene Training", issuer: "The Asia Foundation & SAJIDA Foundation", year: "2026", badgeColor: "bg-emerald-100 text-emerald-800", image: "/3.jpg" },
  { id: "cert-4", title: "Design Power BI Reports", issuer: "Microsoft", year: "2026", badgeColor: "bg-blue-100 text-blue-800", image: "/4.jpg" },
  { id: "cert-5", title: "Get Started Building with Power BI", issuer: "Microsoft", year: "2026", badgeColor: "bg-blue-100 text-blue-800", image: "/5.jpg" },
  { id: "cert-6", title: "Project Management Foundations", issuer: "Simplilearn", year: "2026", badgeColor: "bg-indigo-100 text-indigo-800", image: "/6.jpg" },
  { id: "cert-7", title: "Siemens Project Manager Job Simulation", issuer: "Forage", year: "2026", badgeColor: "bg-amber-100 text-amber-800", image: "/7.jpg" },
  { id: "cert-8", title: "Aspire Leaders Program – Cohort 5", issuer: "Aspire Institute, USA", year: "2025", badgeColor: "bg-purple-100 text-purple-800", image: "/8.png" },
  { id: "cert-9", title: "Elevate Your Public Speaking", issuer: "BOHUBRIHI", year: "2025", badgeColor: "bg-rose-100 text-rose-800", image: "/9.jpg" },
  { id: "cert-10", title: "Enhance Teaching with Microsoft 365 Copilot", issuer: "Microsoft", year: "2025", badgeColor: "bg-cyan-100 text-cyan-800", image: "/10.jpg" },
  { id: "cert-11", title: "Gemini Certified Educator (2025–2028)", issuer: "Google for Education", year: "2025", badgeColor: "bg-sky-100 text-sky-800", image: "/11.png" },
  { id: "cert-12", title: "Google Certified Educator Level 1 (2025–2028)", issuer: "Google for Education", year: "2025", badgeColor: "bg-sky-100 text-sky-800", image: "/12.png" },
  { id: "cert-13", title: "Introduction to Generative AI & Agents", issuer: "Microsoft", year: "2025", badgeColor: "bg-purple-100 text-purple-800", image: "/13.jpg" },
  { id: "cert-14", title: "Resume Writing", issuer: "Mentors Learning", year: "2025", badgeColor: "bg-zinc-100 text-zinc-800", image: "/14.jpg" },
  { id: "cert-15", title: "Scientific Manuscript Writing", issuer: "Dept. of Anthropology, SUST", year: "2025", badgeColor: "bg-teal-100 text-teal-800", image: "/15.jpg" },
  { id: "cert-16", title: "TeachingEnglish: Managing Learning", issuer: "British Council", year: "2025", badgeColor: "bg-red-100 text-red-800", image: "/16.jpg" },
  { id: "cert-17", title: "WordPress & CMS Development", issuer: "Times IT", year: "2025", badgeColor: "bg-violet-100 text-violet-800", image: "/17.jpg" }
];

export const researchExperience: ResearchExperienceItem[] = [
  {
    id: "exp-1",
    role: "Research Assistant",
    organisation: "Department of Anthropology, SUST | Government-Directed University Research",
    project: "Conceptualizing \"Pedagogical Competence\" of Sexual & Reproductive Health (SRH): A qualitative exploration into the discursive barriers to SRH in the Bangladesh sexuality education curriculum.",
    period: "March 2025 – March 2026",
    bullets: [
      "Conducted in-depth interviews and focus group discussions (FGDs) with study participants across field sites.",
      "Built participant rapport and maintained ethical field observation practices throughout data collection.",
      "Managed transcription of recorded interviews.",
      "Contributed to manuscript drafting for academic publication."
    ]
  },
  {
    id: "exp-2",
    role: "Research Assistant",
    organisation: "Bangladesh Climate Change Trust | Ministry of Environment, Forests & Climate Change · SUST",
    project: "The Interpretation of the Itna-Mithamoin-Austogram Highway and Climate Security: A qualitative Analysis of Haor Ecologies in Bangladesh.",
    period: "Sep 2024 – Sep 2025",
    bullets: [
      "Conducted field interviews in remote Haor communities and recorded detailed participant observation notes.",
      "Carried out systematic thematic analysis of qualitative data and prepared structured field reports.",
      "Contributed to manuscript."
    ]
  },
  {
    id: "exp-3",
    role: "Research Assistant",
    organisation: "University Research Centre, SUST",
    project: "A Qualitative Exploration of the Perception Towards Cervical Cancer and its screening Behaviors Among the Tea-Laborer in Sylhet, Bangladesh.",
    period: "Jul 2024 – Jul 2025",
    bullets: [
      "Administered semi-structured interviews and managed informed consent processes with community participants.",
      "Maintained detailed field notes and performed systematic data coding using qualitative analysis protocols.",
      "Contributed to manuscript writing."
    ]
  },
  {
    id: "exp-4",
    role: "Research Assistant",
    organisation: "Department of Anthropology, SUST",
    project: "Disabled Lives, Disabled Rights: A Multisite Qualitative Exploration into the Everyday Life of Students with Disabilities in Public Universities in Bangladesh.",
    period: "Jun 2024 – Jun 2025",
    bullets: [
      "Conducted multisite fieldwork and participant interviews across multiple university campuses in Bangladesh.",
      "Compiled observation reports, managed transcription, and performed data coding across a large qualitative dataset.",
      "Contributed to literature review."
    ]
  },
  {
    id: "exp-5",
    role: "Transcriber",
    organisation: "Christian Aid",
    project: "End-line Study of Gender Transformative Climate Resilient Microfinance Project.",
    period: "March 2025",
    bullets: [
      "Accurately transcribed primary qualitative interview data for an international NGO end-line study."
    ]
  }
];

export const conferencePresentations: ConferenceItem[] = [
  {
    id: "conf-1",
    role: "Presenting Author",
    conferenceName: "RUEC International Research Conference",
    location: "Rajshahi University, Bangladesh",
    date: "September 6–7, 2025",
    paperTitle: "Youth as Active Social Agents: A Qualitative Case Study of Student-Run KIN School at Shahjalal University of Science and Technology.",
    bullets: [
      "Poster presentation on youth as active social agents in student-led educational initiatives; contributed to discussions on institutional change and youth-driven reform."
    ]
  },
  {
    id: "conf-2",
    role: "International Presenter",
    conferenceName: "International Conference on Anthropology of Nepal and the Himalayas",
    location: "Tribhuvan University, Nepal",
    date: "July 20–21, 2025",
    paperTitle: "Cultural Resilience in Transforming world: Challenges and Oppurtunities for Meitei Manipuri Cultural Heritage Preservation in Bangladesh.",
    bullets: [
      "Presented Undergraduate thesis research on cultural identity, displacement, and community resilience to an international academic audience.",
      "Received substantive feedback from international scholars on heritage dynamics and postcolonial frameworks."
    ]
  }
];

export const leadershipEngagement: LeadershipItem[] = [
  {
    id: "lead-1",
    title: "Project Manager (Job Simulation)",
    organisation: "Siemens (via Forage)",
    period: "March 2026",
    bullets: [
      "Completed a practical, real-world project management simulation focused on corporate planning and performance monitoring.",
      "Developed Key Performance Indicators (KPIs) and designed project dashboards to track outcomes across workstreams.",
      "Applied project planning, risk tracking, and execution strategies within a structured business environment."
    ]
  },
  {
    id: "lead-2",
    title: "Aspire Leaders Program (Cohort 5)",
    organisation: "Aspire Institute, USA | Competitive 9-week Global Leadership Programme",
    period: "October – December 2025",
    bullets: [
      "Selected from a global applicant pool to join an international cohort of emerging leaders.",
      "Completed training in strengths-based leadership, AI integration in professional settings, and digital transformation strategy.",
      "Designed and executed a community impact project addressing a real local development challenge."
    ]
  },
  {
    id: "lead-3",
    title: "UNESCO Youth Hackathon 2025",
    organisation: "UNESCO",
    period: "September – October 2025",
    bullets: [
      "Submitted a youth-driven innovation project addressing global and local social challenges aligned with SDG frameworks.",
      "Collaborated with peers to develop scalable, evidence-based solutions for community-level problems."
    ]
  },
  {
    id: "lead-4",
    title: "12th International Youth Conference",
    organisation: "International Organization of Youth, USA (Virtual)",
    period: "September 2025",
    bullets: [
      "Participated in global policy discussions on youth leadership, governance, and social development alongside international delegates."
    ]
  },
  {
    id: "lead-5",
    title: "Official Notetaker ('Generation SDG')",
    organisation: "Eco Prescription (International Youth Day)",
    period: "August 2025",
    bullets: [
      "Served as Official Notetaker — captured key discussions, SDG-linked insights, and outcomes for institutional records and publication."
    ]
  }
];

export const memberships = [
  { organisation: "ASEAN Youth Organization", role: "Member", period: "May 2026 – Present" },
  { organisation: "Freire Institute", role: "Professional Member", period: "April 2026 – Present" },
  { organisation: "International Peace Bureau (IPB)", role: "Individual Member", period: "May 2026 – Present" },
  { organisation: "Amnesty International", role: "International Member", period: "April 2026 – Present" },
  { organisation: "Europa Nostra", role: "Youth Member", period: "June 2026 – Present" }
];

export const languages = [
  { name: "Bengali (Bangla)", level: "Native" },
  { name: "English", level: "Professional Proficiency | Reading: Advanced • Writing: Advanced • Speaking: Advanced" }
];

export const references = [
  {
    name: "Dr. Md. Shahgahan Miah",
    role: "Professor",
    dept: "Department of Anthropology",
    institution: "Shahjalal University of Science & Technology",
    phone: "+880 1740-992656",
    email: "shahgahan-anp@sust.edu"
  },
  {
    name: "Chand Mia",
    role: "Assistant Professor",
    dept: "Department of Anthropology",
    institution: "Shahjalal University of Science & Technology",
    phone: "+880 1917-870702",
    email: "chandm-anp@sust.edu"
  }
];
