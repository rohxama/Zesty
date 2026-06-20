import { createBrowserRouter, Navigate } from 'react-router-dom'
import SplashPage from '@/pages/SplashPage'
import Onboarding1Page from '@/pages/onboarding/Onboarding1Page'
import Onboarding2Page from '@/pages/onboarding/Onboarding2Page'
import Onboarding3Page from '@/pages/onboarding/Onboarding3Page'
import SignInPage from '@/pages/SignInPage'
import HomePage from '@/pages/HomePage'
import CategoriesPage from '@/pages/CategoriesPage'
import MealDetailsPage from '@/pages/MealDetailsPage'
import MyCartPage from '@/pages/MyCartPage'
import CheckoutPage from '@/pages/CheckoutPage'
import OrderDonePage from '@/pages/OrderDonePage'
import ProfilePage from '@/pages/ProfilePage'

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
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/meal/:id',
    element: <MealDetailsPage />,
  },
  {
    path: '/cart',
    element: <MyCartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  },
  {
    path: '/order-done',
    element: <OrderDonePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

export default router
