# Email Sending App

This is a Node.js server that allows you to send emails using the `nodemailer` library. The server uses the `maildev` package to simulate a local email server, allowing you to test email sending without a real SMTP server.

## Features

- Sends emails using the `nodemailer` library
- Simulates a local email server using `maildev`
- Provides a simple API endpoint to send emails
- Handles errors and returns appropriate responses

## Prerequisites
Node.js installed on your system
dotenv package installed (npm install dotenv)
express package installed (npm install express)
nodemailer package installed (npm install nodemailer)
maildev package installed (npm install maildev)

## Prerequisites
- Node.js installed on your system
- `dotenv` package installed `(npm install dotenv)`
- `express` package installed `(npm install express)`
- `nodemailer` package installed `(npm install nodemailer)`
- `maildev` package installed `(npm install maildev)`

## Installation 

1) Clone the repository:

```bash
git clone https://github.com/SanjayvVarma/Email-sending-application.git
```

2) Install the required dependencies:

```bash
npm install
```

3) Create a `.env` file in the root directory and add the following environment variable:

```bash
PORT=8080
```

## Usage

1) Start server

```bash
npm start
```

2) The server will start running on the specified port (default is `8080`).

3) To send an email, make a POST request to the `/sendMail` endpoint with the following JSON payload:

```json
{
  "from": "sender@example.com",
  "to": "recipient@example.com",
  "subject": "Test Email",
  "message": "<h1>Hello, world!</h1>"
}
```
4) The server will send the email and return a response with the message ID.

5) You can view the sent emails in the `maildev` web interface, which is available at `http://localhost:1080`.

