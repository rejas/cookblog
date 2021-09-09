// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_recipes.js` rather than `recipes.js`, because
// we don't want to create an `/blog/recipes` route — the leading
// underscore tells Sapper not to do that.

const recipes = [
    {
        title: 'Zwetschgenkuchen',
        slug: 'zwetschgenkuchen',
        image: 'recipes/zwetschgenkuchen/0_title.jpg',
        summary: 'Wie bei Mama zuhause. Am besten zusammen mit Kartoffelsuppe genießen.',
        stats: {
            level: 1,
            time: "20-30 Minuten",
            style: "vegetarisch, lecker"
        },
        ingredients: [
            {
                title: "Für den Boden",
                parts: [{
                    name: "Mehl",
                    value: "500g"
                },{
                    name: "Hefe",
                    value: "40g"
                }]
            },
            {
                title: "Für den Belag",
                parts: [{
                    name: "Zwetschgen",
                    value: "1kg"
                }]
            }
        ],
        steps: [
            {
                image: 'recipes/placeholder.jpg',
                name: "1. Zwetschgen entkernen",
                text: "Dabei beachten: entlang des Boppes schneiden!"
            },
            {
                image: 'recipes/placeholder.jpg',
                name: "2. Teig zubereiten",
                text: "Zutaten mischen"
            },
            {
                image: 'recipes/placeholder.jpg',
                name: "3. Teig ruhen lassen",
            },
            {
                image: 'recipes/placeholder.jpg',
                name: "4. Teig auswalzen",
            },
            {
                image: 'recipes/placeholder.jpg',
                name: "5. Teig belegen",
            },
            {
                image: 'recipes/zwetschgenkuchen/6_backen.jpg',
                name: "6. Backen",
                text: "Bei <strong>XXX Grad</strong> im vorgeheizten Backofen <strong>YYY Minuten</strong> backen"
            }
        ]
    },
    {
        title: 'Kartoffelsuppe',
        slug: 'kartoffelsuppe',
        image: 'recipes/placeholder.jpg',
        summary: 'First, you have to know what <a href=\'https://svelte.dev\'>Svelte</a> is. Svelte is a UI framework with a <strong>bold</strong> new idea',
        stats: {
            level: 1,
            time: "20-30 Minuten",
            style: "vegetarisch, lecker"
        },
        steps: [
            {
                image: 'recipes/placeholder.jpg',
                name: "1. Kartoffeln kochen",
                text: "lorem ipsum"
            },
            {
                image: 'recipes/placeholder.jpg',
                name: "2. Kartoffeln pürieren",
                text: "lorem ipsum"
            }
        ]
    },
];

recipes.forEach(recipe => {
    //post.html = post.html.replace(/^\t{3}/gm, '');
});

export default recipes;
