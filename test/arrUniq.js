describe("MD5 Process", function () {
    it("generate md5", function (done) {
        var a = function(){alert(1)};
        var b = function(){
            alert(1);
        }
        var arr = [NaN,2,NaN,1,2,1,3,[4,4,6,[1,1,8]],12,10,null,null,undefined,undefined,a,b,{'a':1,'b':1},{'a':1,'b':1}];

        arr.arrUniq();
    });
});