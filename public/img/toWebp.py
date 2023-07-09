import os
from PIL import Image

# Definir la ruta del directorio
folder_path = './'

# Listar todos los archivos del directorio
files = os.listdir(folder_path)

# Iterar a través de cada archivo
for file in files:
    # Si el archivo es una imagen PNG
    if file.endswith('.png'):
        # Abrir la imagen
        img = Image.open(folder_path + file)
        # Cambiar el formato a WebP y guardar
        img.save(folder_path + file[:-4] + '.webp', 'webp')

print("¡La conversión ha finalizado!")
