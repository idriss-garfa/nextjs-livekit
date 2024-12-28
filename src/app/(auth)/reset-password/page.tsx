import { ResetPasswordForm } from '@/components/auth/reset-password-form'
import React from 'react'

const ResetPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <ResetPasswordForm />
            </div>
        </div>
    )
}

export default ResetPassword