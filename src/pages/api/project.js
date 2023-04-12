import { PrismaClient } from '@prisma/client'
import { cors } from '@/pages/api/cors';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  await cors(req,res)
  if (req.method === 'GET') {
    await getProject(req, res)
  } else if (req.method === 'POST') {
    return await createProject(req, res)
  } else if (req.method === 'PATCH') {
    await updateProject(req, res)
  } else if (req.method === 'DELETE') {
    await deleteProject(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
};

async function createProject(req, res) {
  const body = req.body
  try {
    const newEntry = await prisma.project.create({
      data: {
        name: body.name,
        demoUrl: body.demoUrl,
        githubUrl: body.githubUrl,
        description: body.description,
        technologies: body.technologies,
        screenshots: body.screenshots
      }
    })
    return res.status(200).json(newEntry)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating project', success: false })
  }
}

async function getProject(req, res) {
  const projectId = req.query.id
  try {
    const data = await prisma.project.findUnique({
      where:
        {
          id: Number(projectId)
        }
    })
    return res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error finding project ', success: false })
  }
}

async function updateProject(req, res) {
  const projectId = req.query.id
  const body = req.body
  try {
    const data = await prisma.project.update({
      where: {
        id: Number(projectId)
      },
      data: {
        name: body.name,
        demoUrl: body.demoUrl,
        githubUrl: body.githubUrl,
        description: body.description,
        technologies: body.technologies,
        screenshots: body.screenshots
      }
    })
    return res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'No project found', success: false })
  }
}

async function deleteProject(req, res) {
  const projectId = req.query.id
  try {
    const data = await prisma.project.delete({
      where: {
        id: Number(projectId)
      }
    })
    return res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'No project found', success: false })
  }
}
