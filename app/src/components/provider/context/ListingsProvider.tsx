import useListings from '@/app/src/hooks/useListings';
import React from 'react';

const ListingsContext = React.createContext(null);

export function useListingsContext() {
  return React.useContext(ListingsContext);
}

export function ListingsProvider(props) {
  const listings = useListings();

  if (!listings) return [];

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
}
