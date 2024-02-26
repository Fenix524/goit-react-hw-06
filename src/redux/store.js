import { configureStore } from '@reduxjs/toolkit'
import { contactReducer } from './slices/contacts.slice'
import { filterReducer } from './slices/filters.slice'
import persistStore from 'redux-persist/es/persistStore'

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filters: filterReducer,
	},
})

export const persistedStore = persistStore(store)
