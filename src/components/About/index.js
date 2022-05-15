import React from 'react'
import coverImage from "../../assets/cover/picture.jpeg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hi! My name is Allyssa Angell. I'm currently enrolled in a Coding
          Bootcamp through the University of Minnesota. This program is geared
          toward a career as a full stack web developer. Currently, I'm a Custom
          Solutions Team Lead at Procore Technologies, a construction
          management software as a service company. Prior to joining Procore in
          2017, I was an LADC, licensed by the Minnesota Board of Behavioral
          Health and Therapy.
      </p>
      </div>
    </section>
  )
}

export default About