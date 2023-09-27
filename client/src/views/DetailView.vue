<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
        return {
            data: {

            }
        }
    },
    mounted() {
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://mystream-2.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    },
    methods: {
        ...mapActions(useAppStore, ['fetchVideoById']),
    },
    computed: {
        ...mapState(useAppStore, ['video'])
    },
    async created() {
        const id = this.$route.params.id
        await this.fetchVideoById(id)
        // console.log(this.video)
    }

}
</script>
<template>
    <div class="video-detail-container">
        <!-- Video -->
        <div class="video-player">
            <!-- Your video player here -->
            <video controls preload="auto" :src="video.videoUrl"></video>
        </div>

        <!-- Comments -->
        <div class="comments-container">
            <div class="comments-content">
                <div id="disqus_thread"></div>
                <noscript>
                    Please enable JavaScript to view the
                    <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
                </noscript>
            </div>
        </div>
    </div>
</template>


<style scoped>
.video-detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    /* Adjust this as per your design */
    margin: 0 auto;
}

.video-player {
    width: 70%;
    /* Adjust the width as per your design */
    /* max-height: 480px; */
    /* Adjust the height as per your design */
}

.video-player video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.comments-container {
    width: 100%;
    /* Adjust the width as per your design */
    max-width: 1200px;
    /* Optional: Add a maximum width for the comments section */
    margin-top: 20px;
    /* Adjust the margin as per your design */
}

.comments-content {
    /* Optional: Add some styling to the comments container */
    max-width: 800px;
    /* Adjust the width as per your design */
    margin: 0 auto;
    /* Center the comments container */
}
</style>
