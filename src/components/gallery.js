import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import "./gallery.css";
import InfoSection from "../components/info";
import RegistrySection from "../components/registry";
import RsvpSection from "../components/rsvp";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      <InfoSection />
      <RsvpSection />
      <RegistrySection />
      {images.map(({ id, name, gatsbyImageData }) => (
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
