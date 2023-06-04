import JavascriptFactoryPattern from "@/app/src/components/page/javascript-factory-pattern-page";
import JavascriptModulePattern from "@/app/src/components/page/javascript-module-pattern-page";
import JavascriptObserverPattern from "@/app/src/components/page/javascript-observer-pattern-page";
import JavascriptPrototypePattern from "@/app/src/components/page/javascript-prototype-pattern-page";
import JavascriptProxyPattern from "@/app/src/components/page/javascript-proxy-pattern-page";
import JavascriptSingletonPattern from "@/app/src/components/page/javascript-singleton-pattern-page";
import { Box, Typography } from "@mui/material";

export default function JavascriptPage() {
  return (
    <Box>
      <Box>
        <Typography>Javascript Patterns</Typography>
      </Box>
      <Box>
        <JavascriptModulePattern />
        <JavascriptSingletonPattern />
        <JavascriptProxyPattern />
        <JavascriptObserverPattern />
        <JavascriptFactoryPattern />
        <JavascriptPrototypePattern />
      </Box>
    </Box>
  );
}
