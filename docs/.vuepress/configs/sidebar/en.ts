import { SidebarConfig } from "vuepress"
export const sidebaren:SidebarConfig = {
    '/guide/': [
        {
          text: 'Reference',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md'
          ],
        },
      ],
}