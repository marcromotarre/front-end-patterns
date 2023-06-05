import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import { useListingsContext } from '../context/ListingsProvider';

export default function Listings() {
  const listings = useListingsContext();
  return (
    <ListingsGrid>
      {listings.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
