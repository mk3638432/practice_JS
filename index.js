const contact = "234567";

function getContact(contact) {
  const data = { email: null, phone: null };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(contact);
  const isValidNumber = !isNaN(contact);
  if (isValidEmail) {
    data.email = contact;
  } else if (isValidNumber) {
    data.phone = contact;
  }
  return data;
}

const { email, phone } = getContact(contact);

console.log(email, phone);
