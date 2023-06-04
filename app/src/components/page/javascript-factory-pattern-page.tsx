import { Box, Typography } from "@mui/material";
import singletonCounter from "../singleton/counter";

import * as books from "../factory/books";

export default function JavascriptFactoryPattern() {

  console.log("books", books)
  return (
    <Box>
      <Typography variant="h2">Factory Pattern</Typography>
      <Typography variant="body2">
        Use a factory function in order to create objects
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        With the Factory Pattern, we can use a special function - the factory
        function - to create many of the same objects.
      </Typography>
    </Box>
  );
}
