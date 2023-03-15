const arrOfObj = [
  {
    _id: "64104767a5c11778dc2709d3",
    age: 34,
    eyeColor: "blue",
    name: "Allie Cooper",
    address: "Bandung",
    registered: "2020-07-06T05:13:14 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 2,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767b3044e673585d691",
    age: 40,
    eyeColor: "brown",
    name: "Williamson Ford",
    address: "Bandung",
    registered: "2020-09-10T02:03:14 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Farid",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "basketball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "641047675c4da21093836e42",
    age: 25,
    eyeColor: "brown",
    name: "Santana Robles",
    address: "Bali",
    registered: "2022-04-17T12:48:16 -07:00",
    friends: [
      {
        id: 0,
        name: "Shifly",
        isActive: false,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "banana",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 1,
            hobby: "basketball",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767c51acdd4b33210c5",
    age: 25,
    eyeColor: "green",
    name: "Rogers Wilkerson",
    address: "Bandung",
    registered: "2021-10-20T11:31:38 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 2,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "apple",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "football",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
      {
        id: 2,
        name: "Shifly",
        isActive: true,
        favoriteFruit: "strawberry",
        gender: "male",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "football",
          },
        ],
      },
    ],
  },
  {
    _id: "64104767a1e5a4fa85a9001a",
    age: 38,
    eyeColor: "brown",
    name: "Gabrielle Obrien",
    address: "Bandung",
    registered: "2020-07-05T10:02:01 -07:00",
    friends: [
      {
        id: 0,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 1,
        name: "Theresia",
        isActive: false,
        favoriteFruit: "banana",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "baseball",
          },
          {
            id: 2,
            hobby: "basketball",
          },
        ],
      },
      {
        id: 2,
        name: "Theresia",
        isActive: true,
        favoriteFruit: "apple",
        gender: "female",
        hobby: [
          {
            id: 1,
            hobby: "basketball",
          },
          {
            id: 2,
            hobby: "baseball",
          },
        ],
      },
    ],
  },
];

// wajib ada yang menggunakan array method FIND, FILTER atau MAP dalam pengerjaannya.

// 1) display/print person yang registered dibawah tahun 2022
console.log("1) display/print person yang registered dibawah tahun 2022");
const result1 = arrOfObj.filter((person) => person.registered.slice(0, 4) < 2022);
console.log(result1);

// 2) display person yang address nya Bali
console.log("2) display person yang address nya Bali");
const result2 = arrOfObj.filter((person) => person.address === "Bali");
console.log(result2);

// 3) display friends yang hobby nya football
console.log("3) display friends yang hobby nya football");
const result3 = arrOfObj.filter((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.friends[i].hobby[j].hobby === "football") {
        console.log(person.friends[i]);
      }
    }
  }
});
console.log(result3);

// 4) display hobby dari friends id
console.log("4) display hobby dari friends id 2");
const result4 = arrOfObj.filter((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.friends[i].hobby[j].id === 2) {
        console.log(person.friends[i].hobby);
      }
    }
  }
});
console.log(result4);

// 5) display friends yang gender nya male dan mempunyai hobby basketball
console.log("5) display friends yang gender nya male dan mempunyai hobby basketball");
const result5 = arrOfObj.find((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.friends[i].gender === "male" && person.friends[i].hobby[j].hobby === "basketball") {
        console.log(person.friends[i]);
      }
    }
  }
});
console.log(result5);

// 6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry
console.log("6) display friends yang isActive nya true dan gender nya female dan favorite fruit nya strawberry");
const result6 = arrOfObj.find((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.friends[i].isActive && person.friends[i].gender === "female" && person.friends[i].favoriteFruit === "strawberry") {
        console.log(person.friends[i]);
      }
    }
  }
});
console.log(result6);

// 7) display siapa saja yang mempunyai teman name Theresia
console.log("7) display siapa saja yang mempunyai teman name Theresia");
const result7 = arrOfObj.find((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    if (person.friends[i].name === "Theresia") {
      console.log(person);
    }
  }
});
console.log(result7);

// 8) display hobby id 1 dari friends yang isActive nya true
console.log("8) display hobby id 1 dari friends yang isActive nya true");
const result8 = arrOfObj.find((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.friends[i].hobby[j].id === 1 && person.friends[i].isActive) {
        console.log(person.friends[i].hobby[j]);
      }
    }
  }
});
console.log(result8);

// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball");
const result9 = arrOfObj.find((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    for (let j = 0; j < person.friends[i].hobby.length; j++) {
      if (person.eyeColor === "brown" && person.friends[i].favoriteFruit === "banana" && person.friends[i].hobby[j].hobby === "basketball") {
        console.log(person);
      }
    }
  }
});
console.log(result9);

// 10) display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log("10) display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023");
const result10 = arrOfObj.filter((person) => {
  for (let i = 0; i < person.friends.length; i++) {
    if (person.friends[i].gender === "male" || (person.friends[i].favoriteFruit === "banana" && person.registered.slice(0, 4) === 2023)) {
      console.log(person);
    }
  }
});
console.log(result10);
