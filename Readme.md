# Paymentku - Digital Banking

Paymentku is a digital banking application that provides seamless financial services. This app offers secure fund transfers, digital top-ups, and comprehensive transaction tracking.

## Tech stacks
1. **ReactJS**: Frontend
2. **NestJS**: Auth service
3. **Golang**: History & transaction service
4. **Gofiber**: User service
5. **MySQL**: RDBMS
6. **Redis**: Key-value DB



## Main Features

1. **Fund Transfers**: Transfer funds securely to other Paymentku users or external bank accounts.
2. **Digital Top-Up**: Reload digital balances for various e-wallets and services.
3. **Transaction History**: Monitor all top-up and transfer activities with detailed reports.
4. **Login and Registration**: Register and log in to your account easily to access all features.
5. **Logout**: Log out of your account securely.
6. **Delete Account**: Option to delete your account if you no longer wish to use Paymentku services.

## How to clone and run this project

### 1. Clone this repo
```
git clone https://github.com/syafiqparadisam/paymentku.git
```
or you may use other method to clone this repo

### 2. Install docker
you can install it on https://docs.docker.com/engine/install
### 3. Run docker compose
Open your terminal and paste 
```
make install

// Fill .env file first before running docker
make docker-compose
```
### 4. Run each service
Open your each session terminal and paste **ONE BY ONE**
```
make run-auth // auth service run
make run-user // user service run
make run-history // history service run
make run-transaction // transaction service run
make run-fe // frontend run
```
### 5. Open website
Open your website on http://localhost:5173


### How to run this project quickly

### 1. Install docker
you can install it on https://docs.docker.com/engine/install
### 2. Paste this code on your compose.yml
```

```

## Website Usage
### 1. Open the website
- *Link*: http://localhost:5173 

### 2. Registration and Login
- **Registration**: Create a new account by entering the required information such as email, phone number, and password.
- **Login**: Log in to your account with the registered email and password.

### 3. Fund Transfers
- Select the transfer option, enter the recipient's details (account number or phone number), enter the amount to be transferred, and confirm.

### 4. Top-Up
- Select the service you want to top-up, enter the necessary details, and confirm the top-up amount.

### 5. Transaction History
- Go to the "History" menu to view all the top-up and transfer transactions you have made.

### 6. Logout
- To log out of your account, open the profile menu and select "Logout".

### 7. Delete Account
- If you wish to delete your account, open the account settings menu and select "Delete Account". Please note that this action cannot be undone.

## Contact and Support

If you encounter any issues or have questions, please contact our email or dm me on instagram, i already provide on my bio.
Thank you for using Paymentku!

