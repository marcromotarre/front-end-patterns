import React from 'react';
import { FlyOut } from './FlyOut';
import { useListingsContext } from '../provider/context/ListingsProvider';

export default function Input(props) {
  const {listings} = useListingsContext();
  return (
    <FlyOut>
      <FlyOut.Input />
      <FlyOut.List>
        {listings.map((listing) => (
          <FlyOut.ListItem value={listing.name}>{listing.name}</FlyOut.ListItem>
        ))}
      </FlyOut.List>
    </FlyOut>
  );
}
