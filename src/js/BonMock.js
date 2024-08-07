import HttpMock from '@ocdla/lib-http/HttpMock.js';
import fsmChapter1 from '../data/books-online/fsm/chapter-1.html';

export default class BonMock extends HttpMock {
    constructor() {
        super();
    }

    getResponse(req) {
        return new Response(fsmChapter1, {
            headers: { 'Content-Type': 'text/html' }
        });
    }
}
