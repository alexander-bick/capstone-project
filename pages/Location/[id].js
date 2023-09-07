import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LocationCard from "../../components/LocationCard";
import useLocalStorageState from "use-local-storage-state";

export default function LocationDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [locations] = useLocalStorageState("favoriteLocations", {
    defaultValue: [],
  });
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (id) {
      const foundLocation = locations.find((loc) => loc.id === id);
      setLocation(foundLocation);
    }
  }, [id, locations]);

  return location ? <LocationCard location={location} /> : <p>Loading...</p>;
}
