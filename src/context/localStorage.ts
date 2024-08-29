interface User {
    email: string;
    username: string;
  }
  
function setUser({ email, username }: User) {
  localStorage.setItem('user', JSON.stringify({ email, username }));
  return JSON.parse(localStorage.getItem('user') || '{}');
}

function getUser() {
  return JSON.parse(localStorage.getItem('user') || '{}');
}
  
export { setUser, getUser };