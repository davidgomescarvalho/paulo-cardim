import Link from "next/link";

export const Cart = () => {
  return (
    <Link href="/cart" className="hover:text-gray-600 font-bold">
      Cart
    </Link>
  );
};
