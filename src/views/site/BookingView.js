import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import SectionActivityDetailContent from '../../components/Section/SectionActivityDetailContent'
import BookingPageTitle from '../../components/PageTitle/BookingPageTitle'
import FormResearchBooking from '../../components/Form/FormResearchBooking'
import BookingItem from '../../components/Item/BookingItem'
import NavbarSortBooking from '../../components/Navbar/NavbarSortBooking'
import queryString from 'query-string'
import api from '../../services/api'
import dateFormat from 'dateformat'
import { getTranslatedString } from '../../controllers/controller'

class BookingView extends Component {


    constructor(){
        super()
        this.state = {
            results: [],
            urlParams: '',
            is_results_loaded: false
        }
    }

    

    async componentDidMount(){

      


        const urlParams = await queryString.parse(this.props.location.search);

        if (!urlParams.activity_checkout_date) {
            const date = await dateFormat(new Date(), "yyyy-mm-dd");
            urlParams.activity_checkout_date = date
        }

        if(urlParams.category_id){
            
            const filters = {
                "activity_category._id": urlParams.category_id,
                "activity_quota_informations.quota_info_date": urlParams.activity_checkout_date
            }
            await this.getResults(1, filters)
        }
        this.setState({
            urlParams: urlParams
        })
        
    }


    async getResults(page=1, filters={}){

       
        const results = await api.get('/activity/list/' + page, { params: filters })
        
        this.setState({
            results: results.data.docs,
            is_results_loaded: true
        })
    }


    render() {

        
        

        

        // render results
        let resultsHtml = ''
        if (this.state.is_results_loaded) {
            if (this.state.results.length < 1) {
                resultsHtml = (
                    <>
                    <h4 className="text-center">{getTranslatedString('booking_not_found_h4')} :(</h4>
                    <p className="text-center">{getTranslatedString('booking_not_found_p')}</p>
                    </>

                )
            }else{  
                resultsHtml = this.state.results.map((item) => {
                    return(
                        <BookingItem activity={item} params={this.state.urlParams} />
                    ) 
                })
            }
            
        }

        // render research form
        let researchFormHtml = ''
        if (this.state.urlParams) {
            console.log(this.state.urlParams);
            researchFormHtml = <FormResearchBooking params={this.state.urlParams} />
           
        }

        console.log(this.state.urlParams);
        return (
            <>
                <main>
                    <BookingPageTitle />
                    <div className="container margin_60_35">
                        <div className="col-lg-12">
                            {researchFormHtml}
                            <NavbarSortBooking />
                            <hr></hr>
                            
                        </div>
                        <div className="isotope-wrapper mt-1" style={{ position: 'relative', height: '1700px' }}>
                            {resultsHtml}
                        </div>
                    </div>
                    <Footer />
                </main>
            </>
        )
    }

}

export default BookingView