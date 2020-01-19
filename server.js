const express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv').config();
    var app = express();
    app.use(express.static(path.join(__dirname+'/dist/')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    var port = process.env.APP_PORT;

    app.post('/send-mail', function (req, res) {
      res.send('ok');
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: process.env.SENDMAIL_USER,
              pass: process.env.SENDMAIL_PASS
          }
      });
      let mailOptions = {
          from: req.body.mail,
          to: "6056805@gmail.com",
          subject: 'Сообщение от клиента с сайта от' + req.body.mail + ' ' + req.body.mail,
          html: '<div>' + req.body.message + '</div>'
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });

    app.post('/send-order', function (req, res) {
      res.send('ok');
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: process.env.SENDMAIL_USER,
              pass: process.env.SENDMAIL_PASS
          }
      });
      let mailOptions = {
          from: req.body.mail,
          to: "6056805@gmail.com",
          subject: 'Заявка от клиента с сайта',
          html: `
            <div>
            <div>Мастер: ${req.body.masterName}</div>
            <div>Услуга: ${req.body.service}</div>
            <div>Время: ${req.body.date} </div>
            </div>
          `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('zapis');
          });
      });


      app.listen(port, function(){
        console.log('Server is running at port: ',port);
      });
