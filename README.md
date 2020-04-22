# Advance Typescript Features

### Setting up a typescript project (VSCode) ---> Source [Vscode typescript config](https://code.visualstudio.com/docs/typescript/typescript-compiling)

1. Install typescript globally using `npm install -g typescript`
2. Make a directory for your project like `mkdir myproject` and move into it using `cd myproject`
3. Initialize typescript by running `tsc --init`. This will create `tsconfig.json` in your root directory.
   - In `tsconfig.json`, change following:
     - `"target": "es5"` - Compiles `ts` code to `es5`
     - `"outDir": "js"` - Outputs the `.js` files in `js` directory
     - `"sourceMap": true` - Generates `.map` file (helpful for debugging)
4. Create a simple `.ts` file like `app.ts` and add some `typescript` code in it.
5. You can test the code by running `tsc app.ts` from terminal.
6. Execute `Run Build task` (Shortcut: command + shift + b). If `tsconfig.json` file is present in directory it will give you two options in `vscode`.
   - `tsc: build - tsconfig.json`: This will produce a `app.js` and `app.js.map` file in the `js` directory.
   - `tsc: watch - tsconfig.json`: TypeScript compiler watches for changes to your TypeScript files and runs the transpiler on each change.
7. Making the TypeScript Build the default (VSCode): Select `Configure Default Build Task` from the global Terminal menu.
   - Now when you select the `Run Build Task` command or press (⇧⌘B), you are not prompted to select a task and your compilation starts.
