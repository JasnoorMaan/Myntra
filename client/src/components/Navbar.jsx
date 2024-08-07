import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 min-h-8 sticky top-0 shadow-lg py-4 px-8 bg-white">
      <img className="h-10 px-8" src="/myntra.svg" alt="logo" />
      <div className="flex items-center gap-8">
        <h2 className="text-sm font-semibold">MEN</h2>
        <h2 className="text-sm font-semibold">WOMEN</h2>
        <h2 className="text-sm font-semibold">KIDS</h2>
        <h2 className="text-sm font-semibold">HOME & LIVING</h2>
        <Link to={"/"} className="text-sm font-semibold">
          PIN IT
        </Link>
        <Link to={"/genai"}>
          <img className="h-7" src="/gen.svg" alt="genOption" />
        </Link>
      </div>

      <input
        className="px-3 py-1 border rounded-md w-80"
        type="text"
        name="search"
        maxLength="60"
        placeholder="Search for brands, products and more..."
        required
      />
      <div className="flex items-center gap-6 px-8">
        <a href="#">
          <img className="h-5" src="/profile-button.svg" alt="profile" />
        </a>
        <a href="#">
          <img className="h-5" src="/wishlist.svg" alt="wishlist" />
        </a>
        <Link to={"/cart"}>
          <img className="h-5" src="/cart.svg" alt="cart" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
