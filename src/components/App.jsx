/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view/view.js";

import Navbar from '@ocdla/global-components/src/components/Navbar';
import Breadcrumbs from '@ocdla/global-components/src/components/Breadcrumbs';
import Sidebar from '@ocdla/global-components/src/components/Sidebar';
// import Body from '@ocdla/global-components/src/components/Body';
import Footer from '@ocdla/global-components/src/components/Footer';





export default function App({ view, children, crumbs, sidebarFirstItems, sidebarSecondItems }) {

    return (
        <>
            <div class='group absolute right-0 m-4 flex gap-2 lg:left-0 lg:m-2'>
                <button
                    class='select-none whitespace-pre font-bold'
                    onclick={() => {
                        view.render("foo");
                    }}>
                </button>
            </div>
            <header class='flex flex-col lg:h-32'>
                <Navbar />
                <Breadcrumbs items={crumbs} separator='/' />
            </header>
            <div class='container mx-auto border-x'>
                <div class='lg:grid lg:grid-cols-6'>
                    <Sidebar items={sidebarFirstItems} />
                    <main class='flex w-full flex-col gap-4 p-4 lg:col-span-4 lg:col-start-2 lg:me-auto lg:border-x lg:p-8'>
                        {children}
                    </main>
                    <Sidebar items={sidebarSecondItems} />
                </div>
            </div>
            <Footer />
        </>
    );
}
