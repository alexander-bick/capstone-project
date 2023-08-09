import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* Adjust the maximum width as needed */
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const FieldValue = styled.p`
  margin: 0;
`;

const NotesContainer = styled.div`
  margin-top: 1rem;
`;

export default function LocationCard({ data }) {
  return (
    <CardContainer>
      <CardImage src="public/placeholderImage.svg" alt="Favorite Location" />
      <FieldContainer>
        <Label>Where:</Label>
        <FieldValue>{data.where}</FieldValue>
      </FieldContainer>
      <FieldContainer>
        <Label>When:</Label>
        <FieldValue>{data.when}</FieldValue>
      </FieldContainer>
      <FieldContainer>
        <Label>With me:</Label>
        <FieldValue>{data.withme}</FieldValue>
      </FieldContainer>
      <FieldContainer>
        <Label>Soundtrack:</Label>
        <FieldValue>{data.soundtrack}</FieldValue>
      </FieldContainer>
      <NotesContainer>
        <Label>Notes:</Label>
        <p>{data.notes}</p>
      </NotesContainer>
    </CardContainer>
  );
}
