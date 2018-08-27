import XmlElement from './XmlElement'
import XmlSelector from './XmlSelector'

interface XmlUtil {
    parseXml(xml:string):XmlElement;
    getElementBySelector(selectorStr:string):XmlElement;
    getElementBySelector(selector:XmlSelector):XmlElement;
    getElementString(xmlElement:XmlElement):string;
}

