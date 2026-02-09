import React, { useEffect, useState } from 'react';
import profileImage from '../assets/profile.png';
import aboutImage from '../assets/aboutme.png';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiPostman,
} from "react-icons/si";

const iconSkills = [
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiSupabase, name: "Supabase" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiGitlab, name: "GitLab" },
  { Icon: SiJenkins, name: "Jenkins" },
  { Icon: SiPostman, name: "Postman" },
];

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Screens Developed', value: '70+' },
  { label: 'Efficiency Gain', value: '95%' },
];

const skills = {
  technical: [
    'JavaScript',
    'React JS',
    'React redux',
    'React hooks',
    'TypeScript',
    'Tailwind CSS',
    'HTML',
    'MySQL',
    'NestJS',
    'Python',
    'C',
    'Node JS',
    'Express JS',
    'Supabase',
    'Git',
    'GitHub',
    'GitLab',
    'Bitbucket',
    'Bastillion',
    'Jenkins',
    'Jira',
    'Postman',
  ],
  soft: [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Logical Thinking',
    'Self Learning',
  ],
};

const projects = [
  {
    name: 'Connect Together',
    category: 'Realtime Chat',
    description: 'Room-based chat app with private messaging.',
    image:
      'https://unsplash.com/photos/BlWbfrQrI5k/download?force=true',
  },
  {
    name: 'Dynamic Form Generator',
    category: 'Productivity Tool',
    description: 'JSONB-driven form builder with validation.',
    image:
      'https://images.pexels.com/photos/6169648/pexels-photo-6169648.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6169648.jpg&fm=jpg',
  },
  {
    name: 'Query Solving Website',
    category: 'Education Platform',
    description: 'Dual login Q&A platform for learners.',
    image:
      'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=pexels-pixabay-356079.jpg&fm=jpg',
  },
  {
    name: 'Admin Workflows',
    category: 'Back Office',
    description: 'Automation dashboards for operations.',
    image:
      'https://images.pexels.com/photos/32396570/pexels-photo-32396570.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-32396570.jpg&fm=jpg',
  },
];

const experience = [
  {
    role: 'Software Developer',
    company: 'Techved Consulting PVT LTD',
    meta: 'Mumbai · Jan 2024 – Present',
    summary:
      'Developed a back-office system, reducing manual workload by 95% for customer handling.Executed two complex administrative projects with 700–1000 Figma screens.Optimized backend performance with virtual queries, Excel exports, and marketing modules.',
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Sumeru Software Solutions',
    meta: 'Bangalore · Jan 2023 – Dec 2023',
    summary:
      'Built customer-facing pages and integrated APIs for a fast-paced web delivery cycle.',
  },
  {
    role: 'Java Full Stack Developer Intern',
    company: 'Blackbucks',
    meta: 'Hyderabad · Aug 2022 – Sep 2022',
    summary:
      'Trained in Java/J2EE and delivered a query-solving web application.',
  },
];

export default function Portfolio() {
  const typingText = "I'm a Software Developer";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');


  useEffect(() => {
    let rafId = 0;

    const handleMove = (event: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      const x = event.clientX;
      const y = event.clientY;

      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', `${x}px`);
        document.documentElement.style.setProperty('--my', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="portfolio">
      <header className="hero" id="home">
        <div className="hero__glow" aria-hidden="true" />
        <span className="hero__dot" aria-hidden="true" />
        <nav className="nav">
          <div className="nav__logo">
            <span className="nav__icon">R</span>
            <span className="nav__brand">Revathi Satya Sushma</span>
          </div>
          <div className="nav__links">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav__cta" href="/Revathi-Satya-Sushma-Resume.pdf" download="Resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </nav>

        <div className="hero__content">
          <div className="hero__text">
            <span className="pill pill--soft">Revathi Satya Sushma</span>
            <h1>
              Hey! I&apos;m Revathi
              <span className="accent">
                <span
                  className="typing"
                  style={{ ['--chars' as any]: typingText.length }}
                >
                  {typingText}
                </span>
              </span>
            </h1>
            <p>
              I build end-to-end web applications, from intuitive user interfaces to scalable backend systems.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#contact">
                Let&apos;s Talk
              </a>
              <div className="hero__socials">
                <a href="mailto:satyasushma.2610@gmail.com">G</a>
                <a href="https://linkedin.com/in/v-revathi-satya-sushma">in</a>
                <a href="#projects">P</a>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__rings" aria-hidden="true" />
            <div className="hero__image-card">
              <img src={profileImage} alt="Revathi Satya Sushma" />
            </div>
          </div>
        </div>

      </header>

      <section className="section about" id="about">
        <div className="about__media">
          <div className="about__frame">
            <img src={aboutImage} alt="Revathi Satya Sushma" />
          </div>

        </div>
        <div className="about__content">
          <span className="pill">About Me</span>

          <p>
            Dynamic software developer with 2+ years of hands-on experience in building scalable, user-focused applications across the full stack. An AI enthusiast with strong expertise in application development, data structures, and problem-solving, driven by a passion for writing clean, efficient, and maintainable code.
            <br />
            <p>A clear communicator and proactive mentor who enjoys collaborating with cross-functional teams, contributing to code reviews, and sharing knowledge to elevate overall team quality. Experienced in agile environments, comfortable owning features end-to-end, and continuously learning to stay aligned with evolving technologies. Eager to contribute to impactful, high-quality products that emphasize innovation, performance, and real-world value.
            </p>
          </p>
          <div className="stats">
            {stats.map((item) => (
              <div key={item.label} className="stat">
                <span className="stat__value">{item.value}</span>
                <span className="stat__label">{item.label}</span>
              </div>
            ))}
          </div>
          <a
            className="btn btn--primary"
            href="/Resume_exp%20(1).pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section__title">
          <span className="pill">My Work</span>
          <h2>Recent Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-card__image">
                <img src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.category}</p>
                <span>{project.description}</span>
              </div>

            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section__title">
          <span className="pill">Skills</span>
          <h2>Technical stack & strengths</h2>
        </div>
        <div className="skills__grid">
          <article className="skill-card">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              {skills.technical.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
          <article className="skill-card">
            <h3>Soft Skills</h3>
            <div className="skill-tags skill-tags--soft">
              {skills.soft.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
        <div className="skills__marquee">
          <div className="skills__marquee-track">
            {[...iconSkills, ...iconSkills].map(({ Icon, name }, index) => (
              <div className="skill-icon" key={`${name}-${index}`}>
                <Icon />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>  
      </section>

      <section className="section experience" id="experience">
        <div className="section__title">
          <span className="pill">Experience</span>
          <h2>My Work Experience</h2>
        </div>
        <div className="experience__list">
          {experience.map((item) => (
            <div key={item.role} className="experience__row">
              <div className="experience__card">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.meta}</span>
                <button className="pill pill--solid">Full Time</button>
              </div>
              <div className="experience__details">
                <h4>About the role</h4>
                <p>{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact__card">

          {/* LEFT SIDE */}
          <div className="contact__content">
            <div className="contact__header">
              <h2>
                Let’s Build
                <span className="contact__title-accent">Something Great</span>
              </h2>

              <p>I’m actively open to new roles and freelance work.</p>

              <p>
                I focus on writing clean, maintainable code and shipping features that
                actually get used. If you’re looking for a dependable developer who’s
                easy to work with, let’s talk.
              </p>

              <span className="contact__dot" aria-hidden="true" />

              <div className="contact__socials">
                <a href="mailto:satyasushma.2610@gmail.com" aria-label="Email">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 4.8 8-4.8V8H4zm16 8V10l-8 4.8L4 10v6h16z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/v-revathi-satya-sushma"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6 9H3v12h3V9zm-1.5-6A1.5 1.5 0 1 0 4.5 6a1.5 1.5 0 0 0 0-3zM21 14.5c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3.1 1.1-3.6 1.9V9H10v12h3v-6.3c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 2 2.1 3.4V21h3v-6.5z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                placeholder="Your message *"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <div className="contact__actions">
              <button className="btn btn--primary" type="submit">
                {formStatus === 'sending' ? 'Sending...' : 'Send Mail'}
              </button>
            </div>

            {formStatus === 'sent' && (
              <p className="contact__status success">
                Thanks! Your message has been sent.
              </p>
            )}

            {formStatus === 'error' && (
              <p className="contact__status error">
                Sorry, something went wrong. Please try again.
              </p>
            )}
          </form>

        </div>
      </section>

    </div>
  );
}
