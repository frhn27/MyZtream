<script>
import CardItems from '../components/CardItems.vue';

import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    components: {
        CardItems
    },
    methods: {
        ...mapActions(useAppStore, ['fetchMyVideo'])
    },
    computed: {
        ...mapState(useAppStore, ['myvideos'])
    },
    created() {
        this.fetchMyVideo()
    }
}

</script>

<template>
    <div>
        <h4 class="text-4xl font-bold mt-8 mb-4 text-center text-gray-900 dark:text-white">My Video</h4>
        <div class="grid grid-cols-3 gap-8">
            <!-- Card MyVideo -->
            <div v-for="myvideo in myvideos" :key="myvideo.id"
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
                    <source :src="myvideo.videoUrl" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div>
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ myvideo.title }}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">{{ myvideo.description }}</p>
                </div>
            </div>
            <!-- End Card MyVideo -->
        </div>
    </div>
</template>

<style scoped></style>