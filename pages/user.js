import Head from "next/head";

export default function User({ userAgent = "Frediee" }) {
  return (
    <>
      <Head>
        <title>Hello User Frederick!</title>
      </Head>
      <p>
        {" "}
        felix i ama here to help <em>{userAgent}</em> !{" "}
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
