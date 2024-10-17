import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-cyan-900	">
      <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-zinc-300 text-4xl font-bold mb-4">
            Welcome to My Website
          </h1>
          <p className="text-lg text-gray-900 mb-6">
            Discover amazing Peaceful content and explore the features of our website.
          </p>
          <button className="bg-sky-500/50 text-white px-6 py-3 rounded-md">
            Get Started
          </button>
        </div>

        {/* Right Section: Hero Image */}
        <div className="lg:w-1/2">
          <Image 
            src="/hero-image.png" 
            alt="Hero Section Image" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg"
            priority 
          />
        </div>
      </div>
    </section>
  );
}
