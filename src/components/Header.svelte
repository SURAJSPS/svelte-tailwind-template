<script>
	import { openModal } from '../store';
</script>

<header class="flex flex-col relative z-20">
	<div class="max-w-[1400px] mx-auto w-full flex justify-between items-center p-4 py-6">
		<a href="/">
			<h1 class="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">RK<span class="text-primary">Infratech</span></h1>
		</a>
		<button on:click={() => ($openModal = true)} class=" md:hidden grid place-items-center">
			<i class="fa-solid fa-bars"></i>
		</button>
		<nav class="hidden md:flex items-center gap-4 lg:gap-6">
			<a class="duration-200 hover:text-secondary cursor-pointer" href="#products">Services</a>
			<a class="duration-200 hover:text-secondary cursor-pointer" href="#reviews">Testimonials</a>
			<a class="duration-200 hover:text-secondary cursor-pointer" href="#faqs">FAQs</a>

		</nav>
	</div>
</header>

