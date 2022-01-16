const {
    multiply,
    monkeyCount
} = require('../src/8thkyu');

describe('multply', () =>{
    it('fixed tests', () =>{
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(-2, 3)).toEqual(-6);
        expect(multiply(-2, -3)).toEqual(6);
        expect(multiply(12500, 6000)).toEqual(75000000);
    });
    it('generic test', () =>{
        let a = jest.fn();
        let b = jest.fn();
        expect(multiply(a, b)).toEqual((a*b));
    });
});

describe("monkeyCount", () => {
    it("should work for fixed tests", () => {
        expect(monkeyCount(5)).toBe([1, 2, 3, 4, 5]);
        expect(monkeyCount(3)).toBe([1, 2, 3]);
        expect(monkeyCount(10)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]);
        expect(monkeyCount(20)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
    it("should work for random tests", () => {
        function solution(n) {
            let count = [];
            for (let i = 1; i <= n; i ++){
                count.push(i);
            }
            return count;
        }
        for (let i = 0; i < 100; i++){
            let randNum = (Math.random() * 100);
            expect(monkeyCount(randNum)).toBe(solution(randNum));
        };
    });
});