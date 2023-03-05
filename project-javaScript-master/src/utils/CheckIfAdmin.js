const CheckIfAdmin = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  const isAdmin = token.isAdmin; // declare isAdmin variable and assign the value of token.isAdmin
  return isAdmin;
};

export default CheckIfAdmin;
