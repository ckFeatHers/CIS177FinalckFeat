# cis-177
Boilerplate for entry-level Web Development/JavaScript class at Southwestern Illinois College

You will need to [install Node for Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
Or, [for Mac OS X](http://blog.teamtreehouse.com/install-node-js-npm-mac)
Or, [for Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux)

You may also want a _decent_ command prompt if you are on Windoze. [You might like this one.](http://cmder.net/)

Other than that, navigate to this folder in your commmand prompt. Type ```npm install``` and it should take care of almost everything.

Note that this setup assumes you want to use [**Visual Studio Code**](https://code.visualstudio.com/) - you probably should as its pretty much the best code-editor on _this_ planet, at least.

When set up properly, among other features, you will have linting within VS Code that will cover your CSS and JS. It is configured to follow industry-standard best practices (not just my opinion).

It features [ESLint](https://eslint.org/), [Stylelint](https://github.com/stylelint/stylelint), and [Prettier](https://prettier.io/), among other things.

Speaking of [Prettier](https://prettier.io/), there is at least 1 setting inside of _.eslintrc.json_ that you may want to change:

```javascript
"printWidth": 80,
```

This determines the 'max width' of each line of text. Depending on your screen size, you may want to decrease this to ```80``` (for smaller screen) or ```120``` for larger screens.

When you open this project in VS Code, it will prompt you to extend a bunch of extensions. Note that you will probably need to exit VS Code and come back in, and that it may prompt you a couple of times.

Those are just my recommendations. Also, in that same folder, _settings.json_ should automatically configure your VS Code to follow my recommendations. You can always change this later.

Also, you should *install the fonts in the _fonts_ folder.*

Oh yeah, the default font-size is set to _18._ If you want to change that, just go to your _VS Code Settings_ and change this line: `"editor.fontSize": 18,`. Recall that in VS Code you can do _cmd/ctrl + shift + p_ to search for whatever menus and stuff you need. So, for example, just type _settings_ and you will probably find what you need.

This is great for beginners, who just want to get up and running. You will want something more robust and thorough for production though, eventually.

Other than that as is said, "Happy Coding!"...except coding is not 'happy'...not until stuff starts working properly. It usually really sucks in the beginning...hang in there!
