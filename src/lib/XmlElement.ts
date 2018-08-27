interface IXmlElement {
    rootElement?: IXmlElement;
    nextElement?: IXmlElement;
    parentElement?: IXmlElement;
    childElements?: IXmlElement[];
    prefixBlankStr?: string;
    suffixBlankStr?: string;
    contentPrefixBlankStr?: string;
    contentSuffixBlankStr?: string;
    startNodeStr?: string;
    endNodeStr?: string;
    name?: string;
    content: string;

    getElementValue(): string;

    getElementString(): string;

    setContent(content: string): void;

    isLeafNode(): boolean;
}


class XmlElement implements IXmlElement {
    rootElement?: IXmlElement;
    nextElement?: IXmlElement;
    parentElement?: IXmlElement;
    childElements?: IXmlElement[];
    prefixBlankStr?: string;
    suffixBlankStr?: string;
    contentPrefixBlankStr?: string;
    contentSuffixBlankStr?: string;
    startNodeStr?: string;
    endNodeStr?: string;
    name?: string;
    content: string;

    constructor(element: IXmlElement) {
        this.rootElement = element.rootElement;
        this.nextElement = element.nextElement;
        this.parentElement = element.parentElement;
        this.childElements = element.childElements || []
        this.prefixBlankStr = element.prefixBlankStr || '';
        this.suffixBlankStr = element.suffixBlankStr || '';
        this.contentPrefixBlankStr = element.contentPrefixBlankStr || '';
        this.contentSuffixBlankStr = element.contentSuffixBlankStr || '';
        this.startNodeStr = element.startNodeStr || '';
        this.endNodeStr = element.endNodeStr || '';
        this.content = element.content || '';
        this.name = element.name || '';
    }

    isLeafNode(): boolean {
        return this.childElements.length === 0
    }

    /**
     *  get element string, just support the leaf node
     *
     * */
    getElementString(): string {
        return `${this.prefixBlankStr}${this.startNodeStr}${this.contentPrefixBlankStr}${this.content}${this.contentSuffixBlankStr}${this.endNodeStr}${this.suffixBlankStr}`
    }

    /**
     *  set element value, just support the leaf node
     *
     * */
    setContent(content: string): void {
        this.content = content;
    }

    /**
     *  get element value, just support the leaf node
     *
     * */
    getElementValue(): string {
        return this.content;
    }
}

export default XmlElement



