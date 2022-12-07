/**
 * All localStorage implementation is here
 * */

class Local {
  static saveUserInfo(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  static removeUserInfo() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  static getToken() {
    return (localStorage.getItem('token') || '');
  }

  static getUser() {
    const userjson = localStorage.getItem('user');
    return userjson ? JSON.parse(userjson) : null;
  }

  static getUserId() {
    const userjson = localStorage.getItem('user');
    if (!userjson) {
      return '';
    }

    const user = JSON.parse(userjson);
    return user.id;
  }

  static getUserRole() {
    const userjson = localStorage.getItem('user');
    if (!userjson) {
      return '';
    }

    const user = JSON.parse(userjson);
    return user.role;
  }

  static getUsername() {
    const userjson = localStorage.getItem('user');
    if (!userjson) {
      return '';
    }

    const user = JSON.parse(userjson);
    return user.username;
  }
}

export default Local;
