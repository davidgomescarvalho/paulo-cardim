import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto">
        <div className="md: flex lg:flex justify-between">
          <Link href="/" className="hover:text-gray-600 font-bold">
            Paulo Cardim
          </Link>
          <Link href="/shop" className="hover:text-gray-600 font-bold">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-600 font-bold">
            About
          </Link>
          <Link href="/gallery" className="hover:text-gray-600 font-bold">
            Gallery
          </Link>
          <Link href="/bespoke" className="hover:text-gray-600 font-bold">
            Bespoke
          </Link>
          <Link href="/contact" className="hover:text-gray-600 font-bold">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4"></div>
    </nav>
  );
};
