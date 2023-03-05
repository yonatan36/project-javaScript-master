class User {
  id;
  name;
  lastName;
  state;
  city;
  country;
  email;
  phone;
  houseNumber;
  password;
  zipCode;
  street;

  constructor(
    id,
    name,
    lastName,
    state,
    city,
    country,
    email,
    phone,
    houseNumber,
    password,
    zipCode,
    street
  ) {
      this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.state = state;
    this.city = city;
    this.country = country;
    this.email = email;
    this.phone = phone;
    this.houseNumber = houseNumber;
    this.password = password;
    this.zipCode = zipCode;
    this.street = street;
    this.isAdmin = false;
  
  }
}
export default User;
