/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import Navbar from "@ocdla/global-components/src/Navbar";
import ContentRegion from "@ocdla/global-components/src/ContentRegion";
import Legal from "@ocdla/global-components/src/Legal";
import Link from "@ocdla/global-components/src/Defaults";
import Sitemap from "@ocdla/global-components/src/Sitemap";
import SitemapCategory from "@ocdla/global-components/src/SitemapCategory";
import Social from "@ocdla/global-components/src/Social";
import Contacts from "@ocdla/global-components/src/Contacts";

export default function App({ headerPinned = false }) {
    // There is a component that can be used to render a nice 404 error.
    // return <NotFound />;

    return (
        <>
            <header
                class={`${headerPinned ? "sticky top-0" : ""}container bg-white mx-auto flex w-full flex-col lg:h-32`}>
                <Navbar />
            </header>

            <main>
                <section cols="1">
                    Some initial content and images here...
                </section>
                <section
                    cols="2"
                    width="25%,75%">
                    <div class="container mx-auto border-x">
                        <form>
                            <div class="space-y-12">
                                <div class="border-gray-900/10 border-b pb-12">
                                    <h2 class="text-gray-900 text-base font-semibold leading-7">
                                        Upload a file
                                    </h2>

                                    <p class="text-gray-600 mt-1 text-sm leading-6">
                                        This information will be displayed
                                        publicly so be careful what you share.
                                    </p>

                                    <input
                                        type="file"
                                        class="mt-6"
                                    />
                                </div>
                            </div>

                            <div class="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                    type="button"
                                    class="text-gray-900 text-sm font-semibold leading-6">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    class="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer class="text-wb-white container mx-auto border border-b-0 bg-wb-black p-4 pb-16 lg:p-8 lg:pb-32">
                {/* Resources */}
                <ul class="flex flex-col gap-4">
                    <li>
                        {/* Organization */}
                        <ul class="flex flex-col gap-4 lg:flex-row lg:gap-8">
                            <li>
                                <ul class="flex flex-col gap-1">
                                    {/* Social */}
                                    <li>
                                        <Social
                                            platforms="facebook, twitter, youtube"
                                            handles="OregonCriminalDefenseLawyersAssociation, oregondefense, oregoncriminaldefenselawye4822"
                                        />
                                    </li>
                                    {/* Copyright */}
                                    <li>
                                        <Legal
                                            year="2024"
                                            association="Oregon Criminal Defense
                                                Lawyers Association">
                                            Oregon Criminal Defense Lawyers
                                            Association is a 501(c)(3) nonprofit
                                            educational association.
                                            Contributions to OCDLA may be tax
                                            deductible - check with your tax
                                            advisor. Electronic downloads are
                                            for the sole use of the purchasing
                                            member. Files may not be distributed
                                            to others.
                                        </Legal>
                                    </li>
                                </ul>
                            </li>
                            {/* Contact */}
                            <li>
                                <Contacts
                                    hrefs="https://ocdla.org, https://maps.app.goo.gl/7dCYKBEyJbmo8tzS7, mailto:info@ocdla.org, tel:+15416868716"
                                    labels="ocdla.org, 101 East 14th Ave Eugene OR 97401, info@ocdla.org, (+1) 541-686-8716"
                                />
                            </li>
                        </ul>
                    </li>
                    <li class="size-full">
                        <Sitemap>
                            <SitemapCategory
                                title="SERVICES"
                                hrefs="/,/,/"
                                labels="Membership Directory, Expert Directory, Online store"
                                path="/"
                            />
                            <SitemapCategory
                                title="RESEARCH"
                                hrefs="/,/"
                                labels="Criminal Appellate Review, Criminal Legal Appellate Review"
                                path="/"
                            />
                            <SitemapCategory
                                title="RESOURCES"
                                hrefs="/"
                                labels="CLEs"
                                path="/"
                            />
                        </Sitemap>
                    </li>
                </ul>
            </footer>
        </>
    );
}
