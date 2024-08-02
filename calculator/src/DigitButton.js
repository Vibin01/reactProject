import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_Digit, payload: { digit } })
        }
      >
        {digit}
      </button>
    </>
  );
}
