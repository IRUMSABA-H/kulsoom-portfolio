import splash from "@/assets/Splash.png";
import Barber1 from "@/assets/barber1.png"
import Barber2 from "@/assets/barber2.png"
import Barber3 from "@/assets/barber3.png"
import Neurofix from "@/assets/All Events.png"
import Neaurofix1 from "@/assets/neuofix1.png"
import Neaurofix2 from "@/assets/neufix2.png"

import Habits from "@/assets/Onboarding - 3.png"
import H1  from "@/assets/h1.png"
import H2 from "@/assets/h2.png"
import Experience from "@/assets/Experience Detail.png"
import X1 from "@/assets/X1.png"
import X2 from "@/assets/X2.png"
import Fitness from "@/assets/fitness level.png"
import Fitness1 from "@/assets/fitnes2.png"
import Fitness2 from "@/assets/fitness3.png"
import Yiki from "@/assets/Year.png"
import Y1 from "@/assets/Month.png"
import Y2 from "@/assets/Week.png"
import Expense from "@/assets/Splash Screen (2).png"
import E1 from "@/assets/expences1.png"
import E2 from "@/assets/expense2.png"
import Hourly from "@/assets/Subscription.jpg"
import T1 from "@/assets/Invoice.png"
import T2 from "@/assets/card details.png"
import Beta from "@/assets/beta.png"
import B1 from "@/assets/beta1.png"
import B2 from "@/assets/beta2.png"
import Neuguard from "@/assets/Home.png"
import N1 from "@/assets/n1.png"
import N2 from "@/assets/n2.png"
import Login from "@/assets/login.png"

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
    images: [Barber1,Barber2,Barber3],
    apkLink: "https://drive.google.com/file/d/1qDY05109SI19uA-kWsCtNtCrrF3XecYU/view?usp=sharing",
  },
  {
    id: "neurofix",
    title: "Neusoftix Company App",
    tagline: "Neusoftix Company App",
    description:
      "Developed a scalable Flutter application featuring multiple modules including events, job listings, and company news. Integrated REST APIs, handled dynamic data rendering, and implemented structured navigation. Focused on reusable widgets, clean architecture, and maintainable frontend code.",
    images: [Neurofix, Neaurofix1,Neaurofix2],
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
    images: [Experience, X1,X2],
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
    images: [Fitness, Fitness1, Fitness2],
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
    images: [Expense, E1,E2],
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
    images: [Beta, B1, B2],
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
    images: [Neuguard, N1, N2],
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
    images: [Habits, H1,H2],
    apkLink: "#",
  },
 
  
  {
    id: " Yiki Planning",
    title: " Yiki Planning",
    tagline: "A smart planning app for organizing tasks and schedules effectively",
    description:
      ` Created a Flutter-based planning tool with customized calendar views, task
organization`,
    images: [Yiki,Y1,Y2],
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
    images: [Hourly, T1,T2],
    apkLink: "#",
  },
  
];
