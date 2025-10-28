// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Cloudflare Tunnel Ingress Controller",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/strrl/cloudflare-tunnel-ingress-controller",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Quickstart", slug: "guides/quickstart" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            type: "text/javascript",
          },
          content: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tx1nlf05gh");
          `,
        },
      ],
    }),
  ],
});
