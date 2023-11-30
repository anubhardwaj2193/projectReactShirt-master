import { useContext } from "react";
import CreateContext from "../store/create-context";

const ShowItems = () => {
  let createcontext = useContext(CreateContext);
  let items = createcontext.items;

  function addItemsCart(item, value) {
    createcontext.addItemsToCart(item, value);
  }
  return (
    <>
      <h2>Show Items</h2>
      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.desp}</p>
          <p>{item.price}</p>
          <button
            onClick={(e) => {
              addItemsCart(item, "large");
            }}
          >
            {"largeQ- " + item.largequan}
          </button>
          <button
            onClick={(e) => {
              addItemsCart(item, "mid");
            }}
          >
            {"MidQ- " + item.mediumquan}
          </button>
          <button
            onClick={(e) => {
              addItemsCart(item, "small");
            }}
          >
            {"SmallQ- " + item.smallquan}
          </button>
        </div>
      ))}
    </>
  );
};
export default ShowItems;
