import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Home() {
  return (
    <main className="page-bg">
      <section className="landing">
        <img src={Logo} alt="Logo" />
        <button>
          <Link to="/trains">Next</Link>
        </button>
      </section>
    </main>
  );
}

export default Home;
