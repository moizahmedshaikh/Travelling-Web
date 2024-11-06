import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="feature">
      <div className="feature-content">
        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/nap1.jpg"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Sky Tours</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/nap2.jpg"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Sky Tours</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/nap3.jpg"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Sky Tours</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/nap4.jpg"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Sky Tours</h4>
        </div>


        <div className="row">
          <div className="row-img">
            <Image
              src={"/img/nap5.jpg"}
              alt="feature img"
              height={1000}
              width={1000}
            />
          </div>
          <h4>Sky Tours</h4>
        </div>


      </div>
    </section>
  );
};

export default Feature;
