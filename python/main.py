from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from mailer.mailer import send_mail

app = FastAPI()
load_dotenv()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RespMail(BaseModel):
    to: str
    subject: str
    text: str


@app.post('/python/mail/send')
def mail_send(mail: RespMail):
    info = send_mail(mail.to, mail.subject, mail.text)
    return info


@app.get('/python/test')
def test():
    return 'Thats work!'
