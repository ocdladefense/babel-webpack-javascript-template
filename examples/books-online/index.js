/** @jsx vNode */
import '../css/input.css';
import { vNode, View } from "@ocdla/view/view.js";
import App from '../components/App.jsx';

// Data
/* eslint-enable */
import breadcrumbs from './data/books-online/breadcrumbs/items.json';
import sidebarFirstItems from './data/books-online/sidebar_left/items.json';
import sidebarSecondItems from './data/books-online/sidebar_right/items.json';

console.log("Loaded index.js"); 


let root = View.createRoot("#app");

root.render(<App crumbs={breadcrumbs} sidebarFirstItems={sidebarFirstItems} sidebarSecondItems={sidebarSecondItems} />);


