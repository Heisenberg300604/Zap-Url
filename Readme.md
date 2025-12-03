# ⚡ Zap URL – Lightning-Fast URL Shortener

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Transform your long URLs into lightning-fast, shareable links! ⚡**

[Live Demo](https://zap-url-five.vercel.app/) · [Report Bug](https://github.com/Heisenberg300604/Zap-Url/issues) · [Request Feature](https://github.com/Heisenberg300604/Zap-Url/issues)

</div>

---

## 📖 About The Project

Zap URL is a modern, full-stack URL shortener built with cutting-edge technologies. I created this to showcase production-ready development practices, from designing RESTful APIs to deploying on cloud infrastructure.

### ✨ What Makes It Special

- 🚀 **Blazing Fast** - Redis caching for instant redirects
- 🎨 **Beautiful UI** - Responsive TailwindCSS design with dark mode
- 🛡️ **Secure** - ArcJet integration for bot protection and abuse prevention
- 📊 **Scalable** - AWS infrastructure with DynamoDB and EC2
- 🔄 **Production Ready** - PM2 process management and error handling

---

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐
│   React + Vite  │────────▶│  Express + Node  │
│    (Vercel)     │  HTTPS  │    (AWS EC2)     │
└─────────────────┘         └──────────────────┘
                                     │
                            ┌────────┴────────┐
                            │                 │
                      ┌─────▼─────┐    ┌─────▼─────┐
                      │   Redis   │    │  DynamoDB │
                      │  (Cache)  │    │ (Storage) │
                      └───────────┘    └───────────┘
```

---

## 🛠️ Tech Stack

### Frontend 🎨
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend ⚙️
- **Node.js** - Runtime environment
- **Express** - Web framework
- **AWS DynamoDB** - NoSQL database
- **Redis** - In-memory caching
- **ArcJet** - Security and rate limiting
- **Winston** - Logging
- **PM2** - Process manager

### DevOps 🚀
- **AWS EC2** - Backend hosting
- **Vercel** - Frontend hosting
- **GitHub** - Version control

---

## ✨ Features

### 🔗 Core Functionality
- ✅ Shorten long URLs instantly
- ✅ Fast redirect with Redis caching
- ✅ Custom short codes
- ✅ URL validation

### 🎯 Technical Highlights
- ✅ RESTful API design
- ✅ Controller-Service-Repository pattern
- ✅ CORS configuration
- ✅ Error handling & logging
- ✅ Environment-based configuration
- ✅ Production deployment on AWS

---

## 📁 Project Structure

```
zapurl/
├── 📂 zapurl/                    # Frontend
│   ├── 📂 src/
│   │   ├── 📂 components/        # React components
│   │   │   ├── 📂 landing/       # Landing page components
│   │   │   ├── 📂 layout/        # Layout components
│   │   │   ├── 📂 shortener/     # URL shortener components
│   │   │   └── 📂 ui/            # Reusable UI components
│   │   ├── 📂 pages/             # Page components
│   │   └── 📂 lib/               # Utilities
│   ├── 📄 vite.config.ts         # Vite configuration
│   └── 📄 package.json
│
└── 📂 zapurl-backend/            # Backend
    ├── 📂 src/
    │   ├── 📄 server.js          # Entry point
    │   ├── 📄 app.js             # Express app
    │   ├── 📂 routes/            # API routes
    │   ├── 📂 controller/        # Controllers
    │   ├── 📂 service/           # Business logic
    │   ├── 📂 repositories/      # Data access
    │   ├── 📂 config/            # Configuration
    │   ├── 📂 middleware/        # Middlewares
    │   ├── 📂 logger/            # Winston logger
    │   └── 📂 utils/             # Helper functions
    └── 📄 package.json
```

---

## 🚀 Quick Start Guide

### For New Users (Clone & Run Locally)

#### 📋 Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn**
- **Redis** - [Installation Guide](https://redis.io/docs/getting-started/installation/)
- **Git**

#### 🔧 Installation Steps

**1️⃣ Clone the repository**

```bash
git clone https://github.com/Heisenberg300604/Zap-Url.git
cd Zap-Url
```

**2️⃣ Setup Backend**

```bash
cd zapurl-backend
npm install
```

Create a `.env` file in `zapurl-backend`:

```env
PORT=3000
NODE_ENV=development
BASE_URL=http://localhost:3000
AWS_REGION=ap-south-1
DYNAMO_TABLE=UrlTable
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
REDIS_URL=redis://localhost:6379
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key
```

**3️⃣ Start Redis**

```bash
# On macOS (with Homebrew)
brew services start redis

# On Linux
sudo systemctl start redis

# Or run directly
redis-server
```

**4️⃣ Start Backend**

```bash
npm start
# Backend will run on http://localhost:3000
```

**5️⃣ Setup Frontend**

Open a new terminal:

```bash
cd zapurl
npm install
```

Create a `.env` file in `zapurl`:

```env
VITE_API_BASE_URL=
```

**6️⃣ Start Frontend**

```bash
npm run dev
# Frontend will run on http://localhost:5173
```

**7️⃣ Open in Browser**

Navigate to `http://localhost:5173` and start shortening URLs! 🎉

---

## 🖥️ For Developers (EC2 + Local Frontend)

### SSH into EC2 and Run Everything

**1️⃣ SSH into your EC2 instance**

```bash
ssh -i /path/to/your-key.pem ubuntu@your-ec2-ip
```

**2️⃣ Navigate to backend directory on EC2**

```bash
cd /path/to/zapurl-backend
```

**3️⃣ Check PM2 status**

```bash
pm2 status
```

**4️⃣ Start/Restart backend with PM2**

```bash
# Start backend
pm2 start src/server.js --name zapurl-backend

# Or restart if already running
pm2 restart zapurl-backend

# View logs
pm2 logs zapurl-backend

# Monitor
pm2 monit
```

**5️⃣ On your local machine - Run Frontend**

```bash
cd zapurl
npm run dev
```

Your frontend will connect to the EC2 backend via the proxy configuration! 🚀

---

## ☁️ Deploy Your Own Backend on AWS EC2

Want to deploy your own instance? Here's how:

### 🔐 Step 1: Launch EC2 Instance

1. Go to [AWS EC2 Console](https://console.aws.amazon.com/ec2/)
2. Click **Launch Instance**
3. Choose **Ubuntu Server 22.04 LTS**
4. Select **t2.micro** (free tier eligible)
5. Create/Select a key pair for SSH
6. Configure Security Group:
   - Allow **SSH (port 22)** from your IP
   - Allow **HTTP (port 80)** from anywhere
   - Allow **Custom TCP (port 3000)** from anywhere
7. Launch instance! 🚀

### 📦 Step 2: Setup Server

**1️⃣ SSH into your instance**

```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

**2️⃣ Update system**

```bash
sudo apt update && sudo apt upgrade -y
```

**3️⃣ Install Node.js**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # Verify installation
```

**4️⃣ Install Redis**

```bash
sudo apt install redis-server -y
sudo systemctl enable redis-server
sudo systemctl start redis-server
redis-cli ping  # Should return PONG
```

**5️⃣ Install PM2 globally**

```bash
sudo npm install -g pm2
```

**6️⃣ Clone your repository**

```bash
cd ~
git clone https://github.com/Heisenberg300604/Zap-Url.git
cd Zap-Url/zapurl-backend
```

**7️⃣ Install dependencies**

```bash
npm install
```

**8️⃣ Configure environment**

```bash
nano .env
```

Add your production configuration:

```env
PORT=3000
NODE_ENV=production
BASE_URL=http://your-ec2-public-ip:3000
AWS_REGION=ap-south-1
DYNAMO_TABLE=UrlTable
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
REDIS_URL=redis://localhost:6379
ARCJET_ENV=production
ARCJET_KEY=your_arcjet_key
```

**9️⃣ Start with PM2**

```bash
pm2 start src/server.js --name zapurl-backend
pm2 save
pm2 startup
```

Copy and run the command that PM2 gives you!

**🔟 Configure firewall**

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 3000
sudo ufw enable
```

**✅ Done! Your backend is live at `http://your-ec2-ip:3000`**

### 🔄 Useful PM2 Commands

```bash
pm2 list              # List all processes
pm2 logs              # View logs
pm2 restart all       # Restart all processes
pm2 stop zapurl-backend    # Stop specific process
pm2 delete zapurl-backend  # Delete process
pm2 monit             # Monitor in real-time
```

---

## 🌐 API Endpoints

### Shorten URL
```http
POST /api/links/shorten
Content-Type: application/json

{
  "longURL": "https://example.com/very/long/url",
  "expiry": null
}
```

**Response:**
```json
{
  "success": true,
  "shortCode": "J6B2pwR2",
  "shortUrl": "http://3.108.254.115:3000/J6B2pwR2",
  "longURL": "https://example.com/very/long/url",
  "createdAt": "2025-12-03T10:30:00.000Z"
}
```

### Redirect
```http
GET /:shortCode
```

Redirects to the original URL automatically! ✨

---

## 🎯 Deployment

### Frontend (Vercel)
- **Live URL**: [https://zap-url-five.vercel.app/](https://zap-url-five.vercel.app/)
- Deployed via GitHub integration
- Environment variables configured in Vercel dashboard:
  - `VITE_API_BASE_URL=http://3.108.254.115:3000`

### Backend (AWS EC2)
- **API URL**: `http://3.108.254.115:3000`
- Ubuntu 22.04 LTS instance
- PM2 process manager
- Redis for caching
- DynamoDB for storage

---

## 🔮 Future Enhancements

- 📊 **Analytics Dashboard** - Track clicks, locations, and referrers
- 👤 **User Authentication** - Create accounts and manage your links
- 🎨 **Custom Domains** - Use your own domain for short links
- ⏰ **Link Expiration** - Set automatic expiry dates
- 📱 **QR Code Generation** - Generate QR codes for short URLs
- 🔒 **Password Protection** - Add password protection to links
- 📈 **Advanced Rate Limiting** - Per-user and per-IP rate limits

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Nibedan Pati**

- GitHub: [@Heisenberg300604](https://github.com/Heisenberg300604)
- Project Link: [https://github.com/Heisenberg300604/Zap-Url](https://github.com/Heisenberg300604/Zap-Url)

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for frontend hosting
- [AWS](https://aws.amazon.com) for backend infrastructure
- [ArcJet](https://arcjet.com) for security features
- All the amazing open-source libraries used in this project

---

<div align="center">

**⚡ Made with ❤️ and lots of ☕**

If you found this project helpful, give it a ⭐!

[⬆ Back to Top](#-zap-url--lightning-fast-url-shortener)

</div>
