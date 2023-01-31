import Link from 'next/link';
import { Container } from '@/components/container/container';


export const Projects = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Container>
        {data.map((project) =>
          <div key={project.id}>
            <Link href="project/[name]" as={`/project/${project.name}`}> {project.name}</Link>
          </div>)}
      </Container>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default Projects;