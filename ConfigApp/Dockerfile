FROM python:latest
ENV PYTHONUNBUFFERED 1
ENV PIP_ROOT_USER_ACTION=ignore
WORKDIR /ConfigApp
COPY requirements.txt /ConfigApp/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /ConfigApp
EXPOSE 8001