import AddNewCom from "../../components/addNew";
import Head from "next/head";

const AddNew = () => {
  async function submitHandler(event, data) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <>
      <Head>
        <title>Add New Meet Up</title>
      </Head>
      <AddNewCom submitHandler={submitHandler} />
    </>
  );
};

export default AddNew;
