import os


class MailEnv:
    MAIL_HOST: str = os.getenv('MAIL_HOST')
    MAIL_PORT: int = os.getenv('MAIL_PORT')
    MAIL_USER: str = os.getenv('MAIL_USER')
    MAIL_PASS: str = os.getenv('MAIL_PASS')
