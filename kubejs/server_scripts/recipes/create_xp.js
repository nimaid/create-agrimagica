// Tweaks and expands recipes for Create XP conversion and creation

onEvent('recipes', event => {
    // Make Experience Rotor reusable (not consumed)
    event.remove({
        input: 'create_enchantment_industry:experience_rotor'
    })
    // Make Experience Rotor reusable (not consumed)
    event.recipes.create.mixing(
    [
        Fluid.of('create_enchantment_industry:experience', 10),
        'create_enchantment_industry:experience_rotor'
    ],[
        'create_enchantment_industry:experience_rotor',
        Fluid.of('sophisticatedcore:xp_still', 200)
    ])
    event.recipes.create.mixing(
    [
        Fluid.of('create_enchantment_industry:experience', 10),
        'create_enchantment_industry:experience_rotor'
    ],[
        'create_enchantment_industry:experience_rotor',
        Fluid.of('sophisticatedcore:xp_still', 200)
    ])
    event.recipes.create.mixing(
    [
        Fluid.of('create_enchantment_industry:experience', 10),
        'create_enchantment_industry:experience_rotor'
    ],[
        'create_enchantment_industry:experience_rotor',
        Fluid.of('mob_grinding_utils:fluid_xp', 200)
    ])
    // Add missing recipes
    event.recipes.create.mixing(
    [
        Fluid.of('create_enchantment_industry:experience', 10),
        'create_enchantment_industry:experience_rotor'
    ],[
        'create_enchantment_industry:experience_rotor',
        Fluid.of('experienceobelisk:cognitium', 200)
    ])
})