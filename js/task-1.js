// DOM özelliklerini ve yöntemlerini kullanarak, aşağıdaki işlevleri gerçekleştiren bir script yazın:

// ul#categories içindeki kategorilerin sayısını ve yani li.item öğelerinin sayısını hesaplar ve konsola yazdırır.
// ul#categories listesindeki her li.item öğesi için, öğenin başlığının metnini ( <h2> etiketi) ve kategorideki öğe sayısını (içinde bulunan tüm <li> öğeleri) bulur ve konsola yazdırır.

const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});