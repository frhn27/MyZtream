<script>
export default {

}
</script>

<template>
    <div class="container mx-auto">
        <div class="flex justify-center">
            <div class="flex-1">
                <form>
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so
                                be careful what you share.</p>

                            <div class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8  gap-2 sm:grid-cols-6">
                                <div class="sm:col-span-4">
                                    <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First
                                        Name</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="firstname" id="firstname" autocomplete="firstname"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="janesmith" />
                                        </div>
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Last
                                        Name</label>
                                    <div class="mt-2">
                                        <div
                                            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <input type="text" name="lastname" id="lastname" autocomplete="lastname"
                                                class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="jDoe" />
                                        </div>
                                    </div>
                                </div>



                                <div class="col-span-2">
                                    <div class="sm:col-span-4">
                                        <label for="email"
                                            class="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                                        <div class="mt-2">
                                            <div
                                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input type="email" name="email" id="email"
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="janesmith@gmail.com" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-2">
                                    <div class="sm:col-span-4">
                                        <label for="phoneNumber"
                                            class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                        <div class="mt-2">
                                            <div
                                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input type="tel" name="phoneNumber" id="phoneNumber"
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="123-45-678" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-2">
                                    <label for="about"
                                        class="block text-sm font-medium leading-6 text-gray-900">About</label>
                                    <div class="mt-2">
                                        <textarea id="about" name="about" rows="3"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>