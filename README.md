# Shopping Cart RESTful API

Phần Backend của ứng dụng Shopping Cart được viết bằng NodeJS (Typescript), cơ sở dữ liệu MongoDB và được deploy bằng Docker

## Bắt đầu
Hướng dẫn này sẽ giúp bạn tạo một bản copy của project và chạy nó ở máy local của bạn

### Tải về và cài đặt
Để lấy project về máy local, bạn có thể dùng git ([link tải git](https://git-scm.com/downloads)) hoặc tải về một bản nén.
Để clone bằng git,bạn dùng lệnh sau:

```
git clone https://github.com/HieuDevX/shopping-cart-node-api.git
```
Để chạy được project bạn cần cài đặt Docker theo [link này](https://docs.docker.com/install/), đảm bảo bạn đã cài docker và docker-compose bằng 2 lệnh sau
```
docker --version
```
```
docker-compose --version
```

### Chạy
Truy cập vào thư mục source code của ứng dụng:
- Môi trường development, chạy lệnh sau, ứng dụng run ở localhost:3002/
```
docker-compose -f docker-compose.dev.yml -p shopping-dev up -d
```

- Môi trường production, chạy lần lượt 2 lệnh sau, ứng dụng run ở localhost:3001/
```
yarn build or npm run build
```
```
docker-compose -p shopping-prod up -d
```

## Các API hiện tại
Để lấy tất cả các categories:
```
GET: /categories
```
Ví dụ: GET: http://localhost:3001/categories
```json
{
    "data": [
        {
            "_id": "5c25bb28c23c56362f18ada4",
            "name": "XXXX",
            "price": 55.233,
            "image": "/static/img/category/category1.jpg"
        },
        ...
        {
            "_id": "5c25bb28c23c56362f18ada5",
            "name": "Zamit",
            "price": 44.926,
            "image": "/static/img/category/category3.jpg"
        },
    ]
}
```

Để lấy categories theo id:
```
GET: /categories/:id
```
Ví dụ: GET: http://localhost:3001/categories/5c25bb28c23c56362f18ada4
```json
{
    "data": {
        "_id": "5c25bb28c23c56362f18ada4",
        "name": "XXXX",
        "price": 55.233,
        "image": "/static/img/category/category1.jpg"
    }
}
```

Để lấy tất cả products:
```
GET: /products
```
Ví dụ: http://localhost:3001/products
```json
{
    "data": [
        {
            "image": [
                "/static/img/product/pro-big-1.jpg",
                "/static/img/product/pro-big-2.jpg",
                "/static/img/product/pro-big-3.jpg"
            ],
            "_id": "5c25bb28c23c56362f18adad",
            "name": "Angil",
            "price": 2000,
            "status": true,
            "description": "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
            "imageSub": "/static/img/product/pro-big-1.jpg",
            "categoryId": "5c25bb28c23c56362f18ada4"
        },
        ...
        {
            "image": [
                "/static/img/product/pro-big-4.jpg",
                "/static/img/product/product1.jpg",
                "/static/img/product/product2.jpg"
            ],
            "_id": "5c25bb28c23c56362f18adae",
            "name": "Cherie",
            "price": 2000,
            "status": true,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "imageSub": "/static/img/product/pro-big-4.jpg",
            "categoryId": "5c25bb28c23c56362f18ada4"
        }
    ]
}
```

Để lấy product theo id
```
GET: /products/:pr
```
Ví dụ: GET http://localhost:3001/products/5c25bb28c23c56362f18adad
```json
{
    "data": {
        "image": [
            "/static/img/product/pro-big-1.jpg",
            "/static/img/product/pro-big-2.jpg",
            "/static/img/product/pro-big-3.jpg"
        ],
        "_id": "5c25bb28c23c56362f18adad",
        "name": "Angil",
        "price": 2000,
        "status": true,
        "description": "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
        "imageSub": "/static/img/product/pro-big-1.jpg",
        "categoryId": "5c25bb28c23c56362f18ada4"
    }
}
```

Để lấy các product theo categoryId
```
GET: /products/byCategory/:categoryId
```
Ví dụ: GET http://localhost:3001/products/byCategory/5c25bb28c23c56362f18ada4
``json
{
    "data": [
        {
            "image": [
                "/static/img/product/pro-big-1.jpg",
                "/static/img/product/pro-big-2.jpg",
                "/static/img/product/pro-big-3.jpg"
            ],
            "_id": "5c25bb28c23c56362f18adad",
            "name": "Angil",
            "price": 2000,
            "status": true,
            "description": "Phone 6 là một trong những smartphone được yêu thích nhất của Apple. Lắng nghe nhu cầu về thiết kế, khả năng lưu trữ và giá cả, iPhone 6 32GB được chính thức phân phối chính hãng tại Việt Nam hứa hẹn sẽ là một sản phẩm rất HOT",
            "imageSub": "/static/img/product/pro-big-1.jpg",
            "categoryId": "5c25bb28c23c56362f18ada4"
        },
        ...
        {
            "image": [
                "/static/img/product/pro-big-4.jpg",
                "/static/img/product/product1.jpg",
                "/static/img/product/product2.jpg"
            ],
            "_id": "5c25bb28c23c56362f18adae",
            "name": "Cherie",
            "price": 2000,
            "status": true,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "imageSub": "/static/img/product/pro-big-4.jpg",
            "categoryId": "5c25bb28c23c56362f18ada4"
        }
    ]
}
```
