module.exports = {
	base: '/vue-press/',
	title: 'VuePress Start',
	description: 'Hello VuePress',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'About', link: '/about/' },
			{
				text: 'About',
				items: [
					{ text: 'About Me', link: '/about/me' },
					{ text: 'About Blog', link: '/about/blog' },
				],
			},
		],
	},
};
