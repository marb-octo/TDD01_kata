import { describe, it } from "node:test";
import assert from "node:assert";

const DIRECTIONS = {
    'N': 'N',
    'S': 'S',
    'E': 'E',
    'W': 'W',
}

class Rover {

    constructor({direction = 'N', xCoordinates = 0, yCoordinates = 0}) {
        this.xCoordinates = xCoordinates;
        this.yCoordinates = yCoordinates;
        this.direction = DIRECTIONS[direction] ?? DIRECTIONS.N;
    }

    receivedInstruction(instructions) {
        instructions.forEach(instruction => {
            if(instruction === 'f' && this.direction === 'N') {
                this.yCoordinates += 1;
            }
            if(instruction === 'f' && this.direction === 'S') {
                this.yCoordinates -= 1;
            }
            if(instruction === 'f' && this.direction === 'E') {
                this.xCoordinates += 1;
            }
            if(instruction === 'f' && this.direction === 'W') {
                this.xCoordinates -= 1;
            }
            if(instruction === 'b' && this.direction === 'N') {
                this.yCoordinates -= 1;
            }
            if(instruction === 'b' && this.direction === 'S') {
                this.yCoordinates += 1;
            }
        })
    }
}

describe("the rover have a position", () => {
    it("returns the default x position coordinate", () => {
        // given
        const rover = new Rover({});
        // when
        const result = rover.xCoordinates;
        // then
        assert.equal(result, 0)
    })
    it("returns the default y position coordinate", () => {
        // given
        const rover = new Rover({});
        // when
        const result = rover.yCoordinates;
        // then
        assert.equal(result, 0)
    })
    it("returns the given x position", () => {
        // given
        const initialXCoordinates = 1;
        const rover = new Rover({xCoordinates: initialXCoordinates});
        // when
        const result = rover.xCoordinates;
        // then
        assert.equal(result, 1);
    })
    it("returns the given y position", () => {
        // given
        const initialYCoordinates = 1;
        const rover = new Rover({yCoordinates: initialYCoordinates});
        // when
        const result = rover.yCoordinates;
        // then
        assert.equal(result, 1);
    })
})
describe("the rover have a direction", () => {
    it("returns his direction", () => {
        // given
        const rover = new Rover();
        // when
        const result = rover.direction;
        // then
        assert.deepEqual(result, 'N')
    })
})
describe("the rover have a south direction", () => {
    it("returns S", () => {
        // given
        const direction = 'S';
        const rover = new Rover(direction);
        // when
        const result = rover.direction;
        // then
        assert.deepEqual(result, 'S')
    })
})
describe("the rover is given a wrong direction", () => {
    it("returns the default value", () => {
        // given
        const direction = 'K';
        const rover = new Rover(direction);
        // when
        const result = rover.direction;
        // then
        assert.deepEqual(result, 'N')
    })
})

describe("when the rover received a forward command", () => {
    it("the rover go forward in North direction", () => {
        //given
        const rover = new Rover({});
        const forwardInstruction = ['f'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, 0);
        assert.equal(rover.yCoordinates, 1);
    })
    it("the rover go forward in South direction", () => {
        //given
        const rover = new Rover({direction: 'S'});
        const forwardInstruction = ['f'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, 0);
        assert.equal(rover.yCoordinates, -1);
    })
    it("the rover go forward in East direction", () => {
        //given
        const rover = new Rover({direction: 'E'});
        const forwardInstruction = ['f'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, 1);
        assert.equal(rover.yCoordinates, 0);
    })
    it("the rover go forward in West direction", () => {
        //given
        const rover = new Rover({direction: 'W'});
        const forwardInstruction = ['f'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, -1);
        assert.equal(rover.yCoordinates, 0);
    })
})

describe("when the rover received a backward command", () => {
    it("the rover go backward in North direction", () => {
        //given
        const rover = new Rover({});
        const forwardInstruction = ['b'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, 0);
        assert.equal(rover.yCoordinates, -1);
    })
    it("the rover go backward in South direction", () => {
        //given
        const rover = new Rover({direction: 'S'});
        const forwardInstruction = ['b'];
        //when
        rover.receivedInstruction(forwardInstruction);

        //then
        assert.equal(rover.xCoordinates, 0);
        assert.equal(rover.yCoordinates, 1);
    })
})
