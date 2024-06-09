import smtplib, ssl
import smtplib
from env.MailEnv import MailEnv


def send_mail(to: str, subject: str, msg: str):
    context = ssl.create_default_context()
    with smtplib.SMTP(MailEnv.MAIL_HOST, MailEnv.MAIL_PORT) as server:
        server.ehlo()  # Can be omitted
        server.starttls(context=context)
        server.ehlo()  # Can be omitted
        server.login(MailEnv.MAIL_USER, MailEnv.MAIL_PASS)
    return server.sendmail(MailEnv.MAIL_USER, to, msg)
