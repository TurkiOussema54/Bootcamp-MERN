// // we can create a function to return a random / fake "Product"
// const { faker } = require('@faker-js/faker');
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };

// const newFakeProduct = createProduct();
// console.log(newFakeProduct);
// /*
//  * The output of the above console log will look like this
//  * {
//  *   name: 'Anime Figure',
//  *   price: '$568.00
//  *   department: 'Tools' 
//  * }
//  */

const express = require('express');
const { faker } = require('@faker-js/faker');


const createUser = () => {
    const user = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      _id: faker.datatype.uuid(),
    };
    return user;
  };
  
  const createCompany = () => {
    const company = {
      _id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    };
    return company;
  };


  const app = express();
const port = 3001;

app.get('/api/users/new', (req, res) => {
  const user = createUser();
  res.json(user);
});

app.get('/api/companies/new', (req, res) => {
  const company = createCompany();
  res.json(company);
});

app.get('/api/user/company', (req, res) => {
  const user = createUser();
  const company = createCompany();
  const userCompany = { user, company };
  res.json(userCompany);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

  

