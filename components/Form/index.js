import styled from "styled-components";
import { SubmitButton } from "../SubmitButton/index.js";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
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

const AddImageButton = styled.button`
  background-color: black;
  width: 10rem;
  height: 5rem;
  margin: auto;
  margin-top: 5px;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
`;



export default function Form({ onSubmit, defaultData }) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmit(data);
}

return (
    <FormContainer onSubmit={handleSubmit}>

      <AddImageButton type="submit">
      Add Image
      </AddImageButton>
        
      <Label htmlFor="where">Where:</Label>
      <Input
        id="where"
        name="where"
        type="text"
        defaultValue={defaultData?.where}
      />
      <Label htmlFor="when">When:</Label>
      <Input
        id="when"
        name="when"
        type="date"
        defaultValue={defaultData?.when}
      />
      <Label htmlFor="withme">With me:</Label>
      <Input
        id="withme"
        name="withme"
        type="text"
        defaultValue={defaultData?.withme}
        />
      <Label htmlFor="soundtrack">Soundtrack:</Label>
      <Input
        id="soundtrack"
        name="soundtrack"
        type="text"
        defaultValue={defaultData?.soundtrack}
      />
      <Label htmlFor="notes">Notes:</Label>
      <Textarea
        name="notes"
        id="notes"
        cols="30"
        rows="5"
        defaultValue={defaultData?.notes}
      ></Textarea>
      <SubmitButton type="submit">
        {defaultData ? "Edit" : "Submit"}
        </SubmitButton>
      </FormContainer>
)
}