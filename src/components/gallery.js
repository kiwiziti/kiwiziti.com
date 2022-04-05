import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import "./gallery.css";
import InfoSection from "../components/info";
import RegistrySection from "../components/registry";
import RsvpSection from "../components/rsvp";
import ScheduleSection from "../components/schedule";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let shuffledImages = shuffle(images);

const Gallery = ({ images }) => {

  return (
    <div className="gallery">
      <InfoSection />
      <RsvpSection />
      <RegistrySection />
      <ScheduleSection />
      {shuffledImages.map(({ id, name, gatsbyImageData }) => (
        <GatsbyImage
          className="image"
          key={id}
          alt={name}
          image={gatsbyImageData}
        />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default Gallery;
