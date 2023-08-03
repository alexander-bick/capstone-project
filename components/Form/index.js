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

export default function Form() {
  

  return (
    <FormContainer>
      <Label htmlFor="where">Where:</Label>
      <Input
        id="where"
        name="where"
        type="text"
      />
      <Label htmlFor="when">When:</Label>
      <Input
        id="when"
        name="when"
        type="date"
      />
      <Label htmlFor="withme">With me:</Label>
      <Input
        id="withme"
        name="withme"
        type="text"
      />
      <Label htmlFor="soundtrack">Soundtrack:</Label>
      <Input
        id="soundtrack"
        name="soundtrack"
        type="text"
      />
      <Label htmlFor="notes">Notes:</Label>
      <Textarea
        name="notes"
        id="notes"
        cols="30"
        rows="5"
        ></Textarea>
      <SubmitButton type="submit">
        Submit
      </SubmitButton>
    </FormContainer>
  );
}
