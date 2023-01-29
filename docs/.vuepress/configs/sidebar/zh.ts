import { SidebarConfig } from "vuepress"
export const sidebarzh:SidebarConfig = {
    '/zh/guide/': [
        {
          text: '指南',
          children: [
            '/zh/guide/README.md',
            '/zh/guide/getting-started.md'
          ],
        },
      ],
}