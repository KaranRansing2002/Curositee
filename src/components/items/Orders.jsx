import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { UserContext } from '@/App'
import config from '@/config'
import axios from 'axios'
import ProdCard from '../custom/ProdCard'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { loggedUser } = useContext(UserContext);

  useEffect(() => {
    const url = `${config.url}/orders?Id=${loggedUser.uid}`;
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setOrders(response.data);
      }).catch(error => {
        console.error('There was an error fetching the data!', error);
      })
  },[]);
  if(orders.length==0) return;
    return (
      <div className='p-2 border grid max-h-96 overflow-y-scroll gap-2 '>
        {
          orders.map((order,ind)=><ProdCard prod={order}/>)
        }
      </div>
    )
  }

export default Orders;
