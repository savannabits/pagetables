<script>
import Vue from 'vue';
import { Pagetables } from '@/entry';
import styles from "@/assets/styles/index.module.css";
import Axios from "axios";
export default Vue.extend({
  name: 'ServeDev',
  components: {
    Pagetables,
  },
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
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 33,
              "slug": "operating-supplies",
              "name": "Operating Supplies",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 15,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 3,
            "slug": "34-ladies-shirt",
            "name": "3/4 Ladies Shirt",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
            "article_type_id": 3,
            "item_group_id": 44,
            "default_depot_id": 44,
            "derived_unit_id": 22,
            "last_purchase_price": 1508,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 1508,
            "last_received_at": null,
            "weighted_cost": 1508,
            "enabled": true,
            "created_at": "2019-12-19 15:39:34",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 44,
              "slug": "staff-uniforms",
              "name": "Staff Uniforms",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 14,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 5,
            "slug": "apple-pie-cafe-pa",
            "name": "APPLE PIE( CAFE) (PA)",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
            "article_type_id": 1,
            "item_group_id": 25,
            "default_depot_id": 44,
            "derived_unit_id": 22,
            "last_purchase_price": 39.37,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": true,
            "last_received_quantity": 0,
            "last_receiving_price": 39.37,
            "last_received_at": null,
            "weighted_cost": 39.37,
            "enabled": true,
            "created_at": "2019-12-19 15:39:34",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 25,
              "slug": "kitchen-pastry-recipes",
              "name": "Kitchen Pastry Recipes",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 9,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 6,
            "slug": "absolute-vodka-1litre",
            "name": "Absolute Vodka 1Litre",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
            "article_type_id": 1,
            "item_group_id": 42,
            "default_depot_id": 44,
            "derived_unit_id": 116,
            "last_purchase_price": 78.79,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 78.79,
            "last_received_at": null,
            "weighted_cost": 78.79,
            "enabled": true,
            "created_at": "2019-12-19 15:39:34",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 42,
              "slug": "spirits",
              "name": "Spirits",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 3,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 7,
            "slug": "absolute-vodka-750ml",
            "name": "Absolute Vodka 750ml",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
            "article_type_id": 1,
            "item_group_id": 42,
            "default_depot_id": 44,
            "derived_unit_id": 119,
            "last_purchase_price": 84.85,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 12,
            "last_receiving_price": 84.85,
            "last_received_at": "2020-09-19 10:36:39",
            "weighted_cost": 84.85,
            "enabled": true,
            "created_at": "2019-12-19 15:39:34",
            "updated_at": "2020-09-19 13:36:42",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 42,
              "slug": "spirits",
              "name": "Spirits",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 3,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 9,
            "slug": "air-port-flask-3lts",
            "name": "Air port Flask 3Lts",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:34",
            "article_type_id": 3,
            "item_group_id": 12,
            "default_depot_id": 50,
            "derived_unit_id": 22,
            "last_purchase_price": 3467.24,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 3467.24,
            "last_received_at": null,
            "weighted_cost": 3467.24,
            "enabled": true,
            "created_at": "2019-12-19 15:39:34",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 12,
              "slug": "crockery",
              "name": "Crockery",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 14,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 10,
            "slug": "airport-flask-35lts",
            "name": "Airport flask 3.5lts",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 3,
            "item_group_id": 12,
            "default_depot_id": 50,
            "derived_unit_id": 22,
            "last_purchase_price": 4044.92,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 4044.92,
            "last_received_at": null,
            "weighted_cost": 4044.92,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 12,
              "slug": "crockery",
              "name": "Crockery",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 14,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 11,
            "slug": "airport-flask-4lts",
            "name": "Airport flask 4lts",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 3,
            "item_group_id": 12,
            "default_depot_id": 50,
            "derived_unit_id": 22,
            "last_purchase_price": 0,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 0,
            "last_received_at": null,
            "weighted_cost": 0,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 12,
              "slug": "crockery",
              "name": "Crockery",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 14,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 13,
            "slug": "almond",
            "name": "Almond",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 14,
            "default_depot_id": 44,
            "derived_unit_id": 74,
            "last_purchase_price": 1500,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 1500,
            "last_received_at": null,
            "weighted_cost": 1500,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 14,
              "slug": "dry-goods",
              "name": "Dry Goods",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 6,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 14,
            "slug": "almond-flakes",
            "name": "Almond Flakes",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 14,
            "default_depot_id": 44,
            "derived_unit_id": 74,
            "last_purchase_price": 3500,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 3500,
            "last_received_at": null,
            "weighted_cost": 3500,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 14,
              "slug": "dry-goods",
              "name": "Dry Goods",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 6,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 15,
            "slug": "almond-ground",
            "name": "Almond Ground",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 14,
            "default_depot_id": 44,
            "derived_unit_id": 74,
            "last_purchase_price": 3700,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 7,
            "last_receiving_price": 3700,
            "last_received_at": "2020-09-19 10:34:06",
            "weighted_cost": 3700,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-09-19 13:34:08",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 14,
              "slug": "dry-goods",
              "name": "Dry Goods",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 6,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 17,
            "slug": "aluminum-foil",
            "name": "Aluminum Foil",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 14,
            "default_depot_id": 44,
            "derived_unit_id": 22,
            "last_purchase_price": 1300,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 24,
            "last_receiving_price": 3600,
            "last_received_at": "2020-09-19 10:34:06",
            "weighted_cost": 1300,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-09-19 13:34:08",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 14,
              "slug": "dry-goods",
              "name": "Dry Goods",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 6,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 19,
            "slug": "amarula",
            "name": "Amarula",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 42,
            "default_depot_id": 44,
            "derived_unit_id": 119,
            "last_purchase_price": 83.33,
            "last_ordered_quantity": 25,
            "last_order_time": "2020-01-14 10:20:42",
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 5,
            "last_receiving_price": 2600,
            "last_received_at": "2020-09-04 17:11:30",
            "weighted_cost": 83.33,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-09-04 20:11:30",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 42,
              "slug": "spirits",
              "name": "Spirits",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 3,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 20,
            "slug": "american-donut-pa",
            "name": "American Donut (PA)",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 1,
            "item_group_id": 25,
            "default_depot_id": 44,
            "derived_unit_id": 22,
            "last_purchase_price": 15.12,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": true,
            "last_received_quantity": 0,
            "last_receiving_price": 15.12,
            "last_received_at": null,
            "weighted_cost": 15.12,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 25,
              "slug": "kitchen-pastry-recipes",
              "name": "Kitchen Pastry Recipes",
              "description": "Assigned to Profit Contribution. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 9,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          },
          {
            "id": 22,
            "slug": "antiseptic-and-sanitizer",
            "name": "Antiseptic and Sanitizer",
            "description": "Imported from Micros by smaosa at 2019-12-19 15:39:35",
            "article_type_id": 3,
            "item_group_id": 9,
            "default_depot_id": 44,
            "derived_unit_id": 108,
            "last_purchase_price": 510,
            "last_ordered_quantity": 0,
            "last_order_time": null,
            "lifespan_days": 7,
            "is_product": false,
            "last_received_quantity": 0,
            "last_receiving_price": 510,
            "last_received_at": null,
            "weighted_cost": 510,
            "enabled": true,
            "created_at": "2019-12-19 15:39:35",
            "updated_at": "2020-08-31 20:41:19",
            "is_consumable": 0,
            "api_route": "https://cafemc.strathmore.edu/api/articles",
            "item_group": {
              "id": 9,
              "slug": "cleaning-supplies",
              "name": "Cleaning Supplies",
              "description": "Assigned to Expenses. Imported at 2019-12-19 13:59:43 by smaosa",
              "enabled": true,
              "major_group_id": 15,
              "created_at": "2019-12-19 13:59:43",
              "updated_at": "2020-08-31 20:41:18",
              "api_route": "https://cafemc.strathmore.edu/api/item-groups"
            }
          }
        ],
        "first_page_url": "https://cafemc.strathmore.edu/api/articles?page=1",
        "from": 1,
        "last_page": 126,
        "last_page_url": "https://cafemc.strathmore.edu/api/articles?page=126",
        "links": [
          {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=1",
            "label": 1,
            "active": true
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=2",
            "label": 2,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=3",
            "label": 3,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=4",
            "label": 4,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=5",
            "label": 5,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=6",
            "label": 6,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=7",
            "label": 7,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=8",
            "label": 8,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=9",
            "label": 9,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=10",
            "label": 10,
            "active": false
          },
          {
            "url": null,
            "label": "...",
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=125",
            "label": 125,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=126",
            "label": 126,
            "active": false
          },
          {
            "url": "https://cafemc.strathmore.edu/api/articles?page=2",
            "label": "Next &raquo;",
            "active": false
          }
        ],
        "next_page_url": "https://cafemc.strathmore.edu/api/articles?page=2",
        "path": "https://cafemc.strathmore.edu/api/articles",
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
  methods: {
    getArticles(paginationParams) {
      const vm = this;
      Axios.get("https://cafemc.strathmore.edu/api/articles",{
        params: paginationParams, headers:{
          authorization: "Bearer t8dH5ossHP51guR0lJDuYx0HfqZcrTN32KxOzYWe"
          }
        }
      ).then(res => {
        vm.payload = res.data.payload;
      })
    }
  }
});
</script>

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
          <td class="text-right p-1 border"><button v-on:click="onEdit(row)" class="bg-primary text-white p-2 rounded">Edit</button></td>
      </template>
    </pagetables>
  </div>
</template>
