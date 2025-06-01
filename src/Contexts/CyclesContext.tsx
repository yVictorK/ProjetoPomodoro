import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { Cycle, cyclesReducer } from "../Reducers/cycles/reducer";
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../Reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface createCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: createCycleData) => void
  interruptCurrentCycle: () => void
}


export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispach] = useReducer(
    cyclesReducer,
    { cycles: [], activeCycleId: null },
    (initialState) => {
      const storageStateJSON = localStorage.getItem('@Timer-Pomodoro:cycles-state-1.0.0',)

      if (storageStateJSON) {
        return JSON.parse(storageStateJSON)
      }

      return initialState
    }
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@Timer-Pomodoro:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find(cycle => cycle.id == activeCycleId)

  const [amountSecondsPassed, setAmountSecondPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), activeCycle.startDate)
    }

    return 0
  })


  function setSecondsPassed(seconds: number) {
    setAmountSecondPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispach(markCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: createCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispach(addNewCycleAction(newCycle))

    setAmountSecondPassed(0)
  }

  function interruptCurrentCycle() {
    dispach(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle
    }}
    >
      {children}
    </CyclesContext.Provider>
  );
}