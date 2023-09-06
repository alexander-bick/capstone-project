import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

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

const CardImage = styled(Image)`
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

const ReturnLink = styled(Link)`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  margin-top: 1rem;
`;

export default function LocationCard({ location }) {
  const router = useRouter();

  const handleReturnClick = () => {
    router.push("/");
  };

  return (
    <>
      <CardContainer>
        <PageHeader>
          <HeaderTitle>{location?.title}</HeaderTitle>
        </PageHeader>
        {location?.image && (
          <CldImage
            src={location.image.src}
            alt="Picture"
            width={location.image.width / 9}
            height={location.image.height / 9}
          />
        )}
        <FieldContainer>
          <Label>
            <Image
              src="/where_39.png"
              alt="Where icon"
              width={39}
              height={39}
            />
          </Label>
          <FieldValue>{location?.where}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/calendarWhite_39.png"
              alt="When icon"
              width={39}
              height={39}
            />
          </Label>
          <FieldValue>{location?.when}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/withme_39.png"
              alt="With me icon"
              width={39}
              height={39}
            />
          </Label>
          <FieldValue>{location?.withme}</FieldValue>
        </FieldContainer>
        <FieldContainer>
          <Label>
            <Image
              src="/soundtrack_39.png"
              alt="Soundtrack icon"
              width={39}
              height={39}
            />
          </Label>
          <FieldValue>{location?.soundtrack}</FieldValue>
        </FieldContainer>
        <NotesContainer>
          <Label>
            <Image
              src="/notes_39.png"
              alt="Notes icon"
              width={39}
              height={39}
            />
          </Label>
          <p>{location?.notes}</p>
        </NotesContainer>
        <ReturnLink href="/">
          <Image
            src="/return_39.png"
            alt="Return Icon"
            width={49}
            height={39}
          />
        </ReturnLink>
      </CardContainer>
    </>
  );
}
