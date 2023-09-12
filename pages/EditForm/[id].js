import { useRouter } from "next/router";
import Form from "../../components/Form/index.js";
import useLocalStorageState from "use-local-storage-state";

export default function EditForm() {
  const router = useRouter();
  const { id } = router.query;

  const [favoriteLocations] = useLocalStorageState("favoriteLocations", []);
  const locationToEdit = favoriteLocations.find((loc) => loc.id === id);

  if (!locationToEdit) {
    return <p>Lost that memory</p>;
  }

  return <Form initialData={locationToEdit} />;
}
