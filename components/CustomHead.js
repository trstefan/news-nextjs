import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content="Sdasdasdasdasd" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "The News Hub",
};
