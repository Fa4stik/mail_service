import nodemailer from 'nodemailer'
import {TMail} from "../model/mailTypes";

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT ?? ''),
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendMail = (to: TMail, text: string) =>
    transporter.sendMail({to, text})