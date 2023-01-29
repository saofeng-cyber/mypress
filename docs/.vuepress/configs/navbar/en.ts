import {NavbarConfig} from "vuepress"
export const navbaren:NavbarConfig = [
    {
        text: "Guide",
        link: "/guide"
    },
    {
        text: "Reference",
        children:[
            {
                text: "Sf Admin",
                children:[
                    "/guide/getting-started.md"
                ]
            }
        ]
    }
] 