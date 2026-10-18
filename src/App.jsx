import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Workflow,
  Layers3,
  Terminal,
  Sparkles,
} from "lucide-react";

const skills = [
  "Oracle APEX",
  "SQL",
  "Python",
  "JavaScript",
  "React",
  "HTML & CSS",
  "Git",
  "Process Automation",
  "Data Visualisation",
  "Enterprise Applications",
];

const projects = [
  {
    number: "01",
    title: "My digital home",
    category: "WEB DEVELOPMENT",
    description:
      "A personal portfolio built to bring together my work, the things I am learning, and the kind of digital solutions I want to create.",
    technologies: ["React", "JavaScript", "CSS"],
    icon: Code2,
    status: "IN PROGRESS",
  },
  {
    number: "02",
    title: "Procurement insights",
    category: "DATA & ANALYTICS",
    description:
      "A concept for making operational and procurement information easier to explore, understand, and use when making decisions.",
    technologies: ["SQL", "Python", "Dashboards"],
    icon: Database,
    status: "CONCEPT",
  },
  {
    number: "03",
    title: "Smarter workflows",
    category: "AUTOMATION",
    description:
      "Exploring ways to simplify repetitive work with digital workflows that save time and make everyday processes more consistent.",
    technologies: ["Automation", "Oracle APEX", "SQL"],
    icon: Workflow,
    status: "EXPLORING",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Olwethu home">
          okw<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div id="primary-navigation" className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>What I do</a>
          <a href="#projects" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>
            Say hello <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="pulse-dot" />
            <span>TECHNOLOGY WITH PURPOSE</span>
          </div>

          <p className="eyebrow">HELLO, I'M OLWETHU</p>
          <h1>
            Curious mind.
            <br />
            <span>Practical builder.</span>
          </h1>
          <h2>
            I make technology feel a little more <span className="accent-text">human.</span>
          </h2>
          <p className="hero-description">
            I work where business processes meet technology — creating enterprise applications,
            useful dashboards, and automations that help people work smarter.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a href="#about" className="button-secondary">
              A little about me <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/olwethukodes" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Code2 size={19} /> <span>GitHub</span>
            </a>
            <a href="mailto:khuzwayolwethu@gmail.com" aria-label="Email Olwethu">
              <Mail size={18} /> <span>Email</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="A snapshot of my approach to development">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="note-card">
            <div className="note-topline"><Sparkles size={17} /><span>A NOTE TO SELF</span></div>
            <p>Make it useful.<br />Make it clear.<br /><em>Make it matter.</em></p>
            <div className="note-footer"><span>OLWETHU'S WORKING PHILOSOPHY</span><span>✳</span></div>
          </div>
          <div className="mini-card mini-card-top">
            <span className="mini-icon"><Layers3 size={17} /></span>
            <span><strong>Ideas → impact</strong><small>Turning processes into tools</small></span>
          </div>
          <div className="mini-card mini-card-bottom">
            <span className="mini-status" />
            <span><strong>Currently building</strong><small>Digital solutions at BMW</small></span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN SOUTH AFRICA</span>
          <a href="#about">A BIT MORE ABOUT ME <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="about section-container" id="about">
        <div className="section-label"><span>01 / THE PERSON BEHIND THE SCREEN</span><div /></div>
        <div className="about-grid">
          <div>
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <h2>Technology is the tool.<br /><span>People are the point.</span></h2>
          </div>
          <div className="about-text">
            <p>
              I'm Olwethu Khuzwayo, an IT professional who enjoys making complicated things feel
              simpler. I’m interested in the space between a business problem and a digital solution:
              understanding what people need, then building something practical around it.
            </p>
            <p>
              My work touches enterprise application development, data, dashboards, and process
              automation. I care about solutions that are not just clever technically, but genuinely
              useful to the people who rely on them.
            </p>
            <p className="personal-note"><span>What keeps me curious?</span> Finding a better way to do something that has always been done the same way.</p>
          </div>
        </div>
      </section>

      <section className="skills section-container" id="skills">
        <div className="section-label"><span>02 / MY TOOLKIT</span><div /></div>
        <div className="skills-heading">
          <div><p className="eyebrow">THE THINGS I WORK WITH</p><h2>Curiosity, backed by code.</h2></div>
          <p>A growing toolkit for building useful digital experiences and improving everyday processes.</p>
        </div>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <span className="skill-tag" key={skill}>
              <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>{skill}
            </span>
          ))}
        </div>
      </section>

      <section className="projects section-container" id="projects">
        <div className="section-label"><span>03 / SELECTED IDEAS</span><div /></div>
        <div className="projects-heading">
          <div><p className="eyebrow">WORK IN PROGRESS, ALWAYS</p><h2>Ideas deserve to be built.</h2></div>
          <p>A few areas I’m exploring through software, data, and thoughtful automation.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number} / IDEA</span><Icon size={22} strokeWidth={1.7} /></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <div className="project-footer"><span className="project-status">{project.status}</span><ArrowUpRight size={18} /></div>
              </article>
            );
          })}
        </div>
        <p className="projects-footnote">Some of these are concepts and works in progress, not finished client projects.</p>
      </section>

      <section className="experience section-container" id="experience">
        <div className="section-label"><span>04 / THE JOURNEY SO FAR</span><div /></div>
        <p className="eyebrow">LEARNING BY DOING</p>
        <h2>Where business meets technology.</h2>
        <div className="experience-item">
          <div className="experience-date">APR 2026 — PRESENT</div>
          <div>
            <h3>BMW Plant Rosslyn</h3>
            <p className="experience-role">Purchasing & Supply Chain · Digitalization</p>
            <p>Creating enterprise applications, dashboards, and process automations that support digitalization across the Purchasing and Supply Chain environment.</p>
            <div className="experience-tags"><span>Oracle APEX</span><span>SQL</span><span>Python</span><span>JavaScript</span></div>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-date">UNTIL MAR 2026</div>
          <div>
            <h3>Transnet</h3>
            <p className="experience-role">Previous professional experience</p>
            <p>An earlier chapter in my professional journey that helped shape my experience working with technology and business environments.</p>
          </div>
        </div>
      </section>

      <section className="contact section-container" id="contact">
        <div className="section-label"><span>05 / LET'S CONNECT</span><div /></div>
        <p className="eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
        <h2>Have a thoughtful idea?<br /><span>Let's make it real.</span></h2>
        <p className="contact-description">I’m always happy to connect about technology, creative problem-solving, and opportunities to build something meaningful.</p>
        <a href="mailto:khuzwayolwethu@gmail.com" className="button-primary">Send me an email <ArrowUpRight size={18} /></a>
        <div className="contact-links">
          <a href="https://github.com/olwethukodes" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">okw<span>.</span></a>
        <p>Made with intention by Olwethu Khuzwayo · 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
