<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(recipes => {
			return { recipes };
		});
	}
</script>

<script>
	export let recipes;
</script>

<style>
</style>

<svelte:head>
	<title>Cookblog</title>
</svelte:head>

<h1>Welcome to your cookblog</h1>
<h2>all your recipes in a svelte webapp</h2>

<ul>
	{#each recipes as recipe}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='recipes/{recipe.slug}'>{recipe.title}</a></li>
	{/each}
</ul>
