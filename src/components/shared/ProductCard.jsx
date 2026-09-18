import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModel from "./ProductViewModel";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast"

 const ProductCard = ({
      productId,
      productName,
      productImage,
      description,
      quantity,
      price,
      discount,
      specialPrice,
      about = false
 }) => {
    const [openProductModal, setOpenProductModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvilable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleViewProduct = (product) => {
        if(!about){
            setSelectedViewProduct(product);
            setOpenProductModal(true);
        }  
    };

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick={() => {
                handleViewProduct({
                    id: productId,
                    productName,
                    image: productImage,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice}
            )}} className="w-full overflow-hidden aspect-3/2">
                <img src={productImage} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105" />
            </div>
            
            <div className="p-4">
                <h2 onClick={() => {
                    handleViewProduct({
                        id: productId,
                        productName,
                        image: productImage,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice}
            )}} className="text-lg font-semibold mb-2 cursor-pointer">
                    {truncateText(productName, 27)}
                </h2>
            </div>
            
            <div className="min-h-20 max-h-20 p-4">
                <p className="text-gray-600 text-sm">{truncateText(description, 70)}</p>
            </div>

            {!about && (
                <div className="p-4 flex items-center justify-between">
                    {specialPrice ? (
                    <div className="flex flex-col">
                        <span className="text-gray-400 line-through">₹{price.toFixed(2)}</span>
                        <span className="text-slate-600 text-xl font-bold">₹{specialPrice.toFixed(2)}</span>
                    </div>
                    ) : (
                    <div className="flex flex-col">
                        {" "}
                        <span className="text-slate-600">₹{price.toFixed(2)}</span>
                    </div>
                    )}

                    <button onClick={() => addToCartHandler({
                            productId,
                            image: productImage,
                            productName,
                            description,
                            specialPrice,
                            price,
                            quantity
                        })}
                        disabled={!isAvilable || btnLoader}
                        className={`bg-blue-500 ${!isAvilable ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-600"} text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center`}>
                        <FaShoppingCart className="mr-2"/>
                        {isAvilable ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            )}
            <ProductViewModel open={openProductModal} setOpen={setOpenProductModal} product={selectedViewProduct} isAvailable={isAvilable} />
        </div>
    )
 }
 
 export default ProductCard;