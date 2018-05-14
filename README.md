# _<p align="center">Nurture using Firebase API</p>_

#### _**<p align="center">By: Julia Sheremet</p>**_

<p align="center">  
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
<a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square"></a>
</p>

## Link to live firebase webpage
https://nurture-b5dae.firebaseapp.com/

## <span style="color:#74875d;">Description</span>

_This Angular webpage application is designed to present listings to users that you can donate/fund for a variety of products._

_This project uses Asynchrony and APIs, and Firebase. All dependencies required are included in this project._

#### Node.js & NPM Installation Instructions
  Install `Node.js`, `TypeScript`, and `AngularCLI` globally through with the following commands in your home directory:
   * `$ brew install node`
   * `$ npm install -g typescript`    
   * `$ npm install -g @angular/cli@1.7.4`
    
## <span style="color:#74875d;">Setup/Installation Requirements</span> :computer:
* In <a href="https://firebase.google.com/">FireBase</a> console, create an account and start a new project.
* Name project and select country/region.
* From Project Overview, navigate to Develop > Database > Realtime Database.
* Select the Rules and change .read and .write to true, then publish.
* In Project Overview, select option to add Firebase to web app.
* Create an api-keys.ts file and save the API credentials like this:
````sh
    // Firebase Credentials
    export const masterFirebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
      messagingSenderId: ""
    };
````

#### Project Setup
  Enter the following code in the command line to install all dependencies:
  * Clone repository on your local computer.
  * Run `$ npm install` to load all required packages
  * Run `$ng serve --open` to run developement mode
  
#### Website Functions
  * Add single listing to database on Admin page.
  * Firebase will auto-generate keys for each album.
  * Add multiple albums to database via JSON import in Firebase Console.

  Album data structure:
  ````
  Listing {
    image: string
    title: string
    description: string
    funding: string
  }
````
 
## <span style="color:#74875d;">Known Bugs</span>

_Feel free to email me at [juliajessicasher@gmail.com](mailto:juliajessicasher@gmail.com) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments of my work. :+1:_

## <span style="color:#74875d;">Technologies Used</span>

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| Webpack | CSS (Bootstrap) |
| Eslint | JavaScript (JQuery) |
| Popper | Angular |
| CSS-loader & Style-loader | Node |

### <span style="color:#74875d;">License</span>

Copyright (c) 2018 ****_Julia Sheremet_****

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
