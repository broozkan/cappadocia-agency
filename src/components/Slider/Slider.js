import React from 'react'
import bg from '../../images/slide01.jpg'


const Slider = () => {

    return (
        <section className="hero_single version_2">
        <div className="wrapper">
          <div className="container">
            <h3>EŞSİZ DENEYİMLER KAZANIN</h3>
            <p>Balon turları, atv turları, eşsiz kapadokya turizmi</p>
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="Etkinlik adı..." />
                    <i className="icon_pin_alt"></i>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input className="form-control" type="text" name="dates" placeholder="Tarih.." />
                    <i className="icon_calendar"></i>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="panel-dropdown">
                    <a href="#">Kişi <span className="qtyTotal">1</span></a>
                    <div className="panel-dropdown-content">
                      <div className="qtyButtons">
                        <label>Adults</label>
                        <input type="text" name="qtyInput" value="1" />
                      </div>
                      <div className="qtyButtons">
                        <label>Childrens</label>
                        <input type="text" name="qtyInput" value="0" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <input type="submit" className="btn_search" value="Deneyim Bul!" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}

export default Slider