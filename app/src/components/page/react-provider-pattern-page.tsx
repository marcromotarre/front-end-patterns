import { Box, Typography } from "@mui/material";
import { ListingsProvider } from "../provider/context/ListingsProvider";
import Input from "../provider/components/Input";
import Listings from "../provider/components/Listings";

export default function ReactProviderPattern() {
  return (
    <Box>
      <Typography variant="h2">Provider Pattern</Typography>
      <ListingsProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3em",
          }}
        >
          <Input />
          <Listings />
        </div>
      </ListingsProvider>
    </Box>
  );
}
