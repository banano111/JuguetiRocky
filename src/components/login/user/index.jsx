import React, { useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast';
import { get_user_sales } from "../../../services";
import UserContext from "../../../context/UserContext";

const UserPage = () => {

    const { user, isUserAuth } = useContext(UserContext)
    const [hasError, setHasError] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [allBuysHook, setAllBuys] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            const allBuys = await get_user_sales(user.user_id)
            console.log(allBuys)
            if (!allBuys.hasError) {
                setAllBuys(allBuys)
                setIsReady(true)
                setHasError(false)
            }
            else {
                setAllBuys({
                    "hasError": true,
                    "error": allBuys.error
                })
                setHasError(true)
                setIsReady(false)
            }
        }
        fetchData()
    }, []);


    return (
        <>

            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"># De Orden</th>
                                    <th scope="col">Fecha Compra</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Estatus de Envio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isReady
                                        ? <TableBuys
                                            allBuysHook={allBuysHook}
                                        />
                                        : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

const TableBuys = (props) => {

    return (
        <>
            {
                props.allBuysHook.map((compra) => (
                    <TablaCompleta
                        compra={compra}
                    />
                ))
            }
        </>
    )

}

const TablaCompleta = ({compra}) => (

    <>
        <tr>
            <th scope="row">{compra.sale_id}</th>
            <td>28/11/2021</td>
            <td>${compra.total_sale}</td>
            <td>{compra.ship_status}</td>
        </tr>
    </>


)

export default UserPage;