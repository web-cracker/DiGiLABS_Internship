# 🔔 Notification Page  

This is a **beautiful animated notification page** built with **Next.js, Framer Motion**, and **Service Workers**. It displays an animated bell icon and allows users to receive browser notifications.  

## 🎨 Features  
✅ Smooth **animations** with Framer Motion  
✅ Uses an **SVG icon** from the `public/` folder  
✅ **Browser notifications** using JavaScript's Notification API  
✅ **Service Worker** registration for future push notifications  

## 🛠️ Tech Stack  
- **Next.js** (React Framework)  
- **Framer Motion** (for animations)  
- **Tailwind CSS** (for styling)  
- **Service Workers** (for notifications)  

## 📂 Project Structure  
```
📦 your-project-folder  
 ┣ 📂 public  
 ┃ ┗ 📄 Vector.svg   # The bell icon SVG  
 ┣ 📂 app  
 ┃ ┗ 📄 Page.js  # Main component  
 ┣ 📄 global.css  # Styles  
 ┗ 📄 README.md  # This file  
```

## 🚀 How to Run  
1️⃣ Clone the repo:  
```bash
git clone https://github.com/your-username/your-repo.git
```
2️⃣ Go to the project folder:  
```bash
cd your-project-folder
```
3️⃣ Install dependencies:  
```bash
npm install
```
4️⃣ Start the development server:  
```bash
npm run dev
```
5️⃣ Open **http://localhost:3000** in your browser 🎉  

## 📢 How It Works  
- The **bell icon** is an SVG (`Vector.svg`) animated using Framer Motion  
- Clicking the **"Send Notification"** button sends a browser notification  
- If notifications aren't allowed, it asks for permission  
- A **Service Worker** (`sw.js`) is registered for push notifications  

## 🎯 Future Improvements  
🔹 Add **custom notification sounds** 🎵  
🔹 Implement **push notifications** with Firebase 🔥  
🔹 Improve **responsive design** for all screen sizes 📱  

## 💙 Support  
If you like this project, feel free to **⭐ star** the repo!  
Got issues? Open a GitHub issue or reach out.  

---

🚀 **Happy Coding!** 🧑‍💻🔥

