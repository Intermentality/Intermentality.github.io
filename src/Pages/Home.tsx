import { LinkNewWindow } from '../Components/Link';
import { Link } from 'react-router-dom';
import { Paragraph } from '../Components/Paragraph';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">intermentality.github.io</h1>

            <Paragraph>
                Random Highschool student learning stuff.
            </Paragraph>

            <h2 className="text-2xl">Projects</h2>
            <ul className="list-disc">
                <li><Link to="/proj-first-glsl" className="text-sky-300">First GLSL</Link></li>
                <li><Link to="/proj-pgas-game" className="text-sky-300">PGAS Game</Link></li>
            </ul>
            
            <h2 className="text-2xl">Websites</h2>
            <ul className="list-disc">
                <li><Link to="/proj-einty-iweb" className='text-sky-300'>EINTY-IWeb</Link></li>
                <li><Link to="/proj-novainorion" className='text-sky-300'>NIO-IWeb</Link></li>
                <li><Link to="/proj-portfolio" className='text-sky-300'>Portfolio Log</Link></li>
            </ul>

            <h2 className="text-2xl">Links</h2>
            <ul className="list-disc">
                <li><LinkNewWindow href="https://github.com/Intermentality">GitHub</LinkNewWindow></li>
                <li><LinkNewWindow href="https://github.com/Intermentality/Intermentality.github.io">GitHub Repo</LinkNewWindow></li>
            </ul>

            <h2 className="text-2xl">Contacts</h2>
            None right now.
        </article>
    </div>
}