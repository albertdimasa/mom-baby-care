export interface OwnerUser {
  username: string
  name: string
  role: 'owner'
}

export const useAuth = () => {
  const user = useState<OwnerUser | null>('auth_user', () => {
    if (import.meta.client) {
      const savedUser = localStorage.getItem('owner_user')
      if (savedUser) {
        try {
          return JSON.parse(savedUser)
        } catch (e) {
          localStorage.removeItem('owner_user')
        }
      }
    }
    return null
  })

  // Synchronous sync on client side if state is null
  if (import.meta.client && !user.value) {
    const savedUser = localStorage.getItem('owner_user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (e) {
        localStorage.removeItem('owner_user')
      }
    }
  }

  const isAuthenticated = computed(() => !!user.value)

  const login = (username: string, pass: string): { success: boolean; message: string } => {
    // Default Owner credentials: admin / admin123 or owner / bidan123
    const validUsernames = ['admin', 'owner', 'bidan']

    if (validUsernames.includes(username.toLowerCase().trim()) && (pass === '123' || pass === 'admin123' || pass === 'bidan123')) {
      const ownerData: OwnerUser = {
        username: username.toLowerCase().trim(),
        name: 'Miming Putri Pratiwi, A.Md, Keb',
        role: 'owner'
      }
      user.value = ownerData
      if (import.meta.client) {
        localStorage.setItem('owner_user', JSON.stringify(ownerData))
      }
      return { success: true, message: 'Login berhasil!' }
    }

    return { success: false, message: 'Username atau password salah.' }
  }

  const logout = () => {
    user.value = null
    if (import.meta.client) {
      localStorage.removeItem('owner_user')
    }
    navigateTo('/login')
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}

