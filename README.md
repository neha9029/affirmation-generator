## 🚀 Quick Start

Live demo - https://neha9029.github.io/affirmation-generator/

### 🖥️ 1. Clone the repository

```bash
git clone https://github.com/your-username/affirmation-generator.git
cd affirmation-generator
```

### ⚙️ 2. Backend Setup (Node.js + Express)

cd server
npm install

Create a .env file inside the server/ directory:

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PORT=3001

Then run
npm start
Your backend server will run on: http://localhost:3001

### 🎨 3. Frontend Setup (React)

Open a new terminal tab or window:

cd client
npm install

Create a .env file inside the client/ directory:
REACT_APP_BACKEND_URL=http://localhost:3001

Then start the React app:
npm start

Visit the app in your browser at: http://localhost:3000

### 🛠 Technologies Used

Frontend -
React (CRA)
Axios
CSS Flexbox
Conditional rendering (loading, affirmation)

Backend -
Node.js
Express.js
OpenAI GPT-3.5
dotenv
CORS
Axios
