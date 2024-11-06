import Link from "next/link";
import React from "react";

const Homes = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('/img/Background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="homes"
    >
      <div className="homes-text">
        <h5>Lets</h5>
        <h1>
          Planning Your <br />
          Own Travel
        </h1>
        <p>
          Indonesia a Southeast Aisian nation made up of thousands of volcanic{" "}
          <br /> islands is home to hundreds of ethnic groups speaking
        </p>
        <button className="btn">
          <Link className="btn-link" href={"#"}>Book a Trip</Link>
        </button>
      </div>
    </section>
  );
};

export default Homes;
