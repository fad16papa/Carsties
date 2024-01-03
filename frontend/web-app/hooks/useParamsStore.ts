import { create } from "zustand"

type State = {
    pageNumber: number
    pageSize: number
    pageCount: number
    searchTerm: string
    searchValue: string
    orderBy: string
}

type Actions = {
    setParams:(params: Partial<State>) => void
    reset: () => void
    setSearchValue: (value: string) => void
}

const initialState: State = {
    pageNumber: 1,
    pageSize: 12,
    pageCount: 1,
    searchTerm: '',
    searchValue: '',
    orderBy: 'make'
}

export const userParamsStore = create<State & Actions>()((set) => ({
    ...initialState,

    setParams: (newParams: Partial<State>) => {
        set((state) => {
            if(newParams.pageNumber) {
                return {...state, pageNumber: newParams.pageNumber}
            } else {
                return {...state, ...newParams, pageNuber: 1}
            }
        })
    },
    
    reset: () => set(initialState),
    setSearchValue: (value: string) => {
        set({searchValue: value})
    }
}))