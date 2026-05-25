export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "60px",
      textAlign: "center",
      background: "#f4f8fb",
      minHeight: "100vh"
    }}>
      <h1 style={{
        color: "#0a4da3",
        fontSize: "48px",
        marginBottom: "20px"
      }}>
        Direholah Consulting
      </h1>

      <p style={{
        fontSize: "22px",
        color: "#333",
        maxWidth: "700px",
        margin: "0 auto"
      }}>
        Empowering businesses through technology, consulting,
        innovation, and digital transformation.
      </p>

      <button style={{
        marginTop: "40px",
        padding: "15px 30px",
        fontSize: "18px",
        background: "#0a4da3",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Contact Us
      </button>
    </main>
  );
}
