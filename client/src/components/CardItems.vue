<script>
export default {
    props: ['data']
}
</script>

<template>
    <router-link :to="`/detail/video/${data._id}`">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" controls>
                <source :src="data.videoUrl" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="px-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.title }}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate ...">{{ data.thumbnail }}</p>
            </div>
        </div>
    </router-link>
</template>

<style scoped></style>