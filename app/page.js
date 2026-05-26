"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [openProduct, setOpenProduct] = useState(null);

  const pageBg = darkMode ? "#071a3d" : "#f4f7fb";
  const pageText = darkMode ? "white" : "#111";

  const products = [
    {
      name: "Garri",
      image: "/garri.jpg",
      options: [
        {
          size: "2kg",
          price: "Price to be confirmed",
          store: "F & F Global Market",
          address: "Sudbury, Ontario",
          phone: "Confirm with vendor",
          availability: "Pickup / Delivery",
        },
        {
          size: "5kg",
          price: "Price to be confirmed",
          store: "Sudbury African Market",
          address: "555 Barry Downe Rd, Sudbury",
          phone: "705-918-1707",
          availability: "Pickup / Delivery",
        },
      ],
    },
    {
      name: "Egusi",
      image: "/egusi.jpg",
      options: [
        {
          size: "500g",
          price: "Price to be confirmed",
          store: "Miteo’s Afro-Caribbean Food Store",
          address: "495 Notre Dame Ave, Sudbury",
          phone: "705-805-0356",
          availability: "Pickup",
        },
      ],
    },
    {
      name: "Palm Oil",
      image: "/palm-oil.jpg",
      options: [
        {
          size: "1L",
          price: "Price to be confirmed",
          store: "Sudbury Tropical Market",
          address: "893 Notre Dame Ave Unit 2, Sudbury",
          phone: "705-504-5420",
          availability: "Pickup / Delivery",
        },
      ],
    },
    {
      name: "Yam Flour",
      image: "/yam-flour.jpg",
      options: [
        {
          size: "2kg",
          price: "Price to be confirmed",
          store: "Oyay Wholesale African Store",
          address: "250 Frood Rd, Sudbury",
          phone: "249-979-1062",
          availability: "Pickup",
        },
      ],
    },
  ];

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-N492QPXB06" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N492QPXB06');
        `}
      </Script>

      <main style={{ fontFamily: "Arial, sans-serif", background: pageBg, color: pageText }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 50px", background: "white", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 10px rgba(0,0,0,0.08)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="Direholah Consulting Logo" style={{ width: "55px", height: "55px", borderRadius: "12px" }} />
            <h2 style={{ color: "#0b4ea2" }}>Direholah Consulting</h2>
          </div>

          <div style={{ display: "flex", gap: "22px", fontWeight: "bold", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#services">Services</a>
            <a href="#marketplace">African Market</a>
            <a href="#projects">Projects</a>
            <a href="#booking">Booking</a>
            <a href="#contact">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer", padding: "8px 12px", borderRadius: "8px", border: "1px solid #ccc", background: "white" }}>
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
          <a href="https://calendly.com/josephkunmi9" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "25px", padding: "18px 40px", background: "white", color: "#0b4ea2", borderRadius: "12px", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
            Schedule a Free Consultation
          </a>
        </section>

        <section id="services" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", padding: "80px 40px" }}>
          {[
            ["💻 IT Consulting", "Technology solutions for businesses, churches, startups, and organizations."],
            ["⚙️ Power Platform", "Power Apps, Power Automate, SharePoint, Microsoft 365, and workflow automation."],
            ["🚀 Business Strategy", "Helping organizations improve operations, growth, and service delivery."],
          ].map(([title, description], index) => (
            <div key={index} style={{ background: "white", color: "#111", width: "320px", padding: "30px", borderRadius: "18px", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
              <h2 style={{ color: "#0b4ea2" }}>{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </section>

        <section id="marketplace" style={{ padding: "100px 20px", background: "#eef4ff", color: "#111" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "56px", color: "#0b4ea2", marginBottom: "20px" }}>
              Northern Ontario African Market
            </h2>
            <p style={{ maxWidth: "900px", margin: "0 auto", fontSize: "22px", lineHeight: "1.8", color: "#444" }}>
              Compare African grocery products by size, price, store, pickup, and delivery availability.
            </p>
          </div>

          <h2 style={{ textAlign: "center", fontSize: "42px", color: "#0b4ea2", marginBottom: "40px" }}>
            Featured African Stores
          </h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px", marginBottom: "80px" }}>
            {[
              "F & F Global Market",
              "Sudbury African Market",
              "Miteo’s Afro-Caribbean Food Store",
              "Sudbury Tropical Market",
              "Naija Taste Canada",
              "Oyay Wholesale African Store",
            ].map((store, index) => (
              <div key={index} style={{ background: "white", width: "320px", padding: "30px", borderRadius: "18px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                <h3 style={{ color: "#0b4ea2" }}>{store}</h3>
                <p style={{ color: "#333", lineHeight: "1.7" }}>African grocery and food products available for pickup and delivery.</p>
              </div>
            ))}
          </div>

          <h2 style={{ textAlign: "center", fontSize: "42px", color: "#0b4ea2", marginBottom: "40px" }}>
            Product Price & Store Options
          </h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
            {products.map((product, index) => (
              <div key={index} style={{ background: "white", width: "360px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "220px", objectFit: "cover", background: "#dbeafe" }} />

                <div style={{ padding: "25px" }}>
                  <h3 style={{ color: "#0b4ea2", fontSize: "28px" }}>{product.name}</h3>

                  <button
                    onClick={() => setOpenProduct(openProduct === index ? null : index)}
                    style={{ marginTop: "15px", background: "#0b4ea2", color: "white", padding: "12px 20px", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}
                  >
                    {openProduct === index ? "Hide Options" : "View Options"}
                  </button>

                  {openProduct === index && (
                    <div style={{ marginTop: "25px" }}>
                      {product.options.map((option, i) => (
                        <div key={i} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "15px", marginBottom: "15px", background: "#f8fbff" }}>
                          <p><strong>Size:</strong> {option.size}</p>
                          <p><strong>Price:</strong> {option.price}</p>
                          <p><strong>Store:</strong> {option.store}</p>
                          <p><strong>Address:</strong> {option.address}</p>
                          <p><strong>Phone:</strong> {option.phone}</p>
                          <p><strong>Available:</strong> {option.availability}</p>

                          <a
                            href={`https://wa.me/14379980391?text=Hello, I want to confirm availability for ${product.name} ${option.size} from ${option.store}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "inline-block", marginTop: "10px", background: "#25D366", color: "white", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}
                          >
                            Confirm Availability
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#0b4ea2", color: "white", padding: "60px 30px", borderRadius: "24px", textAlign: "center", maxWidth: "1200px", margin: "80px auto 0" }}>
            <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>Delivery Areas</h2>
            <p style={{ fontSize: "22px", lineHeight: "1.8", maxWidth: "900px", margin: "0 auto 30px" }}>
              Sudbury, Timmins, North Bay, Sault Ste. Marie, and nearby Northern Ontario communities.
            </p>
          </div>
        </section>

        <section id="projects" style={{ padding: "90px 20px", textAlign: "center", background: "#ffffff" }}>
          <h2 style={{ fontSize: "48px", color: "#0b4ea2", marginBottom: "20px" }}>Featured Projects</h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "35px" }}>
            {[
              {
                title: "F & F Global Market",
                image: "/ffglobalmarket.png",
                description: "Ecommerce platform developed for an African and Caribbean food store in Sudbury, Ontario.",
                link: "https://ffglobalmarket.vercel.app",
              },
              {
                title: "Naomi Foods",
                image: "/naomifoods.png",
                description: "Ecommerce grocery platform for an African grocery store in Brantford, Ontario.",
                link: "https://naomifoods.com/index",
              },
            ].map((project, index) => (
              <div key={index} style={{ background: "white", width: "420px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", textAlign: "left" }}>
                <img src={project.image} alt={project.title} style={{ width: "100%", height: "260px", objectFit: "cover" }} />
                <div style={{ padding: "25px" }}>
                  <h3 style={{ color: "#0b4ea2", fontSize: "28px" }}>{project.title}</h3>
                  <p style={{ color: "#444", lineHeight: "1.7" }}>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "15px", padding: "12px 24px", background: "#0b4ea2", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}>
                    View Live Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" style={{ textAlign: "center", padding: "100px 20px" }}>
          <h2 style={{ fontSize: "50px", color: "#0b4ea2" }}>Book a Consultation</h2>
          <a href="https://calendly.com/josephkunmi9" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "18px 40px", background: "#0b4ea2", color: "white", borderRadius: "12px", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
            Open Calendly Booking
          </a>
        </section>

        <section id="contact" style={{ background: "#0b4ea2", color: "white", textAlign: "center", padding: "90px 20px" }}>
          <h2 style={{ fontSize: "46px" }}>Request a Consultation</h2>
          <p style={{ fontSize: "22px" }}>admin@direholahconsulting.com</p>

          <form action="https://formspree.io/f/xykvnykn" method="POST" style={{ maxWidth: "650px", margin: "35px auto 0", display: "grid", gap: "15px" }}>
            <input type="text" name="name" placeholder="Your Name" required style={{ padding: "16px", borderRadius: "10px", border: "none" }} />
            <input type="email" name="email" placeholder="Your Email" required style={{ padding: "16px", borderRadius: "10px", border: "none" }} />
            <textarea name="message" placeholder="Tell us about your project..." required rows="6" style={{ padding: "16px", borderRadius: "10px", border: "none" }} />
            <button type="submit" style={{ padding: "16px", background: "white", color: "#0b4ea2", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "18px" }}>
              Send Message
            </button>
          </form>
        </section>

        <footer style={{ background: "#071a3d", color: "white", textAlign: "center", padding: "45px 20px" }}>
          <h3>Direholah Consulting</h3>
          <p>Empowering businesses through technology and innovation.</p>
          <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.7 }}>
            © 2026 Direholah Consulting. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
