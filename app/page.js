export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#0a4ea3",
            marginBottom: "20px",
          }}
        >
          Direholah Consulting
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#333",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Empowering businesses through technology, consulting,
          innovation, and digital transformation.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="mailto:admin@direholahconsulting.com"
            style={{
              backgroundColor: "#0a4ea3",
              color: "white",
              padding: "16px 35px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "100px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>IT Consulting</h2>
          <p>
            Professional technology solutions for businesses,
            organizations, and startups.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Business Strategy</h2>
          <p>
            Helping businesses improve operations, growth,
            and digital transformation strategies.
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Project Management</h2>
          <p>
            Delivering organized and efficient project planning,
            execution, and reporting solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
