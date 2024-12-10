import { describe, it } from "node:test";
import assert from "node:assert";


function fizzbuzz(numberList) {
    return numberList.map(number => {
        if (number % 3 === 0) {
            return 'fizz';
        }
        return number;
    })
}

describe (`when numberList contain only 1`, () => {
    it(`should return [1]`, () => {
        // given
        const numberList = [1];

        // when
        const result = fizzbuzz(numberList);

        // then
        assert.deepEqual(result, numberList);
    })
})

describe (`when numberList contain only multiple of 3`, () => {
    it(`should return [fizz]`, () => {
        // given
        const numberList = [3];

        // when
        const result = fizzbuzz(numberList);

        // then
        assert.deepEqual(result, ['fizz']);
    })
})

describe (`when numberList contain only multiple of 5`, () => {
    it(`should return [buzz]`, () => {
        // given
        const numberList = [5];

        // when
        const result = fizzbuzz(numberList);

        // then
        assert.deepEqual(result, ['buzz']);
    })
})

// liste tests
// passe une liste de [1] et doit retourner [1]
// passe une liste avec un mutiple de 3 doit retourner [fizz]
// passe une liste avec un mutiple de 5 doit retourner [buzz]
// passe une liste avec un mutiple de 15 doit retourner [fizzbuzz]
// passe une liste avec un mutiple de 3 et 5 doit retourner [fizz, buzz]
// passe une liste avec un mutiple de 3 et 5 et 15 doit retourner [fizz, buzz, fizzbuzz]