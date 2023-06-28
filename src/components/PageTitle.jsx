import "../styles/globalAnimations.css"

function PageTitle({ children }) {
    return (
        <h2 className='text-center text-6xl font-bold leading-tight tracking-tight my-7'>
            {/*<span className="gradientText_gAnimation">{children}</span>*/}
            <span className="gradientText_gAnimation">{children}</span>
        </h2>
    )
}

export { PageTitle }