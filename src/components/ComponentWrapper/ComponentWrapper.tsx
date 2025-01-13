"use client";

import { useEffect, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Button from "../Button/Button";
import CardH from "../CardH/CardH";
import CardV from "../CardV/CardV";
import Carousel from "../Carousel/Carousel";
import Checkbox from "../Checkbox/Checkbox";
import ComponentTabs from "../ComponentTabs/ComponentTabs";
import ContextMenu from "../ContextMenu/ContextMenu";
import Dialog, { toggleDialog } from "../Dialog/Dialog";
import Dropdown from "../Dropdown/Dropdown";
import HoverCard from "../HoverCard/HoverCard";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
import ProgressBar from "../ProgressBar/ProgressBar";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import RadioInput from "../RadioInput/RadioInput";
import ScrollArea from "../ScrollArea/ScrollArea";
import ScrollSpy from "../ScrollSpy/ScrollSpy";
import Select from "../Select/Select";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import SkeletonText from "../SkeletonText/SkeletonText";
import Slider from "../Slider/Slider";
import SpeedDial from "../SpeedDial/SpeedDial";
import Spinner from "../Spinner/Spinner";
import Tabs from "../Tabs/Tabs";
import Toast, { showToast } from "../Toast/Toast";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Tooltip from "../Tooltip/Tooltip";

export default function ComponentWrapper({ name }: { name: string }) {
    const [exempleCode, setExempleCode] = useState<string>("");
    const [structureCode, setStructureCode] = useState<string>("");
    const [styleCode, setStyleCode] = useState<string>("");
    const [tab, setTab] = useState<"exemple" | "structure" | "style">("exemple");

    useEffect(() => {
        async function fetchCodeExemples() {
            try {
                const exempleCodeRes = await fetch(`/txtFiles/${name}/exemple.txt`);
                const exempleCodeData = await exempleCodeRes.text();
                setExempleCode(exempleCodeData);

                const structureCodeRes = await fetch(`/txtFiles/${name}/structure.txt`);
                const structureCodeData = await structureCodeRes.text();
                setStructureCode(structureCodeData);

                const stylesCodeRes = await fetch(`/txtFiles/${name}/style.txt`);
                const stylesCodeData = await stylesCodeRes.text();
                setStyleCode(stylesCodeData);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                    return;
                }

                console.error("Unexpected error");
            }
        }

        fetchCodeExemples();
    }, [name]);

    type componentKeys = keyof typeof componentRender;

    const componentRender = {
        accordion: (
            <Accordion
                id="my-accordion"
                title="Accordion"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        ),
        button: <Button text="Button" onClick={() => alert("Hello World")} />,
        "card [Horizontal]": (
            <CardH
                title="Card Title"
                contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                imgSrc="https://fakeimg.pl/800x400/7834e5/EEEEF0?text=Image&font=bebas"
                imgAlt="image alt text"
            />
        ),
        "card [Vertical]": (
            <CardV
                title="Card Title"
                contentText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                imgSrc="https://fakeimg.pl/800x400/7834e5/EEEEF0?text=Image&font=bebas"
                imgAlt="image alt text"
            />
        ),
        carousel: (
            <Carousel>
                <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image1&font=bebas" alt="" />
                <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image2&font=bebas" alt="" />
                <img src="https://fakeimg.pl/1200x800/7834e5/EEEEF0?text=Image3&font=bebas" alt="" />
            </Carousel>
        ),
        checkbox: (
            <div className="flex flex-col gap-4">
                <Checkbox label="Checkbox" id="my-checkbox-1" name="checkbox-1" />
                <Checkbox label="Default checked" id="my-checkbox-2" name="checkbox-2" defaultChecked />
                <Checkbox label="Disabled" id="my-checkbox-3" name="checkbox-3" disabled />
            </div>
        ),
        "context menu": (
            <div className="w-full h-full flex items-center justify-center text-center border-2 border-dotted border-theme_brand-border">
                Clique com o botão direito aqui.
                <ContextMenu>
                    <ul className="[&>li]:px-4 [&>li]:py-2 [&>li:hover]:bg-theme_brand-hover [&>li]:transition">
                        <li>
                            <a href="#">Item 1</a>
                        </li>
                        <li>
                            <a href="#">Item 2</a>
                        </li>
                        <li>
                            <a href="#">Item 3</a>
                        </li>
                    </ul>
                </ContextMenu>
            </div>
        ),
        dialog: (
            <div>
                <button
                    onClick={() => toggleDialog("my-dialog")}
                    className="bg-theme_brand px-4 py-2 rounded transition hover:bg-theme_brand-hover"
                >
                    CLique para exibir
                </button>
                <Dialog id="my-dialog" title="Dialog" actionFunction={() => alert("Hello World")}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam deleniti facere veniam quas
                        eaque. A maxime quaerat sunt vel libero, corrupti qui velit, ab laboriosam suscipit, beatae
                        natus itaque perspiciatis?
                    </p>
                </Dialog>
            </div>
        ),
        dropdown: (
            <Dropdown title="Clique para exibir">
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
            </Dropdown>
        ),
        "hover card": (
            <HoverCard text="Passe o mouse">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere id veniam. Incidunt
                    nulla vitae maxime dolorem, repudiandae expedita iure deleniti dolores inventore excepturi.
                    Dignissimos a voluptatibus impedit libero consequatur!
                </p>
            </HoverCard>
        ),
        input: <Input id="my-input" label="Digite..." type="text" />,
        navbar: (
            <Navbar
                brand={{
                    brandImgPath: "./assets/logo.svg",
                    brandUrl: "#",
                }}
                navLinks={[
                    { text: "item1", url: "#" },
                    { text: "item2", url: "#" },
                    { text: "item3", url: "#" },
                ]}
            />
        ),
        pagination: <Pagination />,
        "progress bar": <ProgressBar percentage={50} />,
        "progress circle": <ProgressCircle size={100} percentage={50} />,
        "radio input": (
            <div className="flex flex-col gap-4">
                <RadioInput id="my-radio" label="Radio" name="radio" />
                <RadioInput id="my-radio-2" label="Default checked" name="radio" defaultChecked />
                <RadioInput id="my-radio-3" label="disabled" name="radio" disabled />
            </div>
        ),
        "scroll area": (
            <div className="w-96 h-96 bg-theme_neutral-800 rounded">
                <ScrollArea>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis
                    eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem
                    tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis
                    incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos
                    ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem tempora facere consequatur
                    obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                    officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                    voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum
                    veritatis incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe
                    labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem tempora facere
                    consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam
                    aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet
                    inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic
                    illum veritatis incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati?
                </ScrollArea>
            </div>
        ),
        "scroll spy": (
            <div className="w-full h-96 bg-theme_neutral-800 rounded">
                <ScrollSpy>
                    <div id="scrollspy-item-1" data-nav_text="Item 1" className="mb-4">
                        <span className="font-bold text-3xl">Item 1</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                            officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                            voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad
                            doloribus, hic illum veritatis incidunt eveniet inventore voluptatem tempora facere
                            consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                            aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis
                            incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis eos
                            saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem
                            tempora facere consequatur obcaecati?
                        </p>
                    </div>
                    <div id="scrollspy-item-2" data-nav_text="Item 2" className="mb-4">
                        <span className="font-bold text-3xl">Item 2</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                            officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                            voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad
                            doloribus, hic illum veritatis incidunt eveniet inventore voluptatem tempora facere
                            consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                            aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis
                            incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis eos
                            saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem
                            tempora facere consequatur obcaecati?
                        </p>
                    </div>
                    <div id="scrollspy-item-3" data-nav_text="Item 3">
                        <span className="font-bold text-3xl">Item 3</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni
                            officiis eos saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore
                            voluptatem tempora facere consequatur obcaecati? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dolorem aliquam aspernatur magni officiis eos saepe labore, quos ad
                            doloribus, hic illum veritatis incidunt eveniet inventore voluptatem tempora facere
                            consequatur obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                            aliquam aspernatur magni officiis eos saepe labore, quos ad doloribus, hic illum veritatis
                            incidunt eveniet inventore voluptatem tempora facere consequatur obcaecati? Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Dolorem aliquam aspernatur magni officiis eos
                            saepe labore, quos ad doloribus, hic illum veritatis incidunt eveniet inventore voluptatem
                            tempora facere consequatur obcaecati?
                        </p>
                    </div>
                </ScrollSpy>
            </div>
        ),
        select: <Select id="my-select" name="my-select" options={["item 1", "item 2", "item 3"]} />,
        "skeleton card": <SkeletonCard />,
        "skeleton text": <SkeletonText />,
        slider: <Slider id="my-slider" name="my-slider" min={0} max={100} value={60} />,
        "speed dial": <SpeedDial />,
        spinner: <Spinner size={80} />,
        tabs: (
            <div className="w-full h-96">
                <Tabs>
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
                </Tabs>
            </div>
        ),
        toast: (
            <div>
                <button
                    onClick={() => showToast("my-toast")}
                    className="px-4 py-2 bg-theme_brand rounded transition hover:bg-theme_brand-hover"
                >
                    Clique para exibir
                </button>
                <Toast
                    id="my-toast"
                    title="Toast Title"
                    message="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
            </div>
        ),
        "toggle switch": <ToggleSwitch onChange={() => console.log("Hello world")} defaultChecked />,
        tooltip: (
            <Tooltip id="my-tooltip" tip_text="Este é um tooltip">
                <p className="px-4 py-2 bg-theme_brand rounded transition hover:bg-theme_brand-hover">Passe o mouse</p>
            </Tooltip>
        ),
    };

    return (
        <div className="container">
            <div className="w-full  flex flex-col">
                <div className="px-4 py-1 rounded-t bg-theme_neutral-600">&lt;{name} /&gt;</div>

                <div className="w-full h-[400px] p-16 md:px-32 flex-none flex items-center justify-center border-2 border-theme_neutral-600 border-b-0">
                    {componentRender[name as componentKeys]}
                </div>

                <div className="mb-16">
                    <ComponentTabs>
                        <div id="exemple" data-header-text="exemple">
                            <pre>{exempleCode}</pre>
                        </div>
                        <div id="structure" data-header-text="structure">
                            <pre>{structureCode}</pre>
                        </div>
                        <div id="style" data-header-text="style">
                            <pre>{styleCode}</pre>
                        </div>
                    </ComponentTabs>
                </div>
            </div>
        </div>
    );
}
