import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar justify-between items-center flex bg-base-100 py-6 px-8">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          🔥 Stripe for SaaS
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex justify-between items-center w-fit px-1">
          <li>
            <Link href="/" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link href="/photos" className="btn mx-3">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/users" className="btn">
              User Auth
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
