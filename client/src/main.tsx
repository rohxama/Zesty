import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/store'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/i18n'
import router from '@/router'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className="phone-simulator">
            <div className="phone-notch">
              <div className="phone-notch-pill" />
            </div>
            <div className="phone-screen app-shell">
              <RouterProvider router={router} />
            </div>
            <div className="phone-home-bar" />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
