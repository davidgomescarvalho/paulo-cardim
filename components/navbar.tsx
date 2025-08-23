import Link from "next/link";

export const Navbar = () => {
  return (
    <section>
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
    </section>
  );
};
