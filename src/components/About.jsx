import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "/Tent.jpg",
        productName: "Synapse Noise-Canceling Headphones",
        description:
          "Experience crystal-clear sound with the Synapse Noise-Canceling Headphones, designed for immersive audio and comfort during extended listening sessions.",
        specialPrice: 720,
        price: 780,
      },
      {
        image: "/HeadPhone.jpg",
        productName: "CampHaven 4-Person Tent",
        description: 
            "The CampHaven 4-Person Tent is perfect for family camping trips, offering spacious interiors, weather-resistant materials, and easy setup for a comfortable outdoor experience.",
        specialPrice: 699,
        price: 799,
      },
      {
        image: "/Tower-Fan.jpg",
        productName: "Tower Fan with Remote Control",
        description:
          "The Tower Fan with Remote Control provides efficient cooling for your home or office, with convenient remote operation and adjustable settings.",
        price: 599,
        specialPrice: 400,
      }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our e-commerce store! We are dedicated to providing the
                        best products and services to our customers. Our mission is to offer
                        a seamless shopping experience while ensuring the highest quality of
                        our offerings.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="/AboutBanner.jpg"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"></img>
                </div>
           </div>


           <div className="py-7 space-y-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    productImage={product.image}
                    productName={product.productName}
                    description={product.description}
                    specialPrice={product.specialPrice}
                    price={product.price}
                    about
                />
               ))
               }
                
            </div>
           </div>
        </div>
    );
}

export default About;