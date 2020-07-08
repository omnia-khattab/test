const products = [
    {
        id: 1,
        title: "WALL MOUNTED",
        category: "Shinee",
        main_img: "images/shine_0019.png",
        sub_img1:"images/shine_0020.png",
        sub_img2:"images/shine_0021.png",
        sub_img3:"images/shine_0021.png",
        sub_img4:"images/shine_0023.png",
        },
        {
        id: 2,
        title: "COMPACT UNITE",
        category: "Shinee",
        main_img: "images/shine_0001.png",
        sub_img1:"images/shine_0002.png",
        sub_img2:"images/shine_0003.png",
        sub_img3:"images/shine_0004.png",
        sub_img4:"images/shine_0005.png",
            },
        {
        id: 3,
        title: "NICHE LIGHTING",
        category: "Shinee",
        main_img: "images/shine_0011.png",
        sub_img1:"images/shine_0012.png",
        sub_img2:"images/shine_0033.png",
        },
        {
        id: 4,
        title: "PC LAMP",
        category: "Shinee",
        main_img: "images/shine_0014.png",
        sub_img1:"images/shine_0015.png",
        sub_img2:"images/shine_0016.png",
        sub_img3:"images/shine_0017.png",
        sub_img4:"images/shine_0018.png",
        },
        {
        id: 5,
        title: "MINI LIGHT SPOT",
        category: "Shinee",
        main_img: "images/shine_0006.png",
        sub_img1:"images/shine_0007.png",
        sub_img2:"images/shine_0008.png",
        sub_img3:"images/shine_0009.png",
        sub_img4:"images/shine_0010.png",
        },
        {
        id: 6,
        title: "WALL MOUNTED",
        category: "Crystal",
        main_img: "images/crystal_0039.png",
        sub_img1:"images/shine_0040.png",
        sub_img2:"images/shine_0041.png",
        sub_img3:"images/shine_0042.png",
        sub_img4:"images/shine_0043.png",
        },
        {
        id: 7,
        title: "COMPACT UNITE",
        category: "Crystal",
        main_img: "images/crystal_0001.png",
        sub_img1:"images/shine_0002.png",
        sub_img2:"images/shine_0003.png",
        sub_img3:"images/shine_0004.png",
        sub_img4:"images/shine_0005.png",
        },
        {
        id: 8,
        title: "PC LAMP",
        category: "Crystal",
        main_img: "images/crystal_0027.png",
        sub_img1:"images/shine_0028.png",
        sub_img2:"images/shine_0029.png",
        sub_img3:"images/shine_0030.png",
        sub_img4:"images/shine_0031.png",
        },
        {
        id: 9,
        title: "FLAT LAMP",
        category: "Crystal",
        main_img: "images/crystal_0006.png",
        sub_img1:"images/shine_0007.png",
        sub_img2:"images/shine_0008.png",
        sub_img3:"images/shine_0009.png",
        sub_img4:"images/shine_0010.png",
        },
        {
        id: 10,
        title: "STAINLESSTEEL LAMP",
        category: "Crystal",
        main_img: "images/crystal_0032.png",
        sub_img1:"images/shine_0033.png",
        sub_img2:"images/shine_0034.png",
        },
        {
        id: 11,
        title: "NICHE LIGHTING",
        category: "Crystal",
        main_img: "images/crystal_0024.png",
        sub_img1:"images/shine_0025.png",
        sub_img2:"images/shine_0026.png",
        },
        {
        id: 12,
        title: "MINI LIGHT SPOT",
        category: "Crystal",
        main_img: "images/crystal_0020.png",
        sub_img1:"images/shine_0019.png",
        sub_img2:"images/shine_0021.png",
        sub_img3:"images/shine_0022.png",
        sub_img4:"images/shine_0023.png",
        },
        {
        id: 13,
        title: "FOUNTAIN RING",
        category: "Crystal",
        main_img: "images/crystal_0011.png",
        sub_img1:"images/shine_0012.png",
        sub_img2:"images/shine_0013.png",
        sub_img3:"images/shine_0014.png",
        },
        {
        id: 14,
        title: "FOUNTAIN SPOT",
        category: "Crystal",
        main_img: "images/crystal_0015.png",
        sub_img1:"images/shine_0016.png",
        },
        {
        id: 15,
        title: "LED FLEX NEUON",
        category: "Crystal",
        main_img: "images/crystal_0017.png",
        sub_img1:"images/shine_0018.png",
        },
        {
        id: 16,
        title: "STAR EFFECT",
        category:"Crystal",
        main_img:"images/crystal_0035.png",
        sub_img1:"images/shine_0036.png",
        sub_img2:"images/shine_0037.png",
        sub_img3:"images/shine_0038.png",
        sub_img4:"images/shine_0039.png",
        },
    ];
    function addProduct(){
        displayProduct();
    }
    
    function displayProduct() {
        let ProductContainer = ``;
        for (let i = 0; i < products.length; i++) {
            ProductContainer +=
            `<div class="col-md-8 product-images">
                    <img src="${products[i].main_img}" class="w-100 img-item" id="mainImage">
                    <img src="${products[i].sub_img1}" class="img-item  mt-3">
                    <img src="${products[i].sub_img2}" class="img-item  mt-3">
                    <img src="${products[i].sub_img3}" class="img-item  mt-3">
                    <img src="${products[i].sub_img4}" class="img-item  mt-3">
                </div>
                <div class="col-md-4">
                    <div class="porduct-details-right mt-5">
                        <h5>${products[i].title}</h5>
                        <span class="cateogry">cateogry:</span><h7 class="text-muted"><a href="uderwaterLight-Crystal.html">${products[i].category}</a>, underwater light</h7>
                    </div>
                </div>`;
        }
        document.getElementById("productContainer").innerHTML = ProductContainer;
        
    
    }