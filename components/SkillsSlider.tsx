import Image from 'next/image';

import { SkillData } from '@/constants';

const SkillsSlider = () => {
    return(
        <>
        <section className='z-3 w-[80%] overflow-hidden'>
            <div className="flex animate-[slider_5s_linear_infinite]">
                {SkillData.map((skill, idx) => (
                    <div key={idx} className="min-w-[20%] flex items-center justify-center mx-5">
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height}
                        />
                    </div>
                ))}
            </div>
        </section>
        
        <section className='z-3 w-[80%] overflow-hidden'>
            <div className="flex animate-[slider_5s_linear_infinite_reverse]">
                {SkillData.map((skill, idx) => (
                    <div key={idx} className="min-w-[20%] flex items-center justify-center mx-5">
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height}
                        />
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default SkillsSlider;