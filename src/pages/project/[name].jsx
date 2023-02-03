import {useRouter} from 'next/router';
import {Layout} from "@/components/container/layout";

const Project = () => {
    const router = useRouter()
    const {name} = router.query

    return (
        <Layout>
            <div>Project : {name}</div>
        </Layout>
    )
}

export default Project