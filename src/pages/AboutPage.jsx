import { Outlet } from "react-router";

export default function AboutPage(props){
	return(
		<div>
			<h1>About</h1>
			<Outlet/>
		</div>
	)
}