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

            <main class="container mx-auto p-4 pb-16 lg:p-8 lg:pb-32">
                <ContentRegion cols="1">
                    <p>
                        Welcome to Waldbusser Ciderworks, where the art of
                        traditional cider making meets modern, transparent
                        practices. Nestled in the heart of Oregon, we specialize
                        in crafting exceptional ciders through a meticulous slow
                        fermentation process that captures the essence of the
                        apples we use.
                    </p>
                </ContentRegion>
                <ContentRegion cols="3">
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                    <img
                        src="../images/sample.png"
                        width="406"
                        height="281"
                    />
                </ContentRegion>

                <ContentRegion cols="1">
                    <h3 class="text-wb-red text-lg">OUR PHILOSOPHY</h3>
                    <p>
                        At Waldbusser Ciderworks we believe that great cider
                        starts with great ingredients. Our commitment to quality
                        begins with sourcing the finest apples from local
                        orchards. By partnering with growers who share our
                        passion for sustainability and excellence, we ensure
                        that every sip of our cider is a reflection of the rich,
                        fertile Oregon landscape.
                    </p>
                </ContentRegion>

                <ContentRegion cols="1">
                    <h3 class="text-wb-red text-lg">SLOW CIDER</h3>
                    <p>
                        Patience is at the core of our cider-making process.
                        Unlike mass-produced ciders that rush through
                        fermentation, we embrace a slow fermentation method that
                        allows the natural flavors and aromas of the apples to
                        develop fully. This careful approach results in ciders
                        that are complex, well-balanced, and brimming with
                        character.
                    </p>
                </ContentRegion>

                <ContentRegion cols="1">
                    <h3 class="text-wb-red text-lg">TRANSPARENCY</h3>
                    <p>
                        We take pride in our transparent production practices.
                        From apple to bottle, we invite you to see every step of
                        our process. Whether it's detailed information on our
                        apple varieties, or insights into our fermentation
                        techniques, we're dedicated to being open about how our
                        ciders are made. Transparency is not just a buzzword for
                        us; it's a commitment to our customers and a cornerstone
                        of our brand.
                    </p>
                </ContentRegion>

                <ContentRegion cols="1">
                    <h3 class="text-wb-red text-lg">OUR CIDERS</h3>
                    <p>
                        Each cider we produce tells a story. From crisp,
                        refreshing styles to rich, robust blends, our range
                        caters to all palates. Every bottle is a testament to
                        our dedication to craft, quality, and tradition. Explore
                        our collection and discover your new favorite cider.
                    </p>
                </ContentRegion>
                <ContentRegion cols="1">
                    <h3 class="text-wb-red text-lg">JOIN OUR COMMUNITY</h3>
                    <p>
                        Stay connected with us through our social media
                        channels. Be the first to know about new releases,
                        special events, and exclusive offers. Join our community
                        of cider enthusiasts and share in the journey of
                        crafting exceptional ciders. Thank you for choosing
                        Waldbusser Ciderworks. Cheers to slow cider!
                    </p>
                </ContentRegion>
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
