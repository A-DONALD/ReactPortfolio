import { useEffect, useState } from 'react'
import { navLinks } from '../lib/data'

function NavBar() {

    const [theme, setTheme] = useState("system");
    const [isListVisible, setIsListVisible] = useState(false);
    const element = document.documentElement;

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    function onWindowMatch() {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    };

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add('dark');
                localStorage.setItem('theme', "dark");
                break;
            case "light":
                element.classList.remove('dark');
                localStorage.setItem('theme', "light");
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }
    }, [theme]);

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add('dark');
            } else {
                element.classList.remove('dark');
            }
        }
    });

    return (
        <header>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="images/donald.png" className="h-12 rounded-full" alt="profile" />
                        <span className="self-center hidden sm:block md:hidden lg:block text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                            <button onClick={() => setTheme("light")} type="button" className={`inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 ${theme === "light" ? "text-blue-600" : "text-gray-900"}`}>
                                <svg className="w-5 h-5 lg:me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" /><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" /></svg>
                                <span className='hidden lg:block'>light</span>
                            </button>
                            <button onClick={() => setTheme("dark")} type="button" className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white ${theme === "dark" ? "dark:text-blue-600" : "dark:text-white"}`}>
                                <svg className="w-5 h-5 lg:me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" /></svg>
                                <span className='hidden lg:block'>dark</span>
                            </button>
                            <button onClick={() => setTheme("system")} type="button" className={`inline-flex items-center px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-blue-500 ${theme === "system" ? "text-blue-600" : "text-gray-900 dark:text-white dark:hover:text-white"}`}>
                                <svg className="w-5 h-5 lg:me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" /><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M144 80h224M112 128h288" /></svg>
                                <span className='hidden lg:block'>system</span>
                            </button>
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            onClick={toggleListVisibility}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isListVisible ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navLinks.map((navlink) => (
                                <li>
                                    <a key={navlink.hash} href={navlink.hash} className="text-center sm:text-left block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                        {navlink.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar