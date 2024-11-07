import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Ready to explore?</h2>
          <p>Lets go on vacation Make your Day</p>
        </div>

        <form action="">
          <input type="email" placeholder="Email" required />
          <button className="btn">
            <Link className="btn-link" href={"#"}>
              Started 
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
