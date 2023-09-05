import React from "react";
import LocationThumbnail from "../LocationThumbnail/index.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const PageHeader = styled.header`
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const ListContainer = styled.form`
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

const PageFooter = styled.form`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  margin-top: 1rem;
`;
const SubmitFormButton = styled.button`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ccc;
  padding-top: 0, 5rem;
  margin-top: 0, 5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function List({ locations }) {
  const router = useRouter();

  const handleConfirmClick = () => {
    router.push("/SubmitForm");
  };
  return (
    <ListContainer>
      <PageHeader>
        <HeaderTitle>Rememory</HeaderTitle>
      </PageHeader>
      {locations.map((location) => (
        <LocationThumbnail key={location.id} location={location} />
      ))}
      <PageFooter>
        <SubmitFormButton onClick={handleConfirmClick}>
          <Image src="/add_50.png" alt="Checkbox Icon" width={50} height={50} />
        </SubmitFormButton>
      </PageFooter>
    </ListContainer>
  );
}
