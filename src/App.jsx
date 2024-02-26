import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { addContact } from './redux/slices/contacts.slice'

const testStartData = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

function App() {
	// NEED REFACTORING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1:
	const [contactArr, setContactArr] = useState(
		localStorage.getItem('contactArr')
			? JSON.parse(localStorage.getItem('contactArr'))
			: testStartData
	)

	useEffect(() => {
		localStorage.setItem('contactArr', JSON.stringify(contactArr))
	}, [contactArr])

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
