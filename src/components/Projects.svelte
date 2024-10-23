<script>
    import SectionWrapper from './SectionWrapper.svelte';

    const ongoingProjects = [
        {
            name: "City Center Skyscraper",
            description: "A 50-story mixed-use building in the heart of downtown.",
            progress: 60,
            image: "assets/ongoing-1.jpg"
        },
        {
            name: "Riverside Bridge",
            description: "A 500-meter suspension bridge connecting two major districts.",
            progress: 40,
            image: "assets/ongoing-2.jpg"
        },
        {
            name: "Green Valley Residential Complex",
            description: "An eco-friendly residential development with 200 units.",
            progress: 75,
            image: "assets/ongoing-3.jpg"
        }
    ];

    const completedProjects = [
        {
            name: "Central Park Renovation",
            description: "Complete overhaul of the city's main park, including new facilities and landscaping.",
            completionDate: "2023",
            image: "assets/completed-1.jpg"
        },
        {
            name: "Harbor Front Development",
            description: "A mixed-use waterfront development featuring residential, commercial, and recreational spaces.",
            completionDate: "2022",
            image: "assets/completed-2.jpg"
        },
        {
            name: "Metro Line Extension",
            description: "A 15-kilometer extension of the city's metro system, including 5 new stations.",
            completionDate: "2021",
            image: "assets/completed-3.jpg"
        }
    ];
</script>

<SectionWrapper id="projects">
    <div class="flex flex-col gap-20 py-20">
        <div class="flex flex-col gap-10">
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
                Ongoing <span class="text-primary">Projects</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each ongoingProjects as project}
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.name} class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
                            <p class="text-gray-600 mb-4">{project.description}</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-primary h-2.5 rounded-full" style="width: {project.progress}%"></div>
                            </div>
                            <p class="text-right mt-2">{project.progress}% Complete</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="flex flex-col gap-10">
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
                Completed <span class="text-primary">Projects</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each completedProjects as project}
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.name} class="w-full h-48 object-cover"/>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
                            <p class="text-gray-600 mb-4">{project.description}</p>
                            <p class="text-right font-semibold">Completed in {project.completionDate}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</SectionWrapper>

