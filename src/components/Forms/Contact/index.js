import React from 'react';
import { Control, Form } from 'react-redux-form';

const ContactForm = () => (
    <Form model="dynamic">
        <h1>Contact</h1>

        <div className="field">
            <label htmlFor=".firstName">First name</label>
            <Control.text model=".firstName" id=".firstName" />
        </div>

        <div className="field">
            <label htmlFor=".surname">Surname</label>
            <Control.text model=".surname" id=".surname" />
        </div>

        <div className="field">
            <label htmlFor=".email">Email</label>
            <Control.text model=".email" id=".email" />
        </div>

        <hr />

        <div className="field">
            <label htmlFor=".address1">Address 1</label>
            <Control.text model=".address1" id=".address1" />
        </div>

        <div className="field">
            <label htmlFor=".address2">Address 2 (Optional)</label>
            <Control.text model=".address2" id=".address2" />
        </div>

        <div className="field">
            <label htmlFor=".address3">Address 3 (Optional)</label>
            <Control.text model=".address3" id=".address2" />
        </div>

        <div className="field">
            <label htmlFor=".city">City</label>
            <Control.text model=".city" id=".city" />
        </div>

        <div className="field">
            <label htmlFor=".county">County</label>
            <Control.text model=".county" id=".county" />
        </div>

        <div className="field">
            <label htmlFor=".postCode">Post Code</label>
            <Control.text model=".postCode" id=".postCode" />
        </div>

        <button type="submit">Save</button>
    </Form>
);

export default ContactForm;
