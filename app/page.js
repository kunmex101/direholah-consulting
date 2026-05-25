export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7fb", color: "#111" }}>
      <nav style={{ padding: "25px 60px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "white" }}>
        <h2 style={{ color: "#0a4ea3" }}>Direholah Consulting</h2>
        <div style={{ display: "flex", gap: "25px", fontWeight: "bold" }}>
          <a href="#services" style={{ color: "#333", textDecoration: "none" }}>Services</a>
          <a href="#about" style={{ color: "#333", textDecoration: "none" }}>About</a>
          <a href="mailto:admin@direholahconsulting.com" style={{ color: "#0a4ea3", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "100px 20px 70px" }}>
        <h1 style={{ fontSize: "60px", color: "#0a4ea3", marginBottom: "20px" }}>
          Direholah Consulting
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          Empowering businesses through technology, consulting, innovation, and digital transformation.
        </p>
        <div style={{ marginTop: "40px" }}>
          <a href="mailto:admin@direholahconsulting.com" style={{ background: "#0a4ea3", color: "white", padding: "16px 35px", borderRadius: "8px", textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>
            Contact Us
          </a>
        </div>
      </section>

      <section id="services" style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
        {[
          ["IT Consulting", "Professional technology solutions for businesses, organizations, and startups."],
          ["Business Strategy", "Helping businesses improve operations, growth, and digital transformation strategies."],
          ["Project Management", "Organized and efficient project planning, execution, reporting, and delivery support."]
        ].map(([title, text]) => (
          <div key={title} style={{ background: "white", padding: "30px", borderRadius: "12px", boxShadow: "0 3px 12px rgba(0,0,0,0.1)" }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section id="about" style={{ maxWidth: "900px", margin: "80px auto", padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", color: "#0a4ea3", marginBottom: "20px" }}>About Direholah Consulting</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
          Direholah Consulting supports individuals, businesses, churches, startups, and community organizations with practical consulting, technology, project management, and digital transformation solutions.
        </p>
      </section>

      <footer style={{ background: "#0a4ea3", color: "white", textAlign: "center", padding: "30px 20px" }}>
        <p>© 2026 Direholah Consulting. All rights reserved.</p>
        <p>admin@direholahconsulting.com</p>
      </footer>
    </main>
  );
}
