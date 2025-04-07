interface cardProps  {
    img: string,
    title: string,
    description: string
}

import Image from "next/image";

const ProjectCard = ({img, title, description}: cardProps) => {
    return(
        <section className="group perspective-[1000px] max-h-[500px]">
            <div className="w-full h-full rounded-xl shadow-xl relative transition-all duration-500 transform-3d group-hover:rotate-y-180 group-hover:cursor-pointer">
                <div className="inset-0 absolute">
                    <Image
                        src={img}
                        alt={title}
                        width="300"
                        height="300"
                        className="w-full h-full object-contain rounded-xl shadow-xl shadow-white/30"
                    />
                </div>

                <div className="absolute inset-0 w-full h-full rounded-xl bg-black/80 px-2 text-center rotate-y-180 backface-hidden overflow-hidden">
                    <div className="flex min-w-full min-h-full flex-col items-center justify-center">
                        <h4 className="text-xl font-bold">{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProjectCard;