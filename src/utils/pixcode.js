import { generateQRCodeFromPixCode, saveQRCodeToDisk } from "./qr-code.js"
import PixBR from "pixbrasil"
import { transporter } from "../config/nodemailer.config.js"

export const sendPixCodeToEmail = async (email) => {
    const pixCode = generatePixCode("Faz o pix", 1)
    const qrCodeUrl = await generateQRCodeFromPixCode(pixCode)
    saveQRCodeToDisk(qrCodeUrl)

    try {
        await transporter.sendMail({
            to: email,
            subject: "Faz o pix",
            attachDataUrls: true,
            html: "<h1>Olá, faça o pix</h1>",
            attachments: [
                {
                    filename: "qrcode.png",
                    path: "qrcode.png",
                }
            ]
        })
            .then(() => console.log("Email enviado com sucesso"))
    } catch (error) {
        console.error(error)
    }
}

export const generatePixCode = (message, amount) => {
    return PixBR({
        key: process.env.PIX_KEY,
        name: process.env.PIX_NAME,
        city: process.env.PIX_CITY,
        message,
        amount
    })
}