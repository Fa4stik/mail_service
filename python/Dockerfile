FROM python:3.10
WORKDIR /app

COPY . .
RUN pip install --no-cache-dir -r requirements.txt

ENTRYPOINT ["python3", "/app/server.py"]