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
	<div class="recipe__details">
		<div class="recipe__ingredients">
			{#each recipe.ingredients as ingredient}
				<h3 class="ingredients__title">{ingredient.title}</h3>
				{#each ingredient.parts as part}
					<p>{part.name}: {part.value}</p>
				{/each}
			{/each}
		</div>
		<div class="recipe__steps">
			{#each recipe.steps as step}
				<div class="recipe__step">
					<div class="step__image"><img src="{step.image}" alt=""/></div>
					<h3 class="step__name">{step.name}</h3>
					<div class="step__text">{@html step.text}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.recipe {
		display: flex;
		flex-direction: column;
	}

	.recipe__overview {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas: "title title"
							 "image image"
							 "stats descr";
        margin-bottom: 2rem;
	}

	.recipe__title {
		grid-area: title;
	}

	.recipe__image {
		grid-area: image;
		overflow: hidden;
	}

	.recipe__stats {
		grid-area: stats;
		padding: 0 1rem;
	}

	.recipe__statline {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 1rem;
	}

	.recipe__details {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 3fr;
		grid-template-areas: "ingredients steps";
	}

	.recipe__ingredients {
		grid-area: ingredients;
		background-color: rgb(228, 228, 228);
		padding: 1rem;
	}

	.ingredients__title {
		font-weight: bold;
	}

	.recipe__steps {
		grid-area: steps;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-template-rows: auto;
	}

	.step__name {
		background-color: rgb(248, 248, 248);
		padding: 0.25rem;
		margin-bottom: 0.5rem;
	}

	@media print {
		@page {
			size: A4 landscape;
			max-height: 100%;
			max-width: 100%;
			margin: 0;
			padding: 0;
		}

		.recipe__overview {
			page-break-after: always;
			height: 100vh;
			margin-bottom: 0;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.recipe__details {
			page-break-before: always;
			height: 100vh;
		}
	}
</style>
