import { current } from "@reduxjs/toolkit";
import { FaBox, FaBoxOpen, FaHome, FaShoppingCart, FaStore } from "react-icons/fa";

export const bannerList = [
    {
        id: 1,
        image: "/SofaAndTV.png",
        title: "Home Comfort",
        subtitle: "Living Room",
        description: "Upgrade your space with cozy and stylish sofas",
    },
    {
        id: 2,
        image: "/ElectronicDevices.png",
        title: "Entertainment Hub",
        subtitle: "Electronics",
        description: "Experience the latest in home entertainment",
    },
    {
        id: 3,
        image: "/Cloths.png",
        title: "Playful Picks",
        subtitle: "Clothing",
        description: "Bright and fun styles for kids, up to 20% off",
    }
];

export const adminNavigation = [
    {
        name: "Dashboard", 
        href: "/admin", 
        icon: FaHome,
        current: true
    },{
        name: "Orders", 
        href: "/admin/orders", 
        icon: FaStore
    }, {
        name: "Products", 
        href: "/admin/products", 
        icon: FaBoxOpen
    }, {
        name: "Categories", 
        href: "/admin/categories", 
        icon: FaBox,
    }, {
        name: "Sellers", 
        href: "/admin/sellers", 
        icon: FaStore,
    },
];

export const sellerNavigation = [
  {
    name: "Orders", 
    href: "/admin/orders", 
    icon: FaShoppingCart,
    current: true 
  }, {
    name: "Products", 
    href: "/admin/products", 
    icon: FaBoxOpen
  }
];