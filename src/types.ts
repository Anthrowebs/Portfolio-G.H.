export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  boardUniversity: string;
  year: string;
  result: string;
}

export interface EmploymentItem {
  id: string;
  role: string;
  organisation: string;
  period: string;
  bullets: string[];
}

export interface ResearchExperienceItem {
  id: string;
  role: string;
  organisation: string;
  project: string;
  period: string;
  bullets: string[];
}

export interface ConferenceItem {
  id: string;
  role: string;
  conferenceName: string;
  location: string;
  date: string;
  paperTitle: string;
  bullets: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organisation: string;
  period: string;
  bullets: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeColor?: string;
  image?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
