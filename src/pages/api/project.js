import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await getProject(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
};
async function getProject(req, res) {
  const projectId = req.query.id
  try {
    const data = await prisma.project.findUnique({
      where:
        {
          id: Number(projectId)
        }
    })
    console.log(data)
    return res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error finding project ', success: false })
  }
}
