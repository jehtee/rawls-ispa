import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';
 
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://jehtee.github.io/rawls-ispa/", // Add your site URL here
  base: "/rawls-ispa/", // Add your repository name here
  integrations: [
    starlight({
      title: "Docs with Tailwind",
      head: [
        {
          tag: "script",
          attrs: {
            src: "/public/basic-auth.js", // Path to your authentication script
            defer: true, // Ensure the script runs after the document is parsed
          },
        },
      ],
      sidebar: [
        {
          label: "Admin",
          autogenerate: {
            directory: "00-admin",
            ignore: ["astro.config.mjs"],
          },
        },
        {
          label: "Define",
          autogenerate: {
            directory: "01-define",
            ignore: ["astro.config.mjs"],
          },
        },
        {
          label: "Discover",
          autogenerate: {
            directory: "02-discover",
            ignore: ["astro.config.mjs"],
          },
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
