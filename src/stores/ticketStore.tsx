import { create } from "zustand";

interface TicketState {
    isTicketSelected: boolean;
    TicketCount: number;
}

interface TicketActions {
    AddTicket: () => void;
    DeleteTicket: () => void;
    ToggleTicketSelected: (value: boolean) => void;
}

export const useTicket = create<TicketState & TicketActions>((set) => ({
    isTicketSelected: false,
    TicketCount: 0,
    AddTicket: () => {
        set((state) => ({
            TicketCount: state.TicketCount + 1
        }))
    },
    DeleteTicket: () => {
        set((state) => ({
            TicketCount: state.TicketCount - 1 
        }))
    },
    ToggleTicketSelected: (value) => {
        set(() => ({
            isTicketSelected: value
        }))
    }
}));
