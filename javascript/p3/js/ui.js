class Product {
    constructor(id, name, price, url) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
    }
}


class Ui {
    constructor() {
        this.productList = {
            'products': [
                new Product(1, 'Samsung A1', '20000 bdt', 'https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1'),
                new Product(2, 'Iphone 5', '50000 bdt', 'https://cdn.mos.cms.futurecdn.net/Gj4BpxWHmrcvZmjaW9nmwf.jpg'),
                new Product(3, 'Samsung A2', '20000 bdt', 'https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1'),
                new Product(4, 'Iphone 6', '50000 bdt', 'https://cdn.mos.cms.futurecdn.net/Gj4BpxWHmrcvZmjaW9nmwf.jpg'),
                new Product(5, 'Samsung A3', '20000 bdt', 'https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1'),
                new Product(6, 'Iphone 7', '50000 bdt', 'https://cdn.mos.cms.futurecdn.net/Gj4BpxWHmrcvZmjaW9nmwf.jpg')
            ]
        }
    }
}