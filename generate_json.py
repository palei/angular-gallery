#!/usr/bin/env python
from os import listdir
from os import stat
from os.path import join, exists
from stat import ST_SIZE
import json, Image

ALLOWED_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif')

IMG_DIR = 'images'
THB_DIR = 'thumbs'

images = list()

for filename in listdir(IMG_DIR):
    if filename.lower().endswith(ALLOWED_EXTENSIONS):
        image = dict()
        image['name'] = filename
        image['size'] = stat(join(IMG_DIR, filename))[ST_SIZE]
        create_thumbnail(image)
        
        images.append(image)

with open('images.json', 'w') as datafile:
    json.dump(images, datafile, indent=2, sort_keys=True)


def create_thumbnail(image, forced=False):
    if exists(join(THB_DIR, image)) and not forced:
        return
    img = Image.open(join(IMG_DIR, image))
    img.thumbnail((200, 200), Image.ANTIALIAS)
    img.save(join(THB_DIR, image))

