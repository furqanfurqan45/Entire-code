async function request() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = x.json();
    return data;
}
async function main() {
    console.log("Data is Loading");
    console.log("Do something else");
    console.log("Load Data");
    let data= await request();
    console.log(data);
    console.log("Process Data");
    console.log("Data Processing Finished");
}
main();