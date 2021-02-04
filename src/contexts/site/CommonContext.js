import React, { useState, createContext, setState, useEffect } from 'react'
import api from '../../services/api'

export const CommonContext = createContext()

export const CommonContextWrapper = (props) => {

    const [state, setState] = useState({
        is_user_logged_in: false,
        basket_items: [],
        login_modal_visibility: false,
        register_modal_visibility: false,
        basket_total: 0,
        basket_total_html: '',
        is_basket_items_loaded: false
    })


    useEffect(() => {
        getBasketItems()
        
        /*const user = localStorage.getItem('site-auth')

        if (user) {
            setState({
                ...state,
                is_user_logged_in: true
            })
        }*/

    }, [])


    const updateState = (key, value, cb) => {
        setState({
            ...state,
            [key]: value
        })

        cb(true)
    }

    const getBasketItems = async () => {
        
        const basketItems = await api.get('/basket/list/1')


        // calculate total according to different currencies
        let subTotals = new Array()
        let total = 0
        await basketItems.data.docs.map((item) => {
            total += parseFloat(item.basket_total)
            subTotals.push({
                sub_total_currency: item.basket_activity[0].activity_currency,
                sub_total: item.basket_total
            })
        })


        const reducedSubTotals = await subTotals.reduce((subTotalMemo, { sub_total_currency, sub_total }) => {

            (subTotalMemo[sub_total_currency] = subTotalMemo[sub_total_currency] || []).push(sub_total);
            return subTotalMemo;
        }, {});


        // render sub totals
        let totalHtml = ''
        totalHtml = await Object.keys(reducedSubTotals).map(function (key) {
            let subTotalsHtml = ''
            let total = 0
            subTotalsHtml = reducedSubTotals[key].map((item, index) => {
                total += parseFloat(item)
                if (index == (reducedSubTotals[key].length - 1)) {
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <span class="float-right mt-2">{total} {key}</span>

                            </div>
                        </div>
                    )
                }

            })
            return subTotalsHtml
        });

        setState({
            ...state,
            basket_items: basketItems.data.docs,
            basket_items_pagination_info: basketItems.data,
            is_basket_items_loaded: true,
            basket_total_html: totalHtml
        })
    }



    console.log(state);

    return (
        <CommonContext.Provider value={{ state: state, getBasketItems: getBasketItems, updateState: updateState }}>
            {props.children}
        </CommonContext.Provider>
    )

}
