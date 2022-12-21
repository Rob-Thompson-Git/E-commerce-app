import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams();
    return (
        "THis is product page"
    )
}

export default ProductDetails;