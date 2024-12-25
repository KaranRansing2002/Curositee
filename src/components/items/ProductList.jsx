import { Link } from 'react-router-dom';
import ImageCard from '../custom/ImageCard';

function ProductList({ Products }) {

    const normalizedProducts = Products.map(product => ({
        imgid: product.imgid,
        title: product.product.productName,
        category: product.product.categoryName,
        price: product.product.price,
        rating: product.rating
    }));

    if (!normalizedProducts || normalizedProducts.length === 0) {
        return <p>No products available</p>;
    }

    return <ImageCard Products={normalizedProducts} />;
}

export default ProductList;
