import Tag from "@/components/Tag";
import Figma from "@/assets/images/figma-logo.svg";
import Notion from "@/assets/images/notion-logo.svg";
import Slack from "@/assets/images/slack-logo.svg";
import Relume from "@/assets/images/relume-logo.svg";
import Framer from "@/assets/images/framer-logo.svg";
import Github from "@/assets/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: Figma,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: Notion,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: Slack,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: Relume,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: Framer,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: Github,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-xl">
                            Layers seamlessly connects with your favourite
                            tools, making it eay to plug into any workflow and
                            collaborate across plateforms.
                        </p>
                    </div>
                    <div>
                        <div
                            className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden 
                    [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
                    grid md:grid-cols-2 gap-4"
                        >
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.toReversed()}
                                className="hidden md:flex"
                            />
                            {/* or <IntegrationsColumn integrations={integrations.slice().reverse()} />  */}
                            {/* 
                        we used the slice method because reverse method is an in-place opreation which will reverse
                        the original array and the slice method returns a new array instance. and toReversed method
                        is a new operation that returns a new reversed array.
                     */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
