
## How I set up my R3F Project ( Feel free to use this template for your R3F project! ) 

0.  Create a project folder and open in VS code then run the following commands

1. `pnpm create vite . --template react` ( dot means in the current directory )

2. `pnpm install three @react-three/drei @react-three/fiber @react-three/rapier leva @react-three/postprocessing`

Note: you don't have to install `@react-three/rapier` and `@react-three/postprocessing` if you don't plan to add any physics or [postprocessing effect](https://github.com/pmndrs/react-postprocessing) )

3. Set up a basic `Experience.jsx` and `App.jsx` 

4. `pnpm run dev`

### What you should see
Cube, Sphere, Plane, 3D Text, and GUI
![startertemplatescreenshot](https://github.com/LanguageXange/basicsetup/assets/23568340/8620869e-c3ef-4a37-931e-e663c05ac3c6)



## How to Set up Font

1. Download font from https://fonts.google.com
2. Convert it to JSON file with https://gero3.github.io/facetype.js/
3. Load the font with Text3D from react three drei helper ( see `Experience.jsx` file)



