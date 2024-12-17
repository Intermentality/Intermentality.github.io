import { LinkNewWindow } from "../../Components/Link";
import { Paragraph } from "../../Components/Paragraph";

export default function NovaInOrion_IWeb(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">NovaInOrion2019 Interactive Website</h1>
            <Paragraph>Website I made for Astronomy with React18 Vite.</Paragraph>
            <LinkNewWindow href="https://intermentality.github.io/NovaInOrion-IWEB/">Website.</LinkNewWindow>
            <br/>
            <LinkNewWindow href="https://github.com/Intermentality/NovaInOrion-IWEB">Github Repo.</LinkNewWindow>
        </article>
    </div>
}