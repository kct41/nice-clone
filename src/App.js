import {useState, useEffect} from "react";
import debounce from "lodash.debounce";
import Web from './Web';
import Mobile from './Mobile';
import './App.css';
import '../src/common/common.css';

function App() {
    const handleResize = debounce(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, 1000);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

// const getData = async () => {
//     const res = await fetch('http://localhost:1337/api/board').then((res) => res.json());
//     console.log(res);
//     const initData = res.map((it)=>{
//         return{
//             num:it.no,
//             title:it.title,
//             content:it.content,
//         }
//     });
// }

    return (
        <div className="App">
            {windowSize.width > 768 ? <Web/> : <Mobile/>}
        </div>
    );


}

export default App;
