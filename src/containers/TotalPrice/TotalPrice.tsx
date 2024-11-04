import axiosApi from '../../axiosAPI.ts';
import { IFood, IFoodApi } from '../../types';
import { useCallback, useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState<IFood[]>([]);
  const fetchdata = useCallback(async () => {
    const response = await axiosApi<IFoodApi | null>('Food.json');

    const ordersREsponse = response.data;
    if (!ordersREsponse) {
      return setOrders([]);
    }
    const ordersList = Object.keys(ordersREsponse).map(orderId => {
      // const order = { ...ordersREsponse[orderId]};
      //
      //
      // const totalPrice = ordersList.reduce((acc, item) => {
      //   return acc + item.calories;
      // }, 0);
      //
      // console.log(totalPrice);
      // return{
      //   ...order,
      // }

    });




    setOrders(ordersList);
  }, []);

  useEffect(() => {
    void fetchdata();
  },[fetchdata]);

  return (
    <>

    </>
  );
};

export default Orders;