import React from "react";
import Image from "next/image";
import Link from "next/link";

const Holiday = () => {
  return (
    <section className="holiday">
      <div className="holiday-img">
        <Image
          src={"/img/h1.png"}
          alt="holiday img"
          width={2000}
          height={2000}
        />
      </div>
      <div className="holiday-text">
        <h5>east nusa tengga</h5>
        <h2>Have you enjoyed your holiday</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptas pariatur ad reprehenderit dolor voluptatibus, fugit quasi
          blanditiis! Dignissimos deserunt quam magni inventore quas repellat
          nam assumenda et dolores quae.
        </p>
        <div className="btn">
          <Link className="btn-link" href={""}>
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Holiday;
