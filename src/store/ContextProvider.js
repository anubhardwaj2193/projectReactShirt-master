import axios from "axios";
import CreateContext from "./create-context";
import { useEffect, useState } from "react";

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartitem, setCartItem] = useState([]);
  useEffect(() => {
    async function getItemsapi() {
      try {
        let response = await axios.get(
          "https://crudcrud.com/api/bf8276f31cc34bdb887d391b5128b784/items"
        );
        setItems(response.data);
      } catch (err) {
        console.log("Error:", err);
      }
    }
    getItemsapi();
  }, [items]);

  async function addItemsHandler(item) {
    try {
      const response = await axios.post(
        "https://crudcrud.com/api/bf8276f31cc34bdb887d391b5128b784/items",
        item,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setItems([...items, response.data]);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  async function addcartHandler(item, value) {
    const copyItems = { ...item };
    let largequanQ = Number(copyItems.largequan);
    let mediumquanQ = Number(copyItems.mediumquan);
    let smallquanQ = Number(copyItems.smallquan);
    if (value === "large") {
      largequanQ -= 1;
    } else if (value === "mid") {
      mediumquanQ -= 1;
    } else {
      smallquanQ -= 1;
    }
    console.log(largequanQ, mediumquanQ, smallquanQ);
    let response = await axios.put(
      `https://crudcrud.com/api/bf8276f31cc34bdb887d391b5128b784/items/${copyItems._id}`,
      {
        name: copyItems.name,
        desp: copyItems.desp,
        price: copyItems.price,
        largequan: largequanQ,
        mediumquan: mediumquanQ,
        smallquan: smallquanQ,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (cartitem.length > 0) {
      const ind = cartitem.findIndex((val) => {
        return val.name === item.name;
      });
    }
    if (ind == -1 || cartitem.length == 0) {
      largequanQ = 0;
      mediumquanQ = 0;
      smallquanQ = 0;
      if (value === "large") {
        largequanQ = 1;
      } else if (value === "mid") {
        mediumquanQ = 1;
      } else {
        smallquanQ = 1;
      }
      const obj = {
        name: copyItems.name,
        desp: copyItems.desp,
        price: copyItems.price,
        largequan: largequanQ,
        mediumquan: mediumquanQ,
        smallquan: smallquanQ,
      };
      try {
        const response = await axios.post(
          "https://crudcrud.com/api/bf8276f31cc34bdb887d391b5128b784/cartItems",
          obj,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setCartItem((prev) => {
          return [...prev, response.data];
        });
      } catch (err) {
        console.log("Error:", err);
      }
    } else {
      // largequanQ = 0;
      // mediumquanQ = 0;
      // smallquanQ = 0;
      // if (value === "large") {
      //   largequanQ += 1;
      // } else if (value === "mid") {
      //   mediumquanQ += 1;
      // } else {
      //   smallquanQ += 1;
      // }
      // const obj = {
      //   name: copyItems.name,
      //   desp: copyItems.desp,
      //   price: copyItems.price,
      //   largequan: largequanQ,
      //   mediumquan: mediumquanQ,
      //   smallquan: smallquanQ,
      // };
    }
  }

  const createcontext = {
    items: items,
    addItems: addItemsHandler,
    storeCart: cartitem,
    addItemsToCart: addcartHandler,
  };

  return (
    <CreateContext.Provider value={createcontext}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default ContextProvider;
