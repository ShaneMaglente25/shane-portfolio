
export type ProjectPreviewType = 'attendance' | 'appointments'

export interface Project {
  id: string
  title: string
  description: string
  role: string
  type: string
  technologies: string[]
  features: string[]

  // New case-study information
  problem: string
  solution: string

  // Controls the illustrative preview.
  preview: ProjectPreviewType

  // Optional real application screenshot.
  image?: string

  // Optional links to add when available.
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'rfid-attendance',
    title: 'RFID Attendance System',
    type: 'Internship Project',
    role: 'Developer',

    description:
      'A desktop application for tracking employee attendance through RFID identification, automated attendance classification, and Excel reporting.',

    technologies: [
      'Python',
      'CustomTkinter',
      'SQL',
      'RFID',
      'Excel Reporting',
    ],

    features: [
      'RFID-based employee identification',
      'Automatic time-in and time-out classification',
      'Late, overtime, and undertime tracking',
      'Employee record management',
      'Excel attendance report generation',
    ],

    problem:
      'Recording employee attendance and evaluating work schedules requires accurate time records, organized employee information, and consistent attendance rules.',

    solution:
      'Developed an RFID-based desktop application that identifies employees, classifies attendance events using predefined rules, evaluates schedule-related records, and generates Excel reports.',

    preview: 'attendance',

    // Add a real screenshot later:
    // image: '/projects/rfid-attendance.png',
  },
  {
    id: 'appointment-scheduling',
    title: 'Appointment Scheduling System',
    type: 'University Project',
    role: 'Lead Programmer',

    description:
      'A desktop scheduling application where users can request appointments and administrators can review and approve bookings.',

    technologies: [
      'Python',
      'Tkinter',
      'SQL',
    ],

    features: [
      'User registration and authentication',
      'Appointment date and time requests',
      'Administrator approval workflow',
      'Booking conflict prevention',
      'Appointment record management',
    ],

    problem:
      'Managing appointment requests requires a consistent process for reviewing bookings and preventing conflicts between scheduled appointments.',

    solution:
      'Led the programming of a desktop application that handles appointment requests, supports administrator approval, and checks for existing bookings to prevent scheduling conflicts.',

    preview: 'appointments',

    // Add a real screenshot later:
    // image: '/projects/appointment-scheduling.png',
  },
]
