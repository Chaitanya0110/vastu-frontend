import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import ProductCard from "../shared/ProductCard";
import { fetchProducts } from "../../store/actions";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

function Home() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const {isLoading, errorMessage} = useSelector((state) => state.errors);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-4">
                <HeroBanner />
            </div>

            <div className="py-5">
                <div className="flex flex-clo justify-center items-center space-y-2">
                    <h1 className="text-shadow-slate-800 text-4xl font-bold text-center">
                        <span>
                            Discover our handpicked collection of top-rated products.
                        </span>
                    </h1>
                </div>
            </div>

            {isLoading ? (
                <Loader text="Loading products..." />
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-50">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <div className="min-h-175">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6 ">
                        {products && products.map((item, i) => <ProductCard key={i} {...item}/>)}
                    </div>
                </div>
            )}
    
        </div>
    )
}

export default Home;