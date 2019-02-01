export class FormData {
  firstName = '';
  lastName = '';
  email = '';
  work = '';
  street = '';
  city = '';
  state = '';
  zip = '';

  clear() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.work = '';
    this.street = '';
    this.city = '';
    this.state = '';
    this.zip = '';
  }
}

export class Personal {
  firstName = '';
  lastName = '';
  email = '';
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}
