import React, {useState} from 'react'


const FormFilterCategory = (props) => {

    const [state, setState] = useState({
        category_name: ''
        
    })

    const resetState = () => {
        setState({
            category_name: ''
        })
    }

    const handleChange = (e) => {
        
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit(props.pagination_info.page, state)
    }

    
    return (
        <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group my-3">
                <label for="category_name">Adı</label>
                <input className="form-control-sm ml-2" onChange={handleChange} value={state.category_name} name="category_name" id="category_name" placeholder="Kategori adı giriniz" />
            </div>
            <div className="form-group ml-3">
                <button type="submit" className="btn_1 gray approve">Ara</button>
            </div>
        </form>
    )
}

export default FormFilterCategory