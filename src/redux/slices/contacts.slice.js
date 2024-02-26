import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: {
			reducer(state, { payload }) {
				if (state.some(contact => contact.id === payload.id)) {
					return
				}
				state.push(payload)
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
			const index = state.findIndex(contact => contact.id === payload)
			state.splice(index, 1)
		},
	},
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactReducer = contactsSlice.reducer
