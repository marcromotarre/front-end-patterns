import useSWR from "swr";

// https://usehooks.com/
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function useListings() {
  const { data, error } = useSWR(
    "https://house-lydiahallie.vercel.app/api/listings",
    fetcher
  );
  return data;
}

/*
export default function useListings() {
  const [listings, setListings] = React.useState(null);

  React.useEffect(() => {
    fetch('https://house-lydiahallie.vercel.app/api/listings')
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return listings;
}
*/
