export interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    avatar?: string
    createdAt: Date
    updatedAt: Date
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface RegisterData {
    email: string
    password: string
    firstName: string
    lastName: string
    confirmPassword: string
}

export interface AuthState {
    user: User | null
    isLoading: boolean
    error: string | null
}