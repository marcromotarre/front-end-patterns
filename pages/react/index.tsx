import ReactCompoundPattern from "@/app/src/components/page/react-compound-pattern-page";
import ReactContainerPresentationPattern from "@/app/src/components/page/react-container-presentation-pattern-page";
import ReactHigherOrderComponentPattern from "@/app/src/components/page/react-higher-order-component-pattern-page";
import ReactHooksPattern from "@/app/src/components/page/react-hooks-pattern-page";
import ReactProviderPattern from "@/app/src/components/page/react-provider-pattern-page";
import ReactRenderPropsPattern from "@/app/src/components/page/react-render-props-pattern-page";
import { Box, Typography } from "@mui/material";

export default function ReactPage() {
  return (
    <Box>
      <Box>
        <Typography>Javascript Patterns</Typography>
      </Box>
      <Box>
        <ReactContainerPresentationPattern />
        <ReactHigherOrderComponentPattern />
        <ReactRenderPropsPattern />
        <ReactHooksPattern />
        <ReactProviderPattern />
        <ReactCompoundPattern />
      </Box>
    </Box>
  );
}
