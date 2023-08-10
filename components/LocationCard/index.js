import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const PageHeader = styled.header`
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px; 
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const FieldContainer = styled.div`
  margin-bottom: 1rem;
  display: flex; 
  align-items: center; 
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FieldValue = styled.p`
  margin: 0;
`;

const NotesContainer = styled.div`
  margin-top: 1rem;
  display: flex; 
  align-items: center; 
`;

const ReturnButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
`;

const ReturnIcon = styled.img`
  cursor: pointer;
`;

export default function LocationCard() {
  const router = useRouter(); // Initialize the router

  const submittedData = JSON.parse(localStorage.getItem("favoriteLocation")); // Retrieve the submitted data from Local Storage

  const handleReturnClick = () => {
    router.push("/"); // Navigate back to the landing page
  };

  return (
    <>
      <CardContainer>
        <PageHeader>
          <HeaderTitle>Favorite Location</HeaderTitle>
        </PageHeader>
        <CardImage src="/placeholder.svg" alt="Picture" />
        <FieldContainer>
          <Label>
            <img src="/where_39.png" alt="Where icon" />
          </Label>
          <FieldValue>{submittedData?.where}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <img src="/calendarWhite_39.png" alt="When icon" />
          </Label>
          <FieldValue>{submittedData?.when}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <img src="/withme_39.png" alt="With me icon" />
          </Label>
          <FieldValue>{submittedData?.withme}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <img src="/soundtrack_39.png" alt="Soundtrack icon" />
          </Label>
          <FieldValue>{submittedData?.soundtrack}</FieldValue>
        </FieldContainer>
        <NotesContainer>
          <Label>
            <img src="/notes_39.png" alt="Soundtrack icon" />
          </Label>
          <p>{submittedData?.notes}</p>
        </NotesContainer>
        <ReturnButtonContainer>
          <ReturnIcon
            src="/return_39.png"
            alt="Return Icon"
            onClick={handleReturnClick}
          />
        </ReturnButtonContainer>
      </CardContainer>
    </>
  );
}
