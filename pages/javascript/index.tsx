import JavascriptModulePattern from "@/app/src/components/page/javascript-module-pattern-page";
import JavascriptProxyPattern from "@/app/src/components/page/javascript-proxy-pattern-page";
import JavascriptSingletonPattern from "@/app/src/components/page/javascript-singleton-pattern-page";
import { Box, Typography } from "@mui/material";

export default function ReactPage() {
  return (
    <Box>
      <Box>
        <Typography>Javascript Patterns</Typography>
      </Box>
      <Box>
        <JavascriptModulePattern />
        <JavascriptSingletonPattern />
        <JavascriptProxyPattern />
      </Box>
    </Box>
  );
}
 