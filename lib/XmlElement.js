"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var XmlElement = /** @class */ (function () {
    function XmlElement(element) {
        this.prefixBlankStr = element.prefixBlankStr || '';
        this.suffixBlankStr = element.suffixBlankStr || '';
        this.contentPrefixBlankStr = element.contentPrefixBlankStr || '';
        this.contentSuffixBlankStr = element.contentSuffixBlankStr || '';
        this.startNodeStr = element.startNodeStr || '';
        this.endNodeStr = element.endNodeStr || '';
        this.content = element.content || '';
        this.name = element.name || '';
    }
    XmlElement.prototype.getChildElements = function () {
        return this.childElements;
    };
    XmlElement.prototype.setChildElements = function (childElements) {
        if (lodash_1.default.isArray(childElements)) {
            this.childElements = childElements;
        }
        else {
            this.childElements = [];
        }
    };
    XmlElement.prototype.setParentElement = function (parentElement) {
        this.parentElement = parentElement;
    };
    XmlElement.prototype.getParentElement = function () {
        return this.parentElement;
    };
    XmlElement.prototype.setRootElement = function (rootElement) {
        this.rootElement = rootElement;
    };
    XmlElement.prototype.getRootElement = function () {
        return this.rootElement;
    };
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
