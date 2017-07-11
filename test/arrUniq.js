const chai = require('chai')
const Processor = require('../src/arrUniq');
const expect = chai.expect

describe("Array Method", function () {
    it("Array Unique", function () {
        var a = function(){alert(1)};
        var b = function(){
            alert(1);
        }
        var arr = [NaN,2,NaN,1,2,1,3,[4,4,6,[1,1,8]],12,10,null,null,undefined,undefined,a,b,{'a':1,'b':1},{'a':1,'b':1}];
        expect(arr.arrUniq().length).to.equal(12);
    });
});