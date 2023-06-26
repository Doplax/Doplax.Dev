//Asegúrate de reemplazar 'your_database_name' con el nombre real de tu base de datos.

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Connect to MongoDB
    if (!client.isConnected()) await client.connect();
    const db = client.db('your_database_name'); // Replace 'your_database_name' with your actual database name

    // Insert form data into the 'formdata' collection
    const result = await db.collection('formdata').insertOne(req.body);

    // Send a response to the client
    res.status(200).json({ message: 'Form data submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
