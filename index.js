// 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
// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstFavColor = new Set();
const secondFavColor = new Set();

//isi data FavColor dari user 1
firstFavColor.add("Yellow");
firstFavColor.add("Pink");
firstFavColor.add("Purple");
firstFavColor.add("White");

//isi data FavColor dari user 2
secondFavColor.add("Blue");
secondFavColor.add("Black");
secondFavColor.add("Grey");

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
  favoriteColor: Array.from(firstFavColor),
  isHavePet: "Yes",
  education: educationFirst,
  favoriteRestaurant: Array.from(favoriteRestaurantFirst),
};

const secondUser = {
  name: "Wendy",
  gender: genders[0],
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: Array.from(secondFavColor),
  isHavePet: "Yes",
  education: educationSecond,
  favoriteRestaurant: Array.from(favoriteRestaurantSecond),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
