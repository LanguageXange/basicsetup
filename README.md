# R3F Project Set up Guide

create a project folder and open in VS code then run the following commands:

1. `pnpm create vite . --template react`

2. `pnpm install three @react-three/drei @react-three/fiber @react-three/rapier leva @react-three/postprocessing`

3. Set up a basic `Experience.jsx` and `App.jsx`

`pnpm run dev`

### Set up Font

1. Download font from https://fonts.google.com
2. Convert it to JSON file with https://gero3.github.io/facetype.js/
3. Load the font with Text3D from react three drei helper ( see `Experience.jsx` file)
