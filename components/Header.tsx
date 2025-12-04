import Image from "next/image";

import Logo from "@/assets/agiota-logo.png"
import { ItemMenu } from "./ItemMenu";

export function Header(){
    return(
        <header className="flex items-center w-full h-20 bg-primary-orange">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="logo"/>
                        <ul>
                            <li>
                                <ItemMenu name="Para você"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}