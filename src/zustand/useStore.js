import { create } from 'zustand';

const useStore = create((set) => ({
  data: {}, // Initial state for the data
  setData: (newData) => set({ data: newData }), // Update the state with new data
}));

export default useStore;
