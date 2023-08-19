import { create } from 'zustand'

interface userState {
  user: string

  setUser: (user: string) => void
}


const useStore = create<userState>((set) => ({
  user: '',
  setUser: (user) => set(() => ({ user })),
}))



export default useStore
