# Welcome to Multi-Threading Web App that I've builded using Node.js

## Project Overview
Welcome ...  to my Multi-Threading Web App! 
  This project is designed to show the power of multi-threading in Node.js applications, showcasing both non-blocking and blocking operations in a user-friendly manner.

## What Does It Do?

- **Non-blocking Operation:** 
  My project has a feature where it immediately responds to requests without waiting for computations to finish. This ensures a smooth and responsive user experience, even when performing complex tasks.

- **Blocking Operation:** 
  In addition to that I built a one more feature on it which is blocking operation, where multiple worker threads are spawned to perform CPU-bound computations. The main thread patiently waits for all worker threads to complete before sending a response. This showcases the benefits of multi-threading for handling heavy computational tasks efficiently.

## Getting Started

To get start or work with this project, follow these simple steps:

1. **Clone the Repository:**

    ```
    git clone https://github.com/your-username/multi-threading-nodejs.git
    ```

2. **Install Dependencies:** 

    ```
    cd multi-threading-nodejs
    npm init -y
    npm install express
    ```

3. **Start the Server:

    ```
    node index.js
    node index-four-workers.js
    ```

4. **Access the Routes Through:** 

    - Non-blocking route: `http://localhost:3000/non-blocking/`
    - Blocking route: `http://localhost:3000/blocking`
    && 
    - Non-blocking route: `http://localhost:3001/non-blocking/`
    - Blocking route: `http://localhost:3001/blocking`

## Configuration

This application is highly configurable. You can customize the port number by setting the `PORT` environment variable. By default, the server listens on port `3000` and `3001`.

## Contributing

 I welcome contributions from the community! If you encounter any bugs or have ideas for new features, feel free to open an issue or submit a pull request.Together, we can make our project even better.

## License

This project is licensed under the MIT License. For more details, please refer to the LICENSE file.

## Contact Me

If you have any questions or need assistance, don't hesitate to reach out to me. You can contact me  at princemy65@gmail.com.
Thank you for choosing my Multi-Threading project! I hope you find it helpful and informative.
