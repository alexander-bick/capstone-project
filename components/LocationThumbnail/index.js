import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styled from "styled-components";

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  overflow: hidden;
  height: 150px;
  width: 160px;
`;

const TitleCard = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export default function LocationThumbnail({ location }) {
  return (
    <div>
      <Link href={`/Location/${location.id}`}>
        <ThumbnailContainer>
          {location?.image ? (
            <CldImage
              src={location.image.src}
              alt="Picture"
              width="160"
              height="150"
            />
          ) : (
            <TitleCard>{location.title}</TitleCard>
          )}
        </ThumbnailContainer>
      </Link>
    </div>
  );
}
