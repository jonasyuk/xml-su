"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElement_1 = __importDefault(require("./XmlElement"));
var _ = __importStar(require("lodash"));
var parseXml = function (xmlStr, parentElement) {
    var element = new XmlElement_1.default({});
    if (_.isEmpty(xmlStr)) {
    }
    return element;
};
var xmlUtil = {
    parseXml: function (xml) {
        return parseXml(xml, null);
    },
    getElementBySelectorStr: function (selectorStr) {
        return new XmlElement_1.default({});
    },
    getElementBySelector: function (selector) {
        return new XmlElement_1.default({});
    },
    getElementString: function (xmlElement) {
        return null;
    }
};
exports.default = xmlUtil;
