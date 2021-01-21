import React from 'react'


const FormResearchBooking = () => {
	return (
		<form className="form-research-booking" action="/seferler">
			<div class="row no-gutters custom-search-input-2 inner">
				<div class="col-lg-4">
					<div class="form-group">
						<select class="wide form-control">
							<option>Tüm Aktiviteler</option>
							<option>Balon Turları</option>
							<option>Safari Turları</option>
							<option>Museums</option>
							<option>Walking tours</option>
						</select>
						<i class="icon_search"></i>
					</div>
				</div>
				<div className="col-lg-2">
					<input className="form-control" type="date" />
				</div>
				<div class="col-lg-2">
					<div class="form-group">
						<select class="wide form-control">
							<option>Yetişkin Sayısı</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
						<i class="icon_profile"></i>
					</div>
				</div>
				<div class="col-lg-2">
					<select class="wide form-control">
						<option>Çocuk Sayısı</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
					<i class="icon_profile"></i>

				</div>
				<div class="col-lg-2">
					<input type="submit" class="btn_search" value="Ara" />
				</div>
			</div>
		</form>
	)
}

export default FormResearchBooking