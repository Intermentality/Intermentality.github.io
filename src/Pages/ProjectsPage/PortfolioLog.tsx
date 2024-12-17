import { Paragraph } from "../../Components/Paragraph";

export default function PortfolioLog(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">Portfolio Log</h1>

            <h2>12/17/2024</h2>
            <h3 className="font-semibold text-xl italic">Update</h3>
            <Paragraph>
                Using React19 now for this site with images being supported.
            </Paragraph>

            <h2>12/12/2024</h2>
            <h3 className="font-semibold text-xl italic">Overview</h3>
            <Paragraph>
                This portfolio is a website to view all the 
                projects I have worked on and the projects I've worked in 
                class. 
                
                This was mainly worked on during my class period to 
                figure out how to improve it better with GLSL.
            </Paragraph>

            <h3 className="font-semibold text-xl italic">Inital Ideas</h3>
            <Paragraph>
                When I started, it was a fairly simply process 
                of just using React17 and importing shaders which 
                is cool. 

                Now I ran into a issue with importing images and kept 
                trying to resolve the path every way possible to the image. 

                But after a while I figured it out, it was since I was 
                using React17 instead of React 18. 
            </Paragraph>

            <Paragraph>
                When I switched to React 18 though, the images showed up 
                but the shaders completely broke. 

                I'm still trying to find a way to do this now on my latest 
                project with EINTY-IWeb, to both have shaders and images. 

                I'm not sure what the issue is but I'm figuring it out slowly.
            </Paragraph>

            <h3 className="font-semibold text-xl italic">What I learned</h3>
            <Paragraph>
                I learned that using Shaders can be a pain to implement as I 
                keep getting a white screen when I use the NPM Package React-Shader 
                and Shader-Toy. 

                I also learned that I should make sure to update my packages before 
                wasting a lot of time to debug a website as I was reading latest version 
                documents and not React17 documentation.
            </Paragraph>

            <h3 className="font-semibold text-xl italic">Changes</h3>
            <Paragraph>
                EINTY-IWeb page was implemented which is a website made with 
                React18 instead of React17 which supports image importing. 

                Portfolio Log was also added and all images currently is removed 
                as it'll take time for me to update this whole portfolio website 
                to React18 with the background shaders working.
            </Paragraph>

            <h3 className="font-semibold text-xl italic">Future Improvements</h3>
            <Paragraph>
                The website will be updated to React18 and shaders should work by then.
            </Paragraph>
        </article>
    </div>
}