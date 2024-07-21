import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Elements/Navbar";
import DetailsTable from "../components/Elements/DetailsTable";
import Footer from "../components/Elements/Footer";
import Ringkasan from "../components/Elements/Ringkasan";
import HeroMenu from "../components/Elements/HeroMenu";
import Menune from "../components/Elements/Menune";

const Menune = () => {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [popularMenuItems, setPopularMenuItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [isCartVisible, setIsCartVisible] = useState(true); // State to control cart visibility
  // const username = useLogin();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    // No need for fetching products since using local data
    setProducts(menuData.menuItems); // Set products directly from menuItems.json
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + parseFloat(product.price.replace("K", "")) * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
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
    localStorage.setItem("cart", JSON.stringify([])); // Clear the cart in local storage
  };

  // Modal Component for displaying the popup
  const CheckoutModal = () =>
    showPopup && (
      <div className="sticky bottom-0 left-0 z-40 h-96 w-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Checkout Successful!</h2>
          <p>Your total is Rp{totalPrice}K</p>
          <p>Makanan akan disiapkan</p>
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
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (totalPriceRef.current) {
      if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }
  }, [cart]);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchMenuData = async () => {
      // Assuming menuData contains both popularMenuItems and menuItems
      setPopularMenuItems(menuData.popularMenuItems);
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

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time); // Save the selected time to state
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="relative h-full flex flex-col justify-between mb-12">
      <div className="flex flex-col w-full sm:px-6 lg:px-20 -mt-80 pb-40">
        <div className="flex flex-row mb-20 sm:px-6 lg:px-28">
          <p className="text-3xl font-semibold text-justify mb-10 text-black">
            Our Popular Menu
          </p>
        </div>
        <div className="mx-auto h-96 sm:px-6 lg:px-10 bg-[#212121] rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 -mt-16">
            {/* {popularMenuItems.map((item, index) => (
              <PopularMenuItems key={index} item={item} />
            ))} */}
          </div>
        </div>
      </div>

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
      {/* <Popup isOpen={isPopupOpen} closePopup={closePopup} /> */}

      {/* <div className="w-full sm:px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {filteredItems.length > 0 &&
          filteredItems.map((product) => (
            <CardMenu key={product.id}>
              <CardMenu.Header image={product.image} />
              <div className="flex flex-col justify-between mt-4 h-full">
                <CardMenu.Body
                  name={product.name}
                  description={product.description}
                  price={product.price}
                ></CardMenu.Body>
                <CardMenu.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </CardMenu>
          ))}
      </div> */}
      <CheckoutModal />

      <div className="w-full text-center items-center justify-center border-t-2 sticky bottom-0 bg-white py-8 mt-12">
        <h1 className="text-3xl font-bold text-[#FF8A00] mx-5 mb-4">
          Keranjang
        </h1>
        <button
          onClick={toggleCartVisibility}
          className="sticky top-0 w-fit flex flex-row justify-between bg-red-500 text-white py-3 px-20 rounded-[40px] text-lg font-semibold mx-auto mt-8 mb-4"
        >
          {isCartVisible ? "Hide Cart" : "Show Cart"}
        </button>
        {isCartVisible && (
          <div className="flex flex-row items-start justify-center">
            <div>
              <table className="text-left table-auto border-separate border-spacing-x-5 mx-auto">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    cart.map((item) => {
                      const product = products.find(
                        (product) => product.id === item.id
                      );
                      return (
                        <>
                          {item.qty > 0 && (
                            <tr key={item.id}>
                              <td>{product.name}</td>
                              <td>{product.price}</td>{" "}
                              {/* Adjust as per your data structure */}
                              <td>{item.qty}</td>
                              <td>
                                Rp
                                {item.qty *
                                  parseFloat(product.price.replace("K", ""))}
                                K
                              </td>{" "}
                              <td>
                                <button
                                  className="px-2 bg-red-600 text-white font-bold mx-1"
                                  onClick={() => handleRemoveFromCart(item.id)}
                                >
                                  -
                                </button>
                                <button
                                  className="px-2 bg-blue-600 text-white font-bold mx-1"
                                  onClick={() => handleAddToCart(item.id)}
                                >
                                  +
                                </button>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                  <tr ref={totalPriceRef}>
                    <td colSpan={3}>
                      <b>Total Price</b>
                    </td>
                    <td>
                      <b>Rp{totalPrice}K</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {totalPrice > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2 text-center">
                  Pilih Waktu Pemesanan
                </h3>
                <TimePicker onTimeSelected={handleTimeSelection} />
              </div>
            )}
          </div>
        )}
        <div className="text-center flex flex-col items-center mt-4">
          <button
            onClick={handleCheckout}
            className="w-fit flex flex-row justify-between bg-[#FF8A00] text-white py-3 px-20 rounded-[40px] text-lg font-semibold"
          >
            <p>Checkout</p>
          </button>
        </div>
      </div>
      {/* END KERANJANG */}
    </div>
  );
};

export default Menune;
