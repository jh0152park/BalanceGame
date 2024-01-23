import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #101012;
    color: whitesmoke;
    
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyle />
                <ChakraProvider theme={theme}>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <App />
                </ChakraProvider>
            </RecoilRoot>
        </QueryClientProvider>
    </>
);
