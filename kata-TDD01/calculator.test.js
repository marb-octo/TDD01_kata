import { describe, it } from "node:test";
import assert from "node:assert";


export function calculateDistance(A, B) {
    return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2));
}

describe (`when null coordinate is given`, () => {
    it(`should return 0`, () => {
        const result = calculateDistance({x: 0, y: 0}, {x:0, y:0});
        assert.equal(result, 0);
    })
})

describe (`when the 2 points have the same coordinate`, () => {
    it(`should return 0`, () => {
        // given
        const A = {x: 1, y: 2};
        const B = {x: 1, y: 2};

        // when
        const result = calculateDistance(A, B);

        // then
        assert.equal(result, 0);
    });
})

describe (`when the 2 points have the same x coordinate`, () => {
    it(`should return 1`, () => {
        // given
        const A = {x: 1, y: 1};
        const B = {x: 1, y: 2};

        // when
        const result = calculateDistance(A, B);

        // then
        assert.equal(result, 1);
    })
});

// list de nos tests à faire :
// test 1 : meme coordonnees
// test 2 : meme axe x
// test 3 : meme axe y
// test 4 : diagonale
// test 5 : 1 point en négatif