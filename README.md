# Pagetables - Server-Side Datatables for Vue
Pagetables is a Flexible server-side datatables package for vue.js using Laravel's default pagination with tailwindcss default styling.
**In Summary:**
- Datatables with Zero boilerplate code for the rows and columns
- Realtime server side search (Works very well with Laravel)
- Realtime server side sorting (Works very well with Laravel)
- Select items per page - Works well with laravel
- By default, minimal tailwindcss styling is already available.
- Customize your styles using props
- Scoped slots to enable you customize how your rows will be rendered.
- Laravel-like Pagination
- Jump to any page of the paginated data at any point.

## Installation
```shell
npm install pagetables

//OR

yarn add pagetables

```

## Usage
The component works out of the box with a pagination object similar to the one returned by Laravel's LengthAwarePaginator contract, with an additional `columns` prop which accepts an array of columns

### Sample Payload
```js
export default {
    data() {
        return {
            "payload": {
                "current_page": 1,
                "data": [
                    {
                        "id": 2,
                        "slug": "3-tier-trolley",
                        "name": "3 Tier Trolley",
                        "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
                        "article_type_id": 2,
                        "item_group_id": 33,
                        "default_depot_id": 51,
                        "derived_unit_id": 22,
                        "last_purchase_price": 0,
                        "last_ordered_quantity": 0,
                        "last_order_time": null,
                        "lifespan_days": 1000,
                        "is_product": false,
                        "last_received_quantity": 0,
                        "last_receiving_price": 0,
                        "last_received_at": null,
                        "weighted_cost": 0,
                        "enabled": true,
                        "created_at": "2019-12-19 15:39:34",
                        "updated_at": "2020-08-31 20:41:19",
                        "is_consumable": 0,
                        "api_route": "https://server.test/api/articles",
                        "item_group": {
                            "id": 33,
                            "slug": "operating-supplies",
                            "name": "Operating Supplies",
                            "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
                            "enabled": true,
                            "major_group_id": 15,
                            "created_at": "2019-12-19 13:59:43",
                            "updated_at": "2020-08-31 20:41:18",
                            "api_route": "https://server.test/api/item-groups"
                        }
                    },
                    {
                        "id": 3,
                        ...
                    },
                    {
                        "id": 5,
                        ...
                    },
                    ...
                ],
                "first_page_url": "https://server.test/api/articles?page=1",
                "from": 1,
                "last_page": 126,
                "last_page_url": "https://server.test/api/articles?page=126",
                "links": [
                    {
                        "url": null,
                        "label": "&laquo; Previous",
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=1",
                        "label": 1,
                        "active": true
                    },
                    {
                        "url": "https://server.test/api/articles?page=2",
                        "label": 2,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=3",
                        "label": 3,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=4",
                        "label": 4,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=5",
                        "label": 5,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=6",
                        "label": 6,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=7",
                        "label": 7,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=8",
                        "label": 8,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=9",
                        "label": 9,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=10",
                        "label": 10,
                        "active": false
                    },
                    {
                        "url": null,
                        "label": "...",
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=125",
                        "label": 125,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=126",
                        "label": 126,
                        "active": false
                    },
                    {
                        "url": "https://server.test/api/articles?page=2",
                        "label": "Next &raquo;",
                        "active": false
                    }
                ],
                "next_page_url": "https://server.test/api/articles?page=2",
                "path": "https://server.test/api/articles",
                "per_page": "15",
                "prev_page_url": null,
                "to": 15,
                "total": 1884,
                "columns": [
                    {
                        "title": "ID",
                        "name": "id",
                        "raw": false,
                        "sortable": true,
                        "searchable": true,
                        "sort_key": "id",
                        "search_key": "id",
                        "sort_direction": "desc"
                    },
                    {
                        "title": "Slug",
                        "name": "slug",
                        "raw": false,
                        "sortable": true,
                        "searchable": true,
                        "sort_key": "slug",
                        "search_key": "slug",
                        "sort_direction": "asc"
                    },
                    {
                        "title": "Name",
                        "name": "name",
                        "raw": false,
                        "sortable": true,
                        "searchable": true,
                        "sort_key": "name",
                        "search_key": "name",
                        "sort_direction": "asc"
                    },
                    {
                        "title": "Weighted Cost",
                        "name": "weighted_cost",
                        "raw": false,
                        "sortable": true,
                        "searchable": true,
                        "sort_key": "weighted_cost",
                        "search_key": "weighted_cost",
                        "sort_direction": "asc"
                    },
                    {
                        "title": "Group",
                        "name": "itemGroup.name",
                        "raw": false,
                        "sortable": true,
                        "searchable": true,
                        "sort_key": "itemGroup.name",
                        "search_key": "itemGroup.name",
                        "sort_direction": "asc"
                    },
                    {
                        "title": "",
                        "name": "actions",
                        "raw": true,
                        "sortable": false,
                        "searchable": false,
                        "sort_key": "actions",
                        "search_key": "actions",
                        "sort_direction": "asc"
                    }
                ]
            }
        }
    },
}
```
### Minimal Configuration in vue
```js
<template>
    <pagetables table-classes="table table-fixed w-full"
        :rows="payload"
        :columns="payload.columns"
        @paginate="getArticles"
        @search="getArticles"
    />
</template>
<script>
    import Vue from 'vue';
    import { Pagetables } from 'pagetables';
    export default {
        components: {
            Pagetables,
        },
    methods: {
        getArticles(paginationParams) {
        const vm = this;
        Axios.get("https://server.test/api/articles",{
        params: paginationParams, headers:{
                    authorization: "Bearer t8dH5ossHP51guR0lJDuYx0HfqZcrTN32KxOzYWe"
                }
            }
        ).then(res => {
                vm.payload = res.data.payload;
            })
        }
    }
}
</script>
```