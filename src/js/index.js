/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import "../css/input.css";
import "@themes/active/css/theme.css";
import App from "../App.jsx";


if(MODULE_PATH)
await import(MODULE_PATH + "/src/index.js");


else {



    if (USE_MOCK) {}

    const $root = document.getElementById("root");
    const root = View.createRoot($root);
    root.render(<App />);


    let toggle = document.querySelector("#toggle-menu");
    let menu = document.querySelector("#mobile-menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("hidden");
        // menu.classList.toggle("flex");
    });


}
