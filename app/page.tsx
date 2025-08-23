import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (
    <div>
      <section>
        <div>
          <div>
            <h2>Products of Paul Cardim</h2>
            <p>Discover my products all handmade</p>
            <Button asChild variant={"default"}>
              <Link href="/shop">Shop</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="m-5">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
