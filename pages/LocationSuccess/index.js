import { useRouter } from "next/router";
import NewLocationSuccess from "../../components/NewLocationSuccess/index.js";

export default function NewLocationSucess() {
  const router = useRouter();
  const { index } = router.query;

  const locations = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
  const location = locations[index];

  return <NewLocationSuccess location={location} />;
}
