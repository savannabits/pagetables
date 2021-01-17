<template>
    <div>
        <div class="flex justify-between mb-4">
            <select class="form-select" v-model="perPage">
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <input class="form-input" type="text" autofocus v-model="searchQuery">
        </div>
        <table v-if="pageObject" class="table" :class="tableClasses">
            <thead>
            <slot name="header">
                <tr>
                    <th v-for="col of columns" class="border-gray-100 border-2 bg-gray-50">
                        <div role="button" @click.prevent="sortBy(col.sort_key)" v-if="col.sortable" class="w-full text-left p-2 sort-by"
                             :class="{'sort-asc': pageObject.sort===col.sort_key && pageObject.sort_direction === 'asc', 'sort-desc': pageObject.sort===col.sort_key && pageObject.sort_direction === 'desc', 'sort-none': pageObject.sort !==col.sort_key}">
                            <slot name="column" v-bind:column="col">
                                {{ col.title }}
                            </slot>
                        </div>
                        <div class="p-2 w-full" v-else>
                            <slot name="column" v-bind:column="col">
                                {{ col.title }}
                            </slot>
                        </div>
                    </th>
                </tr>
            </slot>
            </thead>
            <tbody>
            <slot>
                <tr class="border-b py-4 hover:border-gray-100 hover:bg-gray-50" :class="rowClasses" v-for="(row,idx) of rows.data" :key="idx">
                    <slot name="row" v-bind:row="row">
                        <td class="py-2" v-for="col of columns">
                            {{ row[col.name] }}
                        </td>
                    </slot>
                </tr>
            </slot>
            </tbody>
        </table>
        <slot name="footer">
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <div class="p-2 m-2">Showing {{rows.from}} to {{rows.to}} of {{rows.total}} records</div>
                <slot name="pagination">
                    <pagination class="" :class="paginationClasses" :links="rows.links" @paginate="onPaginate"/>
                </slot>
            </div>
        </slot>
    </div>
</template>

<script>
import Pagination from "./pagination.vue";

export function debounce (fn, delay) {
    let timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        let args = arguments
        let that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}
export default {
    name: "Datatable",
    components: {Pagination},
    props: {
        tableClasses: {
            type: String,
            required: false,
            default: ''
        },
        rowClasses: {
            type: String,
            required: false,
            default: ''
        },

        paginationClasses: {
            type: String,
            required: false,
            default: ''
        },
        rows: {
            type: Object,
            required: false,
            default: () => {return {}},
        },
        columns: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    data() {
        return {
            searchQuery: "",
            perPage: 15,
            pageObject: {
                search: null,
                per_page: 15,
                sort: null,
                sort_direction: null,
                page: null,
            }
        }
    },
    methods: {
        onPaginate(page) {
            this.pageObject.page = page;
            let vm = this;
            this.$emit('paginate',vm.pageObject)
        },
        sortBy(name) {
            const vm = this;
            if (vm.pageObject.sort ===name) {
                vm.pageObject.sort_direction = vm.pageObject.sort_direction ==='asc' ? 'desc': 'asc';
            } else {
                vm.pageObject.sort = name;
                vm.pageObject.sort_direction = 'asc';
            }
            this.$emit('paginate',vm.pageObject)
        }
    },
    watch: {
        searchQuery: debounce(function(val){
            this.pageObject.search = val;
            this.pageObject.page = 1;
            let vm = this;
            this.$emit("search",vm.pageObject);
        }, 500),
        perPage: function(val) {
            this.pageObject.per_page = val;
            let vm = this;
            this.$emit('search', vm.pageObject)
        }
    }
}
</script>

<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    th div.sort-by {
        padding-right: 18px;
        position: relative;
    }
    div.sort-by:before,
    div.sort-by:after {
        border: 4px solid transparent;
        content: "";
        display: block;
        height: 0;
        right: 5px;
        top: 50%;
        position: absolute;
        width: 0;
    }
    div.sort-desc:before {
        border-bottom-color: #666;
        margin-top: -9px;
    }
    div.sort-asc:after {
        border-top-color: #666;
        margin-top: 1px;
    }
    div.sort-none:before {
        border-bottom-color: #666;
        margin-top: -9px;
    }
    div.sort-none:after {
        border-top-color: #666;
        margin-top: 1px;
    }
</style>
