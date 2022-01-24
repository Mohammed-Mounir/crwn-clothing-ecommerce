<h1 align="center">CRWN Clothing</h1>

## 👨🏻‍💻 About the project

CRWN Clothing is FullStack E-Commerce Application using React, Redux and Firebase.

Live demo: [https://crwn-live-2022.herokuapp.com/](https://crwn-live-2022.herokuapp.com/)

## 🚀 Technologies

- React
- Redux and Redux Saga
- React Router DOM
- SASS and Styled Components
- Stripe API
- Firebase
- Node.js and Express.js

## 💻 Getting started

### 📋 Prerequisites

- Node.js
- Google Firebase account
- Stripe Account

### 📝 Installation

**Clone project**

```bash
$ git clone https://github.com/Mohammed-Mounir/crwn-clothing-ecommerce.git
```

**Server**

```bash
# At main/current folder
# Install server dependencies
$ yarn
# Start server
$ yarn server
```

**Client**

```bash
# Navigate to client folder
$ cd client
# Install client dependencies
$ yarn
# Start client
$ yarn client
```

**Set your Firebase config and replace it with the existing one in your firebase.utils.js file, at the following location**

```bash
crwn-clothing\client\src\firebase\firebase.utils.js
```

**Create '.env' file on the root folder and add your Stripe Secret key**

```
STRIPE_SECRET_KEY=WRITE YOUR KEY HERE
```
