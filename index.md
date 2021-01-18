# Pagetables - Server-Side Datatables for Vue without jQuery
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

**This package was designed to work perfectly with [Laravel Pagetables](https://github.com/savannabits/laravel-pagetables) while still giving you flexibility to do your own server-side implementation.**

![screenshot-pagetables](https://user-images.githubusercontent.com/5610289/104843772-63c7fe80-58dd-11eb-8278-85e4da669b81.png)
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
                    authorization: "Bearer token"
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
### Using Slots
You can choose how to render the table's body by using the `row` scoped slot. The exposed data (row) is a single record of the `payload` passed to the rows attributes of the datatable.
```js
<template>
  <div id="app" style="width: 100%">
    <pagetables table-classes="table table-fixed w-full"
    :rows="payload"
    :columns="payload.columns"
    @paginate="getArticles"
    @search="getArticles"
    >
      <template v-slot:row="{row}">
          <td class="p-1 border">{{ row.id }}</td>
          <td class="p-1 border">{{ row.slug }}</td>
          <td class="p-1 border">{{ row.name }}</td>
          <td class="p-1 text-right border">{{ row.weighted_cost }}</td>
          <td class="p-1 border">{{ row.item_group.name }}</td>
          <td class="p-1 text-right border"><button v-on:click="onEdit(row)" class="p-2 text-white rounded bg-primary">Edit</button></td>
      </template>
    </pagetables>
  </div>
</template>
```
### Slots
Slot    |scope variable|   Example     |   Description    |
----    |---|   --------    |   -------------  |
`default`|none|  `<template></template>` | The default table body: It allows you to override the `tbody` tag.|
`header` |none| `<template v-slot="header"></template>`| Overrides the table header `thead` tag|
`column` | column | `<template v-slot:column="column"></template>`|Allows you to define custom names for each of the titles|
`row`    | row      | `<template v-slot:row="row"></template>`| Allows you to define a custom way of rendering each cell of a raw using the normal `td` tags|
`footer` | none | `<template v-slot="footer"></template>`|Allows you to override `tfoot`|
`pagination` | none | `<template v-slot="pagination"></template>`| Allows you to define a custom pagination for the datatable|

### Table Props
Prop            | Purpose
----------------|----------------------------------|
columns     |   this is an array of objects, each specifying the properties of a column of the table. If you are using **[Laravel Pagetables](https://github.com/savannabits/laravel-pagetables)** then there is an option to return these column names each time the payload is fetched from the server. All you have to do is pass the columns object of the payload to this prop. However, if you would like to create the columns manually then take a look at the [Column Structure](#columns-structure) below.|
rows            | This is the main pagination payload that will be used for initial rendering. Again, if you are using Laravel **[Laravel Pagetables](https://github.com/savannabits/laravel-pagetables)** package or even the default Laravel pagination then all you have to do is to pass the json object of the LengthAwarePaginator object as passed from the server. If for some reaason you are not using laravel or would like to construct the object manually, take a look at the [Rows Structure](#rows-structure) below.|
table-classes | Custom css classes applied to the `<table>` tag.|
column-classes | Custom css classes applied to each `<th>` column tag in the header.|
row-classes | Custom css classes applied to each `tr` row tag of the body|
pagination-classes| Custom css classes applied to the pagination section of the table|


### Table Events
Event| Parameters | Description
-----|------------|-------------|
`@paginate`|[paginationParams](#pagination-parameters)|This is fired every time the pagination properties change (per_page, sort column, sort direction, current page etc.). The suitable action is to call the server with the params to fetch records according to the current params.|
`@search`|[paginationParams](#pagination-parameters)|This is fired when the Search Query of the table changes (debounced for 300ms). The event can call the same action as @paginate event above.|


### Columns Structure
Columns is an array of objects which specify how the table should render its columns. It defines, among others, whether the table should be searchable/sortable or not.
**Fields**
Field | Description
------|--------------
title | The title to display on the table header for that column|
name |The name of the field to render from the [rows object](#rows-structure). **NOTE: This also supports nested relationships, e.g if a user has a role object, you can use `role.name`**|
raw | Whether the column is raw (should be manually rendered and NOT fetched from the server) or not|
sortable|Whether the payload can and should be orderable by this column or not.|
sort_key|The key used when ordering by this column.  **This supports nested relations to the first level, e.g `role.name`**|
sort_direction|The default sort direction for this column. It can either be `asc` or `desc`|
searchable| Defines whether the payload can be searched by this column or not.|
search_key| The name that should be used when searching on the serverside by this column.  **This supports nested relations to the first level, e.g `role.name`**

**Example**
```json
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
            ];
```
### Rows Structure
The rows object is basically a standard [Laravel Pagination](https://laravel.com/docs/8.x/pagination#converting-results-to-json) object, with links that will be used for rendering pagination at the footer. The structure of the object is as follows:
```json
    {
        "current_page": 1,
        "data": [
            {
                ...
            },
            {
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
            ...
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
    }
```
If you are using  **[Laravel Pagetables](https://github.com/savannabits/laravel-pagetables)** you can optionally choose to return a [Columns Array](#columns-structure) as part of the parameters of the rows object.

### Pagination Parameters
In order to enable the server perform table actions such as searching, ordering and pagination, the Pagetables component emits the [`@search` and `@paginate` events](#table-events) with a parameters object with the following format:

```json
{
    "page": 1,
    "from": 1,
    "to": 15,
    "per_page": 15,
    "sort": "name",
    "sort_direction": "desc",
    "total": 1884,
    ...
}
```
You can pass these as parameters to the server and handle them manually on the server side for searching, sorting and pagination. However, the **[Laravel Pagetables Package](https://github.com/savannabits/laravel-pagetables)** does all this for you out of the box. All you have to do is pass the parameters as they are and Laravel Pagetables will handle the rest.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [Sam Arossi Maosa](https://github.com/coolsam726)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
