const Button = (props) => {
    const {
      children,
      classname = "bg-black",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  