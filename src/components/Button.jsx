function Button({ isBg, title, icon }) {
  return (
    <button
      className={`${
        isBg && "bg-greengray-900 border-0 text-white hover:bg-greengray-100"
      } flex justify-center items-center  gap-3 capitalize text-md py-2 px-3 transition-all ${
        !isBg &&
        "border border-greengray-900 text-greengray-900 hover:bg-greengray-900 hover:text-white"
      }`}
    >
      {title} {icon}
    </button>
  );
}

export default Button;
