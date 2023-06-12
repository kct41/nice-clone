import Style from "../common/Style";
import QuickMenu from "./QuickMenu";
import MyData from "../common/MyData";
import Recommend from "../common/Recommend";
import MobService from "./MobService";
import MobFlip from "./MobFlip";
import Notice from "../common/Notice";
import MobQuickNav from "./MobQuickNav";
import MobNav from "./MobNav";
import MobFooter from "./MobFooter";

export default function MobHome(){
    return(
        <>
            <Style/>
            <hr/>
            <QuickMenu/>
            <MyData/>
            <Recommend/>
            <MobService/>
            <hr/>
            <MobFlip/>
            <Notice/>
            <MobQuickNav/>
        </>
    )
}