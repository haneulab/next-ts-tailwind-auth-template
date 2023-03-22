import dynamic from "next/dynamic"
const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(()=>import("@nextapp/Meta"))

const dashboard = () => {
	return (
		<>
			<Meta />
			dashboard
		</>
	)
}

dashboard.getLayout = (page) => {
	return <Layout>{page}</Layout>
}

export default dashboard
