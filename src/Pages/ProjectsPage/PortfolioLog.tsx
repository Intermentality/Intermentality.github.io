import { Paragraph } from "../../Components/Paragraph";

export default function PortfolioLog(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">Portfolio Log</h1>

            <h2>12/12/2024</h2>
            <Paragraph>
                I've been mainly working on this portfolio 
                since it's an intresting development cycle. 

                When I started, it was a fairly simply process 
                of just using React17 and importing shaders which 
                is cool. 

                Now I ran into a issue with importing images and kept 
                trying to resolve the path every way possible. 

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
        </article>
    </div>
}