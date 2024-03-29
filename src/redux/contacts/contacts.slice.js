import { createSlice, nanoid } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const initialState = {
	items: [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	],
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: {
			reducer(state, { payload }) {
				state.items.push(payload)
			},
			prepare({ name, number }) {
				return {
					payload: {
						id: nanoid(),
						name,
						number,
					},
				}
			},
		},
		deleteContact(state, { payload }) {
			const index = state.items.findIndex(contact => contact.id === payload)
			state.items.splice(index, 1)
		},
	},
})

export const { addContact, deleteContact } = contactsSlice.actions

const persistConfig = {
	key: 'contacts',
	storage,
}

export const contactReducer = persistReducer(
	persistConfig,
	contactsSlice.reducer
)
