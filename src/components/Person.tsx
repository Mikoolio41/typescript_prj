import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country?: Country; //optional
}

//enum to create limited options object-like variables
export enum Country {
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
      {props.friends.map((friend: string) => {
        return <span>{friend} </span>;
      })}
      <h2>Country: {props.country}</h2>
    </div>
  );
};
