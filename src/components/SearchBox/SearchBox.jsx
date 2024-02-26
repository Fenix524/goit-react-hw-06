import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/slices/filters.slice'
import css from './SearchBox.module.css'

const SearchBox = () => {
	const dispatch = useDispatch()
	const searchFilters = useSelector(state => state.filters)
	console.log(searchFilters)
	return (
		<div className={css.SearchBox}>
			<p className={css.text}>Find contacts by name</p>
			<input
				className={css.input}
				type='text'
				value={searchFilters}
				onChange={evt => {
					dispatch(setFilter(evt.target.value))
					console.log(evt.target.value)
				}}
			/>
		</div>
	)
}

export default SearchBox