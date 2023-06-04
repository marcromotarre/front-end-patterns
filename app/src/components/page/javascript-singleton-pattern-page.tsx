import { Box, Typography } from "@mui/material";
import singletonCounter from "../singleton/counter";

import "../singleton/file1"
import "../singleton/file2"
import "../singleton/file3"
export default function JavascriptSingletonPattern() {

  return (
    <Box>
      <Typography variant="h2">Singleton Pattern</Typography>
      <Typography variant="body2">
        Share a single global instance throughout our application
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        With the Singleton Pattern, we restrict the instantiation of certain
        classes to one single instance. This single instance is unmodifiable,
        and can be accessed globally throughout the application. For example, we
        can have a Counter singleton, which contains a getCount, increment, and
        decrement method.
      </Typography>
      <Typography variant="body2">
        Singleton Counter value should be 6 and is: {singletonCounter.counter}
      </Typography>
    
    </Box>
  );
}
