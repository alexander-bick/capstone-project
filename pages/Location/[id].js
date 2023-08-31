import React from "react";
import { useRouter } from "next/router";
import LocationCard from "../../components/LocationCard";

export default function LocationDetail() {
  const router = useRouter();
  const { id } = router.query;

  const locations = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
  const location = locations.find((location) => String(location.id) === String(id));

  console.log(id);

  return location ? <LocationCard location={location} /> : <p>Loading...</p>;
}
