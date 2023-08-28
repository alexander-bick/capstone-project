import React from "react";
import LocationThumbnail from "../LocationThumbnail/index.js";

export default function List({ locations }) {
  return (
    <div>
      {locations.map((location, index) => (
        <LocationThumbnail key={index} location={location} />
      ))}
    </div>
  );
}
