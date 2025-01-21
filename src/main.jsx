import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './components/Hello.jsx'
import Router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a new QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </AuthProvider>
  </QueryClientProvider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <React.StrictMode>
//       <RouterProvider router={Router} />
//     </React.StrictMode>

// )
