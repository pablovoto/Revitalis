const ScrollToTop = () => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-4 right-4 p-2 btn btn-primary btn-lg rounded-full w-12 h-12 z-50"
        >
            ↑
        </button>
    );
}
 
export default ScrollToTop;