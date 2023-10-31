// Adds ways to craft spawn eggs for some entities that don't work with Mob Grinding Utils

onEvent('recipes', event => {
    // Starbuncle (Can't swab or use GM chicken feed)
    event.shapeless(
    Item.of('ars_nouveau:starbuncle_se', 1),  // arg 1: output
        [  // arg 2: the array of inputs
            '#forge:seeds',
            'ars_nouveau:starbuncle_shards',
            'mob_grinding_utils:fluid_xp_bucket',
            'minecraft:egg'
        ]
    )
})