import splash from "@/assets/Splash.png";
import Neurofix from "@/assets/All Events.png"
import Habits from "@/assets/Onboarding - 3.png"
import Experience from "@/assets/Experience Detail.png"
import Fitness from "@/assets/fitness level.png"
import Yiki from "@/assets/Year.png"
import Expense from "@/assets/Splash Screen (2).png"
import Hourly from "@/assets/Subscription.jpg"
import Beta from "@/assets/beta.png"
import Neuguard from "@/assets/Home.png"

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  images: string[];
  apkLink: string;
}

export const projects: Project[] = [
  {
    id: "fit-pulse",
    title: "Barbershop Appointment & Customer Management System",
    tagline: "Book appointments easily",
    description:
      "A barbershop booking application designed to streamline appointment scheduling and customer management. It allows users to select services, book time slots, and receive confirmations, while enabling barbers to efficiently manage appointments and client records. The app focuses on delivering a smooth user experience and improving overall workflow.",
    images: [splash],
    apkLink: "https://drive.google.com/file/d/1qDY05109SI19uA-kWsCtNtCrrF3XecYU/view?usp=sharing",
  },
  {
    id: "neurofix",
    title: "Neusoftix Company App",
    tagline: "Neusoftix Company App",
    description:
      "Developed a scalable Flutter application featuring multiple modules including events, job listings, and company news. Integrated REST APIs, handled dynamic data rendering, and implemented structured navigation. Focused on reusable widgets, clean architecture, and maintainable frontend code.",
    images: [Neurofix],
    apkLink: "https://apps.apple.com/pk/app/neusoftix-portfolio-careers/id6759046527",
  },
   {
    id: "Experience",
    title: "Xperience App",
    tagline: "An app to record and manage user experiences in a structured way",
    description:
      `Built a Flutter application (customer side business side) with a focus on content
organization and user interaction. Implemented smooth navigation, custom UI components, and
state-driven updates. Designed for scalability and enhanced usability.`,
    images: [Experience],
    apkLink: "https://drive.google.com/file/d/19hFyR8H_F60YHZcPZSa9JsTsIfHdekym/view?usp=sharing",
  },
  {
    id: " Deemoose",
    title: " Deemoose",
    tagline: `A comprehensive fitness and nutrition tracking app to support users in achieving
their health goals`,
    description:
      `Developed a visually engaging Flutter application with clean UI/UX for tracking
workouts and nutrition plans. Implemented dynamic dashboards, progress tracking, and
userfriendly data visualization. Focused on responsive layouts, smooth animations, and efficient
state management to enhance user experience. `,
    images: [ Fitness],
    apkLink: "https://drive.google.com/file/d/1vlLYftnfwOznJv8setcse48VxEEepQz-/view?usp=sharing",
  },
  {
    id: " expense tracker",
    title: " Expense Tracker",
    tagline: "A personal finance management app for tracking expenses and budgets. ",
    description:
      `Developed a feature-rich expense tracking app with categorized spending,
summaries, and visual insights. Implemented charts, local data storage, and responsive UI.
Focused on performance optimization and clean architecture. `,
    images: [Expense],
    apkLink: "https://drive.google.com/file/d/1bA5otL_V-XEyrmhVt0BF2KcG1MjcOAOB/view?usp=sharing",
  }, 
  {
    id: " Beta Relocation ",
    title: " Beta Relocation ",
    tagline: "A relocation assistance app for managing house shifting tasks ",
    description:
      `Built a task-oriented Flutter app to help users manage relocation processes
efficiently. Implemented structured workflows, checklist features, and clean UI for better
usability. Focused on performance and user-friendly design.  `,
    images: [ Beta],
    apkLink: "https://drive.google.com/file/d/1z3d-0a695gpOAKy6gh5vwXeGmhMGNLAv/view?usp=sharing",
  },
  {
    id: " Neukid Guard (Good/Bad Touch Awareness) ",
    title: " Neukid Guard (Good/Bad Touch Awareness) ",
    tagline: "An educational app to teach children about personal safety and awareness. ",
    description:
      `Designed a child-friendly with 4 language support Flutter app with interactive UI
and simple navigation. Focused on accessibility, engaging visuals, and easy content delivery.
Ensured a safe and understandable experience for young users.  `,
    images: [ Neuguard],
    apkLink: "https://drive.google.com/file/d/1_IzimBPTufNcN0qRD2OzqwyGB2m-J4rL/view?usp=sharing",
  },
  {
    id: "Habits",
    title: "Habits",
    tagline: "A habit-building app to help users maintain consistency in daily routines. ",
    description:
      `Developed a minimal and modern Flutter app for habit tracking and progress
indicator, Implemented efficient state management and engaging UI to motivate users. Ensured
responsive design across devices`,
    images: [Habits],
    apkLink: "#",
  },
 
  
  {
    id: " Yiki Planning",
    title: " Yiki Planning",
    tagline: "A smart planning app for organizing tasks and schedules effectively",
    description:
      ` Created a Flutter-based planning tool with customized calendar views, task
organization`,
    images: [Yiki],
    apkLink: "#",
  },  
  
  {
    id: " hourly tracker",
    title: " Hourly Tracker",
    tagline: "A real-time hourly wage tracking app for accurate earnings management. ",
    description:
      `Built a lightweight Flutter app with intuitive UI to track working hours and
calculate earnings instantly. Designed clean input flows, real-time updates, and optimized state
handling for performance. Ensured a smooth user experience with minimal design and responsive
layouts. `,
    images: [ Hourly],
    apkLink: "#",
  },
  
];
