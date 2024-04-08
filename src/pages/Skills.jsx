import React from 'react';
import { codeSkills } from '../lib/data';
import { softSkills } from '../lib/data';
import SkillCard from '../components/SkillCard.jsx';

function Skills() {
    return (
        <section id='skills' className="container-center py-4 w-full text-center bg-white dark:bg-gray-900">
            <h1 className="text-4xl text-gray-700 dark:text-white font-bold mb-4">Skills</h1>
            <div className="flex flex-wrap items-center justify-center md:flex-row flex-col">
                <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                    <h2 className="text-2xl text-gray-700 dark:text-white text- py-4 font-bold mb-4">Code Skills</h2>
                    <div>
                        {codeSkills.map((code, index) => (
                            <SkillCard key={index} {...code} />
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center">
                    <h2 className="text-2xl text-gray-700 dark:text-white py-4 font-bold mb-4">Soft Skills</h2>
                    <div>
                        {softSkills.map((soft, index) => (
                            <SkillCard key={index} {...soft} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills