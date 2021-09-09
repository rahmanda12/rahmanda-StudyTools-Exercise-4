const WebAPI = "https://api.github.com/users/rahmanda12";
const promiseFetch = ()=>{
    fetch(WebAPI)
    .then((response)=>{
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
.then((result)=> {
    console.log('*****Mengambil Data Api menggunakan fetch() dengan Promise*****');
    console.log('Seluruh data dari github user : ');
    console.log(result);
    console.log('Beberapa data dari github user : ');
    console.log('1. Nama = '+ result.name);
    console.log('2. Alamat = '+ result.locatoin);
    console.log('3 Repositori Publik = '+ result.public_repos);
    console.log('---------------------------------------------------------------------');
})
.catch((error)=>{
    console.error(error);
})
}
promiseFetch();




// const asyncFetch = async () => {
//     console.log('*****Mengambil Data Api menggunakan fetch() dengan Promise*****');
//     console.log('Seluruh data dari github user : ');
//     console.log(response);
//     console.log('Beberapa data dari github user : ');
//     console.log('1. Nama = ' + response.name);
//     console.log('2. Alamat = ' + response.locatoin);
//     console.log('3 Repositori Publik = ' + response.public_repos);
//     console.log('---------------------------------------------------------------------');
// }

// asyncFetch()




async function ambilData(){
    let a = await fetch(WebAPI)
    a = await a.json()

    console.log("mengambil data API menggunakan fatch() dengan asynch / await");
    console.log("seluruh data dari github users : ");
    console.log(a);
    console.log("beberapa data dari github users :");
    console.log("1. nama = "  + a.name);
    console.log('2. alamat = ' + a.location);
    console.log('3. repositori publik = ' + a.public_repos);
    console.log("--------------------------------------------------------------------------");
}

ambilData()