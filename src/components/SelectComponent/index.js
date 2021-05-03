import React, {useState, useEffect} from 'react'

const styles = {
    'margin': '0 auto',
    'width': '100px'
}

const initalState = {
    value: ''
}
const SelectComponent = () => {
    const [data, setData] = useState(initalState)
    useEffect(() => {
            setData({value: 'default'})
    }, [])

    const handleSelect = (e) => {
        setData({
            value: e.target.value
        })
    }
    
    return (
        <div style={styles}>
            <div>Out select</div>
            <select defaultValue='default' onChange={handleSelect}>
                <option hidden value='default'>Select Repos</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
        </div>
    )
}

export default SelectComponent;