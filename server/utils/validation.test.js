const expect = require('expect'); 

const {isRealString} = require('./validation'); 

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false); 
    });

    it('should allow string with non-spacve characters', () => {
        var res = isRealString('    Luis    '); 
        expect(res).toBe(true); 
    });
});