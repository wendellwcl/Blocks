"use client";

// import Accordion from "@/components/Accordion/Accordion";
// import Button from "@/components/Button/Button";
// import CardH from "@/components/CardH/CardH";
// import CardV from "@/components/CardV/CardV";
// import Carousel from "@/components/Carousel/Carousel";
// import Checkbox from "@/components/Checkbox/Checkbox";
// import ContextMenu from "@/components/ContextMenu/ContextMenu";
// import Dialog, { toggleDialog } from "@/components/Dialog/Dialog";
// import Dropdown from "@/components/Dropdown/Dropdown";
// import HoverCard from "@/components/HoverCard/HoverCard";
// import Input from "@/components/Input/Input";
// import Navbar from "@/components/Navbar/Navbar";
// import Pagination from "@/components/Pagination/Pagination";
// import ProgressBar from "@/components/ProgressBar/ProgressBar";
// import ProgressCircle from "@/components/ProgressCircle/ProgressCircle";
// import RadioInput from "@/components/RadioInput/RadioInput";
// import ScrollArea from "@/components/ScrollArea/ScrollArea";
// import ScrollSpy from "@/components/ScrollSpy/ScrollSpy";
// import Select from "@/components/Select/Select";
// import SkeletonCard from "@/components/SkeletonCard/SkeletonCard";
// import SkeletonText from "@/components/SkeletonText/SkeletonText";
// import Slider from "@/components/Slider/Slider";
// import Tooltip from "@/components/Tooltip/Tooltip";
// import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
// import Spinner from "@/components/Spinner/Spinner";
// import Toast, { showToast } from "@/components/Toast/Toast";
// import Tabs from "@/components/Tabs/Tabs";
// import SpeedDial from "@/components/SpeedDial/SpeedDial";

export default function Home() {
    return (
        <>
            {/* <Navbar
                brand={{
                    brandImgPath: "https://fakeimg.pl/400x400/7834e5/EEEEF0?text=Image&font=bebas",
                    brandUrl: "/",
                }}
                navLinks={[
                    { text: "item1", url: "/" },
                    { text: "item2", url: "/" },
                    { text: "item3", url: "/" },
                ]}
            /> */}
            <div className="bg-theme_neutral text-theme_neutral-0 w-screen h-screen flex items-center justify-center p-8">
                {/* <Accordion
                    id="my-accordion"
                    title="Accordion"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                /> */}
                {/* <Button text="Button" onClick={() => alert("Hello World")} /> */}
                {/* <CardH
                    title="Card Title"
                    contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    imgSrc="https://fakeimg.pl/800x400/7834e5/EEEEF0?text=Image&font=bebas"
                    imgAlt="image alt text"
                /> */}
                {/* <CardV
                    title="Card Title"
                    contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                    imgSrc="https://fakeimg.pl/800x400/7834e5/EEEEF0?text=Image&font=bebas"
                    imgAlt="image alt text"
                /> */}
                {/* <Carousel>
                    <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image1&font=bebas" alt="" />
                    <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image2&font=bebas" alt="" />
                    <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image3&font=bebas" alt="" />
                </Carousel> */}
                {/* <Checkbox label="Checkbox" id="my-checkbox" name="checkbox" /> */}
                {/* <ContextMenu>
                <ul className="[&>*:not(:last-child)]:mb-4">
                    <li>
                        <a href="/">Context menu item 1</a>
                    </li>
                    <li>
                        <a href="/">Context menu item 2</a>
                    </li>
                    <li>
                        <a href="/">Context menu item 3</a>
                    </li>
                </ul>
                </ContextMenu> */}
                {/* <button onClick={() => toggleDialog("my-dialog")}>Open Dialog</button>
                    <Dialog id="my-dialog" title="Dialog">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur necessitatibus sequi
                        reiciendis consequuntur nulla quod! Accusantium a consectetur cum neque labore quod minima incidunt
                        unde. Perspiciatis est aliquid at.
                    </p>
                </Dialog> */}
                {/* <Dropdown title="teste">
                    <a href="/">Item 1</a>
                    <a href="/">Item 2</a>
                    <a href="/">Item 3</a>
                </Dropdown> */}
                {/* <HoverCard text="HoverCard">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere id veniam. Incidunt
                        nulla vitae maxime dolorem, repudiandae expedita iure deleniti dolores inventore excepturi.
                        Dignissimos a voluptatibus impedit libero consequatur!
                    </p>
                </HoverCard> */}
                {/* <Input id="my-input" label="Custom Input" placeholder="Type..." type="text" /> */}
                {/* <Pagination /> */}
                {/* <ProgressBar percentage={50} /> */}
                {/* <ProgressCircle size={100} percentage={50} /> */}
                {/* <RadioInput id="my-radio" label="Radio input" name="radio" /> */}
                {/* <div className="w-[400px] h-[240px]">
                    <ScrollArea>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                        officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                        voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus,
                        hic illum veritatis incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                        officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                        voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus,
                        hic illum veritatis incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati?
                    </ScrollArea>
                </div> */}
                {/* <div className="w-[400px] h-[240px]">
                    <ScrollSpy>
                        <div id="scrollspy-item-1" data-nav_text="Item 1" className="mb-4">
                            <span className="font-bold text-3xl">Item 1</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur
                                magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet
                                inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                            </p>
                        </div>
                        <div id="scrollspy-item-2" data-nav_text="Item 2" className="mb-4">
                            <span className="font-bold text-3xl">Item 2</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur
                                magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet
                                inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                            </p>
                        </div>
                        <div id="scrollspy-item-3" data-nav_text="Item 3">
                            <span className="font-bold text-3xl">Item 3</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur
                                magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet
                                inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                            </p>
                        </div>
                    </ScrollSpy>
                </div> */}
                {/* <Select id="my-select" name="my-select" options={["option 1", "option 2", "option 3"]} /> */}
                {/* <SkeletonCard /> */}
                {/* <SkeletonText /> */}
                {/* <Slider id="my-slider" name="my-slider" min={0} max={100} value={60} /> */}
                {/* <Tooltip id="my-tooltip" tip_text="This is a tooltip">
                    <p>Hover me</p>
                </Tooltip> */}
                {/* <ToggleSwitch onChange={() => console.log("Hello world")} defaultChecked /> */}
                {/* <Spinner size={80} /> */}
                {/* <button onClick={() => showToast("my-toast")}>Show toast</button>
                <Toast
                    id="my-toast"
                    title="Toast Title"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                /> */}
                {/* <Tabs>
                    <div id="tabs-1" data-header-text="Content 1">
                        <h6 className="text-5xl mb-4">Content 1</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam dolorum est
                            cupiditate tenetur. Perspiciatis deleniti asperiores dolorum voluptatum qui assumenda,
                            provident expedita quasi eum consequuntur, tempore, hic iste necessitatibus?
                        </p>
                    </div>
                    <div id="tabs-2" data-header-text="Content 2">
                        <h6 className="text-5xl mb-4">Content 2</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam dolorum est
                            cupiditate tenetur. Perspiciatis deleniti asperiores dolorum voluptatum qui assumenda,
                            provident expedita quasi eum consequuntur, tempore, hic iste necessitatibus?
                        </p>
                    </div>
                    <div id="tabs-3" data-header-text="Content 3">
                        <h6 className="text-5xl mb-4">Content 3</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam dolorum est
                            cupiditate tenetur. Perspiciatis deleniti asperiores dolorum voluptatum qui assumenda,
                            provident expedita quasi eum consequuntur, tempore, hic iste necessitatibus?
                        </p>
                    </div>
                </Tabs> */}
                {/* <SpeedDial /> */}
            </div>
        </>
    );
}
