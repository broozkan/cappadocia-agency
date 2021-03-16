
import React from 'react'
import { Component } from 'react'
import { getTranslatedString } from '../../controllers/controller'
import FeedbackItem from '../Item/FeedbackItem'

class SectionFeedbacks extends Component {


	constructor() {
		super()

		this.state = {
			comments: [
				{
					comment: "Bangkok'taki arkadaşım tarafından tavsiye edildi. Alış ve turu düzenlemek için Kapadokya'yı ziyaret etmeyi planladığımızda 2 gün 2 gece her şey çok iyi organize edildi, makul fiyata kırmızı ve yeşil tur rezervasyonu. Rehberimiz çok iyiydi, çok detaylı, güleryüzlü ve nazik anlattı. Kapadokya'yı ziyaret etmek istiyorlarsa kesinlikle arkadaşlarımıza tavsiye ederiz.",
					comment_author: "Sara Barbie"
				},
				{
					comment: "Çok güvenilirdi, ürünleri için iyi bilgi ve iyi fiyat verdi. Herhangi bir sorum olduğunda ona ulaşmak kolaydı. Kesinlikle tavsiye ederim ve rezervasyon yaptırmanızı kesinlikle öneririz.",
					comment_author: "Nicole"
				},
				{
					comment: "Göreme'yi 5 gündür ziyaret ettik! İlk günden son dakikaya kadar, Kapadokya'nın bir noktasını kaçırmadık! (Bir araba kiraladık, ancak organize Kırmızı ve Yeşil turları doğrudan onlarla yapabilirsiniz!) Bize her şey için önerilerde bulundular! Deve turu, Türk gecesi gösterisi, Derviş töreni, Türk Spa'yı ve en sonuncusu değil, hayatımızda asla unutamayacağımız Sıcak Hava Balonu deneyimini denedik! İyi vakit geçireceğimizden emin olmak için yaptığınız her şey için çok teşekkür ederiz! Tekrar teşekkürler!",
					comment_author: "Thalia ve Angela"
				},
				{
					comment: "Bize çok yardımcı oldu.Sıcak hava balon yolculuğuna karar verdik ve çok uygun bir fiyattı. Balon yolculuğu harikaydı ve bunu bizim için gerçekleştirdiler! Whatsapp üzerinden her zaman bilgi alabilirsiniz çok güzellerdi. Balon turundan sonra ayrıca kırmızı bir tur, bir ATV - turu ve onlarla bir havaalanı transferi düzenledik. Bunların hepsi de mükemmel şekilde organize edildi. Bizi her zaman kararlaştırılan zamanda aldılar ve onlar sayesinde Kapadokya'da harika zaman geçirdik! Hiç şüphesiz Kapadokya'ya geri döndüğümde bu ajansı tekrar kullanacağım!",
					comment_author: "Willie Wonka"
				},
				{
					comment: "İstanbul’da Kapadokya tatilimiz üzerine planlamamızı yaparken iyi ki rastladığım dediğim site ve ajans. Kapadokya tatilimizi baştan sonra en güzel şekilde planladılar. Havaalanı transferinden bölge turlarına kadar her şey mükemmeldi. Tabiki de en iyisi Gün doğumunda balon uçuşu ile beraber Kapadokya’yı seyretmek. Şiddetle tavsiye ediyorum.",
					comment_author: "Fahri Mert Çağırgan"
				}
			]
		}
	}



	render() {

		// render comments
		let commentsJsx = this.state.comments.map((item) => {
			return (
				<FeedbackItem comment={item} />
			)
		})


		return (
			<>
				<div className="container margin_80_55">
					<div class="main_title_2">
						<span><em></em></span>
						<h2>{getTranslatedString('feedback_h2')}</h2>
						<p>{getTranslatedString('feedback_p')}</p>
					</div>
					<div id="carousel" class="owl-carousel owl-theme">
						{commentsJsx}
					</div>
				</div>

			</>
		)
	}


}

export default SectionFeedbacks