import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Image
            alt="Product Image"
            src={products.data[0].images[0]}
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
