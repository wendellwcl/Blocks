import ContextMenu from "@/components/ContextMenu/ContextMenu";

export default function Home() {
    return (
        <div className="bg-theme_neutral text-theme_neutral-0 min-h-screen w-screen flex items-center justify-center p-8">
            <div className="w-16 h-16">
                <div className="bg-theme_brand rounded p-1 w-full h-full">Context Menu</div>
                <ContextMenu>
                    <ul>
                        <li className="cursor-pointer">Item 1</li>
                        <li className="cursor-pointer">Item 2</li>
                        <li className="cursor-pointer">Item 3</li>
                        <li className="cursor-pointer">Item 4</li>
                        <li className="cursor-pointer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti quam itaque
                            deserunt? Sint tenetur numquam, cupiditate consequatur velit iure quidem. Perspiciatis natus
                            voluptas ipsum expedita tempore fugiat, quisquam velit.
                        </li>
                    </ul>
                </ContextMenu>
            </div>
        </div>
    );
}
