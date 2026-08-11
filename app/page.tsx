const Arrow = () => <span aria-hidden="true">↗</span>;

const practiceAreas = [
  { n: "01", title: "Immigration Law", text: "Clear, strategic guidance for families, professionals, and businesses navigating complex immigration matters." },
  { n: "02", title: "Criminal Defense", text: "Resolute advocacy and careful preparation when your freedom, reputation, and future are at stake." },
  { n: "03", title: "Family Law", text: "Steady counsel through divorce, custody, support, and other deeply personal family transitions." },
  { n: "04", title: "Business & Civil Matters", text: "Practical legal solutions for contracts, disputes, business formation, and civil litigation." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tejan-Jalloh and Fode M Dabor home">
          <img src="/logo.png" alt="The Law Firm of Tejan-Jalloh and Fode M Dabor" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">The Firm</a><a href="#practice">Practice Areas</a><a href="#attorneys">Attorneys</a><a href="#insights">Insights</a>
        </nav>
        <a className="header-cta" href="#contact">Schedule a consultation <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2200&q=90" alt="Classic columns of a courthouse" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Experienced counsel · Personal commitment</p>
          <h1>Justice deserves<br/><em>more than a voice.</em></h1>
          <p className="hero-copy">It deserves preparation, perspective, and advocates who understand what is at stake.</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Discuss your matter <Arrow /></a>
            <a className="text-link" href="#practice">Explore our practice <span>↓</span></a>
          </div>
        </div>
        <aside className="hero-note"><span>Our commitment</span><p>Thoughtful counsel.<br/>Formidable advocacy.<br/>Lasting trust.</p></aside>
        <div className="scroll-mark"><span>Scroll to discover</span><i /></div>
      </section>

      <section className="intro" id="about">
        <div className="section-label"><span>01</span> The firm</div>
        <div className="intro-main">
          <p className="kicker">Rooted in principle. Focused on people.</p>
          <h2>Legal counsel should bring <em>clarity</em> to life’s most consequential moments.</h2>
          <div className="intro-copy"><p>At The Law Firm of Tejan-Jalloh &amp; Fode M Dabor, we combine rigorous legal thinking with the kind of personal attention that builds confidence. Every matter receives our full focus.</p><a className="blue-link" href="#attorneys">Discover our approach <Arrow /></a></div>
        </div>
      </section>

      <section className="practice" id="practice">
        <div className="practice-heading"><div><p className="eyebrow">How we can help</p><h2>Experience where<br/>it matters most.</h2></div><p>We provide clear strategy, candid advice, and determined representation across a considered range of legal matters.</p></div>
        <div className="practice-grid">
          {practiceAreas.map((area) => <article key={area.n}><span className="num">{area.n}</span><div className="legal-icon">§</div><h3>{area.title}</h3><p>{area.text}</p><a href="#contact" aria-label={`Learn about ${area.title}`}><Arrow /></a></article>)}
        </div>
      </section>

      <section className="story" id="attorneys">
        <div className="story-images">
          <img className="story-primary" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=90" alt="Legal professionals meeting with a client" />
          <div className="experience"><strong>25+</strong><span>Years of combined<br/>legal experience</span></div>
        </div>
        <div className="story-copy"><p className="eyebrow">Counsel you can count on</p><h2>Two advocates.<br/>One unwavering<br/><em>standard.</em></h2><p>We founded our firm on a simple belief: excellent representation starts with listening. We learn the full story, identify what matters most, and build a legal strategy designed around your goals.</p><blockquote>“Our clients are never case numbers. They are people placing their trust in us—and we honor that trust in every decision.”</blockquote><a className="button dark" href="#contact">Meet our attorneys <Arrow /></a></div>
      </section>

      <section className="values" id="insights">
        <p className="eyebrow light">Why clients choose us</p><h2>Built for the moments<br/>that shape what comes next.</h2>
        <div className="values-grid"><div><b>01</b><h3>Direct access</h3><p>You work with your attorneys—not layers of intermediaries.</p></div><div><b>02</b><h3>Honest perspective</h3><p>Clear counsel grounded in the facts, the law, and your priorities.</p></div><div><b>03</b><h3>Relentless preparation</h3><p>Every detail considered. Every argument purposefully built.</p></div></div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow">Start a conversation</p><h2>Your next step<br/>starts with <em>clarity.</em></h2></div>
        <div className="contact-card"><p>Tell us briefly how we can help. All inquiries are treated with discretion.</p><a className="button primary" href="mailto:consultations@example.com">Request a consultation <Arrow /></a><small>Or call us directly: <strong>(000) 000-0000</strong></small></div>
      </section>

      <footer>
        <div className="footer-top"><div className="footer-brand"><img src="/logo.png" alt="The Law Firm of Tejan-Jalloh and Fode M Dabor"/><p>Thoughtful counsel.<br/>Formidable advocacy.</p></div><div><h4>Explore</h4><a href="#about">The Firm</a><a href="#practice">Practice Areas</a><a href="#attorneys">Attorneys</a><a href="#insights">Insights</a></div><div><h4>Practice Areas</h4><a href="#practice">Immigration Law</a><a href="#practice">Criminal Defense</a><a href="#practice">Family Law</a><a href="#practice">Business &amp; Civil Matters</a></div><div><h4>Contact</h4><p>123 Justice Avenue<br/>Suite 400<br/>Your City, ST 00000</p><a href="tel:+10000000000">(000) 000-0000</a><a href="mailto:info@example.com">info@example.com</a></div></div>
        <div className="footer-bottom"><span>© 2026 The Law Firm of Tejan-Jalloh &amp; Fode M Dabor. All rights reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Legal Disclaimer</a><a href="#top">Back to top ↑</a></div></div>
      </footer>
    </main>
  );
}
