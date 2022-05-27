// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstFavColor = new Set();
const secondFavColor = new Set();

//isi data FavColor dari user 1
firstFavColor
  .add("Yellow")
  .add("Pink")
  .add("Purple")
  .add("White")
  .add("Purple");

//isi data FavColor dari user 2
secondFavColor.add("Blue").add("Black").add("Grey");

// console.log(firstFavColor);

// education data pertama
const educationFirst = [
  { name: "SD 01", city: "Jakarta", graduate: 2016 },
  { name: "SMP 02", city: "Jakarta", graduate: 2019 },
  { name: "SMA 03", city: "Tangerang", graduate: "" },
];
// education data kedua
const educationSecond = [
  { name: "SD 02", city: "Jakarta", graduate: 2010 },
  { name: "SMP 03", city: "Bogor", graduate: 2013 },
  { name: "SMA 01", city: "Surabaya", graduate: 2016 },
  { name: "Universitas Maju", city: "Tangerang", graduate: "" },
];

const favoriteRestaurantFirst = new Set();
const favoriteRestaurantSecond = new Set();

// favoriteRestaurant data pertama
favoriteRestaurantFirst
  .add("Bento")
  .add("Sushi")
  .add("Pancake")
  .add("Eggy")
  .add("Tempura")
  .add("Bento")
  .add("Eggy")
  .add("Padang")
  .add("Tteok")
  .add("Sushi")
  .add("Sushi");
// favoriteRestaurant data Kedua
favoriteRestaurantSecond
  .add("Tempura")
  .add("Bento")
  .add("Sushi")
  .add("Pancake")
  .add("Padang")
  .add("Katsu")
  .add("Geprek")
  .add("Pancake")
  .add("Eggy");

//   master jenis kelamin
const genders = ["Male", "Female"];

const firstUser = {
  name: "Monica",
  gender: genders[1],
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: firstFavColor,
  isHavePet: "Yes",
  education: educationFirst,
  favoriteRestaurant: favoriteRestaurantFirst,
};

const secondUser = {
  name: "Wendy",
  gender: genders[0],
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: secondFavColor,
  isHavePet: "Yes",
  education: educationSecond,
  favoriteRestaurant: favoriteRestaurantSecond,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
