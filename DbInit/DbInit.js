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
