import Link from "next/link";

export default function Home() {
  return (
    <main 
    style={{backgroundImage: "url(./images/bg1.jpg)"}}
    className="w-screen h-screen bg-cover bg-center relative flex justify-center">
      <section className="w-[80%] md:max-w-[60%] mt-[30vh] z-3">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold ">Jehad Slman</h2>
        <p className="text-md md:text-xl lg:text-2xl text-center text-gray-400">Front-end developer focused on performance, accessibility, and elegant code. Bridging creativity and technology to craft meaningful web experiences.</p>
        <Link href="/contact-me" className="bg-none text-2xl px-[20px] py-[5px] border-1 border-solid border-white/80 rounded-md text-white/80 shadow-md shadow-white block mx-auto w-[max-content] mt-[20px]">Reach me out</Link>
      </section>

      <p className="text-xl md:text-4xl lg:text-7xl absolute top-[20px] left-[20px] z-1">Another <span className="block pl-[50px] md:pl-[100px] pt-[10px] md:pt-[20px] text-red-600">Developer</span></p>
      <p className="text-xl md:text-4xl lg:text-7xl absolute bottom-[100px] md:bottom-[20px] right-[20px] z-1">Another <span className="block pl-[50px] md:pl-[100px] pt-[10px] md:pt-[20px] text-red-600">Portfolio</span></p>
    </main>
  );
}
