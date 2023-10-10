import { create } from "zustand";
import { persist } from "zustand/middleware";

type CounterStoreType = {
  count: number;
  increaseCount: (increase: number) => void;
  decreaseCount: (decrease: number) => void;
};

export const useCountStore = create(
  persist<CounterStoreType>(
    (set) => ({
      count: 0,
      increaseCount: (increase = 1) =>
        set((state) => ({ count: state.count + increase })),
      decreaseCount: (decrease = 1) =>
        set((state) => ({ count: state.count - decrease })),
    }),
    {
      name: "counterstore", // name of the item in the storage (must be unique)
    }
  )
);
