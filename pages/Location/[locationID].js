import React from 'react';
import { useRouter } from 'next/router';
import LocationCard from '../../components/LocationCard';

export default function LocationDetail() {
  const router = useRouter();
  const { locationId } = router.query;

  const location = {
    id: 'locationId',
    title: 'Example',
    image: {
        src:'/placeholder.svg',
        width: '100px',
        height: '100px',
    }
    where:'London',
    when: '2017-08-11',
    withme: 'Uli',
    soundtrack: 'Oasis',
    notes:'Best pub ever',
  };

  return <LocationCard location={location} />;
}