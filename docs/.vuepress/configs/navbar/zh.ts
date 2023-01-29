import {NavbarConfig} from "vuepress"
export const navbarzh:NavbarConfig = [
    {
        text: "指南",
        link: "/zh"
    },
    {
        text: "参考",
        children:[
            {
                text: "Sf Admin",
                children:[
                    "/zh/guide/getting-started.md"
                ]
            }
        ]
    }
] 