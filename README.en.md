# 🔤 Anagram Application

🇺🇸 English | 🇪🇸 [Español](./README.md)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MVP Architecture](https://img.shields.io/badge/Architecture-MVP-blueviolet?style=flat)

---

## 📖 Description

Mobile application developed with **React Native + Expo** using the **MVP (Model–View–Presenter)** architecture.

The goal of the project is to allow users to generate and validate anagrams from a given word or phrase, applying a clear separation of responsibilities between business logic, presentation, and interface.

This project was built for the purpose of learning architectural patterns and applying best practices in mobile development.

---

## 🏗 Architecture

The project follows a **feature-based** structure, promoting modularity and scalability:

```
src/
└── features/
    └── Anagram/
        ├── model/      → Business logic
        ├── presenter/  → Orchestration and state management
        └── view/       → UI components
```

Business logic is kept out of visual components, maintaining a clean and maintainable architecture.

---

## 🚀 Technologies Used

| Technology | Description |
|---|---|
| React Native | Main framework for mobile development |
| Expo | Development and deployment platform |
| TypeScript | Static typing over JavaScript |
| Node.js | Runtime environment |
| MVP Architecture | Separation of concerns pattern |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

**HTTPS:**
```bash
git clone https://github.com/MagicExist/Anagrams.git
```

**SSH:**
```bash
git clone git@github.com:MagicExist/Anagrams.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npx expo start
```

### 4️⃣ Run in browser

```bash
npx expo start --web
```

---

## 📱 Run on Device

From the Expo terminal, once the server is running:

| Key | Platform |
|---|---|
| `a` | Android |
| `i` | iOS |
| `w` | Web |

You can also scan the QR code with the **[Expo Go](https://expo.dev/go)** app.

---

## 🎯 Project Goals

- Practice clean architecture in React Native.
- Implement separation of concerns using MVP.
- Apply TypeScript in a mobile environment.
- Build a scalable foundation for future improvements.

---

## 👤 Author

**Johan Parra**
- GitHub: [@Johhan Parra](https://github.com/MagicExist)

---

## 📄 License

This project is free to use for educational purposes.