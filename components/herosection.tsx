import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Fullscreen background image */}
      <Image
        src="/images/IMG_4432.JPG"
        alt="Luxury Jewelry"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay gradient (optional for better contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Timeless Elegance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Handcrafted jewelry designed to last for generations.
        </p>
        {/* <button className="px-6 py-3 bg-white text-black font-medium uppercase tracking-wide rounded-full shadow-lg hover:bg-neutral-200 transition">
          Shop Now
        </button> */}
      </div>
    </section>
  );
}
