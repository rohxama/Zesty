import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const currentUser = localStorage.getItem('zesty_current_user')

  if (!currentUser) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}
