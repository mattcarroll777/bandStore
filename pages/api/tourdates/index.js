import { connectToDatabase } from '../../../lib/mongo';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('tourdates');

  if (req.method === 'GET') {
    const tourdates = await collection.find({}).toArray();
    res.status(200).json(tourdates);
  } else if (req.method === 'POST') {
    const tourdate = req.body;
    await collection.insertOne(tourdate);
    res.status(201).json({ message: 'Tour date added successfully', tourdate });
  }
  // Add more logic for PUT and DELETE if needed
}
