import { PrismaClient } from '@prisma/client'
import { cors } from '@/pages/api/cors';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  await cors(req, res)
   if (req.method === 'GET') {
    return await getProjects(res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
};

async function getProjects(res) {
  try {
    const data = await prisma.project.findMany()
    return res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects', success: false })
  }
};

