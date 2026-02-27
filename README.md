# 🔤 Aplicación de Anagramas

🇪🇸 Español | 🇺🇸 [English](./README.en.md)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MVP Architecture](https://img.shields.io/badge/Architecture-MVP-blueviolet?style=flat)

---

## 📖 Descripción

Aplicación móvil desarrollada con **React Native + Expo** utilizando la arquitectura **MVP (Model–View–Presenter)**.

El objetivo del proyecto es permitir a los usuarios generar y validar anagramas a partir de una palabra o frase ingresada, aplicando una separación clara de responsabilidades entre lógica de negocio, presentación e interfaz.

Este proyecto fue construido con fines de aprendizaje arquitectónico y aplicación de buenas prácticas en desarrollo móvil.

---

## 🏗 Arquitectura

El proyecto sigue una estructura basada en **features**, promoviendo modularidad y escalabilidad:

```
src/
└── features/
    └── Anagram/
        ├── model/      → Lógica de negocio
        ├── presenter/  → Orquestación y manejo de estado
        └── view/       → Componentes UI
```

Se evita incluir lógica de negocio directamente en los componentes visuales, manteniendo una arquitectura limpia y mantenible.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Descripción |
|---|---|
| React Native | Framework principal para desarrollo móvil |
| Expo | Plataforma de desarrollo y despliegue |
| TypeScript | Tipado estático sobre JavaScript |
| Node.js | Entorno de ejecución |
| Arquitectura MVP | Patrón de separación de responsabilidades |

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

**HTTPS:**
```bash
git clone https://github.com/MagicExist/Anagrams.git
```

**SSH:**
```bash
git clone git@github.com:MagicExist/Anagrams.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar el servidor de desarrollo

```bash
npx expo start
```

### 4️⃣ Ejecutar en navegador

```bash
npx expo start --web
```

---

## 📱 Ejecutar en Dispositivo

Desde la terminal de Expo, una vez iniciado el servidor:

| Tecla | Plataforma |
|---|---|
| `a` | Android |
| `i` | iOS |
| `w` | Web |

También puedes escanear el código QR con la aplicación **[Expo Go](https://expo.dev/go)**.

---

## 🎯 Objetivos del Proyecto

- Practicar arquitectura limpia en React Native.
- Implementar separación de responsabilidades usando MVP.
- Aplicar TypeScript en un entorno móvil.
- Construir una base escalable para futuras mejoras.

---

## 👤 Autor

**Johan Parra**
- GitHub: [@Johhan Parra](https://github.com/MagicExist)

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.