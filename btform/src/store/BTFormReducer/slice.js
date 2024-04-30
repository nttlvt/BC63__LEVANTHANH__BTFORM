import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [
        {
            id: '1232',
            name: 'A',    
            numberPhone: '012234566',
            email: '@gmail.com'
        },
        {
            id: '1232',
            name: 'A',    
            numberPhone: '012234566',
            email: '@gmail.com',
        },
    ],
    productEdit: null,
}

// const slice = createSlice({
//     initialState,
//     name: 'BTFormReducer',
//     reducers: {},
// })

// export const { reducer: btFormReducer, actions: btFormActions } = slice

export const { reducer: btFormReducer, actions: btFormActions } = createSlice({
    initialState,
    name: 'BTFormReducer',
    reducers: {
        addProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productList.push(payload)
        },
        deleteProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productList = state.productList.filter((val) => val.id !== payload)
        },
        editProduct: (state, { payload }) => {
            // console.log('payload: ', payload)
            state.productEdit = payload
        },

        updateProduct: (state, { payload }) => {
            // C1:
            // const index = state.productList.findIndex((val) => val.id === payload.id)
            // if (index !== -1) {
            //     state.productList[index] = payload
            // }

            // C2:
            // state.productList = state.productList.map((item) => {
            //     // if (item.id !== payload.id) return item
            //     // return payload
            //     return item?.id !== payload.id ? item : payload
            // })

            state.productList = state.productList.map((item) =>
                item?.id !== payload.id ? item : payload
            )

            state.productEdit = null
        },
    },
})

{
    id: 2
}

// useEffect
// [{id: 1}, {payload}, {item}]
// ;[{ id: 1 }, { id: 2 }, { id: 3 }].map(item =>{
//     if(item.id !== payload.id) return item
//     return payload

// })
