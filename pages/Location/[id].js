import React from "react";
import { useRouter } from "next/router";
import LocationCard from "../../components/LocationCard";

export default function LocationDetail() {
  const router = useRouter();
  const { id } = router.query;

  const existingLocations = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem("favoriteLocations")) || [] 
    : [];

  const location = existingLocations.find((location) => location.id === id);

  return location ? <LocationCard location={location} /> : <p>Loading...</p>;
}
