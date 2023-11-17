// Adds a way to craft a blank palette (because JEI doesn't show the 3-plank and dye recipe

onEvent('recipes', event => {
    event.shaped(
        Item.of('xercapaint:item_palette', 1),  // arg 1: output
        [  // arg 2: the shape (array of strings)
            'AAA',
            'AAA'
        ],
        {  // arg 3: the mapping object
            A: '#minecraft:wooden_slabs'
        }
    )
})