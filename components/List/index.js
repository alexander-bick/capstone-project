import React from "react";
import LocationThumbnail from "../LocationThumbnail/index.js";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const PageHeader = styled.header`
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #aa9173;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-family: "Quicksand", sans-serif;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.01rem;
  row-gap: 1rem;
  justify-items: center;
  align-items: center;
  flex: 1;
  margin: 1rem 0;
  overflow-y: auto;
  max-height: calc(100vh - 150px);
`;

const ListContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 375px;
  margin: 0 auto;
  position: relative;
`;

const PageFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #aa9173;
  position: fixed;
  margin-top: 0.2rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  align-items: center;
  background-color: white;
`;
const SubmitFormButton = styled.button`
  display: flex;
  justify-content: center;
  border-top: 1px solid #aa9173;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin: 0;
  grid-column: span 2;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function List({ locations = [] }) {
  const router = useRouter();

  const handleSubmitFormClick = () => {
    router.push("/SubmitForm");
  };
  return (
    <ListContainer>
      <PageHeader>
        <HeaderTitle>Rememory</HeaderTitle>
      </PageHeader>
      <LocationsGrid>
        {locations.map((location) => (
          <LocationThumbnail key={location.id} location={location} />
        ))}
      </LocationsGrid>
      <PageFooter>
        <SubmitFormButton type="button" onClick={handleSubmitFormClick}>
          <Image src="/add_50.png" alt="Checkbox Icon" width={50} height={50} />
        </SubmitFormButton>
      </PageFooter>
    </ListContainer>
  );
}
