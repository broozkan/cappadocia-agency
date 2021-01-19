import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FormActivity = () => {

	
	return (
		<form>
			<h5>1. Aktivite Bilgileri</h5>
			<div class="form-group mt-4">
				<label>Aktivite Kategorisi</label>
				<select className="form-control">
					<option value="" selected disabled>Kategori Seçiniz</option>
					<option>Balon Turları</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Dili</label>
				<select className="form-control">
					<option value="" selected disabled>Dil Seçiniz</option>
					<option>Türkçe</option>
					<option>İngilizce</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Adı</label>
				<input type="text" class="form-control" placeholder="Aktivite adı giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Kısa Açıklaması</label>
				<input type="text" class="form-control" placeholder="Aktivite kısa açıklaması giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Görselleri <sup>İlk görsel kapak fotoğrafı olacaktır</sup> </label>
				<input type="file" multiple class="form-control" />
			</div>
			<div class="form-group">
				<label>Aktivite Fiyat Birimi</label>
				<select className="form-control">
					<option value="" disabled selected>Birim seçiniz</option>
					<option value="turkish_lira">Türk Lirası</option>
					<option value="dollar">Amerikan Doları</option>
					<option value="euro">Euro</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aktivite Fiyatı <sup>Kişi başı fiyat giriniz</sup> </label>
				<input type="number" step=".01" class="form-control" placeholder="Aktivite fiyatı giriniz" />
			</div>
			<div class="form-group">
				<label>Aktivite Detaylı Açıklaması</label>
				<CKEditor
					editor={ClassicEditor}
					data="<p>Hello from CKEditor 5!</p>"
					onReady={editor => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
				/>
			</div>

			<hr></hr>
			<h5>
				2. İptal Bilgileri
				<button className="btn btn-success btn-sm ml-2"><span className="fa fa-plus"></span></button>
			</h5>
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>İptal Koşulu Açıklaması</label>
						<input type="text" class="form-control" placeholder="İptal koşulu açıklaması giriniz" />
					</div>
				</div>


				<div className="col-md-1">
					<label>İşlem</label>
					<button className="btn btn-danger"><span className="fa fa-trash"></span></button>
				</div>
			</div>
			<hr></hr>
			<h5>
				3. Hareket Bilgileri
				<button className="btn btn-success btn-sm ml-2"><span className="fa fa-plus"></span></button>
			</h5>
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Hareket Saat Bilgisi</label>
						<input type="text" class="form-control" placeholder="Hareket saat bilgisi giriniz" />
					</div>
				</div>
				<div className="col-md-7">
					<div class="form-group">
						<label>Hareket Açıklaması</label>
						<input type="text" class="form-control" placeholder="Hareket açıklaması giriniz" />
					</div>
				</div>

				<div className="col-md-1">
					<label>İşlem</label>
					<button className="btn btn-danger"><span className="fa fa-trash"></span></button>
				</div>
			</div>
			<hr></hr>
			<h5>
				4. Ek Bilgiler
				<button className="btn btn-success btn-sm ml-2"><span className="fa fa-plus"></span></button>
			</h5>
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Ek Bilgi başlığı</label>
						<input type="text" class="form-control" placeholder="Ek bilgi başlığı giriniz" />
					</div>
				</div>
				<div className="col-md-7">
					<div class="form-group">
						<label>Ek Bilgi Değeri</label>
						<input type="text" class="form-control" placeholder="Ek bilgi değeri giriniz" />
					</div>
				</div>

				<div className="col-md-1">
					<label>İşlem</label>
					<button className="btn btn-danger"><span className="fa fa-trash"></span></button>
				</div>
			</div>
			<hr></hr>
			<h5>
				5. Kontenjan Bilgileri
				<button className="btn btn-success btn-sm ml-2"><span className="fa fa-plus"></span></button>
			</h5>
			<div className="row">
				<div className="col-md-4">
					<div class="form-group">
						<label>Tarih</label>
						<input type="date" class="form-control" placeholder="Aktivite kısa açıklaması giriniz" />
					</div>
				</div>
				<div className="col-md-2">
					<label>Başlangıç saati</label>
					<select className="form-control">
						<option value="" disabled selected>Başlangıç Saati</option>
						<option value="05:00">05:00</option>
						<option value="06:00">06:00</option>
						<option value="07:00">07:00</option>
						<option value="08:00">08:00</option>
						<option value="09:00">09:00</option>
						<option value="10:00">10:00</option>
						<option value="11:00">11:00</option>
						<option value="12:00">12:00</option>
						<option value="13:00">13:00</option>
						<option value="14:00">14:00</option>
						<option value="15:00">15:00</option>
						<option value="16:00">16:00</option>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
						<option value="23:00">23:00</option>
						<option value="00:00">00:00</option>
						<option value="01:00">01:00</option>
						<option value="02:00">02:00</option>
						<option value="03:00">03:00</option>
						<option value="04:00">04:00</option>
					</select>
				</div>
				<div className="col-md-2">
					<label>Bitiş saati</label>
					<select className="form-control">
						<option value="" disabled selected>Bitiş Saati</option>
						<option value="05:00">05:00</option>
						<option value="06:00">06:00</option>
						<option value="07:00">07:00</option>
						<option value="08:00">08:00</option>
						<option value="09:00">09:00</option>
						<option value="10:00">10:00</option>
						<option value="11:00">11:00</option>
						<option value="12:00">12:00</option>
						<option value="13:00">13:00</option>
						<option value="14:00">14:00</option>
						<option value="15:00">15:00</option>
						<option value="16:00">16:00</option>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
						<option value="23:00">23:00</option>
						<option value="00:00">00:00</option>
						<option value="01:00">01:00</option>
						<option value="02:00">02:00</option>
						<option value="03:00">03:00</option>
						<option value="04:00">04:00</option>
					</select>
				</div>
				<div className="col-md-2">
					<div class="form-group">
						<label>Kontenjan</label>
						<input type="number" class="form-control" placeholder="Kontenjan giriniz" />
					</div>
				</div>
				<div className="col-md-1">
					<label>İşlem</label>
					<button className="btn btn-danger"><span className="fa fa-trash"></span></button>
				</div>
			</div>
			<div class="form-group">
				<p><a href="#0" class="btn_1 medium">Kaydet</a></p>
			</div>
		</form>
	)
}

export default FormActivity