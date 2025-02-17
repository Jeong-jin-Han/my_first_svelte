<script>
// export let data;
</script>

<div class="layout">
<header>
	<h1>GoalSNS</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<p>© 2025 GoalSNS</p>
</footer>
</div>

<style>
.layout {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 600px;
	margin: auto;
	font-family: Arial, sans-serif;
}

header {
	width: 100%;
	padding: 15px;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	border-bottom: 2px solid #ddd;
}

main {
	width: 100%;
	padding: 20px;
}

footer {
	margin-top: 20px;
	font-size: 12px;
	color: gray;
}
</style>
