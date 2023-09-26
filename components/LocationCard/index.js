import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import useLocalStorageState from "use-local-storage-state";

const PageHeader = styled.header`
  text-align: center;
  padding: 0, 5rem 0;
  margin-bottom: 0.6rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-family: "Quicksand", sans-serif;
`;

const CardContainer = styled.div`
  background-color: white;
  border: 1px solid #aa9173;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
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
  font-size: 1.25rem;
`;

const NotesContainer = styled.div`
  margin-top: 0.1rem;
  font-family: "Architects Daughter", sans-serif;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
`;

const EditButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.3s;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.3s;
`;

const ReturnLink = styled(Link)`
  display: flex;
  justify-content: center;
  border-top: 1px solid #aa9173;
  padding-top: 1.1rem;
  margin-top: 0.05rem;
`;

export default function LocationCard({ location }) {
  const router = useRouter();

  const [locations, setLocations] = useLocalStorageState("favoriteLocations", {
    defaultValue: [],
  });

  const handleEdit = (id) => {
    router.push(`/EditForm/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Sure you want to delete this memory?")) {
      if (locations && locations.length) {
        const updatedLocations = locations.filter(
          (loc) => loc.id !== location.id
        );
        setLocations(updatedLocations);
        router.push("/");
      }
    }
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
              alt="Notes icon"
              width={35}
              height={35}
            />
          </Label>
          <p>{location?.notes}</p>
        </NotesContainer>
        <ButtonContainer>
          <EditButton onClick={() => handleEdit(location.id)}>
            <Image
              src="/edit_black_39.png"
              alt="Return Icon"
              width={30}
              height={30}
            />
          </EditButton>
          <DeleteButton onClick={() => handleDelete(location.id)}>
            <Image
              src="/delete_black_39.png"
              alt="Return Icon"
              width={30}
              height={30}
            />
          </DeleteButton>
        </ButtonContainer>
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
