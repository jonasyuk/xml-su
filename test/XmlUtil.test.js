"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var XmlUtil_1 = __importDefault(require("../lib/XmlUtil"));
var ava_1 = __importDefault(require("ava"));
ava_1.default('parse xml function test', function (t) {
    XmlUtil_1.default.parseXml("test");
    t.pass();
});
