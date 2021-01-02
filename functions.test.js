const { sum, multiply, isNull, isFalsy, reversSTR, arrInPart } = require('./functions');




//*  Test the Positive toBe
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


//*  Test the Negative not.toBe
test('adds 2 + 2 to not equal to 3', () => {
    expect(sum(2, 2)).not.toBe(3);
});


//* Test the Positive #toBe
test('multiply 1 + 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});


//! CHECK FOR TRUTHY & FALSY VALUES
//? toBeNull matches only null

test('multiply 1 + 2 to equal 2', () => {
    expect(isNull()).toBeNull();
});


//? toBeUndefined matches only undefined
//? toBeDefined is the opposite of toBeUndefined
//? toBeTruthy matches anything that an if statement treats as true
//? toBeFalsy matches anything that an if statement treats as false

test('check Falsy', () => {
    expect(isFalsy(null)).toBeFalsy();
    expect(isFalsy(0)).toBeFalsy();
    expect(isFalsy(undefined)).toBeFalsy();
});



//! Working with async data

//* Async Await
// in this test I ave an fetch failure from the IPA
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await fetchUser();
//     console.log(data)
//     expect(data.name).toEqual('Leanne Graham');
// });

// !##############################################################################################

// *  Test to see if one function exists and work
// test only won test
// test.only(' reversSTR exists ?? and to work ', () => {
//     expect(reversSTR).toBeDefined;
//     expect(reversSTR('hello')).toEqual('olleh');
// });


test('ArrInPart exists ?? and to work ', () => {
    expect(arrInPart).toBeDefined;
    expect(arrInPart([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

