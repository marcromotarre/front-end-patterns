import { Box, Typography } from "@mui/material";
import Listings from "../higher-order-components/Listings";

export default function ReactHigherOrderComponentPattern() {
  return (
    <Box>
      <Typography variant="h2">Higher Order Components (HOC) Pattern</Typography>
      <Listings />
    </Box>
  );
}
