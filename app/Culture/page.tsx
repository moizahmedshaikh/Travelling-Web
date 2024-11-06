import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Culture = () => {
  return (
    <section className='culture'>
        <div className="culture-text">
            <h5>INDONESIAN CULTURE</h5>
            <h2>Our Culture here is very friendly to people</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum nostrum sint excepturi nesciunt similique modi, praesentium at debitis repellat eaque? Quam nam nihil ullam deserunt possimus nostrum tempore repellat.</p>
            <div className='btn'>
                <Link className='btn-link' href={""}>Read More</Link>
            </div>
        </div>

        <div className="culture-img">
            <Image src={"/img/c1.png"} alt='culture img' height={1000} width={1000}/>
        </div>
    </section>
  )
}

export default Culture