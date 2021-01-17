<template>
    <div class="inline-flex">
        <nav class="relative z-0 flex-col lg:inline-flex lg:flex-row shadow-sm -space-x-px" aria-label="Pagination">
            <div class="mx-2"><span>Page: </span><span><input class="bg-gray-100 p-2 rounded-sm" style="max-width: 75px" type="text" v-model.lazy="jumpToPage"></span></div>

<!--            <a :disabled="pagination.current_page > 1" href="javascript:void(0)" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Previous</span>
                &lt;!&ndash; Heroicon name: chevron-left &ndash;&gt;
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
            <a href="javascript:void(0)" v-on:click.prevent="changePage(page)" v-for="page in leftTail" :class="{'bg-indigo-100': page === pagination.current_page}" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white active:bg-indigo-500 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {{ page}}
            </a>
            <span v-if="rightTail.length" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="javascript:void(0)" v-on:click.prevent="changePage(page)" v-for="page in rightTail" :class="{'bg-indigo-100': page === pagination.current_page}" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white active:bg-indigo-500 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {{ page}}
            </a>
            <a :disabled="pagination.current_page < pagination.last_page" href="javascript:void(0)" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Next</span>
                &lt;!&ndash; Heroicon name: chevron-right &ndash;&gt;
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>-->
            <div class="inline-flex">
                <a :href="link.url || `javascript:void(0)`" @click.prevent="goToLink(link.url)" v-for="(link, index) of links" :key="index"
                   :class="{'bg-indigo-200': link.active,'rounded-l-md': link.label==='&laquo; Previous','rounded-r-md': link.label==='Next &raquo;'}"
                   class="relative inline-flex items-center p-2 px-3 border border-gray-300 bg-white active:bg-indigo-500 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    <svg v-if="link.label==='&laquo; Previous'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else-if="link.label==='Next &raquo;'" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <template v-else>{{link.label}}</template>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        links: {
            type: Array,
            required: true,
            default: () => [
                {
                    "url": null,
                    "label": "&laquo; Previous",
                    "active": false
                },
                {
                    "url": null,
                    "label": "Next &raquo;",
                    "active": false
                }
            ]
        },
    },
    data() {
        return {
            jumpToPage: 1
        }
    },
    computed: {
    },
    methods : {
        changePage(page) {
            if (this.jumpToPage !== page) {
                this.jumpToPage = page;
            } else {
                this.$emit('paginate', page);
            }
        },
        changeLink(url) {
            const page = this.getPage(url);
            if (page) {
                this.changePage(page);
            }
        },
        getPage(url) {
            if (!url) return null;
            let parsed = new URL(url);
            return parsed.searchParams.get('page');
        },
        goToLink(url) {
            const page = this.getPage(url);
            if (page) {
                this.changePage(page);
            }
        }
    },
    watch: {
        jumpToPage(val) {
            let vm = this;
            if (val >= 1) {
                vm.changePage(val);
            } else {
                vm.jumpToPage = 1;
            }
        }
    }
}
</script>

<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
