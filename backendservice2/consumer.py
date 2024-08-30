import pika, json

from app import House, db, core

amqp = "amqps://vflpmjoc:vAuHZW7MORkqgOQCvqoSNSqIUxs6ZAeL@jackal.rmq.cloudamqp.com/vflpmjoc"
params = pika.URLParameters(amqp)
params._heartbeat = 600
connection = pika.BlockingConnection(params)
channel = connection.channel()

channel.queue_declare(queue='core')

def callBack(ch, method, properties, body):
    print("Received in core")
    data = json.loads(body)
    print(data)

    with core.app_context():
        if properties.content_type == 'house_created':
            house = House(id=data['id'], name=data['name'], image=data['image'], description=data['description'])
            db.session.add(house)
            db.session.commit()
            print("House Created")

        elif properties.content_type == 'house_updated':
            house = House.query.get(data['id'])
            house.name = data['name']
            house.image = data['image']
            house.description = data['description']
            db.session.commit()
            print('House Updated')

        elif properties.content_type == 'house_deleted':
            house = House.query.get(data['id'])
            db.session.delete(house)
            db.session.commit()
            print("House Deleted")

channel.basic_consume(queue='core', on_message_callback=callBack, auto_ack=True)
channel.start_consuming()
channel.close()