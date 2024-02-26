import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/slices/contacts.slice'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = () => {
	const dispatch = useDispatch()
	const contactList = useSelector(state => state.contacts.items)
	const filter = useSelector(state => state.filters.name)

	const contactArrByFilters = (filterText, contactArr) => {
		return contactArr.filter(contact =>
			contact.name?.toLowerCase().includes(filterText?.toLowerCase())
		)
	}

	const contactArr = contactArrByFilters(filter, contactList)
	return (
		<ul className={css.ContactList}>
			{contactArr.map(({ id, name, number }) => (
				<Contact
					key={id}
					id={id}
					name={name}
					number={number}
					onContactDelete={() => dispatch(deleteContact(id))}
				/>
			))}
		</ul>
	)
}

export default ContactList
