<script>
    export let dark = false;
    
    function sendMail() {
        window.location.href = "mailto:info@rkinfratech.com?subject=Contact%20Us";
    }
    </script>
    
    <div class="flex items-center gap-4">
        <button class={"specialBtn " + (dark ? " bg-primary text-white" : "")} on:click={sendMail}>
            <p class="etxt-base sm:text-lg md:text-xl lg:text-2xl">Contact Us</p>
        </button>
    </div>