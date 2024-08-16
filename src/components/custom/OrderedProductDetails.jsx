import { Orders } from "@/data/proddData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const OrderedProductDetails = () => {
    const { orderIndex } = useParams();
    const order = Orders[0][orderIndex];
    const data = order.products;

    return (
        <div className="p-4 h-screen">
            <div className="py-2 px-4 text-left flex items-center">
                <div className="flex-grow">
                    <h1 className="text-2xl font-bold mb-4">Products List</h1>
                </div>
            </div>

            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Color</th>
                        <th className="py-2 px-4 border-b">Size</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product, idx) => (
                        <tr key={idx}>
                            <td className="py-2 px-4 border-b">
                            <Link to={`/productDesc/${idx}`}>
                                    <span
                                        className=" py-3 px-6 text-center text-lg font-bold underline text-blue-300 hover:text-blue-700 "
                                        type="button"
                                    >
                            {product.productid}
                                    </span>
                                </Link>
                            </td>
                            <td className="py-2 px-4 border-b">{product.title}</td>
                            <td className="py-2 px-4 border-b">{product.price}</td>
                            <td className="py-2 px-4 border-b">{product.color}</td>
                            <td className="py-2 px-4 border-b">{product.size}</td>
                            <td className="py-2 px-4 border-b">{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderedProductDetails;
