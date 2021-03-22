
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
					comment: {
						"tr": "Bangkok'taki arkadaşım tarafından tavsiye edildi. Alış ve turu düzenlemek için Kapadokya'yı ziyaret etmeyi planladığımızda 2 gün 2 gece her şey çok iyi organize edildi, makul fiyata kırmızı ve yeşil tur rezervasyonu. Rehberimiz çok iyiydi, çok detaylı, güleryüzlü ve nazik anlattı. Kapadokya'yı ziyaret etmek istiyorlarsa kesinlikle arkadaşlarımıza tavsiye ederiz.",
						"en": "Recommended by my friend in Bangkok. When we planned to visit Cappadocia to pick up and arrange the tour, everything was organized very well for 2 days and 2 nights, we booked red and green tours at a reasonable price. Our tour guide gave very good and detailed explanations, friendly and courteous. If they want to visit Cappadocia, we definitely recommend it to our friends."
					},
					comment_author: "Sara Barbie"
				},
				{
					comment: {
						"tr": "Çok güvenilirdi, ürünleri için iyi bilgi ve iyi fiyat verdi. Herhangi bir sorum olduğunda ona ulaşmak kolaydı. Kesinlikle tavsiye ederim ve rezervasyon yaptırmanızı kesinlikle öneririz.",
						"en": "It was very reliable, giving good information and good prices for its products. It was easy to reach him if I had any questions. I highly recommend it and definitely recommend you to make a reservation."
					},
					comment_author: "Nicole"
				},
				{
					comment: {
						"tr": "Göreme'yi 5 gündür ziyaret ettik! İlk günden son dakikaya kadar, Kapadokya'nın bir noktasını kaçırmadık! (Bir araba kiraladık, ancak organize Kırmızı ve Yeşil turları doğrudan onlarla yapabilirsiniz!) Bize her şey için önerilerde bulundular! Deve turu, Türk gecesi gösterisi, Derviş töreni, Türk Spa'yı ve en sonuncusu değil, hayatımızda asla unutamayacağımız Sıcak Hava Balonu deneyimini denedik! İyi vakit geçireceğimizden emin olmak için yaptığınız her şey için çok teşekkür ederiz! Tekrar teşekkürler!",
						"en": "We visited Göreme for 5 days! We did not miss any point in Cappadocia from the first day to the last minute! (We rented a car, but you can do the Red and Green tours directly with them!) They gave us suggestions for everything! We tried the Hot Air Balloon experience we will never forget in our lives with camel tour, Turkish night show, Dervish ceremony, Turkish Bath and more! Thank you so much for everything you do to have a good time! !Thanks again "
					},
					comment_author: "Thalia ve Angela"
				},
				{
					comment: {
						"tr": "Bize çok yardımcı oldu.Sıcak hava balon yolculuğuna karar verdik ve çok uygun bir fiyattı. Balon yolculuğu harikaydı ve bunu bizim için gerçekleştirdiler! Whatsapp üzerinden her zaman bilgi alabilirsiniz çok güzellerdi. Balon turundan sonra ayrıca kırmızı bir tur, bir ATV - turu ve onlarla bir havaalanı transferi düzenledik. Bunların hepsi de mükemmel şekilde organize edildi. Bizi her zaman kararlaştırılan zamanda aldılar ve onlar sayesinde Kapadokya'da harika zaman geçirdik! Hiç şüphesiz Kapadokya'ya geri döndüğümde bu ajansı tekrar kullanacağım!",
						"en": "It helped us a lot. We decided on a hot air balloon ride and it was a very affordable price. The balloon ride was great and they made it happen for us! You can always get information via Whatsapp. They were very nice. After the balloon tour, we also organized a red tour, an ATV - tour and an airport transfer with them. All of these are perfectly organized. They always picked us up at the agreed time and thanks to them we had a great time in Cappadocia! No doubt I will use this agency again when I come back to Cappadocia!"
					},
					comment_author: "Willie Wonka"
				},
				{
					comment: {
						"tr": "İstanbul’da Kapadokya tatilimiz üzerine planlamamızı yaparken iyi ki rastladığım dediğim site ve ajans. Kapadokya tatilimizi baştan sonra en güzel şekilde planladılar. Havaalanı transferinden bölge turlarına kadar her şey mükemmeldi. Tabiki de en iyisi Gün doğumunda balon uçuşu ile beraber Kapadokya’yı seyretmek. Şiddetle tavsiye ediyorum.",
						"en": "It is the site and agency that I have come across while planning our Cappadocia vacation in Istanbul. They planned our Cappadocia holiday in the best way from start to finish. Everything from airport transfer to regional tours was perfect. Of course, the best is to watch Cappadocia with a balloon flight at sunrise. I highly recommend it."
					},
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