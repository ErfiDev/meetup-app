import Layout from "../../components/layouts/layout";
import AddNewCom from "../../components/addNew";
import Head from "next/head";

const AddNew = () => {
  async function submitHandler(event, data) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <Layout>
      <Head>
        <title>Add New Meet Up</title>
      </Head>
      <AddNewCom submitHandler={submitHandler} />
    </Layout>
  );
};

export default AddNew;
