# simple-pastebin

It's literally just a <textarea>, that saves to localStorage. Paste stuff, and it automatically saves as you paste/type!

![Screenshot of chrome extension](./assets/chromeStore/tile440x280.png)

## Features

* It's literally a text area! 🤯
* Saves to localStorage as you change the text area! 💾
* Loads from localStorage when you re-open the extension! ♻️
* Uses [color palettes](https://en.wikipedia.org/wiki/Game_Boy_Color#Color_palettes_used_for_original_Game_Boy_games) that the GameBoy Color would use to colorize original Gameboy games! 🎨
* Has rad 8-bit characters running across the header! 🎮

## Motivation

Because I wanted it, and I got tired of either going to [pastebin](https://pastebin.com/), or [paste.ubuntu.com](https://paste.ubuntu.com/). And plus, I can build random stuff way past my bedtime, I'm and adult! Thank you very mcuh. 😂

Also, I wanted to see how fast I could a Chrome extension. Including publishing it on the store, and having a semi-dope looking Github page. The answer to that is about ~3 hours. ⏱️

## Should you use this?

Probably not. 🤔 Unless you have the following qualities:

1. You are also tired of going to random websites with random text areas (that don't save to localStorage)
2. You happen to really love the GameBoy, and don't mind the questionable CSS colors that remind you of the GameBoy Color.
3. You think it is really cool when random and fun animations play across the top of your applications.


## Contributing

There is no build system, this is as vanilla JS as it gets! 🍦

But, we do have some convience npm scripts for making releases:

`npm run deploy` - To run np and simply do a github release.
`npm run zip` - To make a zip file for the chrome web store.

## LICENSE

[MIT](https://oss.ninja/mit). 📄

However, Images in `assets/walks` are random images I found on the internet for something cool / fun. They are not owned by me, and simply were added to add some fun to a Free and Open Source Chrome Extension. :)
