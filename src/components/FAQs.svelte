<script>
	import SectionWrapper from './SectionWrapper.svelte';
	const faqs = [
		{
			question: 'Is there a beginner-friendly mode in Swoley Moley?',
			ans: 'Yes, Swoley Moley offers a beginner-friendly mode with easier exercises and lower intensity workouts, making it suitable for users at various fitness levels.'
		},
		{
			question: 'Can I customize my workout plan in Swoley Moley?',
			ans: 'Absolutely! Swoley Moley allows you to customize your workout plan based on your fitness goals, available equipment, and time constraints, ensuring a personalized fitness experience.'
		},
		{
			question: 'Does Swoley Moley offer nutrition advice?',
			ans: 'Yes, Swoley Moley provides comprehensive nutrition advice, including meal plans, recipes, and nutritional information to complement your workout routines and support your overall health goals.'
		},
		{
			question: 'Is there a community feature in Swoley Moley?',
			ans: 'Indeed! Swoley Moley has a vibrant community feature where you can connect with other users, share progress, participate in challenges, and get motivation from like-minded individuals on their fitness journeys.'
		},
		{
			question: 'How often are new workouts added to Swoley Moley?',
			ans: 'Swoley Moley regularly updates its workout library. New exercises and routines are typically added on a weekly basis, ensuring you always have fresh and exciting workouts to try.'
		},
		{
			question: 'Can Swoley Moley track my progress over time?',
			ans: 'Absolutely! Swoley Moley features comprehensive progress tracking, including weight, measurements, workout performance, and even progress photos, allowing you to visualize your fitness journey over time.'
		},
		{
			question: 'Is Swoley Moley compatible with fitness trackers or smartwatches?',
			ans: 'Yes, Swoley Moley integrates with a wide range of popular fitness trackers and smartwatches, allowing you to sync your activity data and get a more complete picture of your fitness efforts.'
		}
	];
</script>

<SectionWrapper id="faqs">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
		<div class="flex flex-col gap-2">
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				For all your questions qualms & queries
			</p>
			<h3
				class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
			>
				Frequently <span class="text-indigo-400">Asked</span> Questions
			</h3>
		</div>
		<div class="flex flex-col gap-8 sm:gap-10 md:gap-14 w-full">
			{#each faqs as faq}
            <div class="flex flex-col gap-2 text-left max-w-[8 00px] w-full mx-auto relative p-4">
                <div class="absolute top-0 left-0 w-1/3 h-[1px] bg-slate-950 -translate-x-4"></div>
                <div class="absolute top-0 left-0 h-2/3 w-[1px] bg-slate-950 -translate-y-4"></div>
                <h4 class="text-lg sm:text-xl md:text-2xl pt-2">{faq.question}</h4>
                <p class="pl-2">{faq.ans }</p>
            </div>
            {/each}
		</div>
	</div>
</SectionWrapper>
