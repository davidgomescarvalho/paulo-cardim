import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";

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
          </div>
        </div>
      </section>
    </div>
  );
}
