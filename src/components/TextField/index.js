//Practice 2
const data = [ 
      { destinationKey: "default", fileName: "image1.jpg" },
      { destinationKey: "dest1", fileName: "image2.jpg" },
      { destinationKey: "dest3", fileName: "image3.jpg" }, 
      { destinationKey: "default", fileName: "image4.jpg" },
     ];

const unique= {}

data.forEach(e => {
    if(unique[e.destinationKey]) {
        //taking the keys which are being repeated
        unique[e.destinationKey].push(e.fileName)
        
    } else {
        //taking the new keys and adding them in object
    unique[e.destinationKey] = [e.fileName]
    }
})

console.log(unique);

// {
//     "default": ["image1.jpg", "image4.jpg"],
//     "dest1": ["image2.jpg"],
//     "dest3": ["image3.jpg"]
// }
