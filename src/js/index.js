/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import "../css/input.css";
import HttpClient from "@ocdla/lib-http/HttpClient.js";
import LocalMock from "@local/publish/mock/LocalMock.js";
import App from "@local/publish/components/App.jsx";
import { download, markup, toPartial, getUserUploadedFile} from "@local/publish/src/main.js";




if (USE_MOCK) {
    HttpClient.register("https://pubs.ocdla.org", new LocalMock());
}




const $root = document.getElementById("app");
const root = View.createRoot($root);

root.render(<App />);



document.getElementById("upload-form").addEventListener("change",async e => {
    let form = new FormData(e.currentTarget);
    

    e.preventDefault();
    

    // let html = await getFileHTML(chapter);
    let html = await getUserUploadedFile();

    let out = await markup(html, form);

    if(!!form.get("updates-only")) {
        out = toPartial(out.documentElement.outerHTML, form);
    }


    let iframe = document.getElementById("source-doc");

    let newHtml = out.documentElement.outerHTML;

    
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(newHtml);
    iframe.contentWindow.document.close();
});



// Outline depth can be customized.
// Use a drop-down to specify how far to outline.
// Use a checkbox to indicate 
document.getElementById("upload-form").addEventListener("submit", async e => {

    let form = new FormData(e.target);
    e.preventDefault();

    let partial = false;
    // let html = await getFileHTML(chapter);
    let html = await getUserUploadedFile();

    let out = await markup(html, form);

    if(!!form.get("updates-only")) {
        out = toPartial(out.documentElement.outerHTML, form);
    }


    
    
    await download(out);
});

