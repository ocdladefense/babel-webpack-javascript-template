/** @jsx vNode */
import '../css/input.css';
import { vNode, View } from "@ocdla/view/view.js";
import App from '../components/App.jsx';

// Data
/* eslint-enable */
import Chapter from '../data/ors-viewer/chapters/chapter-1.jsx';
import breadcrumbs from '../data/ors-viewer/breadcrumbs/items.json';
import sidebarFirstItems from '../data/ors-viewer/sidebar_left/items.json';
import sidebarSecondItems from '../data/ors-viewer/sidebar_right/items.json';

console.log("Loaded index.js"); 


let root = View.createRoot("#app");
root.render(
    <App crumbs={breadcrumbs} sidebarFirstItems={sidebarFirstItems} sidebarSecondItems={sidebarSecondItems}>
        <Chapter />
    </App>
);
