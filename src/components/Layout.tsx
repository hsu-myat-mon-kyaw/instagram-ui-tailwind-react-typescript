import { ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import RightBar from "./RightBar";

export interface Props {
    children?: ReactNode,
}

const Layout = ( {children }: Props) => {
    return(
        <>
            <div className="flex">
                <SideBar />
                <div>
                    <TopBar />
                </div>
                <div>
                    <RightBar />
                </div>
            </div>
    
        </>
    );
};

export default Layout;