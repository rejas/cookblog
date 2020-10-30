<script>
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 1rem;
		margin: 0 auto;
		font-family: 'Poppins', sans-serif;
	}
	@media print {
		main {
			max-width: none;
			padding: 0;
			margin: 0;
		}
	}
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface|Poppins:300&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<slot></slot>
</main>
