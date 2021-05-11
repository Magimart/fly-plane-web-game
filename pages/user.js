import Head from "next/head";

export default function User({ userAgent = "Frediee" }) {
  return (
    <>
      <Head>
        <title>Hello User Frederick!</title>
      </Head>
      <h1>
      <em>{userAgent}</em> !{" "}
      </h1>
      <p>
        Magima i ama here to help
        we will still be testing this application
        
      </p>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      userAgent: req.headers["user-agent"],
    },
  };
};
