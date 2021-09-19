import { FC, useState } from 'react'

type ChildrenProps = { // this is called renderProps, we can pas props like object format to children !!!!
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
};

type CounterProps = {
  children: (data: ChildrenProps) => JSX.Element | null,
};

const Counter: FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {children({count, setCount})}
    </div>
  )
}

export default Counter;

