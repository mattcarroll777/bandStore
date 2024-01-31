import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../lib/mongo';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const collection = db.collection('tourdates');
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updateData = req.body;
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
    res.status(200).json({ message: 'Tour date updated successfully' });
  } else if (req.method === 'DELETE') {
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({ message: 'Tour date deleted successfully' });
  }
}
