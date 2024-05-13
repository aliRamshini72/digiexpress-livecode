import {useCallback, useMemo, useRef, useState} from "react";
import useOutsideClick from "../hooks/useOutsideClick";


export default function Dropdown(props) {
    const {list, item, onChangeItem, initialKey} = props;
    const [showList, setShowList] = useState(false);
    const handleClick = useCallback(() => {
        setShowList(perv => !perv)
    }, [])
    const selectItem = useCallback((item) => {
        setShowList(false)
        onChangeItem(item.key)
    }, [])

    const selected = useMemo(() => {
        if (!item && initialKey) return list.find(i => i.key === initialKey)
        else return item
    }, [initialKey, item])

    const ref = useRef()
    useOutsideClick(ref, () => {
        setShowList(false)
    })
    return (
        <>
            <div className="drop-down" ref={ref}>
                <div
                    className={`input size text color ${showList && "active"} `}
                    onClick={() => handleClick()}
                >
                    {selected ? selected.name : 'یک مورد را انتخاب کنید'}
                </div>
                {list && showList && (
                    <div className={`list size color`}>
                        {list.map(i => <div
                            key={i.key}
                            className="item size text" onClick={() => selectItem(i)}>
                            {i.name}
                        </div>)}
                    </div>
                )}
            </div>
        </>
    );
};
