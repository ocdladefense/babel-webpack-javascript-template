/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Header from "@ocdla/global-components/src/Header";
import Footer from "./components/Footer";
import routes from "./data/routes.js";
import Router from "@ocdla/lib-routing/src/Router.js";
import logo from "./images/logos/logo-header.svg";

let router = new Router();
router.setBasePath("/");
router.setDefaultPage("Home");
router.setNotFoundCallback("Home");
// router.setComponentPath("../../../../src/components/pages");
routes.forEach(route => {
    router.addRoute(route.path, route.callback);
});

// component = NotFound


// let Page = await router.getPage();
const [componentName] = router.match(
    window.location.pathname
);
let module = await import(`./components/pages/${componentName}`);
const Page = module.default;
let HeaderTwo;

if (["Home", ""].includes(router.getRoute())) {
    let h = await import("./components/HomeHeader");
    HeaderTwo = h.default;
}


console.log(Page, HeaderTwo);
let location = router.getLocation();

export default function App() {
    let items = [
        {
            url: "/",
            label: "home"
        },
        {
            url: "/ciders",
            label: "ciders"
        },
        {
            url: "/growers",
            label: "growers",
            hidden: true
        },
        {
            url: "/drink",
            label: "drink",
            hidden: false
        },
        {
            url: "/how-its-made",
            label: "how it's made",
            hidden: true
        },
        {
            url: "/about",
            label: "about",
            hidden: true
        },
        {
            url: "/contact",
            label: "contact us",
            hidden: true
        },
        {
            url: "/order-progress",
            label: "orders",
            hidden: true
        }
    ];

    return (
        <>
            <Header navItems={items} logo={logo} logoWidth="40" logoHeight="40" />
            {typeof HeaderTwo === "function" ? <HeaderTwo /> : <></>}
            <main class={`grow overflow-x-hidden font-default-paragraph ${location}`}>
                <i>No module provided.</i>
                <Page />
            </main>
            <Footer />
        </>
    );
}
