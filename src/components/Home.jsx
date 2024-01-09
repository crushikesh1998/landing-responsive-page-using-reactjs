import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="Home" id="home">
        <main>
            <h1>technyfy </h1>
            <p>work as you think</p>
        </main>
    </div>
    <div className="Home2">
    <img src={vg} alt="Graphics" />
    <div>
      <p>
      The Company focuses on providing an integrated portfolio of services underlined by its Mode 1–2–3 growth strategy.
       It is the third-largest Indian top it companies.
      </p>
    </div>
    </div>

    <div className="Home3" id="about">
      <div>
        <h1>Who we are?</h1>
    <p>
    We’re an information technology company specializing in the
  development and implementation of innovative custom solutions.
  A team of people that aren’t afraid to get creative when it comes to finding a flexible business model or roll up our sleeves when it comes to debugging that important new product being readied for the production line.

We built our reputation on providing superior firmware technology, innovative software solutions and second-to-none engineering and project management support services. If you haven’t already had an opportunity to work with Insyde Software, we encourage you to ask someone who has
    </p>
      </div>
    </div>

    <div className="Home4" id="brands">
      <div>
        <h1>Brands</h1>
      <article>
        <div style={{
          animationDelay:"0.3s",
        }}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>

        <div style={{
          animationDelay:"0.5s",
        }}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{
          animationDelay:"0.2s",
        }}>
        <AiFillInstagram/>
          <p>Instagram</p>
        </div>

        
        <div style={{
          animationDelay:"1s",
        }}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>
      </article>
      </div>
    </div>
    </>
  )
}

export default Home;