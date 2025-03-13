import { Paragraph } from "../../Components/Paragraph";

export default function PGAS25Fail(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">PGAS-2025-Fail</h1>

            <Paragraph>A failed school project from February to March 2025.</Paragraph>
            <Paragraph>Skills: Planning & Typescript.</Paragraph>

            <h2 className="text-2xl">Overview</h2>
            <Paragraph>
                This is going to be a lot of ranting about how some things 
                didn't work out favorably for me.
            </Paragraph>
            <Paragraph>
                This project was supposed to be a intranet managment website to access 
                private documentation made with static documentation generators 
                such as rsPress, vitePress, vuePress, docusaurus, and etc.
            </Paragraph>

            <h2 className="text-xl">Process</h2>
            <Paragraph>
                At the start, I've viewed NextJS as a awesome framework to use 
                for this as it was a widely popular server side rendering framework.
            </Paragraph>
            <Paragraph>
                Now here's my first mistake, I had no idea how to use or install NextJS. 
            </Paragraph>
            <Paragraph>
                I've only used Vite for a long time and that should've been my option instead, 
                but I picked NextJS since it seemed the best with tutorials on how to use OAuth. 
            </Paragraph>
            <Paragraph>
                My next mistake was trying to install Shadcn/Ui with NextJS.
            </Paragraph>
            <Paragraph>
                Turns out, when I tried to install Shadcn with NextJS, I kept getting errors when 
                trying to run ```npm run dev``` which was ANNOYING. Also when I tried to install with 
                Shadcn command directly, I kept getting a annoying bug regarding Shadcn install command 
                trying to access a random folder.
            </Paragraph>

            <h2 className="text-xl">Things learned</h2>
            <Paragraph>
                This wasn't all a failure, I've learned a lot of things.
            </Paragraph>
            <Paragraph>
                I've discovered Vite supports server side rendering at a very low level 
                which should fit my needs with creating a intranet site to view private 
                documentation.
            </Paragraph>
            <Paragraph>
                I've also discovered RsBuild and RsPress which I didn't know existed until 
                I was doing research regarding static generators, way faster than Vite and 
                I'll probably switch over to it once both get out of beta and lands with version 
                1.0.
            </Paragraph>

            <h2 className="text-xl">What I would do differently</h2>
            <Paragraph>
                If I don't know it, I'll just not use it.
            </Paragraph>
            <Paragraph>
                This should've been my first approach to this since I already used Vite and 
                should've used the SSR api they provided instead of trying to use NextJS.
            </Paragraph>
            <Paragraph>
                Vite is also extremely fast for development, and that would've been the better option for me. 
                I can use yarn with Vite instead, and with NextJS I could only use NPM which sucked for me.
            </Paragraph>

            <h2 className="text-xl">Links on what I would use in the future:</h2>
            <li className="text-sky-500">
                <a href="https://vite.dev/" target="_blank">
                    Vite
                </a>
            </li>
            <li className="text-sky-500">
                <a href="https://ui.shadcn.com/" target="_blank">
                    shadcn/ui
                </a>
            </li>
            <li className="text-sky-500">
                <a href="https://auth0.com/" target="_blank">
                    Auth0
                </a>
            </li>
            <li className="text-sky-500">
                <a href="https://rspress.dev/" target="_blank">
                    Rspress (to test the project.)
                </a>
            </li>
        </article>
    </div>
}