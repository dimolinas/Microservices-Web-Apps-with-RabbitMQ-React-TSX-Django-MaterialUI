import pika, json, os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ConfigApp.settings")
django.setup()

# import models only after calling django.setup()
from houses.models import House

# Input your rabbitmq URL
rabbitmq_url = "amqps://vflpmjoc:vAuHZW7MORkqgOQCvqoSNSqIUxs6ZAeL@jackal.rmq.cloudamqp.com/vflpmjoc"

params = pika.URLParameters(rabbitmq_url)
params._heartbeat = 600
connection = pika.BlockingConnection(params)
channel = connection.channel()
channel.queue_declare("config")

def callback(ch, method, properties, body):
    print('Received in config: ', properties)
    id = json.loads(body)
    print(id)

    house = House.objects.get(id=id)

    if house.likes:
        house.likes += 1
        house.save()
        print('House likes increased!')
    else:
        house.checks += 1
        house.save()
        print('House checks increased!')

channel.basic_consume(queue='config', on_message_callback=callback, auto_ack=True)
channel.start_consuming()
channel.close()