from flask import Flask, send_file
import os, json, Image

app = Flask(__name__)

GALLERY_DIR = 'static/gallery/'
THUMBNAIL_DIR = os.path.join(GALLERY_DIR, 'thumbnails')
THUMB_SIZE = (400, 400)

@app.route('/')
def index():
    return send_file('templates/index.html')

@app.route('/thumbnails')
def thumbnails():
    if not os.path.exists(GALLERY_DIR):
        pass

    if not os.path.exists(THUMBNAIL_DIR):
        pass

    thumbs = []

    for image in images():
        thumbnail = os.path.join(THUMBNAIL_DIR, image)
        
        if not os.path.exists(thumbnail):
            create_thumbnail(image)

        thumbs.append(thumbnail)

    return json.dumps(thumbs)

def images():
    for f in os.listdir(GALLERY_DIR):
        if f.endswith(('.png', '.jpg', '.jpeg', '.gif')):
            yield f

def create_thumbnail(image):
    img = Image.open(os.path.join(GALLERY_DIR, image))

    # difference between widht and height:
    diff = img.size[0] - img.size[1]

    """
    # TODO THIS LOGIC
    if diff < 0: # portrait
        box = (abs(diff / 2), 0, img.size[0] - abs(diff / 2), 0)
    
    if diff > 0: # landscape
        box = (0, abs(diff / 2), 0, img.size[1] - abs(diff / 2))

    print box

    img = img.crop(box)
    """
    
    img.thumbnail(THUMB_SIZE, Image.ANTIALIAS)

    img.save(os.path.join(THUMBNAIL_DIR, image))

@app.route('/image/<image>')
def image(image):
    pass

    


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5011)