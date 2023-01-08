import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../../Context/UserContext';

const AllUsers = () => {

    const { user } = useContext(authContext)
    const uri = `http://localhost:5000/users`
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(uri)
            const data = await res.json()
            return data

        }
    })


    return (
        <div>
            <h3>all users here</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((option, i) => <tr
                                key={i}>
                                <th>{i+1}</th>
                                <td>{option.name}</td>
                                <td>{option.email}</td>
                                <td>{option.role}</td>
                            </tr>)
                        }



                        {/* <tr className="active">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}

                        {/* <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;