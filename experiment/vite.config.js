import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
// for the following see https://github.com/cypress-io/cypress/issues/25397#issuecomment-1775454875
import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

export default defineConfig(() => {
	return {
		build: {
			outDir: 'dist'
		},
		base: '/experiment/',
		plugins: [eslint()]
	};
});
