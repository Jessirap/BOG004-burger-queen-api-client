// import axios from 'axios';
// const BASE_URL = 'http://localhost:8080/';

const getUser = () => {
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          name: "Ana Pérez",
          email: "anita.borg@systers.xyz",
          password:
            "$2a$10$itZyq8s85.gdN4ynUG567ePfM675smRktiKGgAGSQHwvmXhGNqLSq",
          roles: "admin",
          id: 1,
        },
        {
          name: "Grace Hopper",
          email: "grace.hopper@systers.xyz",
          password:
            "$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey",
          roles: "admin",
          id: 2,
        },
      ],
    });
  });
};

const createUser = () => {
  return new Promise((resolve) => {
    resolve({
      data: {
        name: "Ana Pérez",
        email: "anita.borg@systers.xyz",
        password: "$2a$10$itZyq8s85",
        roles: "admin",
        id: 1,
      },
    });
  });
};

// const login = (payload) => {
//     return axios.post(BASE_URL+'login', payload);
// }

// const saveUser = (user) => {
//     sessionStorage.setItem('user', JSON.stringify(user));
// }

const getUserData = () => {
  return {
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndhaXRlckBmb29kZWxpY2lvdXMuY29tIiwiaWF0IjoxNjU0Mjg4MjA0LCJleHAiOjE2NTQyOTE4MDQsInN1YiI6IjMifQ.9j4oHuY3ZA1hmrljD3390K4jjrOYMb0tAO9BAUMZnWo",
    user: { email: "waiter@foodelicious.com", roles: { waiter: true }, id: 3 },
  };
};

const getToken = () => {
  return "tokenx";
};

// //  const getId = () => {
// //     return 3;
// // }

// const getUser = () => {
//     return {
//         "name": "Ana Pérez",
//         "email": "anita.borg@systers.xyz",
//         "password": "$2a$10$itZyq8s85",
//         "roles": "admin",
//         "id": 1
//     }};

export { getUser, getUserData, getToken, createUser };

// const getUsers = () => {
//     return axios.get(BASE_URL+'users',{
//         headers: {
//             authorization: 'Bearer ' + getToken()
//         }

// });
// }

// const getId = () => {
//         return getUserData().id;
//     }
