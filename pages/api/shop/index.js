import { connectToDatabase } from '../../../lib/mongo';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('shop');

  if (req.method == 'GET') {
    const products = await collection.find({}).toArray();
    res.status(200).json(products);
  } else if (req.method == 'POST') {
    const product = req.body;
    await collection.insertOne(product);
    res.status(201).json({ message: 'product added succesfully', product });
  }
}
