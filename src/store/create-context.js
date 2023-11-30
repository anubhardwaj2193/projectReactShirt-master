import React from "react";
const CreateContext = React.createContext({
  items: [],
  addItems: (item) => {},
  storeCart: [],
  addItemsToCart: (item) => {},
});
export default CreateContext;
