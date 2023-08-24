import React from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function LocationThumbnail({ location }) {
  return (
    <div>
      <Link href={`/Location?locationId=${location.id}`}>
        <a>
          <CldImage
            src={location.image.src}
            alt="Picture"
            width={location.image.width / 15} 
            height={location.image.height / 15}
          />
        </a>
      </Link>
    </div>
  );
}
