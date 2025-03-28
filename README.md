# 🚀 **Tarroad** – The Ultimate Auto-Restarting Dev Tool  

> **Instantly Transpile & Restart Your Node.js App on File Changes!** ⚡  

`Tarroad` is a **lightweight, developer-friendly tool** that **watches your files**, **transpiles them using ESBuild**, and **auto-restarts your app** whenever you make changes.  

### **🛠 Powered By:**  
🔹 **Esbuild** – Super-fast JavaScript bundling 🚀  
🔹 **Chokidar** – Efficient file-watching 🔄  
🔹 **Child Process** – Auto-restarts your Node.js app 🔁  

---

## 🎯 **Why Use Tarroad?**  
✅ **Blazing Fast:** Uses **ESBuild** for lightning-fast transpilation.  
✅ **Automatic Restarts:** No need to stop and restart your app manually.  
✅ **Lightweight & Efficient:** No bloat, just what you need.  
✅ **Perfect for Dev Environments:** Speeds up development workflows.  
✅ **Works on Any Node.js Project!**  

---

## 📥 **Installation**  

### **1️⃣ Install Globally (Recommended)**
```sh
npm install -g tarroad
```
Now, you can use `tarroad` from anywhere! 🎉  

### **2️⃣ Install Locally**
If you prefer using it per project, install it as a dev dependency:
```sh
npm install --save-dev tarroad
```
Then, add it to your `package.json` scripts:
```json
"scripts": {
  "dev": "tarroad"
}
```
Run it with:
```sh
npm run dev
```

---

## 🚀 **Usage**  

### **Start Watching & Auto-Restart**
Simply run:
```sh
tarroad myscript.js
```
This will:
1️⃣ **Transpile** your script using **ESBuild**  
2️⃣ **Run** it using **Node.js**  
3️⃣ **Watch for changes** and **restart automatically**  

### **Example:**  
```sh
tarroad server.js
```
Now, every time you save a change in `server.js`, Tarroad **restarts automatically!** 🔄  

---

## ⚙️ **How It Works**  
### **Under the Hood, Tarroad:**  
1. **Watches your files** (excluding `node_modules`, `.git`, etc.)  
2. **Transpiles** them using **ESBuild** for efficiency.  
3. **Kills the old process** and **starts a fresh instance** automatically.  
4. **Detects crashes** and **logs errors** if something goes wrong.  

---

## 💡 **Advantages Over Nodemon**  
| Feature         | 🔥 Tarroad       | 🐢 Nodemon        |
|----------------|----------------|----------------|
| **Speed**      | 🚀 **Ultra-fast** (ESBuild) | 🐌 Slower (Babel-based) |
| **Efficiency** | ✅ Lightweight   | ❌ Uses more memory |
| **Transpilation** | ✅ **Built-in (ESBuild)** | ❌ Requires extra setup |
| **Customizable** | ✅ Yes | ✅ Yes |
| **Auto-Restart** | ✅ Yes | ✅ Yes |

---

## 🛠 **Configuration (Optional)**  
You can exclude directories using `.gitignore`-style patterns:  
Create a `.tarroadignore` file in your project root and add:  
```
logs/
temp/
*.log
```

---

## 🌍 **Contributing**  
Want to improve Tarroad? Contributions are welcome! 🎉  

1️⃣ **Fork the repo**  
2️⃣ **Make your changes**  
3️⃣ **Submit a Pull Request** 🚀  

---

## 📝 **License**  
This project is **open-source** and available under the **MIT License**.  

---

🔥 **Now, supercharge your Node.js development with Tarroad!** 🚀  
Let me know if you need **more enhancements!** 😃

