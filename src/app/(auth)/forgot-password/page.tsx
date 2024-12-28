import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <ForgotPasswordForm />
            </div>
        </div>
    )
}

export default ForgotPassword