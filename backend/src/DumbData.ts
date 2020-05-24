import ProductModel from './models/Products';

const TestProducts = [
    {
        "name":"Camiseta Naruto Kurama",
        "price":"140",
        "photo":"https://images-na.ssl-images-amazon.com/images/I/61AjVNANwzL._AC_UL1155_.jpg",
        "size":"M"
    },
    {
        "name":"Camiseta Dragon Ball UT",
        "price":"140",
        "photo":"https://d26lpennugtm8s.cloudfront.net/stores/948/491/products/01411-e41747bc8d05f7626215884499589706-640-0.png",
        "size":"P"
    },
    {
        "name":"Camiseta Demon Slayer",
        "price":"80",
        "photo":"https://cdn.awsli.com.br/600x450/974/974684/produto/44466177/e37d958349.jpg",
        "size":"M"
    },
    {
        "name":"Camiseta Tanjiro",
        "price":"110",
        "photo":"https://http2.mlstatic.com/camiseta-tanjiro-demon-slayer-kimetsu-no-yaiba-escolha-a-sua-D_NQ_NP_801442-MLB32235395127_092019-F.webp",
        "size":"M"
    },
    {
        "name":"Camiseta Goku",
        "price":"90",
        "photo":"https://nowear.com.br/loja/image/cache/02092015/camiseta-dragon-ball-z-goku-dbz-542-800x800.jpg",
        "size":"G"
    },
    {
        "name":"Camiseta Saitama",
        "price":"90",
        "photo":"https://cdn.awsli.com.br/1000x1000/1093/1093863/produto/40756744/14a6d2756b.jpg",
        "size":"P"
    }
]

export const runDumbData = async () =>{
    await ProductModel.create(TestProducts)
    .catch(err => {
        console.log(err)
    })

}