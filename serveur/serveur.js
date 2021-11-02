const http = require('http');
var mongo = require('mongodb');
var url = require('url');
const hostname = '127.0.0.1';
const port = 4000;
var uc = require('upper-case');
var fs = require('fs');


const server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc.upperCase("Hello World!"));
        res.end();
        
    }).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });





//envoyer un mail
/* 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'islyzba@gmail.com',
    pass: 'Lassassin21*'
  }
});

var mailOptions = {
  from: 'islyzba@gmail.com',
  to: 'vegitobi@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 */