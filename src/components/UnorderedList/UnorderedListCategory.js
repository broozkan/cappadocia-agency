import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import api from '../../services/api'
import ListCategory from '../List/ListCategory'
import FormFilterCategory from '../Form/FormFilterCategory'

const UnorderedListCategory = () => {


    const [state, setState] = useState({
        categories: [],
        pagination_info: [],
        is_categories_loaded: ''
    })


    
    useEffect(() => {
        getCategories()
    }, [])


    const getCategories = async (page = 1, filters = {}) => {
        setState({
            ...state,
            is_categories_loaded: false
        })


        const categories = await api.get('/category/list/' + page, { params: filters })
        console.log(categories);
        setState({
            ...state,
            categories: categories.data.docs,
            pagination_info: categories.data,
            is_categories_loaded: true
        })

    }


    const handleDeleteClick = (e) => {

        const submitResponse = api.delete('/category/delete/'+e.target.dataset.id)

        console.log(submitResponse);

    }


    let categoriesHtml = ''
    if(state.is_categories_loaded){
        categoriesHtml = state.categories.map((item) => {
            return(
                <ListCategory onClick={handleDeleteClick} category={item} />
            )
        })
    }


    return (
        <>
        <div className="row">
            <div className="col-lg-12">
                <FormFilterCategory onSubmit={getCategories} pagination_info={state.pagination_info} />
            </div>
        </div>
        <ul>
            {categoriesHtml}
        </ul>
        <div className="row">
            <div className="col-lg-12">
            <Pagination object={state.pagination_info} onClick={getCategories} />

            </div>
        </div>
        </>
    )
}

export default UnorderedListCategory