import QRCode from "qrcode"

export const generateQRCodeFromPixCode = async (text) => {
    try {
        const qrCodeUrl = await QRCode.toDataURL(text)
        return qrCodeUrl
    } catch (error) {
        console.error(error)
    }
}

export const saveQRCodeToDisk = async (qrCodeUrl) => {
    const qrCodeImage = qrCodeUrl.split(",")[1]
    const qrCodeBuffer = Buffer.from(qrCodeImage, "base64")

    fs.writeFile("/qrcode/qrcode.png", qrCodeBuffer, (error) => {
        if (error) {
            console.error(error)
        } else {
            console.log("QRCode salvo com sucesso")
        }
    })
}