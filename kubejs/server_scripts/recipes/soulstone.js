// Adds a way to craft soulstone (you still need to mine for soulium and prosperity shards)

onEvent('recipes', event => {
    event.shaped(
        Item.of('mysticalagriculture:soulstone', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'minecraft:stone',
            B: 'minecraft:soul_sand'
        }
    )
    event.shaped(
        Item.of('mysticalagriculture:soulstone_cobble', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'minecraft:cobblestone',
            B: 'minecraft:soul_sand'
        }
    )
    event.shaped(
        Item.of('mysticalagriculture:soulstone_smooth', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'BBB',
            'BAB',
            'BBB'
        ],
        {  // arg 3: the mapping object
            A: 'minecraft:smooth_stone',
            B: 'minecraft:soul_sand'
        }
    )
})