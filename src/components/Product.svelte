<script>
	import ProductCard from './ProductCard.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	let productFeatures = [
    {
        featureList: [
            'Structural Design',
            'Project Management',
            'Site Supervision',
            'Quality Assurance'
        ],
        description: 'We provide comprehensive structural design services for all types of construction projects.',
        imgUrl: 'assets/1.jpg'
    },
    {
        featureList: [
            'Geotechnical Analysis',
            'Environmental Impact',
            'Surveying',
            'Material Testing'
        ],
        description: 'Our geotechnical analysis ensures the safety and stability of your construction site.',
        imgUrl: 'assets/2.webp'
    },
    {
        featureList: [
            'Construction Management',
            'Cost Estimation',
            'Risk Assessment',
            'Sustainability Consulting'
        ],
        description: 'We manage your construction project from start to finish, ensuring timely and cost-effective delivery.',
        imgUrl: 'assets/3.webp'
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
					Start your lifetime <span class="text-primary">engineering journey</span> today
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
