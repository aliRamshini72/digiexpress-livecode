import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import {useState} from "react";
import list from './mock/drop-items.json'
import initialKey from './mock/form-data.json'

function App() {
    const [selectedItem, setSelectedItem] = useState()
    const onChangeItem = (key) => {
        setSelectedItem(() => list.find(i => i.key === key))
    }
    return (
        <div
            id="app"
            className="flex"
            style={{backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")'}}
        >
            <DGXContainer className="top">
                <DGXLogo className="flex"/>
                <div className="mt">
                    <DGXDropdown
                        initialKey={initialKey.dropdown}
                        list={list}
                        item={selectedItem}
                        onChangeItem={onChangeItem}/>
                </div>
                <div className="result">{selectedItem ? selectedItem.name : 'هیچ'}</div>
            </DGXContainer>
        </div>
    );
}

export default App;
