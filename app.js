import express from "express"
import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

const app = express()
const PORT = 3000

inquirer
  .prompt([{
     /* Pass your questions in here */
     message: "Type in your url",
     name: "URL"
  }  
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});