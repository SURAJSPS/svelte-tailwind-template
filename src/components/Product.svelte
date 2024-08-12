<script>
	import ProductCard from './ProductCard.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	let productFeatures = [
		{
			featureList: [
				'Personalized Workout',
				'Exercise Explanation',
				'Analytics',
				'Progress Tracking'
			],
			description:
				'Get a personalized workout plan based on your goals, fitness level, and available equipment.',
			imgUrl: 'assets/selection.png'
		},
		{
			featureList: [
				'Exercise Explanation',
				'Analytics',
				'Progress Tracking',
				'Personalized Workout'
			],
			description: 'Get a detailed explanation of each exercise with videos and pro tips.',
			imgUrl: 'assets/training.png'
		},
		{
			featureList: [
				'Analytics',
				'Progress Tracking',
				'Personalized Workout',
				'Exercise Explanation'
			],
			description: 'Track your workout progress and see how you improve over time.',
			imgUrl: 'assets/goal.png'
		}
	];
</script>

<SectionWrapper id="products">
	<div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
		<div
			class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
		>
			<div class="flex flex-col gap-2">
				<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
					Start your lifetime
					<span class="text-indigo-400">gym streak</span>
					today
				</p>
				<h3
					class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
				>
					Features For Everyone
				</h3>
			</div>
		</div>

		{#each productFeatures as productFeature, index}
			<ProductCard {productFeature} {index}>
				{#if index === 0}
					Experience a beginner exercise <span class="text-indigo-400 font-medium">master</span
					> class{:else if index === 1}
					Lay the foundation for <span class="text-indigo-400 font-medium">routine</span> and consistency
				{:else}
					Workout specific for your<span class="text-indigo-400 font-medium">environment</span> and
					<span class="text-indigo-400 font-medium">expertise</span>
				{/if}
			</ProductCard>
		{/each}
	</div>
</SectionWrapper>
