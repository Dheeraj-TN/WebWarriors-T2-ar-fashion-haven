import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import "./Orders.css";
import Products from "../Wardobe/Products";
import Order from "./Order";
import CheckOutProduct from "./CheckOutProduct";

import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  onSnapshot,
  snapshotEqual,
  orderBy,
  query,
} from "firebase/firestore";
import { useStateValue } from "../StateProvider";
import Header from "../Components/Header";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const prodRef = collection(db, "orders");
  useEffect(() => {
    if (user) {
      const q = query(prodRef, orderBy("created", "desc"));
      onSnapshot(
        q,
        (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      setOrders([]);
    }

    //eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your orders</h1>
        <div className="order__container">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
