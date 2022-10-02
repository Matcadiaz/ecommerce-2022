const products = [
    {id: 1, title:'pizza', description:'string', stock:'number', price:100, pictureUrl:'https://th.bing.com/th/id/OIP.JfnfdEw9EtmJjzzThjwF9AHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7'},
    {id: 2, title:'hamburguesa', description:'string', stock:'number', price:100, pictureUrl:'https://th.bing.com/th/id/OIP.RRrZKc6uX4sKK7ofbFabhQHaEf?w=304&h=184&c=7&r=0&o=5&pid=1.7'},
    {id: 3, title:'ensalada', description:'string', stock:'number', price:100, pictureUrl:'https://th.bing.com/th/id/OIP.GS4IjXURCCwLeQ_Lr61QTQHaE8?w=266&h=180&c=7&r=0&o=5&pid=1.7'},
    {id: 4, title:'empanadas', description:'string', stock:'number', price:100, pictureUrl:'https://th.bing.com/th/id/OIP.qO67oCUxci4Ob4oosQgA5gHaE8?w=303&h=202&c=7&r=0&o=5&pid=1.7'},
]

export const getProducts = () =>{
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            return resolve(products);
        }, 2000)
        
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product)=> product.id === id)
        setTimeout(() => {
            return resolve(result);
        }, 2000);

        
    })
    
    return promise
};