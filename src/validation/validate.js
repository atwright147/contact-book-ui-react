import Ajv from 'ajv';
const ajv = new Ajv({ jsonPointers: true });
import pointer from 'json-pointer';
import userSchema from './schemas/contact.json';

const validate = (schema, data) =>
    ajv.validate(schema, data)
        ? [] : ajv.errors;

const buildHumanErrors = (errors) =>
    errors.map((error) => {
        if (error.params.missingProperty) {
            const property = pointer.get(userSchema, `/properties/${error.params.missingProperty}`);
            return `${property.title} is a required field`;
        }
        const property = pointer.get(userSchema, `/properties${error.dataPath}`);
        if (error.keyword == 'format' && property.example) {
            console.info(property);
            return `${property.title} is in an invalid format, e.g: ${property.example}`;
        }
        return `${property.title} ${error.message}`;
    });

console.info(validate(userSchema, { name: 'Andy Wright' }));
console.info( buildHumanErrors(validate(userSchema, { test: '' })) );

[
    {},
    { name: "Lucrezia Nethersole", email: "not-an-email" },
    { name: "Lucrezia Nethersole", date_of_birth: 'n/a' },
    { name: "Lucrezia Nethersole Has Many Many Names" }
].forEach((input) => {
    console.log(
        buildHumanErrors(validate(userSchema, input))
    );
});
