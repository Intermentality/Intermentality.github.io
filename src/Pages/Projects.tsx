import { LinkNewWindow } from '../Components/Link';
import { Link } from 'react-router-dom';
import { Paragraph } from '../Components/Paragraph';

export default function Projects(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">webweb /proj</h1>
            
            <Paragraph>projects I made at school and stuff.</Paragraph>

            <h2 className="text-2xl"> Project Links </h2>
            <ul className="list-disc">
                <li><Link to="/proj-first-glsl" className="text-sky-300">First GLSL</Link></li>
                <li><Link to="/proj-pgas-game" className="text-sky-300">PGAS Game</Link></li>
            </ul>
        </article>
    </div>
}