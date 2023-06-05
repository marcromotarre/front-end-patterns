import { Box, Typography } from "@mui/material";
import userProxy from "../proxy/user";

export default function JavascriptProxyPattern() {
  userProxy.age = 32
  console.log(userProxy)
  return (
    <Box>
      <Typography variant="h2">Proxy Pattern</Typography>
      <Typography variant="body2">
        Intercept and control interactions to target objects
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        The Proxy Pattern uses a Proxy intercept and control interactions to
        target objects. Let's say that we have a person object. We can access
        properties with either dot or bracket notation,
      </Typography>
      <Typography variant="body2">
        and modify property values in a similar fashion.
      </Typography>
      <Typography variant="body2">
        With the Proxy pattern, we don't want to interact with this object
        directly. Instead, a Proxy object intercepts the request, and
        (optionally) forwards this to the target object - the person object in
        this case.
      </Typography>
      <Typography variant="body2">
        In JavaScript, we can easily create a new proxy by using the built-in
        Proxy object.
      </Typography>
    </Box>
  );
}


