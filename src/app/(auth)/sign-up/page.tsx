import SignUpForm from '@/components/auth/signup-form'
import React from 'react'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp