import pika, json

amqp = "amqps://vflpmjoc:vAuHZW7MORkqgOQCvqoSNSqIUxs6ZAeL@jackal.rmq.cloudamqp.com/vflpmjoc"

params = pika.URLParameters(amqp)
params._heartbeat = 600

connection = pika.BlockingConnection(params)
channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='config', body= json.dumps(body), properties=properties)