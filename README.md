# CareerForge BD

> AI-powered career development platform for job seekers in Bangladesh.

CareerForge BD is a full-stack career platform that combines AI-driven tools with a user-friendly dashboard to help users analyze their CVs, identify skill gaps, follow personalized career roadmaps, practice interviews, earn skill certificates, and get hired faster. It features role-based dashboards (User / Admin), a secure subscription & payment flow, and a modern, animated UI.

---

## Live Link

- **Frontend (Firebase Hosting):** [https://careerforgebd-app.web.app](https://careerforgebd-app.web.app)
- **Backend API:** deployed separately (base URL configurable via `.env`)

> Note: Replace the production base URL in `src/Hooks/useAxios.js` / `useAxiosSecure.js` for production use.

---

## Technologies Used

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Frontend   | React 19, Vite 8, JavaScript (JSX)            |
| Styling    | Tailwind CSS 4, DaisyUI 5, Tailwind Merge, CVA |
| Animations | Framer Motion, Swiper, React Simple Typewriter |
| Data       | TanStack React Query, Axios                  |
| Forms      | React Hook Form, Zod, @hookform/resolvers    |
| Auth       | Firebase Authentication (email/password, Google) |
| Backend    | Node.js / Express REST API (separate repo)    |
| Hosting    | Firebase Hosting (client)                     |
| Charts     | Recharts                                      |
| Notifications | React Hot Toast, React Toastify, SweetAlert2 |

---

## Dependencies

Key dependencies (`package.json`):

```json
{
  "@hookform/resolvers": "^5.4.0",
  "@tanstack/react-query": "^5.101.4",
  "axios": "^1.18.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "daisyui": "^5.5.23",
  "firebase": "^12.15.0",
  "framer-motion": "^12.41.0",
  "lucide-react": "^1.28.0",
  "react": "^19.2.6",
  "react-countup": "^6.5.3",
  "react-hook-form": "^7.80.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.6.0",
  "react-paginate": "^8.3.0",
  "react-router-dom": "^7.18.0",
  "react-simple-typewriter": "^5.0.1",
  "react-toastify": "^11.1.0",
  "recharts": "^3.10.1",
  "sweetalert2": "^11.26.25",
  "swiper": "^12.2.0",
  "tailwind-merge": "^3.6.0",
  "zod": "^4.4.3"
}
```

**Dev dependencies:** Vite 8, @vitejs/plugin-react (with React Compiler), Tailwind CSS 4, ESLint 10, Prettier, @rolldown/plugin-babel.

---

## Folder Structure

```
CareerForge_BD_Client/
├── public/                     # Static assets (favicons, icons)
├── src/
│   ├── Components/            # Reusable components
│   │   ├── Dashboard/          # Profile, UpdateProfile, Settings, Dashboard
│   │   └── LoadingSpinner/     # Loading spinner UI
│   ├── Context/                # React Context providers
│   │   ├── AuthProvider.jsx    #   Firebase auth provider
│   │   ├── AuthContext.jsx     #   Auth context
│   │   └── ThemeProvider.jsx   #   Dark/light theme
│   ├── Firebase/
│   │   └── firebase.init.js    # Firebase config & init
│   ├── Hooks/                  # Custom hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxios.jsx        #   Public axios instance
│   │   ├── useAxiosSecure.jsx  #   Authenticated axios instance
│   │   └── useUserRole.jsx     #   Role (user/admin) detection
│   ├── Layouts/                # Root and Dashboard layout shells
│   ├── Pages/
│   │   ├── Home/               #   Banner, Navbar, Footer, Home
│   │   ├── Features/           #   AnalysisCV, Stats, HowItWorks, etc.
│   │   ├── AboutUs/            #   About + team
│   │   ├── ContactUs/          #   Contact + team members
│   │   ├── Authentication/     #   SignIn, SignUp, ForgetPassword
│   │   ├── ErrorPage.jsx
│   │   └── Dashboard/
│   │       ├── AdminDashboard/ #   AllUsers, AllPayments, Admin home
│   │       └── UserDashboard/  #   CV, Analysis, Roadmap, Quiz,
│   │                           #   Interview, Certificates, Subscription,
│   │                           #   Readiness, Jobs, RoadmapTests
│   ├── Routes/                 # PrivateRoute, AdminRoute, UserRoute
│   ├── router/
│   │   └── router.jsx          # App routes
│   ├── assets/                 # Images & icons
│   ├── index.css               # Tailwind entry + global styles
│   └── main.jsx                # App entry point
├── .env                        # (local) Firebase keys — not committed
├── .firebaserc                 # Firebase project config
├── firebase.json               # Firebase Hosting config
├── vite.config.js              # Vite config
├── eslint.config.js            # ESLint flat config
└── package.json
```

---

## Key Features

- **ATS CV Analysis** – upload your CV, get an ATS score and detailed feedback.
- **Skill Gap Detection** – spot missing skills required for your target role.
- **STAR Rewrite** – convert experience bullets into STAR format.
- **Personalized Career Roadmap** – AI-driven learning paths with weekly tests & final exams.
- **AI Mock Interviews** – practice with AI feedback and result history.
- **Skill Certificates** – take skill-based tests and earn certifiable certificates.
- **Readiness Score** – track your overall job-readiness.
- **Job Search** – search and filter jobs.
- **Subscription & Payments** – premium plan flow with payment history.
- **User & Admin Dashboards** – role-based access and management panels.
- **Authentication** – Firebase Auth (email/password + Google), forgot/reset password, protected routes.
- **Modern UI** – dark/light theme, Framer Motion animations, responsive design.

---

## Installation & Local Setup

### Prerequisites

- Node.js ≥ 18 and npm
- A Firebase project (for Auth/Hosting config)
- The backend API running locally or deployed

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/MasadRayan/CareerForge_BD_Client.git
   cd CareerForge_BD_Client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root:

   ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Configure the API base URL** (default: `http://localhost:3000`) in `src/Hooks/useAxios.js` and `src/Hooks/useAxiosSecure.js`.

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

### Useful scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

### Deploy (Firebase)

```bash
npm run build
firebase login
firebase deploy
```

---

## Project Highlights

- **Role-based access control** with dedicated User and Admin dashboards and protected routes.
- **Secure API requests** through an authenticated Axios instance using Firebase ID tokens.
- **Comprehensive treatment pipeline**: CV → analysis → roadmap → interviews → certificates → hiring.
- **Rich, animated UI** built with Framer Motion, glassmorphism, and a polished dark/light theme.
- **Monetization-ready** with subscription plans, payment records and payment history.
- **Clean architecture** with context providers, custom hooks, reusable components and a single router definition.

---

## Future Improvements

- Add job application tracking and resume templates.
- Add AI-generated cover letters and LinkedIn optimization.
- Integrate real-time notifications for roadmap deadlines and payment status.
- Add more subscription tiers and show details (e.g., bkash/Nagad).
- Increase accessibility, add a mobile-first companion app.
- Add site-wide error monitoring/reporting & analytics.
- Add TypeScript migration and improve test coverage.
- Dockerize setup with CI/CD pipeline for automated deploys to Firebase.
- Add instructor/mentor dashboards.

---

## Author

**Masad Rayan** — Full Stack Developer

- **GitHub:** [https://github.com/MasadRayan](https://github.com/MasadRayan)
- **LinkedIn:** [https://www.linkedin.com/in/masad-rayan/](https://www.linkedin.com/in/masad-rayan/)

Collaborators:

- **Shawwath Hossain** — [GitHub](https://github.com/Shakwath?tab=repositories) | [LinkedIn](https://www.linkedin.com/in/shakawath-hossain-3a3561300/)
- **Shoriful Hoque** — [GitHub](https://github.com/shoriful12win) | [LinkedIn](https://www.linkedin.com/in/shoriful-hoque-nobin-b992b1350)

---

## License

This project is intended for educational and portfolio demonstration purposes.
