// Adds a way to farm Shulker Shells

onEvent('recipes', event => {
    // Because Mystical Agriculture adds Turtle Seeds, you can now make a factory for shulker shells
    event.recipes.create.haunting('minecraft:shulker_shell', Item.of('minecraft:turtle_helmet', '{Damage:0}'))
})