import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          key="ogImage"
          content={`${baseUrl}/api/${id}`}
        />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="summary_large_image"
        />
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`${baseUrl}/api/${id}`}
        />
      </Head>
      <div>
        <h1>{id}のページだよ</h1>
      </div>
    </>
  );
};

export default Page;
