// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTFormReducer/slice'

export const ProductTable = () => {
    const { productList } = useSelector((state) => state.btFormReducer)
    console.log('productList: ', productList)

    const dispatch = useDispatch()

    return (
        <div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>MSSV</th>
                        <th>NAME</th>
                        <th>SDT</th>
                        <th>EMAIL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {productList.map((val) => {
                        return (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>
                                    <img width={80} height={80} src={val.image} alt="..." />
                                </td>
                                <td>{val.name}</td>
                                <td>{val.price}$</td>
                                <td>{val.description}</td>
                                <td>{val.productType}</td>
                                <td>
                                    <button className="btn btn-danger">Xóa</button>
                                    <button className="btn btn-info ms-3">Edit</button>
                                </td>
                            </tr>
                        )
                    })} */}
                    {productList.map((val) => (
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.numberPhone}</td>
                            <td>{val.email}</td>
                
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => dispatch(btFormActions.deleteProduct(val.id))}
                                >
                                    Xóa
                                </button>
                                <button
                                    className="btn btn-info ms-3"
                                    onClick={() => dispatch(btFormActions.editProduct(val))}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
