import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
      <Link href="/shop">Shop</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/bespoke">Bespoke</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};
