const labFunctions = require('./functions')

test('returnTwo test', () => {
    expect(labFunctions.returnTwo()).toBe(2)
})

test('greeting test', () => {
    expect(labFunctions.greeting('Tom Bombadil')).toBe(`Hello, Tom Bombadil`)
})

test('add test', () => {
    expect(labFunctions.add(7,6)).toBe(13)
})