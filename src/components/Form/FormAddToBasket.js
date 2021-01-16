import React from 'react'
import ElementScore from '../Element/ElementScore'


const FormAddToBasket = () => {
    return (
        <form>
					<div class="box_detail booking">
						<div class="price">
							<span>45 € <small>kişi başı</small></span>
							<ElementScore />
						</div>
						<div class="form-group input-dates">
							<input class="form-control" type="text" name="dates" placeholder="Tarih.." />
							<i class="icon_calendar"></i>
						</div>
						<div class="panel-dropdown">
							<a href="#">Kişi <span class="qtyTotal">1</span></a>
							<div class="panel-dropdown-content right">
								<div class="qtyButtons">
									<label>Adults</label>
									<input type="text" name="qtyInput" value="1" />
								</div>
								<div class="qtyButtons">
									<label>Childrens</label>
									<input type="text" name="qtyInput" value="0" />
								</div>
							</div>
						</div>
						<a href="cart-1.html" class="btn_1 full-width purchase">Sepete Ekle</a>
						<div class="text-center"><small>Bu adımda para alınmayacaktır</small></div>
					</div>
					</form>
    )
}

export default FormAddToBasket