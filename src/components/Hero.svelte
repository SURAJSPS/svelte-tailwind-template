<script>
	import SectionWrapper from './SectionWrapper.svelte';
	import Header from './Header.svelte';
	import CtAs from './CTAs.svelte';
	import Stars from './Stars.svelte';
</script>

<SectionWrapper>
	<Header />
	<div class="flex flex-col gap-10 flex-1 items-center justify-center p-10 md:pb-14">
		<h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold">
			<span class="text-primary">Civil</span> Engineering<br />
			<span class="text-neutral line-through">Is Complex</span><br />
			Just Got <span class="text-secondary">Simpler</span>
		</h2>
		<p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-[1000px] mx-auto w-full">
			Less hassle & more building. We provide <span class="italic">personalized engineering solutions, project management, and much more.</span>
		</p>
		<CtAs />
		<Stars />
	</div>
</SectionWrapper>
