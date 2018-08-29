import xmlUtil from '../lib/XmlUtil'
import test from 'ava'

test('parse xml function test', t => {
    xmlUtil.parseXml("test")
    t.pass()
})