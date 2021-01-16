import React from 'react'


const ButtonGroupActivityListOptions = () => {
    return(
        <div class="filters_listing sticky_horizontal">
			<div class="container">
				<ul class="clearfix">
					<li>
						<div class="switch-field">
							<input type="radio" id="popular" name="listing_filter" value="popular" className="selected" data-filter=".popular" />
							<label for="popular">Önce En Ucuz</label>
							<input type="radio" id="latest" name="listing_filter" value="latest" data-filter=".latest" />
							<label for="latest">Önce En Pahalı</label>
						</div>
					</li>
					<li>
						<div class="layout_view">
							<a href="#"><i class="icon-th"></i></a>
							<a href="#" class="active"><i class="icon-th-list"></i></a>
						</div>
					</li>
				</ul>
			</div>
		</div>
    )
}


export default ButtonGroupActivityListOptions