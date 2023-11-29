import "../../styles/globalAnimations.css";

function PageTitle({ children }) {
  return (
    //Desktop
    <div>
      <h2 className="hidden md:block text-6xl font-bold leading-tight tracking-tight my-7">
        {/*<span className="gradientText_gAnimation">{children}</span>*/}
        <span className="gradientText_gAnimation">{children}</span>
      </h2>

    {/* Movile */}
      <h2 className="md:hidden text-center text-6xl font-bold leading-tight tracking-tight my-7">
        {/*<span className="gradientText_gAnimation">{children}</span>*/}
        <span className="gradientText_gAnimation">{children}</span>
      </h2>
    </div>
  );
}

export { PageTitle };
