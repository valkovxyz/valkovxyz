import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter()
  const {name} = router.query

  return (
    <div>Project : {name}</div>
  )
}

export default Project