<script>
	export let recipe;

	import Icon from 'svelte-awesome/components/Icon.svelte'
	import { faClock, faLeaf, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="recipe">
	<div class="recipe__overview">
		<h1 class="recipe__title">
			{recipe.title}
		</h1>
		<div class="recipe__image">
			<img src="{recipe.image}" alt=""/>
		</div>
		<ul class="recipe__stats">
			<li class="recipe__statline"><Icon data={faClock}/>{recipe.stats.time}</li>
			<li class="recipe__statline"><Icon data={faLayerGroup}/>easy peasy</li>
			<li class="recipe__statline"><Icon data={faLeaf}/>{recipe.stats.style}</li>
		</ul>
		<div class="recipe__summary">
			{@html recipe.summary}
		</div>
	</div>
	<div class="recipe__steps">
		{#each recipe.steps as step}
			<div class="recipe_step">
				<div class="step_image"><img src="{step.image}" alt=""/></div>
				<div class="step_name">{step.name}</div>
				<div class="step_text">{@html step.text}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.recipe {
		display: flex;
		flex-direction: column;
	}

	.recipe__overview {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "title title"
							 "image image"
							 "stats descr";
	}

	.recipe__title {
		font-family: 'Abril Fatface', cursive;
		grid-area: title;
		text-align: center;
		font-size: 2rem;
	}

	.recipe__image {
		grid-area: image;
	}

	.recipe__stats {
		grid-area: stats;
		list-style: none;
		text-indent: -35px;
	}

	.recipe__statline {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 10px;
	}

	.recipe__steps {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-template-rows: auto;
	}

	img {
		max-width: 100%;
	}
</style>
