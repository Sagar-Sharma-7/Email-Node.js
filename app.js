const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "youremail@gmail.com",
        pass: 'password'
    }
});

const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'receiveremail@gmail.com',
    // to: 'receiveremail@gmail.com, receiver2email@gmail.com',
    subject: "Sending Email using Node.js",
    text: "This mail is sent using Node.js",
    html: '<h1>Node.js</h1>'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err)
    }else{
        console.log(`Email sent: ${info.response}`)
    }
});