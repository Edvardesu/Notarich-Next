import Image from "next/image";
import Button from "../Elements/Button";

const CardMenuAll = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-6 h-full">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div>
      <Image
        src={image}
        alt="product"
        width={400}
        height={400}
        className="rounded-3xl h-60 w-full object-cover"
      />
    </div>
  );
};

const Body = (props) => {
  const { children, description, name, price } = props;
  return (
    <div className="">
      <a href="">
        <div>
          <div className="flex flex-row w-full text-3xl font-normal">
            <h2 className="w-1/2">{name}</h2>
            <p className="w-1/2 text-[#FF8A00] text-end">{price}</p>
          </div>
          <p className="text-gray-600 text-xl w-64">{description}</p>
        </div>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="mt-4">
      {/* <span className="text-xl font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span> */}
      <button
        className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl"
        // onClick={() => handleAddToCart(id)}
      >
        <p>Masukkan ke Keranjang</p>
        <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
      </button>
    </div>
  );
};

CardMenuAll.Header = Header;
CardMenuAll.Body = Body;
CardMenuAll.Footer = Footer;

export default CardMenuAll;
