// Adds some extra ways to use honey

onEvent('recipes', event => {
    // Directly drain honey essence (no bottles needed now)
    event.recipes.create.emptying(
        Fluid.of('create:honey', 250)
    ,
        'mysticalagriculture:honey_essence'
    )
})