// db.auth({
//   user: "root",
//   pwd: "root"
// });

db = db.getSiblingDB("shopping");

db.createCollection("users");
db.createCollection("categories");
db.createCollection("products");
db.createCollection("orders");
db.createCollection("carts");

db["users"].createIndex(
  {
    username: 1
  },
  {
    unique: true
  }
);

db["categories"].createIndex(
  {
    name: 1
  },
  {
    unique: true
  }
);

// db["users"].deleteMany({
//   username: {
//     $ne: "admin"
//   }
// });

// db["categories"].deleteMany({});
// db["products"].deleteMany({});

// categories = db["categories"].insertMany([
//   {
//     name: "XXXX",
//     price: 55.233,
//     image: "/static/img/category/category1.jpg"
//   },
//   {
//     name: "Zamit",
//     price: 44.926,
//     image: "/static/img/category/category3.jpg"
//   },
//   {
//     name: "Zoolab",
//     price: 33.412,
//     image: "/static/img/category/category4.jpg"
//   },
//   {
//     name: "Zathin",
//     price: 40.086,
//     image: "/static/img/category/category5.jpg"
//   },
//   {
//     name: "Pannier",
//     price: 39.746,
//     image: "/static/img/category/category6.jpg"
//   },
//   {
//     name: "Nail Fungus Control",
//     price: 39.746,
//     image: "/static/img/category/category6.jpg"
//   },
//   {
//     name: "Hydrochlorothiazide",
//     price: 39.746,
//     image: "/static/img/category/category7.jpg"
//   },
//   {
//     name: "Carisoprodol",
//     price: 39.746,
//     image: "/static/img/category/category8.jpg"
//   },
//   {
//     name: "Howel",
//     price: 39.746,
//     image: "/static/img/category/category9.jpg"
//   }
// ]);

// products = db["products"].insertMany([
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][0]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][0]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][1]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][1]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][2]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][2]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][3]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][3]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][4]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][4]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][5]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][5]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][6]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][6]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][7]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][8]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][0]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][0]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][1]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][1]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][2]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][2]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][3]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][3]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][4]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][4]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][5]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][5]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][6]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][6]
//   },
//   {
//     name: "Angil",
//     price: 2000,
//     status: true,
//     description:
//       "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
//     image: [
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg",
//       "/static/img/product/pro-big-3.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-1.jpg",
//     categoryId: categories["insertedIds"][7]
//   },
//   {
//     name: "Cherie",
//     price: 2000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-4.jpg",
//     categoryId: categories["insertedIds"][7]
//   },
//   {
//     name: "Shirlee",
//     price: 34500,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product3.jpg",
//       "/static/img/product/product4.jpg",
//       "/static/img/product/product5.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][8]
//   },
//   {
//     name: "MacCoughen",
//     price: 12000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/product6.jpg",
//       "/static/img/product/pro-big-1.jpg",
//       "/static/img/product/pro-big-2.jpg"
//     ],
//     imageSub: "/static/img/product/pro-big-3.jpg",
//     categoryId: categories["insertedIds"][8]
//   },
//   {
//     name: "Guntar",
//     price: 1000,
//     status: true,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
//     image: [
//       "/static/img/product/pro-big-4.jpg",
//       "/static/img/product/product1.jpg",
//       "/static/img/product/product2.jpg"
//     ],
//     imageSub: "/static/img/product/product3.jpg",
//     categoryId: categories["insertedIds"][8]
//   }
// ]);
