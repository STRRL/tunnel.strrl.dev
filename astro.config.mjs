// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
	starlight({
		title: 'Cloudflare Tunnel Ingress Controller',
		social: [
			{ icon: 'github', label: 'GitHub', href: 'https://github.com/strrl/cloudflare-tunnel-ingress-controller' },
		],
		sidebar: [
			{
				label: 'Guides',
				items: [{ label: 'Quickstart', slug: 'guides/quickstart' }],
			},
			{
				label: 'Reference',
				autogenerate: { directory: 'reference' },
			},
		],
		}),
	],
});
