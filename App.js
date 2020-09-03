import React from 'react'
import axios from 'axios'
import './Style.css'
export default class App extends React.Component
{
	state={	advice:""}

	componentDidMount()
	{
		this.fetchAdvice()
	}

	fetchAdvice()
	{
		axios.get("https://api.adviceslip.com/advice")
		.then(res=>
				{
					let {advice} = res.data.slip
					this.setState({advice})
				}
			)
		.catch(error=>console.log(error))
	}
	render()
	{
		let {advice}=this.state
		return(
			<div className="app">
				<div className="card">
					<h1 className="heading">{advice}</h1>
						<div className="xxx"><button  type="button" onClick={this.fetchAdvice.bind(this)} class="btn btn-success">
							Give Me advice
						</button></div>
				</div>

			</div>
					
			)
	}
}