/** @jsx vNode */
import '../css/input.css';
import { vNode, View } from '@ocdla/view/view.js';
import App from '../components/App.jsx';

// Data
/* eslint-enable */
import Url from '@ocdla/lib-http/Url.js';
import HttpClient from '@ocdla/lib-http/HttpClient.js';
import OrsChapter from '@ocdla/ors/src/OrsChapter.js';
import breadcrumbs from '../data/ors-viewer/breadcrumbs/items.json';
import sidebarFirstItems from '../data/ors-viewer/sidebar_left/items.json';
import sidebarSecondItems from '../data/ors-viewer/sidebar_right/items.json';

// Mock data
import Chapter from '../data/ors-viewer/chapters/chapter-1.jsx';
import BonMock from './BonMock.js';

if (USE_MOCK_BON) {
    HttpClient.register('https://pubs.ocdla.org', new BonMock());
}

window.HttpClient = HttpClient;

// An HTTP fragment, also known as a URI fragment, is a string of characters in a URL that identifies a specific location within a resource. The fragment identifier introduced by a hash mark (#) is the optional last part of a URL for a document. It is typically used to identify a portion of that document. The generic syntax is specified in RFC 3986. The hash mark separator in URIs does not belong to the fragment identifier.
let url = new Url('https://appdev.ocdla.org/books-online/index.php');

url.buildQuery('chapter', '1');

let req = new Request(url.toString());
let client = new HttpClient();
let resp = await client.send(req);
let msword = await OrsChapter.fromResponse(resp);

msword.chapterNum = 1;

let xml = OrsChapter.toStructuredChapter(msword);

/*
    Inspect the available properties for use in building section outline (left nav) and content.
    section outline (left nav) is listed in sectionTitles property.
    xml.doc contains the entire document.
    xml.toString() will return the entire document as an HTML string for use with innerHTML.
*/

console.log(xml);
console.log(xml.doc);

console.log('Loaded index.js');

let root = View.createRoot('#app');
root.render(
    <App
        crumbs={breadcrumbs}
        sidebarFirstItems={sidebarFirstItems}
        sidebarSecondItems={sidebarSecondItems}>
        <Chapter />
    </App>
);
