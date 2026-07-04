import { Component } from 'react'
import style from './SearchForm.module.css'
class SearchForm extends Component {
	state = {
		quary: '',
	}

	handleChange = e => {
		this.setState({ quary: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		if (!this.state.quary) {
			return
		}
		this.props.onSubmit(this.state.quary)
	}

	render() {
		const { quary } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					onChange={this.handleChange}
					value={quary}
					placeholder='Що шукаємо?'
                    className={style.input}
				/>
				<button type='submit' className={style.button}>Search</button>
			</form>
		)
	}
}

export default SearchForm
