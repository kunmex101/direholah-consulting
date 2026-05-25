export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "linear-gradient(to bottom, #f4f6f9, #dbeafe)" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          background: "white",
          position: "sticky",
          top: 0,
        }}
      >
        <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
  style={{
      textAlign: "center",
      padding: "140px 20px",
      background: "linear-gradient(135deg, #0b4ea2, #2563eb)",
      color: "white",
    }}
  >
        <h1
          style={{
            fontSize: "72px",
              color: "white",
            marginBottom: "20px",
          }}
        >
          Direholah Consulting
        </h1>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Empowering businesses through technology, consulting,
          innovation, automation, and digital transformation.
        </p>

       <a href="https://wa.me/14379980391" target="_blank">
          <button
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              fontSize: "22px",
              background: "white",
              color: "#0b4ea2",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </a>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        {[
          {
            title: "IT Consulting",
            text: "Technology solutions for businesses, startups, and organizations.",
          },
          {
            title: "Power Platform",
            text: "Power Apps, Power Automate, SharePoint, and Microsoft 365 solutions.",
          },
          {
            title: "Project Management",
            text: "Planning, reporting, execution, automation, and digital delivery support.",
          },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              background: "white",
              width: "320px",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              transition: "0.3s",
              cursor: "pointer",
              transform: "translateY(0px)",
            }}
          >
            <h2>{service.title}</h2>
            <p style={{ lineHeight: "1.6" }}>{service.text}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          textAlign: "center",
          padding: "120px 30px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
             color: "white",
          }}
        >
          About Direholah Consulting
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "30px auto",
            fontSize: "24px",
            lineHeight: "1.8",
          }}
        >
          Direholah Consulting supports businesses, churches, startups,
          and organizations with practical technology consulting,
          automation, digital transformation, project management,
          and innovation services.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: "#0b4ea2",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2 style={{ fontSize: "48px" }}>Contact Us</h2>

        <p style={{ fontSize: "24px", marginTop: "20px" }}>
          admin@direholahconsulting.com
        </p>

        <p style={{ fontSize: "22px" }}>
          Greater Sudbury, Ontario, Canada
        </p>
      </section>
            <footer
  style={{
    background: "#071a3d",
    color: "white",
    textAlign: "center",
    padding: "40px 20px",
  }}
>
  <h3>Direholah Consulting</h3>

  <p style={{ marginTop: "10px" }}>
    Empowering businesses through technology and innovation.
  </p>

  <div
    style={{
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="https://linkedin.com"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      LinkedIn
    </a>

    <a
      href="https://github.com"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      GitHub
    </a>

    <a
      href="mailto:admin@direholahconsulting.com"
      style={{ color: "white", textDecoration: "none" }}
    >
      Email
    </a>
  </div>

  <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.7 }}>
    © 2026 Direholah Consulting. All rights reserved.
  </p>
</footer>
            <a
  href="https://wa.me/14379980391"
  target="_blank"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    background: "#25D366",
    color: "white",
    padding: "16px 22px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    zIndex: 999,
  }}
>
  WhatsApp
</a>
    <section
  style={{
    padding: "80px 20px",
    background: "white",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "48px",
      color: "#0b4ea2",
      marginBottom: "20px",
    }}
  >
    Why Choose Us
  </h2>

  <p
    style={{
      maxWidth: "800px",
      margin: "0 auto",
      fontSize: "20px",
      lineHeight: "1.8",
      color: "#444",
    }}
  >
    We help businesses modernize operations through technology,
    automation, consulting, Power Platform solutions, project
    management, and digital transformation strategies tailored
    to real business needs.
  </p>
</section>
    </main>
  );
}
