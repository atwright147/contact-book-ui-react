import React from 'react';

import listIfExists from '../../helpers/listIfExists.js';

const List = ({ items, onClickRowHandler }) => (
    <div>
        <h2>List</h2>
        
        <table className="contacts-list hover-highlight">
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
                    <tr
                        key={item.id}
                        onClick={() => onClickRowHandler(item.id)}
                    >
                        <td>{item.id}</td>
                        <td>{item.firstName} {item.surname}</td>
                        <td>{item.email}</td>
                        <td>{listIfExists([item.address1, item.address2, item.address3, item.city, item.county, item.postCode])}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </div>
);

export default List;
