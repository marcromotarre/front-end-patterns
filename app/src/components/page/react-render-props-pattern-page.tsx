import { Box, Typography } from "@mui/material";
import RenderPropsComponent from "../render-props/RenderPropsComponent";

export default function ReactRenderPropsPattern() {
  return (
    <Box>
      <Typography variant="h2">Render Props Pattern</Typography>
      <RenderPropsComponent />
    </Box>
  );
}
