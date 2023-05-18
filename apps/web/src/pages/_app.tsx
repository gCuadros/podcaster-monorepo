import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useState } from "react";
import theme from "ui/theme";

import { client } from "api/client";

import SEO_CONFIG from "../../next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => client);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <DefaultSeo {...SEO_CONFIG} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
