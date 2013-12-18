#!/usr/bin/env python
from os import listdir
from os import stat
from os.path import join 
from stat import ST_SIZE
import json

ALLOWED_EXTENSIONS = ('.png', '.jpg', '.jpeg', '.gif')
IMG_DIR = 'images'

images = list()

for filename in listdir(IMG_DIR):
    if filename.lower().endswith(ALLOWED_EXTENSIONS):
        image = dict()
        image['name'] = filename
        image['size'] = stat(join(IMG_DIR, filename))[ST_SIZE]
        images.append(image)

with open('images.json', 'w') as datafile:
    json.dump(images, datafile, indent=2, sort_keys=True)
