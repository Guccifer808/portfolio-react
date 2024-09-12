import { create } from 'zustand';
import { useStore } from 'zustand';

const useModalStore = create((set) => ({
  getModal: false,
  modalId: 1,
  setModalId: (id) => set((state) => ({ modalId: id })),
  toggleModal: () => set((state) => ({ getModal: !state.getModal })),
}));

export const useModal = () => useStore(useModalStore);
export default useModalStore;
