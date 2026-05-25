export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f4f6f9" }}>
      
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
          padding: "120px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#0b4ea2",
            marginBottom: "20px",
          }}
        >
          Direholah Consulting
        </h1>

        <p
          style={{
            fontSize: "32px",
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Empowering businesses through technology, consulting,
          innovation, automation, and digital transformation.
        </p>

        <a href="mailto:admin@direholahconsulting.com">
          <button
            style={{
              marginTop: "40px",
              padding: "18px 40px",
              fontSize: "22px",
              background: "#0b4ea2",
              color: "white",
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
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
            color: "#0b4ea2",
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
    </main>
  );
}
