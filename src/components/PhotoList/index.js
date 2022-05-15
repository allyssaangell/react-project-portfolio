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
    },
    {
      name: "Robot Gladiators",
      category: "projects",
      description:
        "This is a Javascript Robot Battle Game.",
    },
    {
      name: "Run Buddy",
      category: "projects",
      description:
        "This is a website that mimicks a client's request to provide and gather potential customer information.",
    },
    {
      name: "Worker Bee",
      category: "projects",
      description:
        "This group project that aims to be a simplified and easy to use time entry application.",
    },
    {
      name: "Resume",
      category: "resume",
      description:
        "This group project that aims to be a simplified and easy to use time entry application.",
    }
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
