import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './router/router.jsx'
import { Toaster } from "react-hot-toast";
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
   <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
   </AuthProvider>
)