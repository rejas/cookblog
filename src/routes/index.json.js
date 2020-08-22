import recipes from './recipes/_recipes.js';

const contents = JSON.stringify(recipes.map(recipe => {
	return {
		title: recipe.title,
		slug: recipe.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
