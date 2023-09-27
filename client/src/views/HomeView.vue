<script>
import { useAppStore } from '../stores/app';
import { mapActions, mapState, mapWritableState } from 'pinia';

import CardItems from '../components/CardItems.vue';

export default {
    components: {
        CardItems
    },
    computed: {
        ...mapState(useAppStore, ['videos','page']),
        ...mapWritableState(useAppStore, ['search'])
    },
    methods: {
        ...mapActions(useAppStore, ['fetchVideo', "searchVideo",'nextPage','previousPage'])
    },
    created() {
        this.fetchVideo()
    }
}

</script>
<template>
    <div class="bg-white dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-xl lg:py-10">
            <!-- Seacrh Input with SVG Icon -->
            <div class="w-full flex items-center justify-center my-6">
                <input v-model="search" @input="searchVideo(search)" type="text" id="simple-search"
                    class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search By Title..." />

                <svg class="w-[48px] h-[48px] ml-2 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M1 5h18M1 5v14h18V5M1 5V1h18v4M5 5l3-4m1.215 4 3-4m1.215 4 3-4M8.007 8v8l5.416-4-5.416-4Z" />
                </svg>
            </div>

            <!-- Video Card -->
            <div class="grid grid-cols-3 gap-8">
                <!-- Card Video -->
                <CardItems v-for="video in videos" :key="video.id" :data="video" />
                <!-- End Card Video -->
            </div>


            <!-- Button Pagination -->
            <div class="flex my-10 justify-center">
                <!-- Previous Button -->
                <button @click="previousPage" type="button" :disabled="page === 1"
                    class="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                </button>

                <!-- Next Button -->
                <button @click="nextPage" type="button" v-show="videos.length > 1"
                    class="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
            <!-- End Button Pagination -->
        </div>
    </div>
</template>


