import { LoginForm } from '@/components/auth/login-form'
import React from 'react'

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login