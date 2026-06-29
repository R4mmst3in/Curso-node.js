const fs = require('node:fs/promises');

(async () =>{
    console.log('Start reading file 1...')
    const data1 = await fs.readFile('./archivo.txt','utf-8')
    console.log('File content:', data1);

    console.log('Resto de ordenes......')
    
    console.log('Start reading file 2...')
    const data2 = await fs.readFile('./archivo2.txt','utf-8')
    console.log('File content:', data2);
})()
