import React from 'react'
import ElementScore from '../Element/ElementScore'


const FormFilterActivity = () => {
	return (
		<aside className="col-lg-3">
			<form>
				<div className="custom-search-input-2 inner-2">
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Kelime ile ara..." />
						<i className="icon_search"></i>
					</div>
					<div className="form-group">
						<input className="form-control" type="text" placeholder="Yer ile ara" />
						<i className="icon_pin_alt"></i>
					</div>
					<div className="form-group">
						<select className="form-control wide">
							<option>Tüm Kategoriler</option>
							<option>Museums</option>
							<option>Churches</option>
							<option>Historic</option>
							<option>Walking</option>
						</select>
					</div>
					<input type="submit" className="btn_search" value="Ara" />
				</div>
				<div id="filters_col">
					<a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filtrele </a>
					<div className="collapse show" id="collapseFilters">

						<div className="filter_type">
							<h6>Değerlendirme</h6>
							<ul>
								<li>
									<label>Mükemmel: 9+</label>
									<input type="checkbox" className="js-switch" checked />
								</li>
								<li>
									<label>Çok İyi: 8+</label>
									<input type="checkbox" className="js-switch" />
								</li>
								<li>
									<label>İyi: 7+</label>
									<input type="checkbox" className="js-switch" />
								</li>
								<li>
									<label>Ortalama: 6+</label>
									<input type="checkbox" className="js-switch" />
								</li>
								<li>
									<label>Değerlendirilmemiş</label>
									<input type="checkbox" className="js-switch" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</form>

		</aside>
	)
}

export default FormFilterActivity