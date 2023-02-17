import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import DimSpace from "./components";

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        variant: "ghost",
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <HashRouter>
      <DimSpace />
    </HashRouter>
  </ChakraProvider>
);
