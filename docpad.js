/* jshint -W014 */

var docpadConfig = {
    ignoreCustomPatterns: /\.ts$|\.sass|\.scss|\.psd|\.fla$/i,
	templateData: {
		site: {
			url: 'http://definitelytyped.org',
			github: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
            edit: 'https://github.com/DefinitelyTyped/definitelytyped.github.io/edit/source/src/documents/',
			ref: 'github.com/DefinitelyTyped/DefinitelyTyped',
			home: '/',
			gh: {
				user: 'DefinitelyTyped',
				repo: 'DefinitelyTyped'
			},
			oldUrls: [],
			title: 'DefinitelyTyped',
			description: 'The repository for high quality TypeScript type definitions',
			tagline: 'The repository for high quality TypeScript type definitions',
			keywords: 'typescript, type, definition, declaration, repository, typing',
			styles: [
				'/assets/styles/main.css'
			],
			scripts: [
				'/assets/scripts/main-min.js'
			],
			analytics: {
				id: 'UA-47495295-3',
				site: 'definitelytyped.org'
			}
		},
		badges: {
			basic: {
				link: 'http://definitelytyped.org',
				label: 'TypeScript definitions on DefinitelyTyped',
				svg_base: '//definitelytyped.org/badges/standard.svg',
				svg_flat: '//definitelytyped.org/badges/standard-flat.svg'
			}
		},
		getPreparedTitle: function() {
			if (this.document.title) {
				return '' + this.document.title + ' | ' + this.site.title;
			} else {
				return this.site.title;
			}
		},
		getPreparedDescription: function() {
			return this.document.description || this.site.description;
		},
		getPreparedKeywords: function() {
			return this.site.keywords.concat(this.document.keywords || []).join(', ');
		},
		getBadgeMarkdown: function(type) {
			var link = this.badges.basic.link;
			var label = this.badges.basic.label;
			var image = this.badges.basic.svg_base;
			if (type === 'flat') {
				image = this.badges.basic.svg_flat;
			}
			return '[![' + label +'](' + image +')](' + link +')';
		},
		getBadgeHTML: function(type) {
			var link = this.badges.basic.link;
			var label = this.badges.basic.label;
			var image = this.badges.basic.svg_base;
			if (type === 'flat') {
				image = this.badges.basic.svg_flat;
			}
			return '<a href="' + link +'"><img src="' + image +'" alt="' + label +'"></a>';
		}
	},
	collections: {
	},
	environments: {
		development: {
			templateData: {
				site: {
					url: false,
					scripts: [
						'/assets/scripts/lib/underscore-min.js',
						'/assets/scripts/lib/backbone-min.js',
						'/assets/scripts/lib/backbone.nativeview.js',
						'/assets/scripts/lib/fontfaceonload.js',
						'/assets/scripts/main.js'
					],
				}
			}
		}
	},
	plugins: {
		marked: {
			markedOptions: require('./lib/markedOptions')
		}
	},
	events: {
	}
};

module.exports = docpadConfig;
