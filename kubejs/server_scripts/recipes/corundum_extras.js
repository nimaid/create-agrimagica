// Adds extra uses for Corundum from the Quark mod

onEvent('tags.items', (event) => {
    // Make custom tag for clusters
    event.add(
        'agrimagica:corundum_clusters',
        [
            'quark:red_corundum_cluster',
            'quark:orange_corundum_cluster',
            'quark:yellow_corundum_cluster',
            'quark:green_corundum_cluster',
            'quark:blue_corundum_cluster',
            'quark:indigo_corundum_cluster',
            'quark:violet_corundum_cluster',
            'quark:white_corundum_cluster',
            'quark:black_corundum_cluster'
        ]
    )
})

onEvent('recipes', event => {
    // Craft blocks from clusters
    event.shaped(
        Item.of('quark:red_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:red_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:orange_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:orange_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:yellow_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:yellow_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:green_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:green_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:blue_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:blue_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:indigo_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:indigo_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:violet_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:violet_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:white_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:white_corundum_cluster'
        }
    )
    event.shaped(
        Item.of('quark:black_corundum', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AA',
            'AA'
        ],
        {  // arg 3: the mapping object
            A: 'quark:black_corundum_cluster'
        }
    )
    
    // Add superheated color transformations
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:red_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:red_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:orange_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:orange_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:yellow_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:yellow_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:green_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:lime_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:blue_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:light_blue_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:indigo_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:blue_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:violet_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:magenta_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:white_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:white_dye'
    ]).superheated()
    event.recipes.create.mixing(
    [  // arg 1: output
        'quark:black_corundum_cluster'
    ],[  // arg 2: input
        '#agrimagica:corundum_clusters',
        Fluid.of('minecraft:water', 1000),
        'minecraft:redstone',
        'minecraft:black_dye'
    ]).superheated()
})