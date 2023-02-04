import { ChakraProvider, theme } from "@chakra-ui/react";
import DimSpace from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <DimSpace />
  </ChakraProvider>
);
