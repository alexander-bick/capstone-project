import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NewLocationSuccess from "../../components/NewLocationSuccess/index.js";
import useLocalStorageState from "use-local-storage-state";

export default function NewLocationSucessPage() {
  const router = useRouter();
  const { id } = router.query;

  const [locations] = useLocalStorageState("favoriteLocations", []);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (id) {
      const foundLocation = locations.find((loc) => loc.id === id);
      setLocation(foundLocation);
    }
  }, [id, locations]);

  return location ? (
    <NewLocationSuccess location={location} />
  ) : (
    <p>Loading...</p>
  );
}
