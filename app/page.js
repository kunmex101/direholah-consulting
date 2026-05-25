export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(to bottom, #f4f6f9, #dbeafe)" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: "white", position: "sticky", top: 0, zIndex: 100 }}>
        <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>
        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "140px 20px", background: "linear-gradient(135deg, #0b4ea2, #2563eb)", color: "white" }}>
        <h1 style={{ fontSize: "72px", color: "white", marginBottom: "20px" }}>Direholah Consulting</h1>
        <p style={{ fontSize: "28px", maxWidth: "1000px", margin: "0 auto", lineHeight: "1.6" }}>
          Empowering businesses through technology, consulting, innovation, automation, and digital transformation.
        </p>
        <a href="https://wa.me/14379980391" target="_blank" style={{ display: "inline-block", marginTop: "40px", padding: "18px 40px", fontSize: "22px", background: "white", color: "#0b4ea2", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}>
          Book a Consultation
        </a>
      </section>

      <section id="services" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "70px 40px" }}>
        {[
          ["IT Consulting", "Technology solutions for businesses, startups, and organizations."],
          ["Power Platform", "Power Apps, Power Automate, SharePoint, and Microsoft 365 solutions."],
          ["Project Management", "Planning, reporting, execution, automation, and digital delivery support."],
        ].map(([title, text], index) => (
          <div key={index} style={{ background: "white", width: "320px", padding: "30px", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
            <h2>{title}</h2>
            <p style={{ lineHeight: "1.6" }}>{text}</p>
          </div>
        ))}
      </section>

      <section id="about" style={{ textAlign: "center", padding: "90px 30px", background: "white" }}>
        <h2 style={{ fontSize: "48px", color: "#0b4ea2" }}>About Direholah Consulting</h2>
        <p style={{ maxWidth: "1000px", margin: "30px auto", fontSize: "24px", lineHeight: "1.8" }}>
          Direholah Consulting supports businesses, churches, startups, and organizations with practical technology consulting, automation, digital transformation, project management, and innovation services.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#f8fbff", textAlign: "center" }}>
        <h2 style={{ fontSize: "48px", color: "#0b4ea2", marginBottom: "20px" }}>Why Choose Us</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "20px", lineHeight: "1.8", color: "#444" }}>
          We help businesses modernize operations through technology, automation, consulting, Power Platform solutions, project management, and digital transformation strategies tailored to real business needs.
        </p>
      </section>

      <section id="contact" style={{ background: "#0b4ea2", color: "white", textAlign: "center", padding: "90px 20px" }}>
        <h2 style={{ fontSize: "48px" }}>Contact Us</h2>
        <p style={{ fontSize: "24px", marginTop: "20px" }}>admin@direholahconsulting.com</p>
        <p style={{ fontSize: "22px" }}>Greater Sudbury, Ontario, Canada</p>
      </section>

      <footer style={{ background: "#071a3d", color: "white", textAlign: "center", padding: "40px 20px" }}>
        <h3>Direholah Consulting</h3>
        <p style={{ marginTop: "10px" }}>Empowering businesses through technology and innovation.</p>
        <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.7 }}>
          © 2026 Direholah Consulting. All rights reserved.
        </p>
      </footer>

      <a href="https://wa.me/14379980391" target="_blank" style={{ position: "fixed", bottom: "25px", right: "25px", background: "#25D366", color: "white", padding: "16px 22px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", boxShadow: "0 8px 20px rgba(0,0,0,0.25)", zIndex: 999 }}>
        WhatsApp
      </a>
    </main>
  );
}
