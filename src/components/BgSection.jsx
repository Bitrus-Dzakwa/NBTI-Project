function BgSection({ children, bgColor, bgImg, position }) {
  return (
    <section
      className="w-full relative"
      style={{
        backgroundColor: `${bgColor}`,
        backgroundPosition: `${position}`,
      }}
    >
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full object-cover absolute"
      />
      {children}
    </section>
  );
}

export default BgSection;
