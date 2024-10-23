<script>
	import ReviewCard from './ReviewCard.svelte';
	import SectionWrapper from './SectionWrapper.svelte';
	import Stars from './Stars.svelte';
	let lim = true;
	const reviewsList = [
		{
			name: 'Mark Robinson',
			review:
				"Swoley Moley is more than just a fitness app; it's a lifestyle change. It's helped me develop healthy habits and make better choices about my diet and exercise. I'm incredibly grateful for this app and the positive impact it's had on my life.",
			features: ['Focus on healthy habits', 'Nutritional guidance', 'Positive lifestyle impact']
		},
		{
			name: 'Sarah Johnson',
			review:
				"I've tried many fitness apps, but Swoley Moley stands out. The personalized workout plans and diet suggestions have been a game-changer for me. I've lost 20 pounds and feel more energetic than ever!",
			features: ['Personalized workout plans', 'Diet suggestions', 'Progress tracking']
		},
		{
			name: 'Alex Chen',
			review:
				"As a busy professional, I struggled to find time for exercise. Swoley Moley's quick workout routines and meal prep ideas fit perfectly into my schedule. It's made staying healthy so much more manageable.",
			features: ['Quick workout routines', 'Meal prep ideas', 'Time-efficient solutions']
		},
		{
			name: 'Emily Rodriguez',
			review:
				"The community features in Swoley Moley are fantastic. Connecting with other users, sharing progress, and participating in challenges keeps me motivated. It's like having a support group in my pocket!",
			features: ['Social features', 'Progress sharing', 'Community challenges']
		},
		{
			name: 'Mark Robinson',
			review:
				"Swoley Moley is more than just a fitness app; it's a lifestyle change. It's helped me develop healthy habits and make better choices about my diet and exercise. I'm incredibly grateful for this app and the positive impact it's had on my life.",
			features: ['Focus on healthy habits', 'Nutritional guidance', 'Positive lifestyle impact']
		},
		{
			name: 'Sarah Johnson',
			review:
				"I've tried many fitness apps, but Swoley Moley stands out. The personalized workout plans and diet suggestions have been a game-changer for me. I've lost 20 pounds and feel more energetic than ever!",
			features: ['Personalized workout plans', 'Diet suggestions', 'Progress tracking']
		},
		{
			name: 'Alex Chen',
			review:
				"As a busy professional, I struggled to find time for exercise. Swoley Moley's quick workout routines and meal prep ideas fit perfectly into my schedule. It's made staying healthy so much more manageable.",
			features: ['Quick workout routines', 'Meal prep ideas', 'Time-efficient solutions']
		},
		{
			name: 'Emily Rodriguez',
			review:
				"The community features in Swoley Moley are fantastic. Connecting with other users, sharing progress, and participating in challenges keeps me motivated. It's like having a support group in my pocket!",
			features: ['Social features', 'Progress sharing', 'Community challenges']
		},
		{
			name: 'Mark Robinson',
			review:
				"Swoley Moley is more than just a fitness app; it's a lifestyle change. It's helped me develop healthy habits and make better choices about my diet and exercise. I'm incredibly grateful for this app and the positive impact it's had on my life.",
			features: ['Focus on healthy habits', 'Nutritional guidance', 'Positive lifestyle impact']
		},
		{
			name: 'Sarah Johnson',
			review:
				"I've tried many fitness apps, but Swoley Moley stands out. The personalized workout plans and diet suggestions have been a game-changer for me. I've lost 20 pounds and feel more energetic than ever!",
			features: ['Personalized workout plans', 'Diet suggestions', 'Progress tracking']
		},
		{
			name: 'Alex Chen',
			review:
				"As a busy professional, I struggled to find time for exercise. Swoley Moley's quick workout routines and meal prep ideas fit perfectly into my schedule. It's made staying healthy so much more manageable.",
			features: ['Quick workout routines', 'Meal prep ideas', 'Time-efficient solutions']
		},
		{
			name: 'Alex Chen',
			review:
				"As a busy professional, I struggled to find time for exercise. Swoley Moley's quick workout routines and meal prep ideas fit perfectly into my schedule. It's made staying healthy so much more manageable.",
			features: ['Quick workout routines', 'Meal prep ideas', 'Time-efficient solutions']
		}
	];
</script>

<SectionWrapper id="reviews">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
		<div class="flex flex-col gap-2">
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				Don't just take our word for it
			</p>
			<h3
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				See What <span class="text-indigo-400">Others</span> Have to say
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
