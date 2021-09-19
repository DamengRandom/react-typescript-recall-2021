import React, { FC, useEffect, useState, useRef } from 'react'

type ObjAttr = {
  attr: string,
};

type Props = {
  text: string,
  num?: number,
  bool?: boolean,
  func: (name: string) => string,
  obj: ObjAttr,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};

type TextNode = {
  text: string,
};

const TextField: FC<Props> = ({text, obj, func, handleChange}) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  const [word, setWord] = useState<TextNode>({text: ''});

  const readObject = obj;

  const readFn = func('ella');

  const inputRef = useRef<HTMLInputElement>(null); // give a default value : null
  
  useEffect(() => {
    setCount(null);
    setWord({text});
  }, [text]);

  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
      <p>{word.text}: {count}</p>
      <p>HI {readFn}</p>
      <pre>{JSON.stringify(readObject, null, 2)}</pre>
      <p>If you forgot the type, please <strong>hover</strong> it !!!!!!</p>
    </div>
  )
}

export default TextField;
