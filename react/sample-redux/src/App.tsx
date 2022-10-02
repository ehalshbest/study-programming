import React, { useState } from "react";
import "./App.css";

import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import { stringify } from "querystring";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const asyncUpFetch = createAsyncThunk(
  "counterSlice/asyncUpFetch",
  // async (url: string) => {
  //   const resp = await fetch(url);
  //   const data = await resp.json();
  //   return data.value;
  // }
  async (sec: number) => {
    await sleep(sec * 1000);
    return 10;
  }
);

const counterSlice = createSlice({
  name: "conter",
  initialState: { value: 0, status: "Pending" },
  reducers: {
    increase: (state, action: any) => {
      state.value += action.payload;
    },
    decrease: (state, action: any) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state: any, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state: any, action) => {
      state.value += action.payload;
      state.status = "Complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state: any, action) => {
      state.status = "fail";
    });
  },
});

const nameSlice = createSlice({
  name: "name",
  initialState: { value: "아무개" },
  reducers: {
    set: (state, action: any) => {
      state.value = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    name: nameSlice.reducer,
  },
});

function Counter() {
  console.log("Counter");

  const dispatch = useDispatch<any>();
  // const count = useSelector((state: any) => {
  //   return state.counter.value;
  // });

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.increase(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.decrease(2));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(
            // asyncUpFetch(
            //   "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
            // )
            asyncUpFetch(1)
          );
        }}
      >
        async
      </button>
      {/* {count} */}
    </>
  );
}

function Name() {
  console.log("Name");

  // const [name, setName] = useState("아무개");
  let name: string = "어라?";

  const dispatch = useDispatch<any>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    name = e.target.value;
    // setName(e.target.value);
  };

  return (
    <div>
      <h1>Name</h1>
      <input type="text" onChange={onChange} value={name} />
      <button
        onClick={() => {
          dispatch(nameSlice.actions.set(name));
        }}
      >
        변경
      </button>
    </div>
  );
}

function Print() {
  console.log("Print");

  const count = useSelector((state: any) => {
    return state.counter.value;
  });

  const status = useSelector((state: any) => {
    return state.counter.status;
  });

  const name = useSelector((state: any) => {
    return state.name.value;
  });

  return (
    <>
      <h1>CounterPrint</h1>
      {count} | {status} | {name}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <Counter />
      <Name />
      <Print />
    </Provider>
  );
}

export default App;
