"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElement = /** @class */ (function () {
    function XmlElement(element) {
        this.rootElement = element.rootElement;
        this.nextElement = element.nextElement;
        this.parentElement = element.parentElement;
        this.childElements = element.childElements || [];
        this.prefixBlankStr = element.prefixBlankStr || '';
        this.suffixBlankStr = element.suffixBlankStr || '';
        this.contentPrefixBlankStr = element.contentPrefixBlankStr || '';
        this.contentSuffixBlankStr = element.contentSuffixBlankStr || '';
        this.startNodeStr = element.startNodeStr || '';
        this.endNodeStr = element.endNodeStr || '';
        this.content = element.content || '';
        this.name = element.name || '';
    }
    XmlElement.prototype.isLeafNode = function () {
        return this.childElements.length === 0;
    };
    /**
     *  get element string, just support the leaf node
     *
     * */
    XmlElement.prototype.getElementString = function () {
        return "" + this.prefixBlankStr + this.startNodeStr + this.contentPrefixBlankStr + this.content + this.contentSuffixBlankStr + this.endNodeStr + this.suffixBlankStr;
    };
    /**
     *  set element value, just support the leaf node
     *
     * */
    XmlElement.prototype.setContent = function (content) {
        this.content = content;
    };
    /**
     *  get element value, just support the leaf node
     *
     * */
    XmlElement.prototype.getElementValue = function () {
        return this.content;
    };
    return XmlElement;
}());
exports.default = XmlElement;
