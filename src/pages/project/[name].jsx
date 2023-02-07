import {useRouter} from 'next/router';
import {Layout} from "@/components/layout/layout";

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