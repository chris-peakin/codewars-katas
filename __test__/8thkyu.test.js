const {
    multiply
} = require('../src/8thkyu');

describe('multply', () =>{
    it('fixed tests', () =>{
        expect(multiply(2,3)).toEqual(6);
    })
})