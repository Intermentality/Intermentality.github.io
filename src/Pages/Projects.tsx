import { LinkNewWindow } from '../Components/Link';
import { Link } from 'react-router-dom';
import { Paragraph } from '../Components/Paragraph';

export default function Projects(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">Projects</h1>
            
            <Paragraph>Projects I made at school.</Paragraph>

            <h2 className="text-2xl"> Project Links </h2>
            <ul className="list-disc">
                <li><Link to="/proj-first-glsl" className="text-sky-300">First GLSL</Link></li>
                <li><Link to="/proj-pgas-game" className="text-sky-300">PGAS Game</Link></li>
            </ul>
            
            <h2 className="text-2xl">Websites</h2>
            <ul className="list-disc">
                <li><Link to="/proj-einty-iweb" className='text-sky-300'>EINTY-IWeb</Link></li>
                <li><Link to="/proj-portfolio" className='text-sky-300'>Portfolio Log</Link></li>
            </ul>
        </article>
    </div>
}