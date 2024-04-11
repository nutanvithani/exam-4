let products = []

const uimaker = (data) => {

    document.getElementById("box").innerHTML = "";

    data.map((ele, i) => {


        let title = document.createElement("h4")
        title.innerHTML = ele.title


        let price = document.createElement("p")
        price.innerHTML = ele.price

        let description = document.createElement("p")
        description.innerHTML = ele.description

        let category = document.createElement("h1")
        category.innerHTML = ele.category

        let image = document.createElement("img")
        image.src = ele.image;

        let rating = document.createElement("p")
        rating.innerHTML = ele.rating.rate
       
        let rating1 = document.createElement("p")
        rating1.innerHTML = ele.rating.count
       
      

        let div = document.createElement("div")
        div.append(image,category, title, price, description, rating,rating1)
        div.setAttribute("class", "data");
        document.getElementById("box").append(div)

    })

}
const get = async()=>{
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json()
    uimaker(products=data)
    
}
get()
const sorting = (val) => {
    if (val == "htl") {
        products.sort((a, b) => b.price - a.price)
        uimaker(products)
    }

    if (val == "lth") {
        products.sort((a, b) => a.price - b.price)
        uimaker(products)
    }

}
 
const filter=(value)=>{
    let temp=products.filter((ele)=>ele.category==value)
    uimaker(temp);
}


const search=(value)=>{
    let temp=products.filter((ele)=>ele.category==value)                            
    uimaker(temp)
  }
  const handalserch=(e)=>{
    e.preventDefault()
    let val=document.getElementById("value").value
    console.log(val)
    search(val)
  }


document.getElementById("htl").addEventListener("click", ()=>sorting("htl"))
document.getElementById("lth").addEventListener("click", ()=>sorting("lth"))
document.getElementById("men's clothing").addEventListener("click",()=>filter("men's clothing"))
document.getElementById("women's clothing").addEventListener("click",()=>filter("women's clothing"))
document.getElementById("jewelery").addEventListener("click",()=>filter("jewelery"))
document.getElementById("electronics").addEventListener("click",()=>filter("electronics"))
document.getElementById("search").addEventListener("submit",handalserch)
 