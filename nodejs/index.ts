import express, {Request} from 'express'
import cors from 'cors'
import errorHandler from "errorhandler";
import 'dotenv/config'
import {TMail} from "./model/mailTypes";
import {sendMail} from "./mailer/mailer";

const app = express()

app.use(cors({
    origin: ['*']
}))
app.use(express.json())

type ReqMailSend = {
    to: TMail,
    text: string
}
app.post('/nodejs/mail/send', async (req: Request<{}, {}, ReqMailSend>, res, next) => {
    try {
        const {text, to} = req.body
        const info = await sendMail(to, text)
        res.json(info)
    } catch (e) {
        next(e)
    }
})
app.get('/nodejs/test', async (req, res, next) => {
    try {
        res.send('Thats work!')
    } catch (e) {
        next(e)
    }
})
app.use(errorHandler())

app.listen(5000, () => {
    console.log('work on', 5000)
})