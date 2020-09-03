const array_2 = [
  ["赤", "青", "紫"],
  ["緑", "紫", "黒"],
];

console.log(array_2[1][1]); //紫

//連想配列=> ES6以降からでてきた

//オブジェクト（もの）

const soccer = {
  honda: {
    height: 170,
    hobby: "soccer",
  },
  kagawa: {
    height: 160,
    hobby: "soccer",
  },
};

console.log(soccer["honda"]["height"]);

//////////////////////////////////////////////////

//for =>繰り返しの回数を指定する時に使う
//for in =>問題があってあまり使われていない
//for of(ES6以降) => 使いやすい

const scores = [1, 2, 3];

//one of them
for (score of scores) {
  console.log(score);
}

//////////////////////////////////////////////////

//関数

const comment = "kome";

function getComment(string) {
  console.log(string);
}
getComment("komeclub");

function sum(int1, int2) {
  let int3 = int1 + int2;
  return int3;
}
const total = sum(2, 3);

console.log(total);

//////////////////////////////////////////////////

//オブジェクト => 値と関数を持っているもの

//注意点
//オブジェクト内だと、値はプロパティ;関数はメソッドと呼ばれる

//標準オブジェクト

//Map
//=> setで値を設定して、getで取得する
//=> for of との相性がよい

const myMap = new Map();

myMap.set("id", 2);
myMap.set("name", "honda");

console.log(myMap);
console.log(myMap.get("name"));

console.log(myMap.keys());
console.log(myMap.values());

const valueList = myMap.values();

for (value of valueList) {
  console.log(value);
}

//コールバック関数 => 引数に関数が入ってくる

let fruit = ["mikan", "apple"];
console.log(fruit);

fruit.forEach(function (input) {
  console.log(input);
});

//アロー関数
const getItem = () => {
  console.log("ar");
};
getItem();

//Array.filter

const sco = [1, 2, 3, 4, 5];

const newScores = sco.filter((value) => {
  return value >= 3;
});
console.log(newScores);

//Array.find

const mems = ["honda", "kagawa", "nagatomo"];
const mem = mems.find((value) => {
  return value === "nagatomo";
});
console.log(mem);

//Array.map -> 配列をもとに新しい配列を作る

const userList = [1, 2, 3, 4, 5];

const userIdList = userList.map((value) => {
  return `user_${value}`;
});
console.log(userIdList);

//オブジェクトオブジェクト

const test = {
  test1: 1,
  test2: 2,
  test3: 3,
};
console.log(Object.values(test));

for (value of Object.values(test)) {
  console.log(value);
}

//ユーザー定義関数+組み込み関数

const postalCode = "123-4567";

function checkPostalCode(string) {
  //ハイフンがあったらハイフンをなくす
  const replaced = string.replace("-", "");
  const length = replaced.length;

  if (length === 7) {
    return true;
  }
  return false;
}

console.log(checkPostalCode(postalCode));

//オブジェクトに関数を組み込む

const postal = {
  checkPostalCode(string) {},
};

