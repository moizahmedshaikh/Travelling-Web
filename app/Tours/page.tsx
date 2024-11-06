import React from "react";
import Image from "next/image";
import Link from "next/link";

const Tour = () => {
  return (
    <section className="tour">
      <div className="center-text">
        <h2>Popular tours</h2>
      </div>
      <div className="tour-content">
        <div className="box">
          <Image
            src={"/img/t1.jpg"}
            alt="tour img"
            height={2000}
            width={2000}
          />
          <h6>East Java</h6>
          <h4>Mount Bromo</h4>
        </div>

        <div className="box">
          <Image
            src={"/img/t2.jpg"}
            alt="tour img"
            height={2000}
            width={2000}
          />
          <h6>East Java</h6>
          <h4>Mount Bromo</h4>
        </div>

        <div className="box">
          <Image
            src={"/img/t3.jpg"}
            alt="tour img"
            height={2000}
            width={2000}
          />
          <h6>East Java</h6>
          <h4>Mount Bromo</h4>
        </div>
      </div>
      <div className="center-btn">
        <div className="btn">
          <Link className="btn-link" href={""}>
            See Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tour;
