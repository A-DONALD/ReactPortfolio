import React from 'react';
import { technicalSkills, softSkills, languages } from '../lib/data';
import SkillCard from '../components/SkillCard.jsx';

function Skills() {
    return (
        <section id='skills' className="py-4 w-full text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl text-gray-700 dark:text-white font-bold mb-8">Skills</h1>

                <div className="mb-12">
                    <h2 className="text-2xl text-gray-700 dark:text-white py-4 font-bold mb-4">Compétences techniques</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {technicalSkills.map((group, index) => (
                            <div key={index}>
                                <h3 className="text-base font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{group.category}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {group.items.map((item, i) => (
                                        <SkillCard key={i} title={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    <div>
                        <h2 className="text-2xl text-gray-700 dark:text-white py-4 font-bold mb-2">Qualités personnelles</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {softSkills.map((soft, index) => (
                                <SkillCard key={index} {...soft} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl text-gray-700 dark:text-white py-4 font-bold mb-2">Langues</h2>
                        <div className="space-y-2 max-w-xs mx-auto">
                            {languages.map((language, index) => (
                                <div key={index} className="flex justify-between items-center bg-slate-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md px-4 py-2">
                                    <span className="font-semibold">{language.name}</span>
                                    <span className="text-sm">{language.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
