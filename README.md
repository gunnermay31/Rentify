- Post a property for rent
- Search and filter properties
- View property details
- Built-in Chat Application for communication between owner and tenant
- Secure JWT authentication using access and refresh tokens
- Send emails between owner and tenant
- Create Property Contract
- Manage tenants
- Register Rent Payment

- [Node.js](https://nodejs.org/en/download/)
- [React.js](https://facebook.github.io/react/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [Ethereal Email](https://ethereal.email/)

 Install the required packages for the backend:

```bash
$ cd server
$ npm install
```

Open a new terminal session and install the required packages for the frontend:

```bash
$ cd client
$ npm install
```

 Configure the environment variables inside the server folder:

```bash

- create a .env file and add the following variables:
- generate secret keys for jwt tokens using online tools

MONGO_URI= <your_mongo_uri>
ACCESS_TOKEN_SECRET_OWNER= <your_access_token_secret_owner>
ACCESS_TOKEN_SECRET_TENANT= <your_access_token_secret_tenant>
REFRESH_TOKEN_SECRET_OWNER= <your_refresh_token_secret_owner>
REFRESH_TOKEN_SECRET_TENANT= <your_refresh_token_secret_tenant>
ACCESS_LIFETIME=15m
REFRESH_LIFETIME=7d
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY= <your_cloudinary_api_key>
CLOUDINARY_API_SECRET= <your_cloudinary_api_secret>
RESET_PASSWORD_KEY= <your_reset_password_key>
EMAIL_VERIFICATION_KEY= <your_email_verification_key>
CLIENT_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER= <your_gmail_address>
EMAIL_PASS= <your_gmail_pass> or <your_gmail_app_password>
```
 Configure the environment variables inside the client folder:

```bash

- create a .env.local file and add the following variables:

VITE_APP_BASE_URL=http://localhost:3000
VITE_APP_API_URL=http://localhost:5000/api
VITE_APP_API_HOST=http://localhost:5000
```

 Run the application:

```bash
$ cd server
$ npm run dev
```
