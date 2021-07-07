# React Native Lab 1

Welcome to this crash course on how to create a mobile app with React Native! Today's lab has three parts.

# Part 1: Set Up
*This heavily adapts content from [Expo Docs](https://docs.expo.io/get-started/installation/) and [React Native Docs](https://reactnative.dev/docs/environment-setup)*.

### 1. ✨ A quick overview 
We'll be using the following tools from Expo to develop apps: 

1. a command line app called Expo CLI to initialize and serve your project
2. VSCode as our text editor 
3. either Expo Go, which allows us to open our projects on the phone, or any web browser to open the project on the web.

We'll be using `yarn` instead of `npm` as our package manager; you can read more about the difference [here](https://www.sitepoint.com/yarn-vs-npm/)! In short, `yarn` is becoming more popular than 

### 2. 👾 In your terminal, type the following:

```
brew install watchman

yarn global add expo-cli
````
* Watchman was developed by Facebook to watch for file changes. It'll help with hot reloading later!
* The second command will download the Expo CLI using yarn. 

### 3. 📲 On your phone, download the Expo Go app:

[🤖 Android Play Store - Android Lollipop (5) and greater.
](https://play.google.com/store/apps/details?id=host.exp.exponent)

[🍎 iOS App Store - iOS 11 and greater.](https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent)

### 4. 👾 In your terminal, initialize an Expo project:

```
cd desktop/sea
# or, wherever you want your files to be located!

expo init my-app
```
You might be asked to choose a template. For now, let's go with Managed workflow -> blank. 

<img width="671" alt="image" src="https://user-images.githubusercontent.com/26272095/124736028-7655e480-decb-11eb-8658-600256726c9e.png">

Then, navigate to the project directory and open up the files in VSCode. 

```
cd my-app

code .
```
### 5. 👾 Finally, let's launch the project on both web and mobile. 

Start the development server with the following: 

```
expo start
```
This should open up something in your web browser! In the future, you only need to run this command to get your project running. 

![image](https://user-images.githubusercontent.com/26272095/124739226-8622f800-dece-11eb-9006-85771624dff2.png)


✅ Click "Run in web browser" and you should see a blank screen with the words "Open up App.js to start working on your app!"

✅ Try scanning the QR code with your Expo app/Camera to see the same screen on your phone. 

From the Expo Docs: "When you run `expo start`, Expo CLI starts Metro Bundler, which is an HTTP server that compiles the JavaScript code of our app using Babel and serves it to the Expo app. It also pops up Expo Dev Tools, a graphical interface for Expo CLI."

### 6. 👾 Make your first change. 

Open up `App.js` in VSCode.

Change the text on line 8 to whatever you want. You should see it update on your device automatically. 

Woohoo! You got your first mobile app running. 


# Part 2: Components

We're going to learn about React Native components in baby steps. For today, follow along the Expo tutorial to start using and styling some common components. 

👇🏼 Note: instead of trying the examples on Snack, go ahead and make the changes in VSCode to the project you just created in the setup. 

### 1. 🌈 [Styling text](https://docs.expo.io/tutorial/text/)

### 2. 👾 [Adding an image](https://docs.expo.io/tutorial/image/)

### 3.  [Creating a button](https://docs.expo.io/tutorial/button/)




# Part 3: Getting Down to Business with State and Props






### Optional -- if you're using the iOS simulator, 
In the emulator with your app open, click “cmd+d”, and enable hot reloading, but disable live reloading. 

* Hot reloading will reflect whatever changes you make, but it will keep the state of the app. Hot reload is helpful with faster refresh times and it’s suitable for UI tweaks. You can also reload manually from the same menu “cmd+d”.
* Live reload will reload the whole app. 
