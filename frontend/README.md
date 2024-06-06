# Prerequisites to set things up locally

1. [node.js](https://nodejs.org/en/download/prebuilt-installer) Version 20 or greater.
2. [npm](https://github.com/npm/cli/releases/tag/v10.7.0) Version 10 or greater (mostly included with node.js).
3. [git](https://www.git-scm.com/downloads).
4. Code Editor of your choice (Recommended [VS CODE](https://code.visualstudio.com/download))
5. [Docker](https://www.docker.com/products/docker-desktop/) (optional).
6. [nvm](https://github.com/coreybutler/nvm-windows#readme) (optional).

# Setting things up

1. Clone Repo using `git clone <http://repo_link>` cmd in your command line.
2. Run below CMD's or directly locate frontend repo and open in your code editor of your choice.
 
    * `cd hos/frontend`

    * `code .`
  
3. Install all dependencies `npm i`.
4. Use `npm run dev` to run project locally.
5. You should be able to see the project is running on `http://localhost:5173/` successfully .

# Docker CMD's

### Build Image

`docker build -t <define-image_name>`

### Run Docker Container

`docker run -p 8080:8080 -d <image_name>`

### Export and Import docker image without dockerhub

1. Build Image.
2. To Export, convert Image to .tar file from source sysytem by using

   `docker save <image_name> -o <file_name>.tar`

   (you can send .tar file to others to run in their system)

3. To Import and extract image in host system use

   `docker load -i <file_name>.tar`

   (once you get a response stating: Loaded image: <image_name>:latest)

4. Use `docker images` to check the image and you are ready to run.
5. To run use `docker run -p 8080:8080 -d <image_name>` cmd.

# Tech Dependencies / Tools

1. [Vite](https://vitejs.dev/guide/why.html) - Development environment for React with a dev server and hot reloading.
2. [React](https://react.dev/learn) - JS Library for DOM Manipulation.
3. [PrimeReact](https://primereact.org/button/) - Component Library.
4. [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js.
5. [Tailwind](https://tailwindcss.com/docs/flex-basis) - CSS Library.
6. [Typescript](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html) - Dev tool that allows you to catch errors more effectively and write more maintainable and robust code.
