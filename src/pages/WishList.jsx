import ImageCard from "@/components/custom/ImageCard";
import axios from "axios";
import { useEffect, useState } from "react";

function WishList({ wishlist, setWishlist }) {
    const [WshListProducts, setProducts] = useState([]);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8080/getWishList?uid=4')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    const normalizedProducts = wishlist.map(product => ({
        imgid: product.imgid,
        title: product.title,
        category: "",
        price: product.price,
        rating: product.rating
    }));

    const handleAddToWishlist  = async (product) => {
        if (normalizedProducts.some(item => item.imgid === product.imgid)) {
            setAlertMessage("Product is already in the wishlist!");
            setTimeout(() => setAlertMessage(""), 3000); 
        } else {
            const uid = 4;
		const apiUrl = `http://localhost:8080/addToWishList?imgid=${index}&uid=4`;
		
		try {
			await axios.post(apiUrl);
			alert('Product added to wishlist!');
		} catch (error) {
			console.error('Error adding to wishlist:', error);
		}
        }
        
        
    };

    if (!normalizedProducts || normalizedProducts.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div>
            {alertMessage && <div className="alert alert-warning">{alertMessage}</div>}
            <ImageCard
                Products={normalizedProducts}
                isWishlist={true}
                setWishlist={setWishlist}
            />
        </div>
    );
}

export default WishList;
