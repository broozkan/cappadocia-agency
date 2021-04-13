class Email {

    constructor(to, subject) {
        this.to = to
        this.subject = subject
        this.reservation = {}
        this.text = ''



        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'burhanozkan99@gmail.com',
                pass: 'LPVNU737uxrf.'
            }
        });



    }

    setReservation(reservation) {
        this.reservation = reservation
    }

    setReservationText() {
        let emailHtml = '<h1>Merhaba, <br> öncelikle bizleri tercih ettiğiniz için teşekkür ederiz.</h1>'
        emailHtml += '<h3>' + this.conversation_id + ' numaralı rezervasyon bilgileriniz aşağıdadır.</h3>'
        emailHtml += '<br></br>'
        emailHtml += '<div>'
        emailHtml += '<table width="100%" padding="10px">'
        emailHtml += '<thead>'
        emailHtml += '<th>Aktivite</th>'
        emailHtml += '<th>Tarih / Saat</th>'
        emailHtml += '<th>Yetişkin</th>'
        emailHtml += '<th>Çocuk</th>'
        emailHtml += '</thead>'
        emailHtml += '<tbody>'
        emailHtml += '<tr style="text-align:center">'
        emailHtml += '<td>' + this.reservation.pre_reservation_activity.activity_name + '</td>'
        emailHtml += '<td>' + this.reservation.pre_reservation_activity_date + ' / ' + this.reservation.pre_reservation_activity_beginning_hour + '-' + this.reservation.pre_reservation_activity_ending_hour + '</td>'
        emailHtml += '<td>' + this.reservation.pre_reservation_adult_count + '</td>'
        emailHtml += '<td>' + this.reservation.pre_reservation_child_count + '</td>'
        emailHtml += '</tr>'
        emailHtml += '</tbody>'
        emailHtml += '</table>'
        emailHtml += '</div>'

        this.text = emailHtml
    }



    sendReservationEmail(cb) {
        this.mailOptions = {
            from: 'noreply@turkeyballoonscappadocia.com',
            to: this.to,
            subject: this.title,
            text: this.text,
            html: this.text
        };

        this.transporter.sendMail(this.mailOptions, function (error, info) {
            if (error) {
                cb(false)
            } else {
                cb(true)
            }
        });

    }


}

module.exports = Email






