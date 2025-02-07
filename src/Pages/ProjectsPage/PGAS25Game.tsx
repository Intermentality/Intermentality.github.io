import { Paragraph } from "../../Components/Paragraph";

import HomePageSS from "@/assets/PGAS25/HomePage.png";
import WaveTextSS from "@/assets/PGAS25/WaveText.png";
import WaveTextIndexSS from "@/assets/PGAS25/WaveTextIndex.png";

export default function PGAS25Game(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">PGAS-2025-Game</h1>

            <Paragraph>School project in January 2025.</Paragraph>

            <h2 className="text-2xl">Overview - ELA Game</h2>
            <Paragraph>
                What was the goal for your project?: 

                The goal of the project was to make a mobile 
                app that allows players to play a telephone 
                game which allows the players to learn a standard.
            </Paragraph>
            <Paragraph>
                How much did you know about the subject before 
                we started (standard & coding aspects)?: 

                I didn't really know the standard, 
                but I've done coding before for a mobile 
                app for front-end, so I thought it was going 
                to be pretty easy to create.
            </Paragraph>
            <Paragraph>
                What resources did you use while working on this 
                project/activity? Which ones were especially helpful? 
                Which ones would you use again?: 

                Mainly Github repositories, community servers to see solutions 
                to issues, and documentation. I would use documentation again 
                since it's from the official source and it's helpful, that's how 
                I setup the storybook originally for React Native.
            </Paragraph>
            <Paragraph>
                What did you learn about yourself as 
                you worked on this project/activity?: 

                I realized I need to evaluate everything I deem easy 
                by more than 3 times the original estimate. To give 
                myself enough time to make everything polished enough 
                to be played and give myself enough time to create.
            </Paragraph>
            <Paragraph>
                In what ways have you improved at this kind 
                of work? What achievements make you feel 
                proudest?: 
                
                I was able to setup a Storyboard for React Native 
                which was pretty annoying to do and I didn't realize 
                it was possible until when I tried.
            </Paragraph>
            <Paragraph>
                How does your project/activity make an impact on 
                others?: 
                
                It makes an impact by providing a game solution 
                to make everyone feel included and not want to quit 
                like Kahoot or Gimkit if they're losing.
            </Paragraph>
            <Paragraph>
                What would you change if you had a chance to do this
                 project/activity again?: 
                 
                 I would probably do more research on this 
                 since I underestimated the amount of work needed for this.
            </Paragraph>
            <Paragraph>
                Would you like to continue this project?: 
                
                I would like to, I think it's a fun idea and I just didn't 
                realize how much work it would've take.
            </Paragraph>

            <h2 className="text-xl">Links</h2>
            <li className="text-sky-500">
                <a href="https://expo.dev/" target="_blank">
                    Expo
                </a>
            </li>
            <li className="text-sky-500">
                <a href="https://storybook.js.org/" target="_blank">
                    Storybook
                </a>
            </li>
            <li className="text-sky-500">
                <a href="https://github.com/Intermentality/2025ELA_GAME_Storybook" target="_blank">
                    Github Repo
                </a>
            </li>

            <h2 className="text-xl">Images</h2>
            <img src={HomePageSS} className="pb-1" />
            <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
                <img src={WaveTextSS} />
                <img src={WaveTextIndexSS} />
            </div>
        </article>
    </div>
}