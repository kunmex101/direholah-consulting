"use client";

import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [openProduct, setOpenProduct] = useState(null);

  const pageBg = darkMode ? "#071a3d" : "#f4f7fb";
  const pageText = darkMode ? "white" : "#111";

  const stores = [
    {
      name: "F & F Global Market",
      address: "Sudbury, ON - confirm exact address",
      phone: "Confirm with vendor",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
    {
      name: "Sudbury African Market",
      address: "555 Barry Downe Rd, Sudbury, ON",
      phone: "705-918-1707",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
    {
      name: "Miteo’s Afro-Caribbean Food Store",
      address: "495 Notre Dame Ave, Sudbury, ON",
      phone: "705-805-0356",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
    {
      name: "Sudbury Tropical Market",
      address: "893 Notre Dame Ave Unit 2, Sudbury, ON",
      phone: "705-504-5420",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
    {
      name: "Naija Taste Canada",
      address: "893 Notre Dame Ave #4, Sudbury, ON",
      phone: "647-915-9164",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
    {
      name: "Oyay Wholesale African Store",
      address: "250 Frood Rd, Sudbury, ON",
      phone: "249-979-1062",
      pickup: "Available",
      delivery: "Available through Northern Ontario African Market",
    },
  ];

  const products = [
    { name: "Garri", image: "/garri.jpg", sizes: ["1kg", "2kg", "5kg", "10kg"] },
    { name: "Ijebu Garri", image: "/ijebu-garri.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Egusi", image: "/egusi.jpg", sizes: ["500g", "1kg", "2kg"] },
    { name: "Ogbono", image: "/ogbono.jpg", sizes: ["500g", "1kg"] },
    { name: "Palm Oil", image: "/palm-oil.jpg", sizes: ["500ml", "1L", "4L"] },
    { name: "Yam Flour", image: "/yam-flour.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Poundo Yam", image: "/poundo-yam.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Semovita", image: "/semovita.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Amala Flour", image: "/amala.jpg", sizes: ["1kg", "2kg"] },
    { name: "Plantain Flour", image: "/plantain-flour.jpg", sizes: ["1kg", "2kg"] },
    { name: "Beans", image: "/beans.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Honey Beans", image: "/honey-beans.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Rice", image: "/rice.jpg", sizes: ["2kg", "5kg", "10kg"] },
    { name: "Ofada Rice", image: "/ofada-rice.jpg", sizes: ["1kg", "2kg", "5kg"] },
    { name: "Indomie", image: "/indomie.jpg", sizes: ["Single Pack", "Carton"] },
    { name: "Golden Penny Pasta", image: "/golden-penny.jpg", sizes: ["Single", "Carton"] },
    { name: "Crayfish", image: "/crayfish.jpg", sizes: ["250g", "500g", "1kg"] },
    { name: "Stock Fish", image: "/stockfish.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Dry Fish", image: "/dry-fish.jpg", sizes: ["500g", "1kg"] },
    { name: "Smoked Turkey", image: "/smoked-turkey.jpg", sizes: ["1kg", "2kg"] },
    { name: "Ponmo", image: "/ponmo.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Goat Meat", image: "/goat-meat.jpg", sizes: ["1kg", "2kg"] },
    { name: "Chicken", image: "/chicken.jpg", sizes: ["Whole", "Cut"] },
    { name: "Catfish", image: "/catfish.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Tilapia", image: "/tilapia.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Pepper Soup Spice", image: "/pepper-soup.jpg", sizes: ["100g", "250g"] },
    { name: "Suya Spice", image: "/suya.jpg", sizes: ["100g", "250g"] },
    { name: "Curry Powder", image: "/curry.jpg", sizes: ["100g", "250g"] },
    { name: "Maggi", image: "/maggi.jpg", sizes: ["Small Pack", "Big Pack"] },
    { name: "Knorr", image: "/knorr.jpg", sizes: ["Small Pack", "Big Pack"] },
    { name: "Plantain Chips", image: "/plantain-chips.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Chin Chin", image: "/chinchin.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Kilishi", image: "/kilishi.jpg", sizes: ["Small", "Medium"] },
    { name: "Maltina", image: "/maltina.jpg", sizes: ["Single", "Pack"] },
    { name: "Supermalt", image: "/supermalt.jpg", sizes: ["Single", "Pack"] },
    { name: "Zobo", image: "/zobo.jpg", sizes: ["Bottle", "Pack"] },
    { name: "Black Soap", image: "/black-soap.jpg", sizes: ["Small", "Medium", "Large"] },
    { name: "Shea Butter", image: "/shea-butter.jpg", sizes: ["250g", "500g", "1kg"] },
    { name: "African Sponge", image: "/african-sponge.jpg", sizes: ["Single"] },
    { name: "Hair Extensions", image: "/hair.jpg", sizes: ["Various"] },
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
            <a href="https://sudbury-clean-connect-vg32.bolt.host" target="_blank" rel="noopener noreferrer">Clean Connect</a>
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
            <p style={{ maxWidth: "950px", margin: "0 auto", fontSize: "22px", lineHeight: "1.8", color: "#444" }}>
              Search African grocery products, compare sizes, confirm prices, see nearby stores, and choose pickup or delivery.
            </p>
          </div>

          <h2 style={{ textAlign: "center", fontSize: "42px", color: "#0b4ea2", marginBottom: "40px" }}>
            Store Directory
          </h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px", marginBottom: "80px" }}>
            {stores.map((store, index) => (
              <div key={index} style={{ background: "white", width: "340px", padding: "25px", borderRadius: "18px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                <h3 style={{ color: "#0b4ea2" }}>{store.name}</h3>
                <p><strong>Address:</strong> {store.address}</p>
                <p><strong>Phone:</strong> {store.phone}</p>
                <p><strong>Pickup:</strong> {store.pickup}</p>
                <p><strong>Delivery:</strong> {store.delivery}</p>
              </div>
            ))}
          </div>

          <h2 style={{ textAlign: "center", fontSize: "42px", color: "#0b4ea2", marginBottom: "40px" }}>
            Product Search Directory
          </h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
            {products.map((product, index) => (
              <div key={index} style={{ background: "white", width: "380px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "220px", objectFit: "cover", background: "#dbeafe" }} />

                <div style={{ padding: "25px" }}>
                  <h3 style={{ color: "#0b4ea2", fontSize: "28px" }}>{product.name}</h3>
                  <p><strong>Available Sizes:</strong> {product.sizes.join(", ")}</p>
                  <p><strong>Price:</strong> Confirm with selected store</p>

                  <button
                    onClick={() => setOpenProduct(openProduct === index ? null : index)}
                    style={{ marginTop: "15px", background: "#0b4ea2", color: "white", padding: "12px 20px", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}
                  >
                    {openProduct === index ? "Hide Stores" : "View Stores Selling This"}
                  </button>

                  {openProduct === index && (
                    <div style={{ marginTop: "25px" }}>
                      {stores.map((store, storeIndex) => (
                        <div key={storeIndex} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "15px", marginBottom: "15px", background: "#f8fbff" }}>
                          <h4 style={{ color: "#0b4ea2" }}>{store.name}</h4>
                          <p><strong>Product:</strong> {product.name}</p>
                          <p><strong>Size Options:</strong> {product.sizes.join(", ")}</p>
                          <p><strong>Price:</strong> Confirm with store</p>
                          <p><strong>Address:</strong> {store.address}</p>
                          <p><strong>Phone:</strong> {store.phone}</p>
                          <p><strong>Pickup:</strong> {store.pickup}</p>
                          <p><strong>Delivery:</strong> {store.delivery}</p>

                          <a
                            href={`https://wa.me/14379980391?text=Hello, I want to confirm ${product.name} from ${store.name}. Please confirm size, price, pickup or delivery.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: "inline-block", marginTop: "10px", background: "#25D366", color: "white", padding: "10px 16px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}
                          >
                            Confirm Through Northern Ontario African Market
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" style={{ padding: "90px 20px", textAlign: "center", background: "#ffffff" }}>
          <h2 style={{ fontSize: "48px", color: "#0b4ea2", marginBottom: "20px" }}>Featured Projects</h2>

          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "35px" }}>
            {[
              {
                title: "Sudbury Clean Connect",
                image: "/logo.png",
                description: "Platform connecting Sudbury residents with trusted local cleaning professionals for home and office cleaning services.",
                link: "https://sudbury-clean-connect-vg32.bolt.host",
              },
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
