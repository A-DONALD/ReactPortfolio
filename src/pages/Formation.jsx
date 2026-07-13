import Study from '../components/Study.jsx';
import { studies } from '../lib/data'

function Formation() {
    return (
        <section id='formation' className='py-4'>
            <div className='container mx-auto px-4 text-center'>
                <h1 className="text-4xl text-gray-900 dark:text-white py-8 font-bold mb-4">Formations</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {studies.map((study, index) => (
                        <Study key={index} {...study} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Formation
