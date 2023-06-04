import { Box, Button, Typography } from "@mui/material";
import Observer from "../observer/observer";
import "../observer/analytics";
export default function JavascriptObserverPattern() {
  const observe = () => {
    Observer.notify("Click on button!"); // Notifies all subscribed observers
  };

  return (
    <Box>
      <Typography variant="h2">Observer Pattern</Typography>
      <Typography variant="body2">
        Use observables to notify subscribers when an event occurs
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        With the observer pattern, we have: An observable object, which can be
        observed by subscribers in order to notify them. Subscribers, which can
        subscribe to and get notified by the observable object. For example, we
        can add the logger as a subscriber to the observable.
      </Typography>
      <Typography variant="body2">
        When the notify method is invoked on the observable, all subscribers get
        invoked and (optionally) pass the data from the notifier to them.
      </Typography>
      <Button onClick={() => observe()}>Click to Observe</Button>
    </Box>
  );
}
