import { Box, Typography } from "@mui/material";
import "../prototype/dogs"

export default function JavascriptPrototypePattern() {
  
  return (
    <Box>
      <Typography variant="h2">Prototype Pattern</Typography>
      <Typography variant="body2">
        Share properties among many objects of the same type
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        If we want to share properties among many objects of the same type, we
        can use the Prototype pattern.
      </Typography>
    </Box>
  );
}
