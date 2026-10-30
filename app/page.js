import SugarcaneGallery from "../components/SugarcaneGallery";

const EMAIL = "smabbas2562@gmail.com";
const CV = "/Syed_Muhammad_Abbas_Zaidi_CV.pdf";

const skills = [
  { title: ".NET and enterprise", items: ["C# and .NET", "X++ and Dynamics 365 F&O", "SQL Server and SSRS", "REST APIs and RBAC"] },
  { title: "Python and ML", items: ["TensorFlow and PyTorch", "OpenCV and Scikit-learn", "CNNs and LSTMs", "Remote sensing data"] },
  { title: "Foundations", items: ["Object-oriented design", "Data structures and algorithms", "Service-layer architecture", "Git"] },
];

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a href="#top" className="logo">Abbas Zaidi</a>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div>
            <p className="kicker">Computer science graduate, 2025</p>
            <h1>Syed Muhammad Abbas Zaidi</h1>
            <p className="sub">I build .NET business systems and Python machine learning models, from invoicing software to crop yield forecasting and medical image analysis.</p>
            <div className="btns">
              <a className="btn solid" href={CV} download>Download CV</a>
              <a className="btn" href="#projects">View projects</a>
            </div>
            <p className="meta">Based in Lahore, Pakistan</p>
          </div>
          <img className="portrait" src="/images/abbas.jpg" alt="Portrait of Syed Muhammad Abbas Zaidi" width="420" height="560" />
        </section>

        <section id="projects" className="wrap block">
          <h2>Projects</h2>

          <article className="project">
            <div className="text">
              <h3>InvoicePro: invoicing for a distribution business</h3>
              <p>A .NET business management system that handles products, customers and invoices, with a dashboard for revenue, pending payments and invoice status. It includes a dark mode and works in PKR.</p>
              <ul className="tags"><li>.NET</li><li>C#</li><li>SQL Server</li></ul>
            </div>
            <div className="frame"><div className="bar"><i /><i /><i /></div><img src="/images/invoice.png" alt="InvoicePro dashboard" loading="lazy" /></div>
          </article>

          <article className="project stack">
            <div className="text">
              <h3>Sugarcane yield prediction with remote sensing</h3>
              <p>My final year project. Satellite imagery gives vegetation indices such as NDVI, EVI and SAVI for each field. Python models, including an LSTM, use them to predict yield, and the web dashboard shows field maps, trends and the final prediction.</p>
              <ul className="tags"><li>Python</li><li>LSTM</li><li>Remote sensing</li><li>Data visualization</li></ul>
            </div>
            <SugarcaneGallery />
          </article>

          <article className="project">
            <div className="text">
              <h3>Kidney stone and tumor detection with CNN</h3>
              <p>A convolutional neural network built in TensorFlow that classifies CT and X-ray images. OpenCV preprocessing and data augmentation improved accuracy. The image shows a CT slice with the detected regions highlighted.</p>
              <ul className="tags"><li>Python</li><li>TensorFlow</li><li>OpenCV</li><li>CNN</li></ul>
            </div>
            <figure className="scanfig">
              <img src="/images/ct-scan.png" alt="CT slice with kidney regions highlighted in red and blue" loading="lazy" />
            </figure>
          </article>
        </section>

        <section id="experience" className="wrap block">
          <h2>Experience</h2>
          <div className="job">
            <div className="when">Oct 2025 – Mar 2026</div>
            <div>
              <h3>Software Developer, Dynatuners</h3>
              <ul>
                <li>Built and customized backend modules for an enterprise ERP system using X++ and .NET.</li>
                <li>Created SSRS reports and optimized SQL Server queries for business data.</li>
                <li>Completed formal training in enterprise architecture and systems integration.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <div className="when">Aug – Sep 2025</div>
            <div>
              <h3>Backend Development Intern</h3>
              <ul>
                <li>Built REST APIs using service-layer architecture and DTO patterns.</li>
                <li>Implemented authentication and role-based access control.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <div className="when">2021 – 2025</div>
            <div>
              <h3>BS Computer Science, University of Management and Technology</h3>
              <ul><li>CGPA 3.02. Coursework in machine learning, computer vision, databases and algorithms.</li></ul>
            </div>
          </div>
        </section>

        <section id="skills" className="wrap block">
          <h2>Skills</h2>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.title}><h3>{g.title}</h3><ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <section id="cv" className="wrap block">
          <div className="cv">
            <div>
              <h2>Download my CV</h2>
              <p>A one-page, ATS-friendly PDF with my experience, projects and education.</p>
            </div>
            <a className="btn solid" href={CV} download>Download CV (PDF)</a>
          </div>
        </section>

        <section id="contact" className="wrap block">
          <h2>Contact</h2>
          <p className="sub">I’m open to .NET and Python roles. The quickest way to reach me is email.</p>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="links">
            <a href="https://github.com/abbas2562">GitHub</a>
            <a href="https://linkedin.com/in/muhammad-abbas">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="wrap">© 2026 Syed Muhammad Abbas Zaidi</footer>
    </>
  );
}
