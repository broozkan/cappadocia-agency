import React from 'react'
import Footer from '../../components/Footer/Footer'
import SaleContractPageTitle from '../../components/PageTitle/SaleContractPageTitle'

const SaleContractView = () => {


    let saleContractJsx = ''

    if (localStorage.getItem('language') == "tr") {
        saleContractJsx = (
            <div className="col-lg-12">
                <h2>MESAFELİ SATIŞ SÖZLEŞMESİ</h2>
                <h4>1.ÖDEME</h4>
                <p>
                    <strong>1.1.</strong> Rezervasyonunuzu güvence altına almak için, şirket tarafından aksi kararlaştırılmadıkça, ödemenin tamamı kredi kartınızdan çevrimiçi olarak yapılmalıdır.
                                Tüm sıcak hava balonu uçuşları müsaitlik durumuna bağlıdır. Ödemenizi yapmak için web sitemizi kullanarak rezervasyonda kullanılan kartı sahibinin bu ödemeyi onayladığını kabul ederiz.Satın alma işlemini sonrasında rezervasyon işleminiz Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) onayına sunulur.
                                Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) olarak rezervasyonunuzu onaylama ve iptal etme hakkına sahiptir.Rezervasyonunuz onaylandıktan sonra yetkililerimiz sizinle iletişime geçecektir.
                                Rezervasyonunuz onaylanmadığı taktirde kartınızdan çekilen tutarın tamamı tarafınıza ücretinizin tamamı bankanın işlem süresine bağlı olarak, geri ödemenin kredi kartı defterinizde görülmesi 5-10 iş günü sürebilir.
                                </p>
                <h4>2. ALIŞ VE BIRAKILIŞ SERVİSİ</h4>
                <p>
                    <strong>2.1.</strong> Müşteriler planlanan uçuşlar ve turlar için bir gün önce e-posta yoluyla veya telefon bilgilendirilecektir. Seyahat mesafelerinin tahminlerine dayanarak, karşılama süreleri uzman operatörlerimiz tarafından planlanır ve müşterilere iyi niyetle tavsiye edilir.
                                Bununla birlikte, bazen rotadaki trafik ve tek yönlü sistemler hafif gecikmelere neden olabilir.
                                Bu tür gecikmeler şirketin makul kontrolünün ötesinde olduğundan, Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) bu koşullarda meydana gelen rahatsızlıklardan sorumlu olmayacaktır.
                                </p>
                <h4>3. MÜŞTERİNİN MÜLKİYETİ</h4>
                <p>
                    <strong>3.1.</strong> Firma kaybolan veya çalınan bagaj / kişisel eşyalardan sorumluluk kabul etmez.
                                </p>
                <h4>4. PARA DÖNÜŞÜMÜ</h4>
                <p>
                    <strong>4.1.</strong>
                                    Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) ’ın para birimi dönüştürücüsü günlük TCBM’nin (Türkiye Cumhuriyet Merkez Bankası) döviz kurlarını kullanır. Çevrimiçi ödemelerde, desteklenen döviz kurları aşağıdaki gibi listelenir:
                                    <br></br>
                                    - Türk Lirası (TL)
                                    <br></br>
                                    - Dolar (USD)
                                    <br></br>
                                    - Euro (EUR)
                                </p>
                <p>
                    <strong>4.2.</strong>
                                    Yerel para biriminiz web sitemizde uygun bir ödeme yöntemi olarak desteklenmiyorsa, bankanız toplam ödeme ve geri ödemelerinize ek para birimi dönüştürme ücretleri uygulayabilir. Bu durumda, para birimi dönüştürme ücretleri ile ilişkili olası kesintiler için Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) tazminat ödemekle yükümlü değildir.
                                </p>
                <p>
                    <strong>4.3.</strong>
                                    Rezervasyon sırasında kullandığınız para biriminin değeri dönüşümden sonra azalırsa, geri ödemenizi alırken döviz kuru kaybına uğramış olursunuz.
                                    Böyle bir durumda, para birimi dalgalanmaları nedeniyle maruz kaldığınız zararlar için Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) tazminat ödemekle yükümlü değildir.
                                </p>
                <h4>5. İPTAL VE İADE KOŞULLARI</h4>
                <p>
                    <strong>5.1.</strong>
                                    Turkey Balloons Cappadocia (turkeyballoonscappadocia.com), geçerli koşullar uçuş güvenliği için risk oluşturuyorsa, herhangi bir zamanda ön bilgilendirme yapmadan uçuşunuzu iptal etme hakkını saklı tutar.
                                    Yapılacak tur veya balon uçuşunuz güvenli olmayan hava koşulları nedeniyle iptal edilirse, size şu 3 seçenek arasından seçim yapma olanağı sunulur:
                                    <br></br>
                                    - Orijinal biletinizin tam iadesi VEYA
                                    <br></br>
                                    - Orijinal tarifeli uçuşunuzdan sonraki gün alternatif bir uçuş (Not: Bu seçenek koltuk müsaitliğine bağlıdır), VEYA
                                    <br></br>
                                    - Seçtiğiniz daha sonraki bir tarihte orijinal rezervasyonunuzla aynı uçuş türüne sahip bir bilet (Not: Bu seçenek koltuk müsaitliğine bağlıdır).
                                </p>
                <p>
                    <strong>5.2.</strong>
                                    Uçuşunuzu veya turunuzu gönüllü olarak iptal etmeniz durumunda iptal ücretleri otomatik olarak sizlere yansıtılır. Tam bir geri ödeme almaya hak kazanmak için, planlanan uçuştan en az 4 gün önce rezervasyonunuzu iptal etmeniz gerekir. Uçuşunuzu iptal etmek için iptal talebinizi info@turkeyballoonscappadocia.com adresine e-posta yoluyla göndermelisiniz.
                                    İptal ücretleri, gönüllü iptalin yapıldığı süreye göre değişir. Aşağıdaki tablo iptal ücretleriyle ilgili bilgi vermektedir:
                                    <table className="table">
                        <thead>
                            <th>Zaman Dilimi</th>
                            <th>İptal Ücretleri</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Uçuş veya tur saatine 24 saat içinde</td>
                                <td>Toplam ödemenin% 100'ü</td>
                            </tr>
                            <tr>
                                <td>Uçuş veya tur saatine 48 saatten 24 saate kadar</td>
                                <td>Toplam ödemenin% 25'i</td>
                            </tr>
                            <tr>
                                <td>Uçuş veya tur saatine 2 gün ila 4 gün arası</td>
                                <td>Kişi başı 30 € iptal ücreti</td>
                            </tr>
                            <tr>
                                <td>Uçuş veya tur saatine 4 gün veya daha önce</td>
                                <td>Ücret yoktur</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                <p>
                    <strong>5.3.</strong>
                                    Tüm geri ödemeler aynı ödeme modunda yapılır ve rezervasyon sırasında kullanılan para biriminde verilir.
                                    Normal şartlar altında, iptal talebini aldıktan sonra geri ödemeler derhal işleme konulur.
                                    Bankanın işlem süresine bağlı olarak, geri ödemenin kredi kartı defterinizde görülmesi 5-10 iş günü sürebilir. 10 iş gününden sonra geri ödemenizi almadıysanız, lütfen info@turkeyballoonscappadoci.com adresine e-posta yoluyla muhasebe departmanımızla iletişime geçin.
                                </p>
                <p>
                    <strong>5.4.</strong>
                                    Uçuşunuzun ve turunuzun bir bölümünü sağlamaktan alıkonulduğumuzda veya uçuşunuzun herhangi bir bölümünün performansında herhangi bir aksaklık oluştuğunda, gerekli tüm özen gösterilmiş olsa bile kontrolümüz dışındaki olağandışı ve öngörülemeyen durumlar nedeniyle Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) tazminat ödemekle yükümlü değildir. Bu koşullar ve olaylar aşağıda belirlenmiştir:
                                    <br></br>
                                    - Beklenmedik hava değişiklikleri.
                                    <br></br>
                                    - Acil iniş.
                                    <br></br>
                                    - Algılanan güvenlik tehditleri.
                                    <br></br>
                                    - Teknik problemler.
                                    <br></br>
                                    - Terörist faaliyet veya tehdit.
                                    <br></br>
                                    - Doğal veya nükleer felaketler.
                                </p>
                <h4>6. BALON UÇUŞU İÇİN YAŞ, YÜKSEKLİK, AĞIRLIK VE DİĞER LİMİTLER</h4>
                <p>
                    <strong>6.1.</strong>
                                    Aşağıda belirtilen yaş, boy ve kilo kısıtlamalarını okumadan önce, potansiyel güvenlik tehlikelerini önlemek ve tüm yolcuların konforunu sağlamak için bu sınırların getirildiğini lütfen unutmayın.
                                    <br></br>
                    <strong>Yaş: </strong> 5 yaşın altındaki çocukların sıcak hava balonu uçuşlarına katılmasına izin verilmez. 16 yaşın altındaki çocuklara sorumlu bir yetişkin eşlik etmelidir.
                                    <br></br>
                    <strong>Yükseklik: </strong> En az 1,4 m boyunda olmanız ve gerektiğinde iniş pozisyonunu alabilmeniz gerekir.
                                    <br></br>
                    <strong>Ağırlık: </strong> 120 kg'ın üzerinde yolcular ek ücrete tabidir.
                                    <br></br>
                    <strong>Diğer Limitler: </strong> Hamileliklerinin 6. haftasını geçen yolcular uçurulamaz. Sıcak hava balonları tekerlekli sandalyeye uygun olarak üretilmemesi sebebiyle üzülerek engelli yolcular uçurulamaz.
                                </p>
                <h4>7. ARAMA HAKKI</h4>
                <p>
                    <strong>7.1.</strong>
                                    Şüpheli bir şey fark edilirse güvenlik ve emniyet amacıyla yer operasyonları ekibimiz tarafından fiziksel aramalar yapılabilir.
                                    Tüm aramalar makul gerekçelerle yasaların izin verdiği veya gerektirdiği şekilde yapılmalıdır.
                                </p>
                <h4>8. TAŞIMA KOŞULLARI</h4>
                <p>
                    <strong>8.1.</strong>
                                    Uçuşunuzun ve Turunuzun türü ne olursa olsun, aşağıdaki eşyaların uçuşa veya tura getirilmesine izin verilmez:
                                    <br></br>
                                    - Büyük valiz ve çantalar.
                                    <br></br>
                                    - Silahlar, yanıcı maddeler ve patlayıcı maddeler.
                                    <br></br>
                                    - Keskin nesneler
                                    <br></br>
                                    - Kimyasallar
                                </p>
            </div>
        )
    } else {
        saleContractJsx = (
            <div className="col-lg-12">
                <h2>DİSTANCE SALES AGREEMENT</h2>
                <p>Please read terms and conditions specified below carefully prior to purchasing an air balloon flight with Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) by using our online channel. These terms and conditions apply to all bookings, regardless of the sales channel used. By using our website, you warrant and assert that you are legally eligible to enter in binding contacts and responsible for all payments which incur to you as a result of your booking.</p>
                <h4>1..PAYMENT</h4>
                <p>
                    <strong>1.1.</strong> By using our website to make your payment, we acknowledge that the cardholder used in the reservation has approved this payment.After purchase, your reservation is submitted to Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) approval. Turkey Balloons Cappadocia (turkeyballoonscappadocia.com)  reserves the right to confirm and cancel your reservation.Our officials wills contact you after your reservation is comfimed.If your reservation is not confirmed, it may take 5-10 business for the refund to appear in your credit card book, depending on the processing time of the bank.</p>
                <h4>2. PICK-UP AND DROP-OFF SERVICE</h4>
                <p>
                    <strong>2.1.</strong> Pick up and drop off times are subject to change. Customers will be contacted by email or phone the day before their scheduled flight or tour. Based on estimations of travelling distances, pick-up times are scheduled by our expert operators and advised to customers in good faith. However, sometimes traffic on the route and one-way systems may cause slight delays. Since such delays are beyond the reasonable control of the company, urkey Balloons Cappadocia (turkeyballoonscappadocia.com)  will not be liable for any inconvenience occurred in those circumstances.</p>
                <h4>3. CUSTOMER’S PROPERTY</h4>
                <p>
                    <strong>3.1.</strong> The company accept no responsibility for any lost or stolen luggage/personal belongings.</p>
                <h4>4. CURRENCY CONVERSION</h4>
                <p>
                    <strong>4.1.</strong>
                    Turkey Balloons Cappadocia (turkeyballoonscappadocia.com)’s  currency converter uses daily TCBM’s (Central Bank of the Republic of Turkey) exchange rates. For online payments, the supported exchange rates are listed as follows:
                                    <br></br>
                                    - Turkish Lira (TL)
                                    <br></br>
                                    - Dollar (USD)
                                    <br></br>
                                    - Euro (EUR)
                                </p>
                <p>
                    <strong>4.2.</strong>
                    If your local currency is not supported as an eligible payment method on our website, your bank may impose additional currency conversion fees on your total payment and refunds. We are not liable to pay you compensation for potential deductions associated with currency conversion fees.</p>
                <p>
                    <strong>4.3.</strong>
                    If the value of the currency you used when booking declines after the conversion,  you will have incurred a foreign exchange loss when receiving your refund. In such a case, we are not responsible to pay you compensation for any losses incurred to you due to currency fluctuations. </p>
                <h4>5. CANCELLATION AND REFUND RULES</h4>
                <p>
                    <strong>5.1.</strong>
                    Turkey Balloons Cappadocia (turkeyballoonscappadocia.com)  reserves the right to cancel any flight at any time without further notice if the prevailing conditions constitute risks for flight safety. If your balloon flight or tour is canceled due to unsafe weather conditions expected by us, we offer you 3 options: <br></br>
                                    - A full refund of your original ticket, OR
                                    <br></br>
                                    - An alternative flight the day after your original scheduled flight (Note: This option is subject to seat availability), OR
                                    <br></br>
                                    - A ticket with the same flight type of your original booking at a later date of your choosing (Note: This option is subject to seat availability).
                                </p>
                <p>
                    <strong>5.2.</strong>
                    If you voluntarily cancel your flight or tour, you will be automatically charged the cancellation fees.To be eligible for a full refund, you must cancel your reservation at least 4 days before your scheduled flight or tour. To cancel your flight or tour, you must send your cancellation request through email to info@turkeyballoonscappadoci.com
Cancellation charges vary according to the time period in which the voluntary cancellation is made. The table below provides information in respect of cancellation charges:
                                    <table className="table">
                        <thead>
                            <th>Time Period</th>
                            <th>Cancellation Charges</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Within 24 hours of the flight or tour time</td>
                                <td>100% of total payment</td>
                            </tr>
                            <tr>
                                <td>From 48 hours to 24 hours to the flight or tour time</td>
                                <td>30 % of total payment</td>
                            </tr>
                            <tr>
                                <td>4 days or more before the flight or tour time</td>
                                <td>15% per person cancellation fee</td>
                            </tr>
                            <tr>
                                <td>4 days or more before the flight or tour time</td>
                                <td>No Charges</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
                <p>
                    <strong>5.3.</strong>
                    All refunds are made in the same mode of payment and issued in the currency used when booking. Under normal circumstances, we immediately process refunds once we have received the cancellation request. Depending on the bank's processing time, it can take anywhere from 5-10 business days for the refund to show up on your credit card ledger. If you have not received your refund after 10 business days, please contact our accounting department via email to info@turkeyballoonscappadocia.com.</p>
                <p>
                    <strong>5.4.</strong>
                    When we are prevented from providing part of your flight or tour, or when any disruption occurs in the performance of any part of your flight, Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) is not liable to pay compensation due to unusual and unforeseen circumstances beyond our control, even if all due care has been taken. Those circumstances and events include the following:<br></br>
                                    - Unexpected weather changes.
                                    <br></br>
                                    - Emergency landing.
                                    <br></br>
                                    - Perceived security threats.
                                    <br></br>
                                    - Technical problems.
                                    <br></br>
                                    - Terrorist or threatened terrorist activity.
                                    <br></br>
                                    - Natural or nuclear disasters.
                                </p>
                <h4>6. AGE, HEIGHT AND WEIGHT LIMITS</h4>
                <p>
                    <strong>6.1.</strong>
                    Before reading the age, height and weight restrictions specified below, please bear in mind that these limits are imposed to avoid potential safety hazards and ensure all passengers' comfort.
                                    <br></br>
                    <strong>Age: </strong> Children under 5 years of age are not allowed to participate in hot-air-balloon flights. Children under 16 years of age must be accompanied by a responsible adult.
                                    <br></br>
                    <strong>Height: </strong> You must be at least 1.4m tall and able to adopt the landing position when needed.
                                    <br></br>
                    <strong>Weight: </strong> We may require passengers who are over 120kg to pay a supplement.
                                    <br></br>
                    <strong>Other Limits: </strong> We are unable to carry passengers who past the 6th week of their pregnancy. Even though we would be more than happy to accommodate passengers with disabilities on our balloons since air balloons are not wheelchair accessible aircraft, we are unable to fly with disabled passengers.</p>
                <h4>7. LEGAL TRADEMARK & COPYRIGHT NOTICE</h4>
                <p>
                    <strong>7.1.</strong>
                    All materials contained in this website and mobile site are protected by copyrights, trademarks and/or other intellectual property rights. Those materials include, but are not limited to, all trademarks, the text, trade dress, designs, photographs, articles, software, graphics, marketing slogans, visual and verbal content. All rights are reserved worldwide, and the content cannot be reproduced, published and disseminated in any other media platforms by third parties. </p>
                <h4>8. RIGHT OF SEARCH:</h4>
                <p>
                    <strong>8.1.</strong>
                    If we notice something suspicious, for the purposes of safety and security, physical searches may be conducted by our ground operations crew. All searches must be conducted on reasonable grounds in a manner allowable or required by law.</p>
                <h4>8. RIGHT OF SEARCH:</h4>
                <p>
                    <strong>9. CONDITIONS OF CARRIAGE</strong>
                    Regardless of the type of your flight, the following items are not allowed to be brought on board:
                    <br></br>
                    Large suitcases and bags.
                    <br></br>
                    Guns, flammable items and explosive materials.
                    <br></br>
                    Sharp objects
                    <br></br>
                    Chemicals
                    </p>
                <h4>10. RIGHT OF CONDUCTING JOINT FLIGHT</h4>
                <p>
                    <strong>10.1.</strong>
                    A ticket purchased from Turkey Balloons Cappadocia (turkeyballoonscappadocia.com) for a balloon flight or tours can be operated by another partner balloon or tour operator.
                    </p>
            </div>
        )
    }

    return (
        <>

            <main>
                <SaleContractPageTitle />

                <div class="bg_color_1" style={{ transform: 'none' }}>
                    <div class="container margin_60_35" style={{ transform: 'none' }}>
                        <div className="row">
                            {saleContractJsx}
                        </div>

                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}

export default SaleContractView