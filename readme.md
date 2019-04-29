# typescript-starter-kit
Initial project to start developing a NodeJS application (mainly) with TypeScript.

## Scripts
You can see the list of commands with the flag `-h` or `--help`.
```bash
node dev.js -h
```
### build
Compile the code from the `src` folder to the `dist` folder (set in the `tsconfig.json` file).
Pre-scripts: `clean` and `copy`
```bash
npm run build
or
node dev.js build
```
### clean
Empty the folder where the compiled code will be.
Pre-scripts: none
```bash
npm run clean
or
node dev.js clean
```
### copy
Copy certain files to the compilation folder: `package.json` and `readme.md`.
Pre-scripts: none
```bash
npm run copy
or
node dev.js copy
```
### watch
Compile every time a file change is detected (`build` command).
Pre-scripts: none
```bash
npm run watch
or
node dev.js watch
```
