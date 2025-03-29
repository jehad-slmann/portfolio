import SkillsSlider from "@/components/SkillsSlider"

const Skills = () => {
  return (
    <main 
    style={{backgroundImage: "url(./images/bg2.jpg)"}}    
    className="w-screen h-screen bg-cover bg-center relative flex flex-col justify-evenly items-center"
    >
        <header className="w-[80%] md:max-w-[60%] z-3">
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold">Skills & Technologies</h2>
            <p className="text-md md:text-xl lg:text-2xl text-center text-gray-400 mt-3">Using the latest techs this world has to offer</p>
        </header>

        <SkillsSlider/>
    </main>
  )
}

export default Skills