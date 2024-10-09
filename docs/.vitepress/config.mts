import fs from 'fs';
import { withMermaid } from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid({
	vue: {
		template: {
			compilerOptions: {
				// treat all tags with a dash as custom elements
				isCustomElement: tag => tag.includes('-'),
			},
		},
	},
	vite: {
		optimizeDeps: {
			include: ['mermaid', 'dayjs', '@braintree/sanitize-url'],
		},
	},
	base: '/roles',
	title: '@darksoil-studio/roles',
	description: 'Roles zome for holochain apps',
	srcExclude: ['public/**/*'],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		sidebar: [

			{
				text: 'Overview',
				link: '/overview.md',
			},
			{
				text: 'Setup',
				link: '/setup.md',
			},
			{
				text: 'hc progenitor',
				link: '/hc_progenitor.md',
			},
			{
				text: 'API Reference',
				items: [
					{
						text: 'Integrity Zome',
						link: '/backend/doc/roles_integrity/index.html',
						target: '_blank',
					},
					{
						text: 'Coordinator Zome',
						link: '/backend/doc/roles/index.html',
						target: '_blank',
					},
					{
						text: 'Frontend',
						items: [
							{
								text: 'RolesStore',
								link: '/roles-store.md',
							},
							{
								text: 'Elements',
								items: fs
									.readdirSync('./elements')
									.filter(file => file.endsWith('.md'))
									.map(el => ({
										text: el.split('.md')[0],
										link: `/elements/${el}`,
									})),
							},
						],
					},
				],
			},
		],

		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/darksoil-studio/roles',
			},
		],
		search: {
			provider: 'local',
		},
	},

	head: [
		[
			'script',
			{},
			// Synchronize the vitepress dark/light theme with the shoelace mode
			`
  function syncTheme() {
      const isDark = document.documentElement.classList.contains('dark');
      const isShoelaceDark = document.documentElement.classList.contains('sl-theme-dark');
      if (isDark && !isShoelaceDark) document.documentElement.classList = "dark sl-theme-dark";
      if (!isDark && isShoelaceDark) document.documentElement.classList = "";
  }
  const attrObserver = new MutationObserver((mutations) => {
    mutations.forEach(mu => {
      if (mu.type !== "attributes" && mu.attributeName !== "class") return;
      syncTheme();
    });
  });
  attrObserver.observe(document.documentElement, {attributes: true});
  syncTheme();
        `,
		],
	],
});
