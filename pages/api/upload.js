import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { filename, content } = req.body;

      if (!filename || !content) {
        console.error("Error: Falta 'filename' o 'content' en el cuerpo de la solicitud");
        return res.status(400).send('Falta "filename" o "content" en el cuerpo de la solicitud');
      }

      const filePath = path.join(process.cwd(), 'data', filename);

      fs.writeFileSync(filePath, content, { encoding: 'utf8' });

      return res.status(200).send('El archivo ha sido guardado correctamente');
    } else {
      console.error('Error: Método no soportado');
      return res.status(405).send('Método no soportado');
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Error interno del servidor');
  }
};

export default handler;
