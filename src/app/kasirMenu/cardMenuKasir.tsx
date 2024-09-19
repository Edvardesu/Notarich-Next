import Image from "next/image";

const CardMenuKasir = (props: any) => {
  const { children } = props;
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden xs:px-3 lg:px-6 xs:py-4 lg:py-6 h-full">
      {children}
    </div>
  );
};

const Header = (props: any) => {
  const { image } = props;
  return (
    <div>
      <Image
        src={image}
        alt="product"
        width={400}
        height={400}
        className="rounded-3xl lg:h-60 xs:h-32 w-full object-cover"
      />
    </div>
  );
};

const Body = (props: any) => {
  const { children, description, name, price } = props;
  return (
    <div className="">
      <a href="">
        <div className="xs:mt-2 lg:mt-0">
          <div className="flex flex-row w-full lg:text-3xl xs:text-lg font-normal">
            <h2 className="lg:w-1/2 xs:w-4/6">{name}</h2>
            <p className="lg:w-1/2 xs:w-2/6 text-[#FF8A00] text-end ">
              {price}K
            </p>
          </div>
          <p className="text-gray-600 lg:text-xl xs:text-sm lg:mt-0 lg:w-64 xs:w-full">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

const Footer = (props: any) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="lg:mt-4 xs:mt-3">
      {/* <span className="text-xl font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span> */}
      <button
        className="w-full flex flex-row justify-between bg-[#FF8A00] text-white xs:py-1 lg:py-4 xs:px-2 lg:px-4 xs:rounded-[20px] lg:rounded-[40px] xs:text-xs lg:text-xl"
        // onClick={() => handleAddToCart(id)}
      >
        <p className="text-left">Masukkan ke Keranjang</p>
        <p className="bg-yellow-300 rounded-3xl xs:px-1 lg:px-2 lg:pb-1">+</p>
      </button>
    </div>
  );
};

CardMenuKasir.Header = Header;
CardMenuKasir.Body = Body;
CardMenuKasir.Footer = Footer;

export default CardMenuKasir;
