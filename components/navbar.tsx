import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">Paulo Cardim</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/bespoke">Bespoke</Link>
      </div>
    </nav>
  );
};
