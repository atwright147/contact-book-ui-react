import React from 'react';

const List = ({ items }) => (
    <div>
        <h2>List</h2>
        
        <table className="contacts-list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                { items && items.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName} {item.surname}</td>
                        <td>{item.email}</td>
                        <td>{item.address1} {item.address2} {item.address3} {item.city} {item.postcode}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </div>
);

export default List;
