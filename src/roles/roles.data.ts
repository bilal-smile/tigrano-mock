export function getRoles() {
  return [
    {
      "name": "Admin-trigano",
      "category": "TRIGANO",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.display",
          "role": "all"
        },
        {
          "name": "profile.user.create",
          "role": "all"
        },
        {
          "name": "profile.user.update",
          "role": "all"
        },
        {
          "name": "profile.user.delete",
          "role": "all"
        },
        {
          "name": "profile.infodealer.display",
          "role": "all"
        },
        {
          "name": "profile.infodealer.update",
          "role": "all"
        },
        {
          "name": "vehicule.search.display",
          "role": "all"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "all_default"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "all"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "all"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "all"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "all"
        },
        {
          "name": "vehicule.order.create",
          "role": "no"
        },
        {
          "name": "vehicule.order.update",
          "role": "no"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "all"
        },
        {
          "name": "myorders.export",
          "role": "all"
        },
        {
          "name": "myorders.lots",
          "role": "all"
        },
        {
          "name": "followdealer.account.display",
          "role": "all"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "all"
        },
        {
          "name": "followdealer.coc.request",
          "role": "all"
        },
        {
          "name": "followdealer.coc.display",
          "role": "all"
        },
        {
          "name": "stock.display",
          "role": "all"
        },
        {
          "name": "stock.add",
          "role": "all"
        },
        {
          "name": "stockExchange.create",
          "role": "all"
        },
        {
          "name": "stockExchange.display",
          "role": "all"
        }
      ]

    },
    {
      "name": "Agent",
      "category": "TRIGANO",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.create",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.update",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.delete",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.search.display",
          "role": "brand"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "brand(default)"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "brand"
        },
        {
          "name": "vehicule.order.create",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.export",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.lots",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.add",
          "role": "dealer_for_brand"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer_for_brand"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer_for_brand"
        }
      ]
    },
    {
      "name": "Agent-Limité",
      "category": "TRIGANO",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.search.display",
          "role": "brand"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "brand"
        },
        {
          "name": "vehicule.order.create",
          "role": "no"
        },
        {
          "name": "vehicule.order.update",
          "role": "no"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.export",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.lots",
          "role": "no"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.add",
          "role": "dealer_for_brand"
        },
        {
          "name": "stockExchange.create",
          "role": "no"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer_for_brand"
        }
      ]
    },
    {
      "name": "User-trigano",
      "category": "TRIGANO",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.user.display",
          "role": "dealer"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer_for_brand"
        },
        {
          "name": "vehicule.search.display",
          "role": "brand"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "brand(default)"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "brand"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "brand"
        },
        {
          "name": "vehicule.order.create",
          "role": "no"
        },
        {
          "name": "vehicule.order.update",
          "role": "no"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.export",
          "role": "dealer_for_brand"
        },
        {
          "name": "myorders.lots",
          "role": "no"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer_for_brand"
        },
        {
          "name": "followdealer.coc.request",
          "role": "non"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.display",
          "role": "dealer_for_brand"
        },
        {
          "name": "stock.add",
          "role": "no"
        },
        {
          "name": "stockExchange.create",
          "role": "no"
        },
        {
          "name": "stockExchange.display",
          "role": "brand"
        }
      ]
    },
    {
      "name": "Dealer",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "dealer"
        },
        {
          "name": "profile.user.create",
          "role": "dealer"
        },
        {
          "name": "profile.user.update",
          "role": "dealer"
        },
        {
          "name": "profile.user.delete",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    },
    {
      "name": "Manager_ADV",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "no"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    },
    {
      "name": "ADV",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "no"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.display",
          "role": "no"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "no"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    },
    {
      "name": "Manager_commercial",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "non"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "customer"
        },
        {
          "name": "vehicule.order.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.display",
          "role": "no"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "no"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    },
    {
      "name": "Commercial",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "no"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "customer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "customer"
        },
        {
          "name": "vehicule.order.create",
          "role": "workflow_order"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "no"
        },
        {
          "name": "followdealer.account.display",
          "role": "no"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "no"
        },
        {
          "name": "followdealer.coc.request",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.display",
          "role": "dealer"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    },
    {
      "name": "DAF",
      "category": "DEALER",
      "description": "Description du rôle",
      "permissions": [
        {
          "name": "dashboard",
          "role": "dealer"
        },
        {
          "name": "profile.user.display",
          "role": "no"
        },
        {
          "name": "profile.user.create",
          "role": "no"
        },
        {
          "name": "profile.user.update",
          "role": "no"
        },
        {
          "name": "profile.user.delete",
          "role": "no"
        },
        {
          "name": "profile.infodealer.display",
          "role": "dealer"
        },
        {
          "name": "profile.infodealer.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.search.subscribe",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.display",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.create",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.configuration.delete",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.create",
          "role": "workflow_order"
        },
        {
          "name": "vehicule.order.update",
          "role": "dealer"
        },
        {
          "name": "vehicule.order.delete",
          "role": "no"
        },
        {
          "name": "myorders.display",
          "role": "dealer"
        },
        {
          "name": "myorders.export",
          "role": "dealer"
        },
        {
          "name": "myorders.lots",
          "role": "no"
        },
        {
          "name": "followdealer.account.display",
          "role": "dealer"
        },
        {
          "name": "followdealer.account.exportxls",
          "role": "dealer"
        },
        {
          "name": "followdealer.coc.request",
          "role": "no"
        },
        {
          "name": "followdealer.coc.display",
          "role": "no"
        },
        {
          "name": "stock.display",
          "role": "dealer"
        },
        {
          "name": "stock.add",
          "role": "dealer"
        },
        {
          "name": "stockExchange.create",
          "role": "dealer"
        },
        {
          "name": "stockExchange.display",
          "role": "dealer"
        }
      ]
    }
  ]
}