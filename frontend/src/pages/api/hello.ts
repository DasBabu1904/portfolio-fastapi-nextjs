import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name } = req.query;
  
  if (!name) {
    return res.status(400).json({ message: 'Name parameter is required' });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
}