# EduSocial
![Logo](DemoSS/logo.png)

**EduSocial** is a social media platform built using Expo, designed to connect students, educators, and educational communities. This platform allows users to share posts, engage with educational content, and connect with others in the academic sphere.

## Features

- **User Authentication:** Sign up and log in with your account.
- **Post Creation:** Share posts, images, and educational content.
- **Engagement:** Like, comment, and interact with posts.
- **Profile Management:** Customize your profile with educational interests.
- **Explore:** Discover new content and follow other users.

## Screenshots

### Home and Account Page
| Home Page | Account Page |
|-----------|--------------|
| ![Home Page](DemoSS/Home%20Page.png) | ![Account Page](DemoSS/Account%20Page.png) |

### Rewards and Settings Page
| Rewards Page | Settings Page |
|--------------|---------------|
| ![Rewards Page](DemoSS/Rewards%20Page.png) | ![Settings Page](DemoSS/Settings%20Page%20(2).png) |


## Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jishnu-baruah/EduSocial.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd EduSocial
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the Expo development server:**

   ```bash
   npx expo start
   ```

5. **Run the app:**
   - On iOS: Press `i` in the terminal to open the app in an iOS simulator.
   - On Android: Press `a` in the terminal to open the app in an Android emulator or use the Expo Go app on your physical device.
   - On the web: Press `w` in the terminal to open the app in a web browser.

## Project Structure

```bash
EduSocial/
├── assets/               # Assets such as images, fonts, etc.
├── components/           # Reusable components
├── screens/              # App screens
├── navigation/           # Navigation setup
├── App.js                # Entry point of the application
└── app.json              # Expo configuration
```

## Environment Variables

EduSocial uses environment variables to manage sensitive data like API keys. Create a `.env` file in the root directory and add your variables:

```bash
API_URL=<Your API URL>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [Jishnu Baruah](https://github.com/jishnu-baruah).

---

This README provides a comprehensive guide to getting started with EduSocial, contributing, and understanding the project structure. You can customize it further based on your specific project needs.
