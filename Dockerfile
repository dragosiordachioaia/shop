FROM python:3.6-alpine

WORKDIR /app

ADD requirements.txt /app/requirements.txt
RUN pip install pip -U
RUN pip install -r /app/requirements.txt --upgrade

ADD . /app

EXPOSE 8000
CMD ["gunicorn", "-c", "gunicorn.py", "wsgi:app"]
