const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:  465,
        service: "gmail",
        auth:{
            user: "ShopTDN15031999@gmail.com",
            pass: "01646251700",
        },
    });

    const mailOptions = {
        from: "ShopTDN15031999@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;