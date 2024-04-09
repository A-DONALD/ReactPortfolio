import Study from '../components/Study.jsx';
import { studies } from '../lib/data'

function Formation() {
    return (
        <div id='formation' className='container py-4 text-center'>
            <h1 className="text-4xl text-gray-900 dark:text-white py-8 font-bold mb-4">Formations</h1>
            <div className="flex flex-col items-center">
                {studies.map((study, index) => (
                    <Study key={index} {...study} />
                ))}
            </div>
        </div>
    )
}

export default Formation