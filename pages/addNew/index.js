import Layout from "../../components/layouts/layout";
import Head from "next/head";

const AddNew = () => {
  return (
    <Layout>
      <Head>
        <title>Add New Meet Up</title>
      </Head>
      <section className="w-full min-h-half flex justify-center items-center p-10">
        <form>
          <input type="text" />
        </form>
      </section>
    </Layout>
  );
};

export default AddNew;
