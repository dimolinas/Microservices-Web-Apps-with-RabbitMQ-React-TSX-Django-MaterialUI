FROM python:latest
ENV PYTHONUNBUFFERED 1
ENV PIP_ROOT_USER_ACTION=ignore
WORKDIR /backendservice2
COPY requirements.txt /backendservice2/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
COPY . /backendservice2
EXPOSE 5001