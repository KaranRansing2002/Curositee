import { useState } from "react";
import { Link } from "react-router-dom";

const OrdersTable = ({ orders }) => {
  const [ordersState, setOrders] = useState(orders);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((vendor) =>
        vendor.map((order) =>
          order.orderid === orderId
            ? { ...order, status: parseInt(newStatus, 10) }
            : order
        )
      )
    );
  };

  if (!Array.isArray(ordersState) || ordersState.length === 0) {
    return <div>No orders available</div>;
  }

  const flattenedOrders = ordersState.flat();

  return (
    <div className="w-auto p-6 h-screen">
      <div className="py-2 px-4 text-left flex items-center">
        <div className="flex-grow">
          Vendor Name : {flattenedOrders[0].vendorname}
        </div>
        <div className="ml-auto">
          <Link to="/Vendor/Products">
            <button
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              My-Products
            </button>
          </Link>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200 shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 text-left">Username</th>
            <th className="py-2 px-4 text-left">Phone Number</th>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Order Date</th>
            <th className="py-2 px-4 text-left">Delivery Date</th>
            <th className="py-2 px-4 text-left">Products</th>
            <th className="py-2 px-4 text-left">Total Price</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {flattenedOrders.map((order, index) => (
            <tr className="border-t" key={order.orderid}>
              <td className="py-2 px-4">{order?.username || "N/A"}</td>
              <td className="py-2 px-4">{order?.phoneno || "N/A"}</td>
              <td className="py-2 px-4">{order?.orderid || "N/A"}</td>
              <td className="py-2 px-4">{order?.orderdate || "N/A"}</td>
              <td className="py-2 px-4">{order?.deliverydate || "N/A"}</td>
              <td className="py-2 px-4">
                <Link to={`/OrderedProductDetails/${index}`}>
                  <button
                    className="select-none rounded-lg bg-blue-400 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Product-Details
                  </button>
                </Link>
              </td>
              <td className="py-2 px-4">
                {order?.products?.reduce(
                  (total, product) => total + product.quantity * product.price,
                  0
                ) || 0}
              </td>
              <td className="py-2 px-4">
                <select
                  className="bg-yellow-300 border border-gray-300 rounded-lg py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={order?.status || 0}
                  onChange={(e) =>
                    handleStatusChange(order?.orderid, e.target.value)
                  }
                >
                  <option value="0">Pending</option>
                  <option value="1">Delivered</option>
                  <option value="2">Canceled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
