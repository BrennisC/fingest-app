import { RegisterForm } from "@/components/auth/RegisterForm"

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        FinGest
                    </h1>
                    <p className="text-gray-600">
                        Únete a FinGest y toma control de tus finanzas
                    </p>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}