import React from 'react'

const ContactMe = () => {
  return (
    <main 
    style={{backgroundImage: "url(./images/bg4.jpg)"}} 
    className="w-screen h-screen bg-cover bg-center"
    >
      <header className="w-[80%] md:max-w-[60%] mx-auto pt-[40px] pb-[60px]">
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold">Contact Me</h2>
      </header>

      <form 
        action="https://formspree.io/f/xzzearlj"
        method="POST"
        className="w-[80%] md:w-[60%] h-[70vh] md:h-[60vh] mx-auto shadow-xl shadow-white/30 bg-white/20 rounded-2xl p-5 md:p-10"
      >
        <div className="w-full block md:flex justify-between items-start gap-5">
          <input
            type="text"
            name="name"
            placeholder='Your Name'
            required
            className="w-full bg-white/80 text-black px-2 py-2 rounded-xl border-none outline-none text-xl"
          />
          <input
            type="email"
            name="email"
            placeholder='Your Email'
            required
            className="mt-5 md:mt-0 w-full bg-white/80 text-black px-2 py-2 rounded-xl border-none outline-none text-xl"
          />
        </div>
        <textarea
          placeholder='Your Message'
          name="massage"
          required
          className="w-full h-[60%] md:h-[70%] mt-5 bg-white/80 text-black px-2 py-2 rounded-xl border-none outline-none text-xl"
        />
        <button type="submit" className="bg-red-600 px-[15px] py-[5px] mx-auto mt-[20px] block rounded-xl text-xl font-bold hover:text-red-600 hover:bg-white transition-colors duration-500 cursor-pointer">Send</button>
      </form>
    </main>
  )
}

export default ContactMe;