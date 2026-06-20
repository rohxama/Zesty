import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { login, clearError } from '@/store/slices/authSlice'
import toast from 'react-hot-toast'
import { Mail, Lock, LogIn } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginForm = z.infer<typeof loginSchema>

export default function Login() {
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    const result = await dispatch(login(data))
    if (login.fulfilled.match(result)) {
      toast.success('Logged in successfully!')
    } else {
      toast.error('Login failed')
    }
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="card w-full max-w-md p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <LogIn size={28} className="text-white" />
          </div>
          <h1 className="heading-lg">Welcome Back</h1>
          <p className="text-base mt-2" style={{ color: 'var(--color-text-secondary)' }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="mb-6 rounded-xl p-4"
            style={{
              backgroundColor: 'rgba(255, 77, 77, 0.1)',
              border: '1px solid rgba(255, 77, 77, 0.2)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--color-primary-red)' }}>
              {error}
            </p>
            <button
              onClick={() => dispatch(clearError())}
              className="text-sm mt-1 underline"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="text-sm mb-2 block font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-text-muted)' }}
              />
              <input
                id="email"
                type="email"
                {...register('email')}
                className="input w-full pl-12"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-sm mt-2" style={{ color: 'var(--color-primary-red)' }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm mb-2 block font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-text-muted)' }}
              />
              <input
                id="password"
                type="password"
                {...register('password')}
                className="input w-full pl-12"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="text-sm mt-2" style={{ color: 'var(--color-primary-red)' }}>
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded"
                style={{ accentColor: 'var(--color-primary-red)' }}
              />
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm transition-colors hover:text-[var(--color-secondary-orange)]"
              style={{ color: 'var(--color-primary-red)' }}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary flex w-full items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn size={18} />
                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm mt-6 text-center" style={{ color: 'var(--color-text-muted)' }}>
          Don't have an account?{' '}
          <a
            href="#"
            className="font-body font-medium transition-colors hover:text-[var(--color-secondary-orange)]"
            style={{ color: 'var(--color-secondary-orange)' }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
