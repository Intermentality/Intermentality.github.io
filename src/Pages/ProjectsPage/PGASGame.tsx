import { Paragraph } from "../../Components/Paragraph";

import LevelsSS from "../../Images/PGASGame/LevelsSS.png";
import MainMenuSS from "../../Images/PGASGame/MainMenuSS.png";
import PowerupSS from "../../Images/PGASGame/PowerupSS.png";
import WarningSS from "../../Images/PGASGame/WarningSS.png";

export default function PGASGame(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">PGAS-Game</h1>

            <Paragraph>School project in October 2024.</Paragraph>

            <h2 className="text-2xl">Overview - Psychoacoustics</h2>
            <Paragraph>
                Initial idea, just creating the interface since I am not familiar with psychoacoustics at all really. 
                All I still understand that audio being used with games, 
                and with search approaches was just mainly checking the official documentation first then searching it on a search engine if I couldn't find the answer. 
            </Paragraph>

            <Paragraph>
                What you learned / most valuable insights gained | Understanding that transitioning from one tool to a different one can be tough. 
                In game design class, I was familiar with using Unity 2021 version while the Unity we used was a 2022 version, 
                it had a new thing called Ui toolkit which as fairly hard to get used to, 
                I had no idea as well the whole screen had to be filled instead of being able to size outside of the editor, 
                so when making a small prompt, it would just cover the whole screen. 
            </Paragraph>

            <Paragraph>
                Real world value | Understanding the tool that's being transitioned to instead of just delving straight in, 
                also doing a demo project to understand the tool being used before utilizing it on a Game, 
                or else organization and the project files would be a mess to update in the future 
            </Paragraph>

            <h2 className="text-xl">Images</h2>
            <Paragraph>
                <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
                    <img src={LevelsSS}/>
                    <img src={MainMenuSS}/>
                    <img src={PowerupSS}/>
                    <img src={WarningSS}/>
                </div>
            </Paragraph>
        </article>
    </div>
}