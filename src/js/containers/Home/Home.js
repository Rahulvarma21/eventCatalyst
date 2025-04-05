import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const images = [
  "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXZlbnRzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/20/cambridge.JPG?q=80&w=3494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <main
        style={{
          display: "flex",
          height: "80vh",
          backgroundColor: "#f0f4f8",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "80px",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <h1
              style={{
                fontSize: "5rem",
                fontWeight: "bold",
                color: "#2c3e50",
                lineHeight: 1.2,
              }}
            >
              Discover Events <br /> with Evently
            </h1>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt="College Event"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "600px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.5s ease-in-out",
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default Home;
