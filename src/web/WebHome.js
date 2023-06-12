import Style from "../common/Style";
import MyData from "../common/MyData";
import Recommend from "../common/Recommend";
import WebService from "./WebService";
import WebFlip from "./WebFlip";
import Notice from "../common/Notice";
import SideBtns from "./SideBtns";

export default function WebHome(){
   return(
       <>
           <div className="flex_container">
               <Style/>
               <MyData/>
               <Recommend/>
           </div>
           <WebService/>
           <WebFlip/>
           <Notice/>
           <SideBtns/>
       </>
   )
}