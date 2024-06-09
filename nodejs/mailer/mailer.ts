import nodemailer from 'nodemailer'
import {TMail} from "../model/mailTypes";

const transporter = nodemailer.createTransport({
    host: '',
    port: 22,
    secure: false,
    auth: {
        user: '',
        pass: ''
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendMail = (to: TMail, text: string) =>
    transporter.sendMail({to, text})