"use strict";
exports.__esModule = true;
var XmlSelector = /** @class */ (function () {
    function XmlSelector() {
    }
    return XmlSelector;
}());
var TestClass = /** @class */ (function () {
    function TestClass(field1, parent) {
        this.field1 = field1;
        this.parent = parent;
    }
    TestClass.prototype.print = function () {
        console.log(this.field1);
    };
    return TestClass;
}());
var firstTest = new TestClass('first', null);
var secondTest = new TestClass("second", firstTest);
secondTest.parent.print();
exports["default"] = XmlSelector;
