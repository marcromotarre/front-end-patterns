import { Box, Typography } from "@mui/material";
import Listings from "../hooks-example/Listings";
import Input from "../hooks-example/Input";

export default function ReactHooksPattern() {
  return (
    <Box>
      <Typography variant="h2">Hooks Pattern</Typography>

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
    </Box>
  );
}
