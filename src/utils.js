import fs from 'fs';


export const readFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    return JSON.parse(fileContent);  
}

export const writeFile = async (fileName, content) => {
    try {
        await fs.promises.writeFile(fileName, JSON.stringify(content)); 
    } catch (err) {
        console.log(err)
    } 
}

// writeFile("./products.json", productos)

// const productos2 = await readFile("./products.json")
