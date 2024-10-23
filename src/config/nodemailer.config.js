import * as nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: true
    }
}, {
    from: {
        name: "Zenith Inova",
        address: "mailtrap@zenithinova.com.br"
    },
    sender: {
        name: "Zenith Inova",
        address: "mailtrap@zenithinova.com.br"
    }
})