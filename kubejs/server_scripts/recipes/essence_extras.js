// Adds some extra uses for various Mystical Agriculture essences

onEvent('recipes', event => {
    // TinCon Heads
    event.shaped(
        Item.of('tconstruct:blaze_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:blaze_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:enderman_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:enderman_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:husk_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:zombie_essence',
            C: 'mysticalagriculture:fire_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:drowned_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:zombie_essence',
            C: 'mysticalagriculture:water_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:spider_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:spider_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:cave_spider_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:spider_essence',
            C: 'mysticalagriculture:deepslate_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:piglin_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:pig_essence',
            C: 'mysticalagriculture:gold_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:piglin_brute_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BCB',
            'CAC',
            'BCB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:pig_essence',
            C: 'mysticalagriculture:gold_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:zombified_piglin_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:pig_essence',
            C: 'mysticalagriculture:zombie_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:stray_head', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'CAC',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_skull',
            B: 'mysticalagriculture:skeleton_essence',
            C: 'mysticalagriculture:ice_essence'
        }
    )

    // Dragon Egg Extras
    event.shapeless(
        Item.of('minecraft:dragon_breath', 1),  // arg 1: output
        [  // arg 2: the array of inputs
            'minecraft:glass_bottle',
            'mysticalagriculture:dragon_egg_essence'
        ]
    )

    // TinCon Crystals
    event.shaped(
        Item.of('tconstruct:earth_slime_crystal', 16),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'BCB',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:amethyst_essence',
            B: 'mysticalagriculture:slime_essence',
            C: 'mysticalagriculture:earth_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:sky_slime_crystal', 16),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'BCB',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:amethyst_essence',
            B: 'mysticalagriculture:slime_essence',
            C: 'mysticalagriculture:air_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:ichor_slime_crystal', 16),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'BCB',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:amethyst_essence',
            B: 'mysticalagriculture:slime_essence',
            C: 'mysticalagriculture:nether_essence'
        }
    )
    event.shaped(
        Item.of('tconstruct:ender_slime_crystal', 16),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'BCB',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:amethyst_essence',
            B: 'mysticalagriculture:slime_essence',
            C: 'mysticalagriculture:end_essence'
        }
    )

    // Myalite (Quark)
    event.shaped(
        Item.of('quark:myalite', 24),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'B B',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:end_essence',
            B: 'mysticalagriculture:stone_essence'
        }
    )
    event.shaped(
        Item.of('quark:dusky_myalite', 24),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'B B',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:end_essence',
            B: 'mysticalagriculture:deepslate_essence'
        }
    )
    event.shaped(
        Item.of('quark:myalite_crystal', 24),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'B B',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:end_essence',
            B: 'mysticalagriculture:nether_quartz_essence'
        }
    )
})