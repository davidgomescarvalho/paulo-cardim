import { Navbar } from "@/components/navbar";
import { Cart } from "@/components/cart";
import { Logo } from "@/components/logo";
export const Header = () => {
  return (
    <nav className="container mx-auto">
      <div className="sticky top-0 z-50 bg-white shadow flex justify-between">
        <Logo />
        <Navbar />
        <Cart />
      </div>
    </nav>
  );
};
