"use client";
import React from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiPrisma,
  SiNextdotjs,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiClerk,
} from "react-icons/si";
// Tech icons
const techIcons = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  JavaScript: <FaJsSquare />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Supabase: <SiSupabase />,
  Redux: <SiRedux />,
  Clerk: <SiClerk />,
  Tailwind: <SiTailwindcss />,
  Prisma: <SiPrisma />,
  "Next.js": <SiNextdotjs />,
  Zustand: <FaCode />,
  "Socket.io": <SiSocketdotio />,
  "RTK Query": <FaCode />,
  Inngest: <FaCode />,
};

const projects = [
  {
    title: "Doctor Appointment Website",
    description: "Admin panel, doctors, appointments. Real-time updates .",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Deepali-cell/prescripto_web/tree/main",
    demo: "https://prescripto-web-frontend.onrender.com",
    image: "/projects/doctor.jpg",
  },
  {
    title: "Real-Time Chat Website",
    description: "Chat with real-time messaging functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Zustand", "Socket Io"],
    github: "https://github.com/Deepali-cell/chat-web/tree/main",
    demo: "https://chat-web-frontend-sc0b.onrender.com",
    image: "/projects/chat.jpg",
  },
  {
    title: "E-commerce Website",
    description: "Simple online store with product management and checkout.",
    tech: ["React js", "FireBase", "Redux"],
    github: "https://github.com/Deepali-cell/eco-web",
    demo: "https://eco-web-qu5s.onrender.com/",
    image: "/projects/eco.jpg",
  },
  {
    title: "Job Portal Website",
    description: "Post jobs, apply for jobs, and manage applications.",
    tech: ["React js", "Supabase", "Clerk", "Hooks", "React Hook Form"],
    github: "https://github.com/Deepali-cell/job-portal",
    demo: "https://job-portal-kohl-psi.vercel.app/",
    image: "/projects/job.jpeg",
  },
  {
    title: "LMS Website",
    description:
      "Manage courses and lectures. Users can buy courses (payment pending).",
    tech: ["MongoDb", "Express", "Node js", "React js", "RTK Query"],
    github: "https://github.com/Deepali-cell/Deepali-lms",
    demo: "https://deepali-lms-qgqc.vercel.app/",
    image: "/projects/lms.png",
  },
  {
    title: "Blog Website",
    description:
      "Authenticated blog platform with code snippets, likes, and comments.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Clerk", "Actions", "TypeScript"],
    github: "https://github.com/Deepali-cell/full-stack-blog-web",
    demo: "https://blog-web-seven-brown.vercel.app/",
    image: "/projects/blog.jpg",
  },
  {
    title: "Movie Booking Website",
    description: "Role-based booking, group booking, reviews, and food orders.",
    tech: ["Next.js", "MongoDB", "Clerk", "RTK Query", "Inngest", "TypeScript"],
    github: "https://github.com/Deepali-cell/movie_booking_web",
    demo: "https://movie-booking-web-omega.vercel.app/",
    image: "/projects/movie.jpg",
  },
];

// Custom CSS in JS
const cardStyle = {
  perspective: "1500px",
};
const cardInnerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
};
const cardFrontBackStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "1rem",
  overflow: "hidden",
};
const cardBackStyle = {
  ...cardFrontBackStyle,
  transform: "rotateY(180deg)",
};

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="w-full h-96 cursor-pointer"
      style={cardStyle}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          ...cardInnerStyle,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div style={cardFrontBackStyle}>
          <img
            src={project.image} // Correct
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-black/50 p-4 text-white text-xl font-bold text-center">
            {project.title}
          </div>
        </div>

        {/* Back */}
        <div
          style={cardBackStyle}
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-white p-6 flex flex-col justify-between shadow-lg"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4 text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-1"
                >
                  {techIcons[tech]} {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-2 justify-center">
            <a
              href={project.github}
              target="_blank"
              className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="px-4 py-2 bg-white text-cyan-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section className="relative w-full py-20 px-6 md:px-12 ">
    <div className="max-w-6xl mx-auto text-center space-y-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
