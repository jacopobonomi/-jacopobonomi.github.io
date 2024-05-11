<script context="module" lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';
	import WorkExperience from '$lib/WorkExperience.svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import Welcome from '$lib/Welcome.svelte';
	import '../styles/index.css';
</script>

<svelte:head>
	<title>Jacopo Bonomi - Website</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Jacopo Bonomi website, full stack developer, AWS Cloud architect, computer science enthusiast, entrepreneur and critical thinker"
	/>
</svelte:head>
<div class="bg-neutral-900 bg-image-gif min-h-screen">
	<div style="z-index:10" class="w-full text-white p-2 md:p-20">
		<Welcome />
		<WorkExperience />
		<AboutMe title="About me" />
		<Contact />
		<Footer />
	</div>
</div>
