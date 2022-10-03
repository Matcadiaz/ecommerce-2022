const products = [
    {id: 1, title:'PROCESADOR', category:'microprocesadores',description:'PROCESADOR AMD AM4 Ryzen 5 5600X 5ta gen', stock:'number', price:"70.000", pictureUrl:'https://armytech.com.ar/Image/0/450_450-5%205600x.jpg'},
    {id: 2, title:'MOTHERBOARD', category:'motherboards', description:'GIGABYTE GA-A320M-S2H', stock:'number', price:"16.000", pictureUrl:'https://armytech.com.ar/Image/0/450_450-A320M-S2h.png'},
    {id: 3, title:'MEMORIA', category:'memorias', description:'DDR3 KINGSTON 8GB 1600MHZ FURY BEAST', stock:'number', price:"11.200", pictureUrl:'https://armytech.com.ar/Image/0/450_450-ddr3-beast-non-ecc-dimm-black-kms-c-550x550.jpg'},
    {id: 4, title:'FUENTE', category:'fuente', description:'SEASONIC 750W 80+ GOLD FOCUS SSR-750FX GX-750 OEM', stock:'number', price:"52.000", pictureUrl:'https://armytech.com.ar/Image/0/450_450-750W_Gold_Modular.png'},
    {id: 5, title:'PLACA DE VIDEO', category:'placa de video', description:'AMD RADEON RX550 PHANTOM GAMING 2G GDDR5 ASROCK', stock:'number', price:"30.000", pictureUrl:'https://armytech.com.ar/Image/0/110_110-rx_550_2gb.jpg'},
    {id: 6, title:'MOTHERBOARD', category:'motherboards', description:'GIGABYTE B550 AORUS PRO AC', stock:'number', price:"56.100", pictureUrl:'https://armytech.com.ar/Image/0/450_450-Nuevo_proyecto_-_2022-08-09T173411.709.jpg'},
    {id: 7, title:'MEMORIA', category:'memorias', description:'ADATA DDR4 8GB 3000MHZ XPG Gammix', stock:'number', price:"9.400", pictureUrl:'https://armytech.com.ar/Image/0/450_450-%E6%AD%A3%E9%9D%A2%E7%B4%8545%E5%BA%A6.png'},
    {id: 8, title:'PROCESADOR', category:'microprocesadores', description:'INTEL S1700 CORE I5 12600K', stock:'number', price:"72.000", pictureUrl:'https://armytech.com.ar/Image/0/450_450-12600K.jpg'},
]

export const getAllProducts = () =>{
    const promise = new Promise((resolve) => {
        setTimeout(()=>{
            return resolve(products);
        }, 2000)
        
    })

    return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product)=> product.id === parseInt(id))
        setTimeout(() => {
            return resolve(result);
        }, 2000);

        
    })
    
    return promise
};

export const getProductsByCategory = (categoryId) =>{
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(()=>{
            return resolve(results);
        }, 2000)
        
    })

    return promise
};