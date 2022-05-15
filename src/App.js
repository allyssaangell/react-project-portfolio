import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "projects",
      description: "Click on each project to see more information, including links!",
    },
    {
      name: "resume",
      description: (
        <>
          {" "}
          <section class="header-two">
            <h3>Experience</h3>
            <h4>January 2022 - Present</h4>
            <h5>Custom Solutions Team Lead, Procore Technologies</h5>
            <p>
              Took on additional duties to help build our team. Currently
              focusing on training new team members, building out our team
              standards and documentation. Continuing to build
              cross-departmental relationships to more easily share team and
              product updates. Coaching teammates through difficult tasks and
              encouraging growth through development plans.
            </p>
            <br />
            <h4>April 2021 - December 2021</h4>
            <h5>Senior Custom Solutions Specialist, Procore Technologies</h5>
            <p>
              Building on my previous role to continue to provide clients with
              customizations, education, and recommendations while increasing
              mentorship and coaching teammates. Sharing knowledge and best
              practices with peers to become more proficient with their Ecrion
              builds and client interactions.
            </p>
            <br />
            <h4>May 2017 - March 2021</h4>
            <h5>Custom Solutions Specialist, Procore Technologies</h5>
            <p>
              Worked from Individual Contributor to Squad Lead for Financials. I
              communicate with clients regarding requests, offering creative
              solutions when roadblocks are met or guiding clients with best
              practices when applicable. Create PDF exports and custom tools per
              client request. Advising peers and other interdisciplinary teams
              when discussing client requests, utilizing technical knowledge and
              product knowledge to form a proposed solution that would meet the
              clients' goals/needs.
            </p>
            <br />
            <h4>August 2015 - May 2017</h4>
            <h5>Counselor II, LADC, Project Turnabout, Granite Falls, MN</h5>
            <h4>January 2015 - August 2015</h4>
            <h5>
              Licensed Alcohol and Drug Counselor, Community Addiction Recovery
              Enterprise, Inc. (C.A.R.E.), Willmar, MN
            </h5>
            <h4>March 2014 - January 2015</h4>
            <h5>Chemical Dependency Counselor Senior, C.A.R.E., Willmar, MN</h5>
            <p>
              Provide direct patient therapeutic services including individual
              therapy and group therapy for adolescents and adults in an
              outpatient, correctional, and inpatient setting. Assessment,
              development, and implementation of individualized treatment plan.
              Created programming for and provided education regarding the
              disease of addiction. Coordinated services with outside agencies
              such as county case managers and probation agents in addition to
              internal interdisciplinary team including mental health
              counselors, family counselors, and medical staff. Documented
              patient progress and maintained electronic medical record,
              utilizing and creating various tools and organizational documents.
            </p>
            <br />
          </section>
          <section class="header-two">
            <h3>Education</h3>
            <h4>December 2013</h4>
            <h5>Bachelor of Science, St. Cloud State University</h5>
            <p>
              Majors in both Community Psychology and Chemical Dependency,
              graduated with Cum Laude Honors
            </p>
          </section>
          <section class="header-two">
            <h3>Skills</h3>
            <div class="row">
              <div class="column">
                <ul>
                  <li>Great Communication Skills</li>
                  <li>Experience working with interdisciplinary teams</li>
                  <li>Mentorship, eager to invest in others</li>
                  <li>Transparent with thoughts, questions, and feedback</li>
                </ul>
              </div>
              <div class="column">
                <ul>
                  <li>
                    Knowledge of Procore product applicable to other SAAS
                    products
                  </li>
                  <li>Ability to change with evolving programs/processes</li>
                  <li>Ability to work independently</li>
                  <li>Willingness to learn and enjoy learning</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
