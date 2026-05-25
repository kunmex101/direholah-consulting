"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const bg = darkMode ? "#071a3d" : "#f4f7fb";
  const text = darkMode ? "white" : "#111";

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: bg, color: text }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 50px", background: "white", position: "sticky", top: 0, zIndex: 1000 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "55px", height: "55px", borderRadius: "12px" }} />
          <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none" }}>☰</button>

        <div style={{ display: "flex", gap: "25px", fontWeight: "bold" }}>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer" }}>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "110px 20px", background: "linear-gradient(135deg, #071a3d, #0b4ea2, #2563eb)", color: "white" }}>
        <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "170px", borderRadius: "20px", marginBottom: "25px" }} />
        <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>Direholah Consulting</h1>
        <h2>Strategy. Solutions. Success.</h2>
        <p style={{ fontSize: "20px", maxWidth: "900px", margin: "25px auto", lineHeight: "1.7" }}>
          Empowering businesses through technology, consulting, innovation, automation, and digital transformation.
        </p>
        <a href="#contact" style={{ display: "inline-block", marginTop: "25px", padding: "18px 40px", background: "white", color: "#0b4ea2", borderRadius: "12px", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
          Book a Consultation
        </a>
      </section>

      <section id="services" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "80px 40px" }}>
        {[
          ["💻 IT Consulting", "Technology solutions for businesses, churches, startups, and organizations."],
          ["⚙️ Power Platform", "Power Apps, Power Automate, SharePoint, Microsoft 365, and workflow automation."],
          ["📊 Project Management", "Planning, reporting, execution, automation, and digital delivery support."],
          ["🚀 Business Strategy", "Helping organizations improve operations, growth, and service delivery."],
          ["🌐 Digital Transformation", "Modern digital tools, dashboards, cloud solutions, and process modernization."],
          ["🤝 Community Innovation", "Support for social impact platforms, church projects, startups, and communities."],
        ].map(([title, text], index) => (
          <div key={index} style={{ background: "white", color: "#111", width: "320px", padding: "30px", borderRadius: "18px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
            <h2 style={{ color: "#0b4ea2" }}>{title}</h2>
            <p style={{ lineHeight: "1.6", marginTop: "12px" }}>{text}</p>
          </div>
        ))}
      </section>

      <section id="projects" style={{ background: "white", color: "#111", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "46px", color: "#0b4ea2" }}>Projects & Solutions</h2>
        <p style={{ maxWidth: "900px", margin: "25px auto", fontSize: "20px", lineHeight: "1.8" }}>
          We support digital platforms, consulting projects, automation solutions, websites, dashboards, business process improvement, and community innovation projects.
        </p>
      </section>

      <section id="testimonials" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "46px", color: "#0b4ea2" }}>Client Reviews</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap", marginTop: "35px" }}>
          {[
            "Professional, practical, and very helpful.",
            "Clear guidance and strong technology support.",
            "Great support for business and digital solutions.",
          ].map((review, index) => (
            <div key={index} style={{ background: "white", color: "#111", padding: "30px", borderRadius: "16px", width: "300px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
              <p>“{review}”</p>
              <strong>- Client</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ background: "#0b4ea2", color: "white", textAlign: "center", padding: "90px 20px" }}>
        <h2 style={{ fontSize: "46px" }}>Request a Consultation</h2>
        <p style={{ fontSize: "22px" }}>admin@direholahconsulting.com</p>
        <p style={{ fontSize: "20px" }}>Greater Sudbury, Ontario, Canada</p>

        <form action="https://formsubmit.co/admin@direholahconsulting.com" method="POST" style={{ maxWidth: "600px", margin: "35px auto", display: "grid", gap: "15px" }}>
          <input type="text" name="name" placeholder="Your Name" required style={{ padding: "15px", borderRadius: "8px", border: "none" }} />
          <input type="email" name="email" placeholder="Your Email" required style={{ padding: "15px", borderRadius: "8px", border: "none" }} />
          <textarea name="message" placeholder="How can we help you?" required rows="5" style={{ padding: "15px", borderRadius: "8px", border: "none" }} />
          <button type="submit" style={{ padding: "16px", background: "white", color: "#0b4ea2", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "18px" }}>
            Send Message
          </button>
        </form>
      </section>

      <footer style={{ background: "#071a3d", color: "white", textAlign: "center", padding: "45px 20px" }}>
        <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "90px", borderRadius: "12px", marginBottom: "15px" }} />
        <h3>Direholah Consulting</h3>
        <p>Empowering businesses through technology and innovation.</p>

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
