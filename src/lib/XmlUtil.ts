import XmlElement from './XmlElement';
import XmlSelector from './XmlSelector';
import {logger} from './Logger';
import * as _ from 'lodash';

interface XmlUtil {
    parseXml(xml: string): XmlElement;

    getElementBySelectorStr(selectorStr: string): XmlElement;

    getElementBySelector(selector: XmlSelector): XmlElement;

    getElementString(xmlElement: XmlElement): string;
}


const parseXml = (xmlStr: string, parentElement: XmlElement): XmlElement => {
    let element: XmlElement = new XmlElement({});
    if (_.isEmpty(xmlStr)) {

    }
    return element
}


let xmlUtil: XmlUtil = {
    parseXml(xml: string): XmlElement {
        return parseXml(xml, null);
    },
    getElementBySelectorStr(selectorStr: string): XmlElement{
        return new XmlElement({});
    },
    getElementBySelector(selector: XmlSelector): XmlElement{
        return new XmlElement({});
    },
    getElementString(xmlElement: XmlElement): string{
        return null
    }
};


export default xmlUtil





