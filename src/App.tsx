import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Card from "./components/card";
import Header from "./components/header";
import { getItems } from "./data/items";

import { actions } from "./features/shopping/products";
import { RootState } from "./redux/store";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.products.data);
  useEffect(() => {
    const getData = async () => {
      dispatch(actions.start());
      const resp = await getItems(10);
      dispatch(actions.success(resp));
    };
    getData();
  }, [dispatch]);
  return (
    <div className="h-screen">
      <Header />
      <div className="p-4 flex flex-col">
        <div className="text-3xl font-bold text-center">PRODUCTS</div>
        <div className="flex flex-wrap justify-center">
          {items?.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
