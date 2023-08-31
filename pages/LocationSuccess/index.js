import { useRouter } from "next/router";
import NewLocationSuccess from "../../components/NewLocationSuccess/index.js";

export default function NewLocationSucess() {
  const router = useRouter();
  const { index } = router.query;

  const existingLocations = typeof window !== 'undefined' 
  ? JSON.parse(localStorage.getItem("favoriteLocations")) || [] 
  : [];

const location = existingLocations[index];


return location ? <NewLocationSuccess location={location} /> : <p>Loading...</p>;
}
