<script>
	import SectionWrapper from './SectionWrapper.svelte';
	const faqs = [
    {
        question: 'What types of projects do you handle?',
        ans: 'We handle a wide range of civil engineering projects, including residential, commercial, and infrastructure developments.'
    },
    {
        question: 'Do you offer project management services?',
        ans: 'Yes, we offer full project management services to ensure your project is completed on time and within budget.'
    },
    {
        question: 'Can you help with environmental impact assessments?',
        ans: 'Absolutely! We provide environmental impact assessments to ensure your project complies with all regulations.'
    },
    {
        question: 'What is your approach to sustainability?',
        ans: 'We prioritize sustainable practices in all our projects, from material selection to energy-efficient designs.'
    },
    {
        question: 'How do you ensure quality control?',
        ans: 'We have a rigorous quality control process that includes regular site inspections, material testing, and adherence to industry standards.'
    }
];
</script>

<SectionWrapper id="faqs">
	<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center">
		<div class="flex flex-col gap-2">
			<p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
				For all your questions qualms & queries
			</p>
			<h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">
				Frequently <span class="text-primary">Asked</span> Questions
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
