import * as CompanyRepository from '../repositories/CompanyRepository.js';
import * as AddressRepository from '../repositories/AddressRepository.js';

export const GetCompanies = async () => {
  try {
    const companies = await CompanyRepository.GetCompanies();

    for (const company of companies) {
      await GetCompanyUsers(company);
    }

    return companies;
  } catch (error) {
    throw error;
  }
}

const GetCompanyUsers = async (company) => {
  const companyObject = { ...company };
  company.users = await CompanyRepository.GetCompanyUsers(company.id);

  for (const user of company.users) {
    user.company = companyObject;
    await GetUserAddress(user);
    if (user.address != null) {
      user.address.zipcode = formatZipcode(user.address.zipcode);
    }
  }
  company.users = OrderUsersByZipcode(company.users);
}

const GetUserAddress = async (user) => {
  user.address = await AddressRepository.GetAddress(user.address);
}

const OrderUsersByZipcode = (users) => {
  if (users != null) {
    users = users.sort((user1, user2) => {
      const { zipcode: zipcode1 } = user1.address;
      const { zipcode: zipcode2 } = user2.address;

      let index = zipcode1.length - 1;

      let numberZ1 = parseInt(zipcode1[index]);
      let numberZ2 = parseInt(zipcode2[index]);

      while (zipcode1[index] === zipcode2[index]) {
        index--;
        numberZ1 = parseInt(zipcode1[index]);
        numberZ2 = parseInt(zipcode2[index]);
        if (index < 0) return 0;
      }

      if (numberZ1 < numberZ2) return -1;
      if (numberZ1 > numberZ2) return 1;
    });
  }

  return users;
}

const formatZipcode = (zipcode) => {
  const formattedZipcode = `${zipcode.substring(0, 5)}-${zipcode.substring(5, 9)}`;

  return formattedZipcode;
}