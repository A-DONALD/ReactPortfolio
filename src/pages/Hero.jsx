import React from 'react'
import DownloadButton from '../components/DownloadBtn.jsx';

function Hero() {
    return (
        <section id="about" className="bg-white dark:bg-gray-900">
            <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:pt-20 lg:px-12">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-primary-600 rounded-full bg-blue-400 dark:bg-blue-600 text-white px-4 py-1.5 mr-3">Info</span>
                    <span className="text-sm font-medium">under development</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <div className="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7  text-center md:text-left py-10 md:py-0">
                        <h1 className="max-w-2xl mb-4 text-gray-600 text-4xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">Donald Youngoua</h1>
                        <h1 className="max-w-2xl mb-4 text-black text-2xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-3xl xl:text-4xl dark:text-white">computer engineering student</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 text-lg md:text-xl dark:text-gray-400">
                            Bienvenue sur mon portfolio! Je suis un étudiant en informatique et réseau passionné
                            par le développement web. Je suis spécialisé en Big Data et mon parcours inclut des projets
                            excitants que vous pourrez découvrir ici.
                        </p>
                        <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-slate-600">
                            Contact Me
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            <DownloadButton btnName='Download CV' fileURL="https://raw.githubusercontent.com/A-DONALD/A-DONALD/main/CV_Analyst.pdf" dwnldName="CV-Donald-Youngoua.pdf" />
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="/images/profilepic.jpg" alt="mockup" className='rounded-xl xl:rounded-3xl' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero