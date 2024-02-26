import { useDispatch } from 'react-redux'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { addContact } from './redux/slices/contacts.slice'

function App() {
	const dispatch = useDispatch()
	const handleSubmit = ({ contactname, contactphone }) => {
		dispatch(addContact({ name: contactname, number: contactphone }))
	}

	return (
		<>
			<div>
				<h1>Phonebook</h1>
				<ContactForm handleSubmit={handleSubmit} />
				<SearchBox />
				<ContactList />
			</div>
		</>
	)
}

export default App
