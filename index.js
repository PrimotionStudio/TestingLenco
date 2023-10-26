const axios = require('axios');
const API_KEY =
  'bf307db1fcb4749120b81470eff89961367c8760f904d8dffcfa78d633d23e67';

async function createVirtualAccount(accountName, description, currency, type) {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };

  const data = {
    accountName,
    description,
    currency,
    type,
  };

  // const instance = await axios.create({
  //   baseURL: 'https://some-domain.com/api/',
  //   timeout: 1000,
  //   headers,
  // });
  const response = await axios.post(
    'https://sandbox.lenco.co/access/v1/virtual-accounts',
    data,
    { headers, timeout: 10000 }
  );

  console.log(response);
  console.log(response.data.bankAccount);
  return 0;
}

createVirtualAccount(
  'My Virtual Account',
  'This is my virtual account.',
  'NGN',
  'merchant'
)
  .then((response) => {
    console.log('Virtual account created successfully!');
    console.log(`Virtual account number: ${response.data.accountNumber}`);
    console.log(`Bank code: ${response.data.bankCode}`);
  })
  .catch((error) => {
    console.log(error);
  });
