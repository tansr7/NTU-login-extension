# NTU Login for Chrome and Firefox

![release](https://img.shields.io/github/v/release/tanshengrong/NTU-login-extension)[![DeepScan grade](https://deepscan.io/api/teams/8036/projects/10182/branches/137010/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8036&pid=10182&bid=137010)

<img src="./assets/options.png" alt="options" align="center"/>

## How it works

Credentials entered by the user in the extension's option page is stored locally in the browser. The extension detects **relevant NTU website** that requires login and inputs the credentials into DOM elements using Javascript. As INTU login uses ASPX login form, JS is unable to access the elements. Credentials are parsed onto the web address instead.

## Installation

Git clone this repository or head over to the [releases](https://github.com/TanShengRong/NTU-login-extension/releases/). 

#### Chrome

Open `chrome://extensions` in Chrome, click `Load Unpacked` and navigate to your local copy of the chrome extension directory.

<img src="./assets/add_extension.gif" alt="add_extension" width="500" align="center"/>

#### Firefox

Drg the xpi file into firefox. 

## Demo

<img src="./assets/login_demo.gif" alt="login_demo" width="500" align="center"/>

#### Potential issues

- Changes in the web addresses for NTU login

### Special thanks

- [SUTD sso login](https://github.com/joel-huang/edimension-sso-login)
