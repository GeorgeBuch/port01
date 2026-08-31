import { SiamCheerfulDemo } from "./SiamCheerfulDemo";

const primarySkills = ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL"];

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Interfaces that stay clear, responsive, and easy to use.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend & Data",
    description: "Practical APIs and data flows built for real product needs.",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Python"],
  },
  {
    number: "03",
    title: "Workflow",
    description: "A collaborative toolset for shipping, testing, and improving.",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Debugging"],
  },
];

const projectFeatures = [
  { number: "01", title: "Discover", text: "Product browsing, search, filters, and clear product detail flows." },
  { number: "02", title: "Purchase", text: "Cart, checkout, customer accounts, order tracking, and management." },
  { number: "03", title: "Operate", text: "A practical admin layer for core store and order workflows." },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Wisit Prasinthong home">
          WP<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Journey</a>
          <a className="nav-cta" href="mailto:wps.wisit@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy" id="main-content">
          <p className="eyebrow"><span className="status-dot" /> Available for junior opportunities</p>
          <h1 id="hero-title">
            I build useful things
            <span>for the web.</span>
          </h1>
          <p className="intro">
            I&apos;m <strong>Wisit Prasinthong</strong>, a junior full-stack developer in Bangkok turning ideas into thoughtful, reliable digital products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:wps.wisit@gmail.com">wps.wisit@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-contact" aria-label="Contact details">
            <span>Bangkok, Thailand</span>
            <a href="tel:+66972589862">(+66) 97 258 9862</a>
            <a href="https://github.com/GeorgeBuch" target="_blank" rel="noreferrer">github.com/GeorgeBuch ↗</a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Developer profile summary">
          <div className="card-topline"><span>01 / PROFILE</span><span>BKK — TH</span></div>
          <div className="monogram" aria-hidden="true">W</div>
          <div className="profile-visual" role="img" aria-label="Graphic WP profile mark — photo-ready profile area">
            <span>WP</span><i>PROFILE</i>
          </div>
          <div className="profile-card-copy">
            <p className="role">Junior Full-Stack Developer</p>
            <p className="stack-label">CURRENT STACK</p>
            <div className="skill-pills">
              {primarySkills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-label="Core strengths">
        <span>DESIGN MINDED</span><i>✦</i><span>FULL-STACK</span><i>✦</i><span>PROBLEM SOLVER</span><i>✦</i><span>READY TO LEARN</span>
      </div>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <header className="section-heading">
          <p>02 / ABOUT</p>
          <p>BANGKOK, THAILAND</p>
        </header>
        <div className="about-grid">
          <h2 id="about-title">Business-aware.<br /><em>Product-minded.</em></h2>
          <div className="about-copy">
            <p className="lead">I&apos;m building a new chapter in software through Generation Thailand&apos;s JSD13 bootcamp, focused on the MERN stack, REST APIs, and team-based product delivery.</p>
            <p>My earlier work in content creation and video editing taught me how to listen closely, turn feedback into better work, own every detail, and deliver on a deadline. Studying finance adds a practical business lens to how I think about products and their users.</p>
          </div>
        </div>
        <div className="fact-row" aria-label="Profile highlights">
          <div><span>MERN</span><p>Current focus</p></div>
          <div><span>JSD13</span><p>Generation Thailand</p></div>
          <div><span>TH · EN</span><p>Thai native · English B1</p></div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section work-inner">
          <header className="section-heading light-heading">
            <p>03 / SELECTED WORK</p>
            <p>FEATURED PROJECT</p>
          </header>

          <div className="project-intro">
            <div>
              <span className="project-status"><i /> In development · 2026</span>
              <h2 id="work-title">Siam Cheerful</h2>
              <p className="project-subtitle">A full-stack e-commerce platform designed around the complete customer journey — from discovery to delivery.</p>
            </div>
            <div className="project-actions">
              <a className="button button-acid" href="#project-demo">Try live demo <span aria-hidden="true">↓</span></a>
              <a className="button button-light" href="https://github.com/GeorgeBuch/port01" target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="project-window" aria-label="Siam Cheerful project overview">
            <div className="window-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>siam-cheerful / concept preview</span><span>MERN / 01</span></div>
            <div className="window-body">
              <div className="project-mark" aria-hidden="true">SC<span>+</span></div>
              <div className="project-statement">
                <span>THE CHALLENGE</span>
                <p>Connect a smooth shopping experience with the practical tools customers and store operators need behind it.</p>
              </div>
            </div>
            <div className="feature-grid">
              {projectFeatures.map((feature) => (
                <article key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>

          <SiamCheerfulDemo />

          <div className="project-gallery" id="project-gallery" aria-labelledby="gallery-title">
            <div className="gallery-heading">
              <div><p>PROJECT SCREENSHOTS</p><h3 id="gallery-title">Three views of the product journey.</h3></div>
              <span>CONCEPT UI · IN DEVELOPMENT</span>
            </div>
            <figure className="live-capture">
              <img src="/siam-cheerful-live-demo.png" alt="Captured screenshot of the interactive Siam Cheerful storefront demo" />
              <figcaption><span>Captured from the functioning portfolio demo · 2026</span><a href="/siam-cheerful-live-demo.png" target="_blank" rel="noreferrer">Open full screenshot ↗</a></figcaption>
            </figure>
            <div className="shot-grid">
              <figure className="project-shot storefront-shot">
                <div className="shot-browser"><span><i /><i /><i /></span><small>STORE / DISCOVER</small></div>
                <div className="shot-body"><strong>SIAM<span>+</span></strong><h4>Small joys,<br />made useful.</h4><div className="shot-products"><i /><i /><i /></div></div>
                <figcaption><span>01</span><p>Storefront & filtering</p></figcaption>
              </figure>
              <figure className="project-shot detail-shot">
                <div className="shot-browser"><span><i /><i /><i /></span><small>PRODUCT / DETAIL</small></div>
                <div className="shot-body"><div className="shot-product-art"><i /></div><div><small>APPAREL</small><h4>Everyday Tee</h4><strong>THB 590</strong><button type="button" tabIndex={-1}>ADD TO CART</button></div></div>
                <figcaption><span>02</span><p>Product decision</p></figcaption>
              </figure>
              <figure className="project-shot admin-shot">
                <div className="shot-browser"><span><i /><i /><i /></span><small>ADMIN / ORDERS</small></div>
                <div className="shot-body"><aside><strong>SC+</strong><i /><i /><i /></aside><div><small>TODAY</small><h4>12 orders</h4><div className="order-bars"><i /><i /><i /><i /></div></div></div>
                <figcaption><span>03</span><p>Order operations</p></figcaption>
              </figure>
            </div>
          </div>

          <div className="project-proof-grid">
            <article>
              <span>COLLABORATION</span>
              <h3>Built in a team-learning environment.</h3>
              <p>Wisit contributes as a full-stack learner in Generation Thailand&apos;s JSD13 final-project track. Individual collaborator names will be added after the final team roster is confirmed.</p>
            </article>
            <article className="project-links-card">
              <span>PROJECT LINKS</span>
              <a href="#project-demo"><strong>Interactive demo</strong><i>LIVE ON THIS PAGE ↓</i></a>
              <a href="#project-demo"><strong>Walkthrough player</strong><i>3-STEP AUTO PLAY ↓</i></a>
              <a href="/siam-cheerful-live-demo.png" target="_blank" rel="noreferrer"><strong>Demo screenshot</strong><i>OPEN PNG ↗</i></a>
              <a href="#project-gallery"><strong>UI gallery</strong><i>3 CONCEPT VIEWS ↓</i></a>
              <a href="/siam-cheerful-demo-source.zip" download><strong>Source snapshot</strong><i>DOWNLOAD ZIP ↓</i></a>
              <a href="https://github.com/GeorgeBuch/port01" target="_blank" rel="noreferrer"><strong>Source repository</strong><i>OPEN GITHUB ↗</i></a>
              <a href="https://wisit-prasinthong.buthza741.chatgpt.site" target="_blank" rel="noreferrer"><strong>Deployed portfolio</strong><i>OPEN LIVE SITE ↗</i></a>
            </article>
          </div>

          <div className="project-footer">
            <p>BUILT WITH</p>
            <div className="dark-tags">
              {["React", "Node.js", "Express.js", "MongoDB", "REST API", "Git"].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" aria-labelledby="skills-title">
        <header className="section-heading">
          <p>04 / CAPABILITIES</p>
          <p>WHAT I WORK WITH</p>
        </header>
        <div className="skills-title-row">
          <h2 id="skills-title">Tools are only useful<br />when they <em>solve something.</em></h2>
          <p>I&apos;m developing a balanced toolkit across interface, server, data, and team delivery — always with the user and the problem in view.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="light-tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="strength-strip">
          <p>HOW I WORK</p>
          <div>{["Ownership", "Teamwork", "Communication", "Adaptability", "Time management"].map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="journey-section" id="experience" aria-labelledby="journey-title">
        <div className="section journey-inner">
          <header className="section-heading">
            <p>05 / JOURNEY</p>
            <p>LEARNING BY DOING</p>
          </header>
          <div className="journey-grid">
            <div>
              <h2 id="journey-title">A creative path<br />into <em>code.</em></h2>
              <p className="journey-intro">Different chapters, one common thread: learning fast, taking responsibility, and making the work better.</p>
            </div>
            <div className="timeline">
              <article>
                <div className="timeline-date"><span>2026</span><p>Jun — Oct<br />Expected</p></div>
                <div>
                  <p className="timeline-kicker">GENERATION THAILAND</p>
                  <h3>Junior Software Developer Bootcamp</h3>
                  <p>Building full-stack applications, REST APIs, responsive interfaces, and collaborative Git workflows through hands-on team projects.</p>
                </div>
              </article>
              <article className="certification-entry">
                <div className="timeline-date"><span>CERT</span><p>Expected<br />Oct 2026</p></div>
                <div>
                  <p className="timeline-kicker">GENERATION THAILAND · JSD13</p>
                  <h3>Junior Software Developer Certification Track</h3>
                  <p>Certification is currently in progress and will be linked here after successful bootcamp completion and official issue.</p>
                  <span className="cert-status"><i /> In progress</span>
                </div>
              </article>
              <article>
                <div className="timeline-date"><span>2025</span><p>Jan — Dec</p></div>
                <div>
                  <p className="timeline-kicker">SELF-EMPLOYED</p>
                  <h3>Content Creator & Video Editor</h3>
                  <p>Planned content, edited short-form video, wrote copy, managed social pages, and coordinated feedback across multiple client deliverables.</p>
                </div>
              </article>
              <article>
                <div className="timeline-date"><span>NOW</span><p>Sep 2025<br />— Present</p></div>
                <div>
                  <p className="timeline-kicker">SUKHOTHAI THAMMATHIRAT OPEN UNIVERSITY</p>
                  <h3>B.B.A. in Finance</h3>
                  <p>Developing a broader understanding of business, value, and decision-making alongside software development.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit" aria-hidden="true"><span>LET&apos;S BUILD · LET&apos;S LEARN · LET&apos;S BUILD · </span></div>
        <p className="contact-label">06 / START A CONVERSATION</p>
        <h2 id="contact-title">Have a place for a<br /><em>curious builder?</em></h2>
        <p>I&apos;m looking for a junior software developer opportunity where I can contribute, learn from a strong team, and keep improving through real work.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:wps.wisit@gmail.com">Send me an email <span aria-hidden="true">↗</span></a>
          <a className="button button-outline" href="/wisit-prasinthong-resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <footer>
        <a className="footer-name" href="#top">WISIT<br />PRASINTHONG<span>.</span></a>
        <div className="footer-links">
          <div><p>CONTACT</p><a href="mailto:wps.wisit@gmail.com">wps.wisit@gmail.com</a><a href="tel:+66972589862">(+66) 97 258 9862</a></div>
          <div><p>ONLINE</p><a href="https://github.com/GeorgeBuch" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#project-demo">Project demo ↓</a><a href="/wisit-prasinthong-resume.pdf" download>Resume ↓</a></div>
          <div><p>LOCATION</p><span>Bangkok, Thailand</span><span>UTC +7</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Wisit Prasinthong</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
