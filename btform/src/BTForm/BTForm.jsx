
import React from 'react'

import { ProductTable } from './ProductTable'
import { ProductForm } from './ProductForm'


export const BTForm = () => {
    return (
        <div>
            <div>
                <ProductForm />

            </div>
            <div className=" mt-4">
                <ProductTable />
            </div>
        </div>
    )
}
