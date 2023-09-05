import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocationCard from "../../components/LocationCard";

export default function LocationDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const existingLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || [];
    const foundLocation = existingLocations.find((loc) => loc.id === id);
    setLocation(foundLocation);
  }, [id]);

  return location ? <LocationCard location={location} /> : <p>Loading...</p>;
}
