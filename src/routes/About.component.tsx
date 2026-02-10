import React from "react";
import "../Styles/about/About.styles.scss";
import {
  Briefcase,
  GraduationCap,
  Settings,
  Github,
  Linkedin,
  Mail,
  Plane,
  Blocks,
  Network,
  Workflow,
  LucideBlocks,
  Baby,
  Hammer,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const AboutMe = () => {
  const experiences: {
    year: string;
    role: string;
    place: string;
    desc: string;
    icon: JSX.Element;
    links: { url: string; text?: string; icon?: JSX.Element }[];
  }[] = [
    {
      year: "March 2024 - Present",
      role: "Software Engineer",
      place: "DTx - Fulltime",
      desc: "During my bachelor's degree, I joined DTx as a researcher, receiving a research grant to further my studies while contributing to the 'Aero.Next' project. After five months, I exceeded expectations and was hired full-time. In this role, I develop web and desktop applications, manage databases, and integrate digital transformation initiatives within the aeronautical sector.",
      icon: <Plane size={22} />,
      links: [
        {
          url: "https://www.linkedin.com/company/dtx-digital-transformation-colab/posts/?feedView=all",
          icon: <Linkedin size={18} style={{ verticalAlign: "middle" }} />,
        },
        {
          url: "https://www.dtx-colab.pt/",
          icon: <ExternalLink size={18} style={{ verticalAlign: "middle" }} />,
          text: "Website",
        },
      ],
    },
    {
      year: "January 2025 - Present",
      role: "Blockchain & Backend Game Developer",
      place: "Play Solana - Freelancing",
      desc: "While working full-time as a fullstack developer, I joined Play Solana, a global project building a blockchain-integrated game console with a community of over 100,000 members. I developed the entire backend infrastructure for the company’s flagship game, implementing secure API protocols, data integrity checks, and access controls. I integrated Solana blockchain functionality directly into the gameplay using the Solana Unity SDK and C#, ensuring secure transactions and tamper-resistant systems. Additionally, I lead the development and maintenance of the Play Solana SDK, enabling third-party developers to build games safely on the console. This work required close collaboration with low-level systems, firmware, and C, giving me valuable expertise in virtualization for firmware simulation and secure system integration, emphasizing resiliency and protection of critical infrastructure.",
      icon: <LucideBlocks size={22} />,
      links: [
        {
          url: "https://playsolana.com/",
          text: "Website",
          icon: <ExternalLink size={18} style={{ verticalAlign: "middle" }} />,
        },
        {
          url: "https://github.com/playsolana/PlaySolana.Unity-SDK",
          text: "PSDK",
          icon: <Github size={18} style={{ verticalAlign: "middle" }} />,
        },
      ],
    },
    {
      year: "September 2023 - September 2024",
      role: "Development Department Director",
      place: "Computer Science Student Association - University of Minho",
      desc: "Led the development department, developing projects and managing a team of developers to enhance the association and university events.",
      icon: <GraduationCap size={22} />,
      links: [
        {
          url: "https://necc.di.uminho.pt/",
          icon: <ExternalLink size={18} style={{ verticalAlign: "middle" }} />,
          text: "Website",
        },
        {
          url: "https://github.com/NECC",
          icon: <Github size={18} style={{ verticalAlign: "middle" }} />,
        },
      ],
    },
    {
      year: "March 2023 - August 2023",
      role: "Backend Developer",
      place: "NFTickit - Internship",
      desc: "Worked with OpenSeaAPI, developed new features for the company using TypeScript, GraphQL and NestJS. Developed the connection between OpenSeaAPI and the company, aswell as listing all NFTs for sale and letting users to create new offers in OpenSea website.",
      icon: <GraduationCap size={22} />,
      links: [],
    },
    {
      year: "25/03/2004",
      role: "The dream begins",
      place: "Rio de Janeiro, Brazil",
      desc: "Born in Rio de Janeiro, Brazil, I moved to Portugal at the age of 13. From a young age, I was fascinated by technology and computers, which sparked my passion for programming and software development. This early interest laid the foundation for my future career in tech.",
      icon: <Baby size={22} />,
      links: [],
    },
  ];

  return (
    <div className="about-container">
      <div className="content-wrapper">
        {/* Lado Esquerdo: Timeline */}
        <section>
          <h1
            style={{
              color: "#ff4d4d",
              fontSize: "3rem",
              marginBottom: "1rem",
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            Work Experience
          </h1>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="icon-wrapper">{exp.icon}</div>
                <span className="year">{exp.year}</span>
                <h3>{exp.role}</h3>
                <span className="company">{exp.place}</span>
                <p
                  style={{
                    color: "#dddddd",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                    fontFamily: "'Share Tech Mono', monospace",
                  }}
                >
                  {exp.desc}
                </p>

                {/* Botão de Link Adicionado Aqui */}
                {exp.links &&
                  exp.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-link"
                    >
                      {link?.icon ? (
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontFamily: "'Share Tech Mono', monospace",
                          }}
                        >
                          {link.icon}
                          {link.text}
                        </span>
                      ) : (
                        link.text
                      )}
                    </a>
                  ))}
              </div>
            ))}
          </div>
          <div
            style={{
              position: "relative",
              left: "17px",
              top: "-50px",
              width: "10px",
              height: "10px",
              backgroundColor: "#330707",
              borderRadius: "2px",
              marginLeft: "-2px",
            }}
          ></div>
        </section>

        <aside>
          <h2
            style={{
              color: "#ff4d4d",
              marginBottom: "1.5rem",
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            My Skills & Background
          </h2>
          <p
            style={{
              color: "#dddddd",
              marginBottom: "3rem",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              fontFamily: "'Share Tech Mono', monospace",
            }}
          >
            Native Portuguese speaker with advanced English proficiency. I have
            a proven track record in developing fullstack web applications using
            technologies such as Next.js, TypeScript, Express.js, Prisma,
            PostgreSQL, and the Solana blockchain, with a strong focus on
            implementing secure coding practices, ensuring data integrity, and
            building systems resilient against potential cyber threats. Outside
            of tech, I apply the same discipline as a high-level athlete, I'm a
            seven-time national champion water polo goalkeeper and have competed
            twice in the Champions League.
          </p>
          <table className="skills-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Tech & Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Security & Systems</td>
                <td>Linux, Docker, VirtualBox, Kali Linux, Bash, GitHub</td>
              </tr>
              <tr>
                <td>Backend & Database</td>
                <td>
                  Node.js, TypeScript, JavaScript, Express, C, C++, C#,
                  PostgreSQL, MySQL, NestJS, Prisma, Python, GraphQL
                </td>
              </tr>
              <tr>
                <td>Blockchain</td>
                <td>Solana</td>
              </tr>
              <tr>
                <td>Currently Studying</td>
                <td>
                  Reverse Engineering, Malware Analysis, CompTIA Security+
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div style={{ marginTop: '40px' }}>
            <h2 style={{ color: '#ff4d4d', marginBottom: '1rem' }}>Contacto</h2>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Github className="hover-red" cursor="pointer" />
              <Linkedin className="hover-red" cursor="pointer" />
              <Mail className="hover-red" cursor="pointer" />
            </div>
          </div> */}
        </aside>
      </div>
    </div>
  );
};

export default AboutMe;
