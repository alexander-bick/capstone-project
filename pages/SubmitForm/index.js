import Form from "../../components/Form/index.js";
import { useRouter } from "next/router";

export default function SubmitForm(locationData) {
  const router = useRouter();

  const handleFormSubmit = (formData) => {
    router.push("/LocationSuccess");
  };
  return <Form onSubmit={handleFormSubmit} locationData={locationData} />;
}
