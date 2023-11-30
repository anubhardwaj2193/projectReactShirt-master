import { useContext, useState } from "react";
import CreateContext from "../store/create-context";

const InputItems = () => {
  const createcontext = useContext(CreateContext);
  const [name, setname] = useState("");
  const [desp, setdesp] = useState("");
  const [price, setprice] = useState("");
  const [largequan, setlargequan] = useState("");
  const [mediumquan, setmediumquan] = useState("");
  const [smallquan, setsmallquan] = useState("");
  function postAllItems(e) {
    e.preventDefault();
    const obj = {
      name: name,
      desp: desp,
      price: price,
      largequan: largequan,
      mediumquan: mediumquan,
      smallquan: smallquan,
    };
    createcontext.addItems(obj);
  }
  return (
    <>
      <h2>Fill the shirt details</h2>
      <form action="" onSubmit={postAllItems}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        Description:{" "}
        <input
          type="text"
          value={desp}
          onChange={(e) => {
            setdesp(e.target.value);
          }}
        />
        <br />
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        Quantity Large:{" "}
        <input
          type="text"
          value={largequan}
          onChange={(e) => {
            setlargequan(e.target.value);
          }}
        />
        <br />
        Quantity Medium:{" "}
        <input
          type="text"
          value={mediumquan}
          onChange={(e) => {
            setmediumquan(e.target.value);
          }}
        />
        <br />
        Quantity Small:{" "}
        <input
          type="text"
          value={smallquan}
          onChange={(e) => {
            setsmallquan(e.target.value);
          }}
        />
        <br />
        <button>Add Products</button>
      </form>
    </>
  );
};
export default InputItems;
