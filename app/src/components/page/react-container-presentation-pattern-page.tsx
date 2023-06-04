import { Box, Typography } from "@mui/material";
import Listings from "../container-presentation/container/Listings";
//import Listings from "../container-presentation/Listings";

export default function ReactContainerPresentationPattern() {
  return (
    <Box>
      <Typography variant="h2">Container / Presentation Pattern</Typography>
      <Listings />
    </Box>
  );
}
