var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
    describe("rgb to hex conversion", function() {
        it("converts the basic colors", function() {
            var redhex = converter.rgbToHex(255,0,0);
            var greenHex = converter.rgbToHex(0,255,0);
            var blueHex = converter.rgbToHex(0,0,255);

            expect(redhex).to.equal('ff0000');
            expect(greenHex).to.equal('00ff00');
            expect(blueHex).to.equal('0000ff');
        });
    });

    describe("hex to rgb conversion", function() {
        it("converts the basic colors", function() {
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");

            console.log('red = ' + red);

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });

    describe("my stupid unit test", function() {
       it("just a stupid unit test", function() {
           var stupidVar = "can i do something stupid like this?";
           console.log(stupidVar);
       })
    });
});