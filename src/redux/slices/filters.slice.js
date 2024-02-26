import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter(state, { payload }) {
			return payload
		},
	},
})

export const { setFilter } = filtersSlice.actions
export const filterReducer = filtersSlice.reducer
