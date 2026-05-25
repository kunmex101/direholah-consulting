export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f7fb" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 60px", background: "white", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "55px", height: "55px", borderRadius: "10px" }} />
          <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>
        </div>

        <div style={{ display: "flex", gap: "28px", fontWeight: "bold" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "110px 20px", background: "linear-gradient(135deg, #071a3d, #0b4ea2, #2563eb)", color: "white" }}>
        <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "170px", borderRadius: "20px", marginBottom: "25px" }} />

        <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>Direholah Consulting</h1>

        <p style={{ fontSize: "26px", maxWidth: "950px", margin: "0 auto", lineHeight: "1.6" }}>
          Strategy. Solutions. Success.
        </p>

        <p style={{ fontSize: "20px", maxWidth: "900px", margin: "25px auto", lineHeight: "1.7" }}>
          Empowering businesses through technology, consulting, innovation, automation, and digital transformation.
        </p>

        <a href="https://wa.me/14379980391" target="_blank" style={{ display: "inline-block", marginTop: "25px", padding: "18px 40px", background: "white", color: "#0b4ea2", borderRadius: "12px", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
          Book a Consultation
        </a>
      </section>

      <section id="services" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "80px 40px" }}>
        {[
          ["IT Consulting", "Technology solutions for businesses, startups, churches, and organizations."],
          ["Power Platform", "Power Apps, Power Automate, SharePoint, Microsoft 365, and workflow automation."],
          ["Project Management", "Planning, reporting, execution, automation, and digital delivery support."],
          ["Business Strategy", "Helping organizations improve operations, growth, service delivery, and transformation."],
          ["Digital Transformation", "Modern digital tools, cloud solutions, dashboards, and process modernization."],
          ["Community Innovation", "Support for social impact platforms, church projects, startups, and digital communities."],
        ].map(([title, text], index) => (
          <div key={index} style={{ background: "white", width: "320px", padding: "30px", borderRadius: "18px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
            <h2 style={{ color: "#0b4ea2" }}>{title}</h2>
            <p style={{ lineHeight: "1.6", marginTop: "12px" }}>{text}</p>
          </div>
        ))}
      </section>

      <section id="about" style={{ textAlign: "center", padding: "90px 30px", background: "white" }}>
        <h2 style={{ fontSize: "46px", color: "#0b4ea2" }}>About Direholah Consulting</h2>
        <p style={{ maxWidth: "1000px", margin: "30px auto", fontSize: "22px", lineHeight: "1.8" }}>
          Direholah Consulting supports businesses, churches, startups, and organizations with practical technology consulting, automation, digital transformation, project management, and innovation services.
        </p>
      </section>

      <section style={{ padding: "80px 20px", background: "#f8fbff", textAlign: "center" }}>
        <h2 style={{ fontSize: "46px", color: "#0b4ea2", marginBottom: "20px" }}>Why Choose Us</h2>
        <p style={{ maxWidth: "850px", margin: "0 auto", fontSize: "20px", lineHeight: "1.8", color: "#444" }}>
          We help businesses modernize operations through technology, automation, consulting, Power Platform solutions, project management, and digital transformation strategies tailored to real business needs.
        </p>
      </section>

      <section id="contact" style={{ background: "#0b4ea2", color: "white", textAlign: "center", padding: "90px 20px" }}>
        <h2 style={{ fontSize: "46px" }}>Contact Us</h2>
        <p style={{ fontSize: "24px", marginTop: "20px" }}>admin@direholahconsulting.com</p>
        <p style={{ fontSize: "22px" }}>Greater Sudbury, Ontario, Canada</p>
      </section>

      <footer style={{ background: "#071a3d", color: "white", textAlign: "center", padding: "45px 20px" }}>
        <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "90px", borderRadius: "12px", marginBottom: "15px" }} />
        <h3>Direholah Consulting</h3>
        <p style={{ marginTop: "10px" }}>Empowering businesses through technology and innovation.</p>

        <div style={{ marginTop: "22px", display: "flex", justifyContent: "center", gap: "22px", flexWrap: "wrap" }}>
          <a href="https://linkedin.com" target="_blank" style={{ color: "white" }}>LinkedIn</a>
          <a href="https://facebook.com" target="_blank" style={{ color: "white" }}>Facebook</a>
          <a href="https://instagram.com" target="_blank" style={{ color: "white" }}>Instagram</a>
          <a href="https://tiktok.com" target="_blank" style={{ color: "white" }}>TikTok</a>
          <a href="mailto:admin@direholahconsulting.com" style={{ color: "white" }}>Email</a>
        </div>

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
