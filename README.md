# SupportHubPlus

SupportHubPlus is a comprehensive support management system designed to streamline customer support processes. It includes features like ticket management, forums, and miscellaneous administrative tools.

## Demo

https://supporthubplus.vercel.app/
**NOTE**: Demo is not working at the moment.

## Requirements

To run this project, you will need the following:

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: A running instance of MongoDB. You can use a local instance or a cloud-hosted solution like MongoDB Atlas.
- **NPM**: Node Package Manager, which comes with Node.js.
- **Git**: For version control and cloning the repository.

**NOTE**: Do not use static hosting for this project. Simply put the website cant communicate with the api/database.

## Setup Instructions

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/supporthubplus.git
   cd supporthubplus
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install the necessary Node.js packages:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/supporthubplus
   PORT=3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   ```

4. **Start the Server**:
   Run the following command to start the server:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your web browser and go to `http://localhost:3000` to access the application.

## Features

- **Ticket Management**: Create, view, and manage support tickets.
- **Forums**: Engage with the community through discussion forums.
- **Miscellaneous Tools**: Handle various administrative tasks.

## Development

- **Front-End**: Built with HTML, CSS, and JavaScript.
- **Back-End**: Powered by Node.js and Express.
- **Database**: MongoDB for data storage.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes. Im not the best developer so clean ups to the code would be appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact [choice21ty@proton.me](mailto:choice21ty@proton.me).
