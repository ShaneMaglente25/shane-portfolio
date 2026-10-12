export interface Experience {
  company: string
  role: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'ABC Diversified Services',
    role: 'Intern',
    period: 'August – July 2026',
    description:
      'Contributed to the development of an automated attendance management system while gaining practical experience in software development, database management, testing, and reporting.',
    responsibilities: [
      'Developed a desktop-based RFID attendance system for employee attendance tracking',
      'Implemented rule-based attendance classification using employee schedules and real-time tap events',
      'Implemented tracking for late, overtime, and undertime records',
      'Developed employee management and daily attendance record features',
      'Implemented Excel report generation for administrator-defined date ranges',
      'Tested and troubleshot system functionality to ensure accurate attendance records',
    ],
    technologies: [
      'Python',
      'CustomTkinter',
      'SQL',
      'RFID',
      'Excel',
    ],
  },
]