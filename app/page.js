<section id="projects" style={{ padding: "90px 20px", textAlign: "center", background: "#ffffff" }}>
  <h2 style={{ fontSize: "48px", color: "#0b4ea2", marginBottom: "20px" }}>
    Featured Projects
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "35px",
    }}
  >
    {[
      {
        title: "Sudbury Clean Connect",
        image: "/logo.png",
        description:
          "Platform connecting Sudbury residents with trusted local cleaning professionals for home and office cleaning services.",
        link: "https://sudbury-clean-connect-vg32.bolt.host/clean-connect",
      },
      {
        title: "F & F Global Market",
        image: "/ffglobalmarket.png",
        description:
          "Ecommerce platform developed for an African and Caribbean food store in Sudbury, Ontario.",
        link: "https://ffglobalmarket.vercel.app",
      },
      {
        title: "Naomi Foods",
        image: "/naomifoods.png",
        description:
          "Ecommerce grocery platform for an African grocery store in Brantford, Ontario.",
        link: "https://naomifoods.com/index",
      },
    ].map((project, index) => (
      <div
        key={index}
        style={{
          background: "white",
          width: "420px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          textAlign: "left",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h3 style={{ color: "#0b4ea2", fontSize: "28px" }}>
            {project.title}
          </h3>

          <p style={{ color: "#444", lineHeight: "1.7" }}>
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "12px 24px",
              background: "#0b4ea2",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            View Live Project
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
