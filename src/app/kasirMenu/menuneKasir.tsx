"use client";
import { useState, useEffect, useRef } from "react";
import CardMenuKasir from "./cardMenuKasir";
import menuData from "./menuItems.json"; // Adjust the path to your JSON file
// import { useLogin } from "../../hooks/useLogin";
// import * as fs from "fs";
// const fs = require("fs");
interface CartItem {
  id: number;
  qty: number;
}

interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const MenuneKasir = () => {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [popularMenuItems, setPopularMenuItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<MenuItem[]>([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  // const username = useLogin();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart(JSON.parse(localStorage.getItem("cart")?.toString() ?? "[]"));
    }
  }, []);

  useEffect(() => {
    // No need for fetching products since using local data
    setProducts(menuData.menuItems); // Set products directly from menuItems.json
  }, []);

  useEffect(() => {
    try {
      if (products.length > 0 && cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id === item.id);
          if (product) {
            return acc + parseFloat(product.price.replace("K", "")) * item.qty;
          } else {
            return acc; // or throw an error, depending on your requirements
          }
        }, 0);
        setTotalPrice(sum);
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [cart, products]);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("password");
  //   window.location.href = "/login";
  // };

  const handleAddToCart = (id: number, available = true) => {
    if (!available) {
      setCart(cart.filter((item) => item.id !== id)); // Remove from cart if toggled off
    } else {
      const itemInCart = cart.find((item) => item.id === id);
      if (itemInCart) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart([...cart, { id, qty: 1 }]);
      }
    }
  };

  const handleRemoveFromCart = (id: number) => {
    if (cart.find((item) => item.id === id && item.qty > 0)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    setShowPopup(true); // Show the popup
  };
  // Close popup and clear the cart
  const handleClosePopup = () => {
    setShowPopup(false);
    setCart([]); // Reset the cart

    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", JSON.stringify([])); // Clear the cart in local storage
    }
  };

  // Modal Component for displaying the popup
  const CheckoutModal = () =>
    showPopup && (
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Checkout Successful!</h2>
          <p>Your total is Rp{totalPrice}K</p>
          <button
            onClick={handleClosePopup}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    );

  // useRef
  
  // const cartRef = useRef(
  //   JSON.parse(localStorage.getItem("cart") || "[]") || []
  // );

  // const handleAddToCartRef = (id: number) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (totalPriceRef.current) {
      const totalPriceElement = totalPriceRef.current as HTMLElement;
      if (cart.length > 0) {
        totalPriceElement.style.display = "table-row";
      } else {
        totalPriceElement.style.display = "none";
      }
    }
  }, [cart]);
  // ENDING NYAR E

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchMenuData = async () => {
      // Assuming menuData contains both popularMenuItems and menuItems
      // setPopularMenuItems(menuData.popularMenuItems);
      setMenuItems(menuData.menuItems);
    };

    fetchMenuData();
  }, []);

  const filteredItems =
    activeCategory === "All Menu"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const categories = [
    "All Menu",
    "Coffee",
    "Tea",
    "Frappe",
    "Juice",
    "Milk Based",
    "Refresher",
    "Mocktail",
    "Main Course",
    "Snack",
  ];

  return (
    <div className="ml-40 mt-12 h-full flex flex-col justify-between mb-12">
      <div className="flex flex-col w-full sm:px-6 lg:px-28 mb-20 justify-left">
        <p className="text-4xl text-black font-semibold pl-6">Menu</p>
        <div className="flex flex-row mt-6 space-x-2 ml-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-8 py-2 text-xl rounded-3xl ${
                activeCategory === category
                  ? "bg-[#FF8A00] text-white"
                  : "bg-[#FBDE88]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full sm:px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {filteredItems.length > 0 &&
          filteredItems.map((product) => (
            <CardMenuKasir key={product.id}>
              <CardMenuKasir.Header image={product.image} />
              <div className="flex flex-col justify-between mt-4 h-full">
                <CardMenuKasir.Body
                  name={product.name}
                  description={product.description}
                  price={product.price}
                ></CardMenuKasir.Body>
                <CardMenuKasir.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </CardMenuKasir>
          ))}
        {/* {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-6 border-4 h-full"
          >
            <img
              className="max-w-80 max-h-64 rounded-3xl object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col justify-between mt-4 h-full">
              <div>
                <div className="flex flex-row w-full text-3xl font-normal">
                  <h2 className="w-1/2">{item.name}</h2>
                  <p className="w-1/2 text-[#FF8A00] text-end">{item.price}</p>
                </div>
                <p className="text-gray-600 text-xl w-64">{item.description}</p>
              </div>
              <div className="mt-4">
                <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl">
                  <p>Masukkan ke Keranjang</p>
                  <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
                </button>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MenuneKasir;
