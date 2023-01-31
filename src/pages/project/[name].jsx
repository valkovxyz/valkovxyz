import {useRouter} from 'next/router';
import {Container} from "@/components/container/container";

const Project = () => {
    const router = useRouter()
    const {name} = router.query

    return (
        <Container>
            <div>Project : {name}</div>
        </Container>
    )
}

export default Project