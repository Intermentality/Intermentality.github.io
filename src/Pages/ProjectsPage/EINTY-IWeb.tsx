import { LinkNewWindow } from "../../Components/Link";
import { Paragraph } from "../../Components/Paragraph";

export default function EINTY_IWeb(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className="text-4xl">ENITY Interactive Website</h1>
            <Paragraph>Website I made for Literature with React18 Vite.</Paragraph>
            <LinkNewWindow href="https://intermentality.github.io/einty-iweb/">Website.</LinkNewWindow>
            <br/>
            <LinkNewWindow href="https://github.com/Intermentality/einty-iweb">Github Repo.</LinkNewWindow>
        </article>
    </div>
}