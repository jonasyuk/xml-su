import _ from 'lodash'

interface IXmlElementModel {
    prefixBlankStr?: string;
    suffixBlankStr?: string;
    contentPrefixBlankStr?: string;
    contentSuffixBlankStr?: string;
    startNodeStr?: string;
    endNodeStr?: string;
    name?: string;
    content?: string;
}

interface IXmlElement extends IXmlElementModel {

    rootElement?: IXmlElement;
    parentElement?: IXmlElement;
    childElements?: IXmlElement[];

    setRootElement(rootElement: IXmlElement): void;

    getRootElement(): IXmlElement;

    setParentElement(parentElement: IXmlElement): void;

    getParentElement(): IXmlElement;

    getChildElements(): IXmlElement[];

    setChildElements(childElements: IXmlElement[]): void;

    getElementValue(): string;

    getElementString(): string;

    setContent(content: string): void;

    isLeafNode(): boolean;
}


class XmlElement implements IXmlElement {
    rootElement?: IXmlElement;
    parentElement?: IXmlElement;
    childElements?: IXmlElement[];
    prefixBlankStr?: string;
    suffixBlankStr?: string;
    contentPrefixBlankStr?: string;
    contentSuffixBlankStr?: string;
    startNodeStr?: string;
    endNodeStr?: string;
    name?: string;
    content?: string;

    constructor(element: IXmlElementModel) {
        this.prefixBlankStr = element.prefixBlankStr || '';
        this.suffixBlankStr = element.suffixBlankStr || '';
        this.contentPrefixBlankStr = element.contentPrefixBlankStr || '';
        this.contentSuffixBlankStr = element.contentSuffixBlankStr || '';
        this.startNodeStr = element.startNodeStr || '';
        this.endNodeStr = element.endNodeStr || '';
        this.content = element.content || '';
        this.name = element.name || '';
    }

    getChildElements(): IXmlElement[] {
        return this.childElements;
    }

    setChildElements(childElements: IXmlElement[]): void {
        if (_.isArray(childElements)) {
            this.childElements = childElements;
        } else {
            this.childElements = [];
        }
    }

    setParentElement(parentElement: IXmlElement): void {
        this.parentElement = parentElement;
    }

    getParentElement(): IXmlElement {
        return this.parentElement;
    }

    setRootElement(rootElement: IXmlElement): void {
        this.rootElement = rootElement;
    }

    getRootElement(): IXmlElement {
        return this.rootElement;
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



