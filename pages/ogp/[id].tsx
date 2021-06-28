import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";

type ServerSideProps = {
  id: string;
};

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<ServerSideProps>> {
  if (typeof context.params?.id === "string") {
    return {
      props: {
        id: context.params?.id,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default function Page({ id }: ServerSideProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  return (
    <>
      <Head>
        <meta
          property="og:image"
          key="ogImage"
          content={`${baseUrl}/api/ogp?id=${id}`}
        />
        <meta
          name="twitter:card"
          key="twitterCard"
          content="summary_large_image"
        />
        <meta
          name="twitter:image"
          key="twitterImage"
          content={`${baseUrl}/api/ogp?id=${id}`}
        />
      </Head>
      <div>
        <h1>ページid: {id}</h1>
      </div>
    </>
  );
}
