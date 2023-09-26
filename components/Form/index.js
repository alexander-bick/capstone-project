import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { CldUploadButton } from "next-cloudinary";
import useLocalStorageState from "use-local-storage-state";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  font-family: "Quicksand", sans-serif;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  font-family: "Quicksand", sans-serif;
`;

const Textarea = styled.textarea`
  font-family: "Quicksand", sans-serif;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: black;
  width: auto;
  margin: auto;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: white;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  border: none;
  font-size: inherit;
`;

export default function Form({ onSubmit, initialData = {} }) {
  const router = useRouter();
  const [image, setImage] = useState(initialData.image || null);
  const [favoriteLocations, setFavoriteLocations] = useLocalStorageState(
    "favoriteLocations",
    { defaultValue: [] }
  );

  function onUploadImage(imageUpload) {
    if (imageUpload.event === "success") {
      setImage({
        src: imageUpload.info.secure_url,
        height: imageUpload.info.height,
        width: imageUpload.info.width,
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    if (image) {
      formObject.image = image;
    }

    if (initialData.id) {
      formObject.id = initialData.id;
      const updatedLocations = favoriteLocations.map((loc) =>
        loc.id === initialData.id ? formObject : loc
      );
      setFavoriteLocations(updatedLocations);
    } else {
      formObject.id = Math.random().toString(32).substring(2);
      const newFavoriteLocations = [...favoriteLocations, formObject];
      setFavoriteLocations(newFavoriteLocations);
    }

    router.push(`/LocationSuccess/${formObject.id}`);

    if (onSubmit) {
      onSubmit(formObject);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CldUploadButton onUpload={onUploadImage} uploadPreset="mhqwyi8p">
        Upload image
      </CldUploadButton>
      <Label htmlFor="title">Title:</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={initialData.title}
      />
      <Label htmlFor="where">Where:</Label>
      <Input
        id="where"
        name="where"
        type="text"
        defaultValue={initialData.where}
      />
      <Label htmlFor="when">When:</Label>
      <Input
        id="when"
        name="when"
        type="date"
        max={today}
        defaultValue={initialData.when}
      />
      <Label htmlFor="withme">With me:</Label>
      <Input
        id="withme"
        name="withme"
        type="text"
        defaultValue={initialData.withme}
      />
      <Label htmlFor="soundtrack">Soundtrack:</Label>
      <Input
        id="soundtrack"
        name="soundtrack"
        type="text"
        defaultValue={initialData.soundtrack}
      />
      <Label htmlFor="notes">Notes:</Label>
      <Textarea
        name="notes"
        id="notes"
        cols="30"
        rows="4"
        defaultValue={initialData.notes}></Textarea>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
