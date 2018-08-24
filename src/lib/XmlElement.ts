interface IXmlElement {
    rootElement?:IXmlElement
    nextElement?:IXmlElement
    parentElement?:IXmlElement
    prefixBlankStr?:string
    suffixBlankStr?:string
    contentPrefixBlankStr?:string
    contentSuffixBlankStr?:string
    startNodeStr?:string
    endNodeStr?:string
    name?:string
    content:string
    getElementValue():string
    getElementString():string
    setContent(content:string):void
}


class XmlElement implements IXmlElement{
    constructor(){}
    getElementValue(){
        return this.content
    }
    
}



