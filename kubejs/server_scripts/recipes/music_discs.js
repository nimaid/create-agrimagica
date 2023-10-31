// Adds missing crafting recipes for music discs

onEvent('recipes', event => {
    // Vanilla
    event.shaped(
        Item.of('minecraft:music_disc_otherside', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:creeper_essence',
            C: 'mysticalagriculture:skeleton_essence',
            D: 'minecraft:blue_dye'
        }
    )

    // The Twilight Forest
    event.shaped(
        Item.of('twilightforest:music_disc_radiance', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:yellow_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_steps', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:green_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_superstitious', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:purple_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_home', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:pink_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_motion', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:lime_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_thread', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:red_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_maker', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:magenta_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_findings', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:orange_dye'
        }
    )
    event.shaped(
        Item.of('twilightforest:music_disc_wayfarer', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:steeleaf_essence',
            C: 'mysticalagriculture:ironwood_essence',
            D: 'minecraft:light_blue_dye'
        }
    )

    // Quark
    event.shaped(
        Item.of('quark:music_disc_endermosh', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AB',
            'CD'
        ],
        {  // arg 3: the mapping object
            A: 'mysticalagriculture:blank_record',
            B: 'mysticalagriculture:end_essence',
            C: 'mysticalagriculture:enderman_essence',
            D: 'mysticalagriculture:diamond_essence'
        }
    )
})