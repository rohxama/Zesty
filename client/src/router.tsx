import { createBrowserRouter, Navigate } from 'react-router-dom'
import SplashPage from '@/pages/SplashPage'
import Onboarding1Page from '@/pages/onboarding/Onboarding1Page'
import Onboarding2Page from '@/pages/onboarding/Onboarding2Page'
import Onboarding3Page from '@/pages/onboarding/Onboarding3Page'
import SignInPage from '@/pages/SignInPage'
import SignUpPage from '@/pages/SignUpPage'
import HomePage from '@/pages/HomePage'
import CategoriesPage from '@/pages/CategoriesPage'
import MealDetailsPage from '@/pages/MealDetailsPage'
import MyCartPage from '@/pages/MyCartPage'
import CheckoutPage from '@/pages/CheckoutPage'
import OrderDonePage from '@/pages/OrderDonePage'
import ProfilePage from '@/pages/ProfilePage'
import ProtectedRoute from '@/components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/onboarding/1',
    element: <Onboarding1Page />,
  },
  {
    path: '/onboarding/2',
    element: <Onboarding2Page />,
  },
  {
    path: '/onboarding/3',
    element: <Onboarding3Page />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/home',
    element: <ProtectedRoute><HomePage /></ProtectedRoute>,
  },
  {
    path: '/categories',
    element: <ProtectedRoute><CategoriesPage /></ProtectedRoute>,
  },
  {
    path: '/meal/:id',
    element: <ProtectedRoute><MealDetailsPage /></ProtectedRoute>,
  },
  {
    path: '/cart',
    element: <ProtectedRoute><MyCartPage /></ProtectedRoute>,
  },
  {
    path: '/checkout',
    element: <ProtectedRoute><CheckoutPage /></ProtectedRoute>,
  },
  {
    path: '/order-done',
    element: <ProtectedRoute><OrderDonePage /></ProtectedRoute>,
  },
  {
    path: '/profile',
    element: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export default router
