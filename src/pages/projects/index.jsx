import { Projects } from '@/components/projects/projects';

export const ProjectsPage = ({ data }) => {

  return (
    <>

    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const data = await res.json()
  return {
    props: { data }
  }
}

export default ProjectsPage;