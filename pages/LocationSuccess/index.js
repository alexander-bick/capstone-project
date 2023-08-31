import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import NewLocationSuccess from "../../components/NewLocationSuccess/index.js";

export default function NewLocationSucess() {
  const router = useRouter();
  const { index } = router.query;

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const existingLocations = JSON.parse(localStorage.getItem('favoriteLocations')) || [];
    const foundLocation = existingLocations[index];
    setLocation(foundLocation);
  }, [index]);


return location ? <NewLocationSuccess location={location} /> : <p>Loading...</p>;
}
