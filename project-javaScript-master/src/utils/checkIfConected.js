const CheckIfConected = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  //true or fallse
  return token !== null;
};
 export default CheckIfConected;