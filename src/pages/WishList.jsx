import { UserContext } from "@/App";
import ImageCard from "@/components/custom/ImageCard";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function WishList({ wishlist, setWishlist }) {
    const [alertMessage, setAlertMessage] = useState("");
    
    const { loggedUser } = useContext(UserContext);
    useEffect(() => {
        axios.get(`http://localhost:8080/getWishList?uid=${loggedUser.uid}`)
            .then(response => {
                console.log(response.data);
                setWishlist(response.data);
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
