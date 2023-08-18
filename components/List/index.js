import React from "react";
import LocationCard from "../LocationCard/index.js";

export default function List({ locations }) {
  return (
    <div>
      {locations.map((location, index) => (
        <LocationCard key={index} location={location} />
      ))}
    </div>
  );
}
