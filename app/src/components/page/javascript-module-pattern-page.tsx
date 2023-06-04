import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { divide, multiply, subtract, sum } from "../utils/math";

const VALUE_1 = 9;
const VALUE_2 = 3;
export default function JavascriptModulePattern() {
  console.log(`${VALUE_1} + ${VALUE_2} = ${sum(VALUE_1, VALUE_2)}`);
  console.log(`${VALUE_1} - ${VALUE_2} = ${subtract(VALUE_1, VALUE_2)}`);
  console.log(`${VALUE_1} * ${VALUE_2} = ${multiply(VALUE_1, VALUE_2)}`);
  console.log(`${VALUE_1} / ${VALUE_2} = ${divide(VALUE_1, VALUE_2)}`);
  return (
    <Box>
      <Typography variant="h2">Module Pattern</Typography>
      <Typography variant="body2">
        Split up your code into smaller, reusable pieces
      </Typography>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="body2">
        ES2015 introduced built-in JavaScript modules. A module is a file
        containing JavaScript code and makes it easy to expose and hide certain
        values.
      </Typography>
      <Typography variant="body2">
        The module pattern is a great way to split a larger file into multiple
        smaller, reusable pieces. It also promotes code encapsulation, since the
        values within modules are kept private inside the module by default, and
        cannot be modified. Only the values that are explicitly exported with
        the export keyword are accessible to other files.
      </Typography>
    </Box>
  );
}
