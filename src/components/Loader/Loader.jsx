import { Component } from 'react'
import { Oval } from 'react-loader-spinner'

class Loader extends Component {
	render() {
		return (
			<Oval
				height={80}
				width={80}
				color='#000000'
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#6b6b6b'
				strokeWidth={2}
				strokeWidthSecondary={2}
                
                wrapperStyle={{ margin: '0  auto' }}
			/>
		)
	}
}

export default Loader
