<section
  id="marketplace"
  style={{
    padding: "100px 20px",
    background: "linear-gradient(135deg, #f8fbff, #eef4ff)",
    color: "#111",
  }}
>
  <div style={{ textAlign: "center", marginBottom: "70px" }}>
    <h2
      style={{
        fontSize: "56px",
        color: "#0b4ea2",
        marginBottom: "20px",
      }}
    >
      Northern Ontario African Market
    </h2>

    <p
      style={{
        maxWidth: "950px",
        margin: "0 auto",
        fontSize: "22px",
        lineHeight: "1.8",
        color: "#444",
      }}
    >
      African groceries, Nigerian food, Caribbean products, and delivery
      services across Northern Ontario.
    </p>

    <div
      style={{
        marginTop: "35px",
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://wa.me/14379980391"
        target="_blank"
        style={{
          background: "#25D366",
          color: "white",
          padding: "16px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Order on WhatsApp
      </a>

      <a
        href="#contact"
        style={{
          background: "#0b4ea2",
          color: "white",
          padding: "16px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Become a Vendor
      </a>
    </div>
  </div>

  {/* Featured Stores */}
  <div style={{ marginBottom: "80px" }}>
    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        color: "#0b4ea2",
        marginBottom: "40px",
      }}
    >
      Featured African Stores
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {[
        {
          name: "Sudbury African Market",
          desc: "African groceries and household products.",
        },
        {
          name: "Miteo’s Afro-Caribbean Food Store",
          desc: "Afro-Caribbean groceries and beauty supplies.",
        },
        {
          name: "Sudbury Tropical Market",
          desc: "Tropical and African grocery products.",
        },
        {
          name: "Naija Taste Canada",
          desc: "Authentic Nigerian meals and catering services.",
        },
        {
          name: "Oyay Wholesale African Store",
          desc: "Wholesale African food distribution and supplies.",
        },
      ].map((store, index) => (
        <div
          key={index}
          style={{
            background: "white",
            width: "320px",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#0b4ea2",
              marginBottom: "15px",
              fontSize: "24px",
            }}
          >
            {store.name}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "1.7",
            }}
          >
            {store.desc}
          </p>

          <a
            href="https://wa.me/14379980391"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "20px",
              background: "#25D366",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Order Products
          </a>
        </div>
      ))}
    </div>
  </div>

  {/* Products */}
  <div style={{ marginBottom: "80px" }}>
    <h2
      style={{
        textAlign: "center",
        fontSize: "42px",
        color: "#0b4ea2",
        marginBottom: "40px",
      }}
    >
      Popular Products
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "25px",
      }}
    >
      {[
        "Garri",
        "Egusi",
        "Palm Oil",
        "Yam Flour",
        "Plantain Chips",
        "Indomie",
        "Beans",
        "Crayfish",
        "Pepper Soup Spice",
        "Maggi",
      ].map((product, index) => (
        <div
          key={index}
          style={{
            background: "white",
            width: "220px",
            padding: "25px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              height: "120px",
              background: "#eef4ff",
              borderRadius: "12px",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#0b4ea2",
              fontWeight: "bold",
            }}
          >
            {product}
          </div>

          <a
            href="https://wa.me/14379980391"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#0b4ea2",
              color: "white",
              padding: "10px 18px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Order Now
          </a>
        </div>
      ))}
    </div>
  </div>

  {/* Delivery Areas */}
  <div
    style={{
      background: "#0b4ea2",
      color: "white",
      padding: "60px 30px",
      borderRadius: "24px",
      textAlign: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "20px",
      }}
    >
      Delivery Areas
    </h2>

    <p
      style={{
        fontSize: "22px",
        lineHeight: "1.8",
        maxWidth: "900px",
        margin: "0 auto 30px",
      }}
    >
      We support African grocery delivery and vendor partnerships across
      Northern Ontario.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        flexWrap: "wrap",
      }}
    >
      {[
        "Sudbury",
        "Timmins",
        "North Bay",
        "Sault Ste. Marie",
        "Elliot Lake",
      ].map((city, index) => (
        <div
          key={index}
          style={{
            background: "white",
            color: "#0b4ea2",
            padding: "14px 22px",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {city}
        </div>
      ))}
    </div>
  </div>
</section>
