import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eaeaea",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "blue",
            marginBottom: "20px",
          }}
        >
          Student Registration Form
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid gray",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;