import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const PageHeader = styled.header`
  text-align: center;
  padding: 0.5rem 0;
  margin-bottom: 0.6rem;
`;

const ImageWrapper = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  width: 345px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-family: "Quicksand", sans-serif;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #aa9173;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
`;

const FieldContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const FieldValue = styled.p`
  margin: 0;
  font-family: "Architects Daughter", sans-serif;
`;

const NotesContainer = styled.div`
  margin-top: 0.5rem;
  font-family: "Architects Daughter", sans-serif;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ConfirmButton = styled.button`
  align-self: center;
  border-top: 1px solid #aa9173;
  padding-top: 1rem;
  margin-top: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function NewLocationSuccess({ location }) {
  const router = useRouter();

  const handleConfirmClick = () => {
    router.push("/");
  };

  return (
    <>
      <CardContainer>
        <PageHeader>
          <HeaderTitle>{location?.title}</HeaderTitle>
        </PageHeader>
        <ImageWrapper>
          {location?.image && (
            <CldImage
              src={location.image.src}
              alt="Picture"
              width="345"
              height="200"
            />
          )}
        </ImageWrapper>
        <FieldContainer>
          <Label>
            <Image
              src="/where_39.png"
              alt="Where icon"
              width={35}
              height={35}
            />
          </Label>
          <FieldValue>{location?.where}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/calendarWhite_39.png"
              alt="When icon"
              width={35}
              height={35}
            />
          </Label>
          <FieldValue>{location?.when}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/withme_39.png"
              alt="With me icon"
              width={35}
              height={35}
            />
          </Label>
          <FieldValue>{location?.withme}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/soundtrack_39.png"
              alt="Soundtrack icon"
              width={35}
              height={35}
            />
          </Label>
          <FieldValue>{location?.soundtrack}</FieldValue>
        </FieldContainer>
        <NotesContainer>
          <Label>
            <Image
              src="/notes_39.png"
              alt="Soundtrack icon"
              width={35}
              height={35}
            />
          </Label>
          <p>{location?.notes}</p>
        </NotesContainer>
        <ConfirmButton onClick={handleConfirmClick}>
          <Image
            src="/Checkbox_50.png"
            alt="Checkbox Icon"
            width={50}
            height={50}
          />
        </ConfirmButton>
      </CardContainer>
    </>
  );
}
