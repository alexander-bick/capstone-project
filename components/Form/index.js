import styled from "styled-components";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

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
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: lightblue;
  width: 20%;
  margin: auto;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
`;

export default function Form({ onSubmit }) {
  const [image, setImage] = useState();

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

    const existingLocations =
      JSON.parse(localStorage.getItem("favoriteLocations")) || []; // Retrieve existing favourite locations or build an empty array 

    existingLocations.push(formObject); // Add new favourite location to the existing array

    localStorage.setItem(
      "favoriteLocations",
      JSON.stringify(existingLocations)
    ); // Save the updated array in local storage

    onSubmit(formObject);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CldUploadButton onUpload={onUploadImage} uploadPreset="mhqwyi8p">
        Upload image
      </CldUploadButton>
      <Label htmlFor="title">Title:</Label>
      <Input id="title" name="title" type="text" />
      <Label htmlFor="where">Where:</Label>
      <Input id="where" name="where" type="text" />
      <Label htmlFor="when">When:</Label>
      <Input id="when" name="when" type="date" max={today} />
      <Label htmlFor="withme">With me:</Label>
      <Input id="withme" name="withme" type="text" />
      <Label htmlFor="soundtrack">Soundtrack:</Label>
      <Input id="soundtrack" name="soundtrack" type="text" />
      <Label htmlFor="notes">Notes:</Label>
      <Textarea name="notes" id="notes" cols="30" rows="5"></Textarea>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
  );
}
