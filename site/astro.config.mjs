import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jehtee.github.io/rawls-ispa/site', // Add your site URL here
  base: '/rawls-ispa/site', // Add your repository name here
});

import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs with Tailwind',
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
        './src/tailwind.css',
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
