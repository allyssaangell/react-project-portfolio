import React, { useState } from "react";
import Modal from "../Modal";


const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: "Forecast Films",
      category: "projects",
      description:
        "This app will give you movie recommendations to match the weather. What's better than watching a scary movie on a stormy night?",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/allyssaangell/forecast-films">
            GitHub Repository
          </a>{" "}
          <a href="https://allyssaangell.github.io/forecast-films/">
            Deployed Application
          </a>
        </>
      ),
    },
    {
      name: "Robot Gladiators",
      category: "projects",
      description: "This is a Javascript Robot Battle Game.",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/allyssaangell/robot-gladiators">
            GitHub Repository
          </a>{" "}
          <a href="https://allyssaangell.github.io/robot-gladiators/">
            Deployed Application
          </a>
        </>
      ),
    },
    {
      name: "Run Buddy",
      category: "projects",
      description:
        "This is a website that mimicks a client's request to provide and gather potential customer information.",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/allyssaangell/run-buddy">
            GitHub Repository
          </a>{" "}
          <a href="https://allyssaangell.github.io/run-buddy/">
            Deployed Application
          </a>
        </>
      ),
    },
    {
      name: "Perspective News",
      category: "projects",
      description:
        "This group project searches different sources of news for users to compare and contrast. The goal is for users to be able to gain a more well rounded view of a topic, by seeing many different sources and perspectives.",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/ItzGuled/perspective-news">
            GitHub Repository
          </a>{" "}
          <a href="https://perspective-news.herokuapp.com/">Deployed Application</a>
        </>
      ),
    },
    {
      name: "Budget Tracker",
      category: "projects",
      description:
        "This budgeting project is able to keep track of withdrawals and deposits added to the application offline, and when reconnecting, it will track those amounts accurately.",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/allyssaangell/budget-tracker">
            GitHub Repository
          </a>{" "}
          <a href="https://pure-thicket-77987.herokuapp.com/">Deployed Application</a>
        </>
      ),
    },
    {
      name: "Quick Coding Quiz",
      category: "projects",
      description:
        "This quiz shows examples of JavaScript fundamentals, both in quiz content as well as how the application is made. It includes a countdown feature as well as a High Score page.",
      links: (
        <>
          🔗{" "}
          <a href="https://github.com/allyssaangell/quick-coding-quiz">
            GitHub Repository
          </a>{" "}
          <a href="https://allyssaangell.github.io/quick-coding-quiz/">Deployed Application</a>
        </>
      ),
    },
    {
      name: "Resume",
      category: "resume",
      description:
        "",
      links: <><a href="/AngellResume.jpg" download>💾 Save Resume</a></>,
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
