<script>
	import ReviewCard from './ReviewCard.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	import Stars from './Stars.svelte';
	let lim = true;
	const reviewsList = [
		{
			name: 'Rajesh Patel',
			review:
				"RKInfratech's expertise in structural design is unparalleled. Their innovative solutions helped us complete our high-rise project in Mumbai ahead of schedule and under budget. Their attention to detail and commitment to quality is commendable.",
			features: ['Structural Design', 'Project Management', 'Cost-Effective Solutions']
		},
		{
			name: 'Priya Sharma',
			review:
				"Working with RKInfratech on our city's new transportation infrastructure was a game-changer. Their urban planning integration resulted in a more efficient and sustainable system for Bangalore. Their team's professionalism and technical knowledge are impressive.",
			features: ['Transportation Infrastructure', 'Urban Planning', 'Sustainability']
		},
		{
			name: 'Amit Verma',
			review:
				"RKInfratech's water resource management solutions have significantly improved our community's water conservation efforts in Rajasthan. Their expertise in renewable energy integration is truly impressive and has set a new standard for sustainable development in our region.",
			features: ['Water Resource Management', 'Renewable Energy', 'Community Impact']
		},
		{
			name: 'Neha Gupta',
			review:
				"The geotechnical analysis provided by RKInfratech was crucial for our coastal development project in Kerala. Their thorough approach ensured the stability and safety of our structures, even in challenging soil conditions. Their team's expertise is unmatched.",
			features: ['Geotechnical Analysis', 'Coastal Development', 'Safety Assurance']
		},
		{
			name: 'Vikram Singh',
			review:
				"RKInfratech's project management skills are exceptional. They coordinated multiple stakeholders effortlessly for our large-scale industrial complex in Gujarat. Their ability to foresee and mitigate potential issues saved us both time and money.",
			features: ['Project Coordination', 'Risk Management', 'Industrial Construction']
		},
		{
			name: 'Ananya Reddy',
			review:
				"As an architect, I've worked with many civil engineering firms, but RKInfratech stands out. Their collaborative approach and innovative solutions greatly enhanced our eco-friendly residential project in Hyderabad. They truly understand the importance of sustainable design.",
			features: ['Collaborative Design', 'Eco-friendly Solutions', 'Residential Projects']
		}
	];
</script>

<SectionWrapper id="reviews">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
		<div class="flex flex-col gap-2">
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				Don't just take our word for it
			</p>
			<h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
				See What <span class="text-primary">Others</span> Have to say
			</h3>
		</div>
		<div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
			<div class="felx flex-col gap-8">
				{#each lim ? reviewsList.slice(0,4) : reviewsList as review, index}
					<ReviewCard {review} left={true} {index} />
				{/each}
			</div>
			<div class="w-[1px] bg-slate-950 hidden md:flex"></div>
			<div class="felx flex-col gap-8">
				{#each lim ? reviewsList.slice(0,4) : reviewsList as review, index}
					<ReviewCard {review} {index} />
				{/each}
			</div>
		</div>
		<button on:click={() => (lim = !lim)} class="specialBtn">
			<p>{lim ? 'Show More' : 'Show Less'}</p>
		</button>
		<div class="flex flex-col gap-10">
			<p class="mx-auto text-large sm:text-xl md:text-2xl font-semibold">
				Trusted By 1,349 Clients
			</p>
			<Stars/>
		</div>
	</div>
</SectionWrapper>
