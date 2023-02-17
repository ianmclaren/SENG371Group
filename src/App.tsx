import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <DimSpace />
    </BrowserRouter>
  </ChakraProvider>
);
