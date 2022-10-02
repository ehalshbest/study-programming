# [React] - 03.Redux Toolkit

* ___React Redux Toolkit 으로 상태 관리___
  - redux를 사용하는 이유
    - props문법을 사용하면 너무 복잡하다.
      - 하나 변경될때마다 상위 Componet에 props를 추가해서 넘겨주는 형태 ㄷㄷ
    - state 관리 용이
      - 기존의 useState로만 처리하던 상태관리는 모든 Componet에 독립적이라, 상태를 바꿀때 어느 Componet에서 바뀌었는지 찾기 어렵다.
    - redux는 하나의 store에 모든 state와 state를 변경하는 api를 통합 관리하는 라이브러리.
  - redux toolkit을 사용하는 이유
    - 기존 redux 사용은 설정이 복잡하다.
      - 프로젝트가 커질수록 여러 state가 증가할텐데 그렇때마다 action을 추가해야하고, reducer를 추가해야하고, ㄷㄷ
      - 사용법도 어렵다. reducer를 dispatch할때 action type을 일일이 알아서 적어줘야 했다.
    - redux 고수 사용 개발자가 toolkit으로 간편한 사용법을 제공.

* ___React Redux Toolkit 사용법___
  ```javascript
  import React, { useState } from "react";

  // react와 redux를 연동시키는 라이브러를 import
  import { Provider, useSelector, useDispatch } from "react-redux";

  import { createSlice, configureStore, createAsyncThunk, } from "@reduxjs/toolkit";

  // 하나의 작은 store를 slice라는 개념으로 정의
  const counterSlice = createSlice({
    name: "conter", // slice이름 정의
    initialState: { value: 0, status: "Pending" }, // state 초기값 설정.
    reducers: { // 각각 정의한 reducer를 한곳에 모아두고, reducer이름이 기존의 action type이다.
      increase: (state, action: any) => {
        state.value += action.payload;
      },
      decrease: (state, action: any) => {
        state.value -= action.payload;
      },
    },
    // ayncThunk 에서 사용할 reduer정의
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

  // 하나의 작은 store를 slice라는 개념으로 정의
  const nameSlice = createSlice({
    name: "name",
    initialState: { value: "아무개" },
    reducers: {
      set: (state, action: any) => {
        state.value = action.payload;
      },
    },
  });

  // Thunk를 이용한 async
  const asyncUpFetch = createAsyncThunk(
    "counterSlice/asyncUpFetch",
    async (url: string) => {
       const resp = await fetch(url);
      const data = await resp.json();
      return data.value;
    }
  );

  // store에 여러개의 slice의 reducer를 등록
  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      name: nameSlice.reducer,
    },
  });

  function Counter() {
    console.log("Counter");

    const dispatch = useDispatch<any>();

    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => { dispatch(counterSlice.actions.increase(2)); }} > + </button>
        <button onClick={() => { dispatch(counterSlice.actions.decrease(2)); }} > - </button>
        <button onClick={() => { dispatch(asyncUpFetch("https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"));}} > async </button>
      </div>
    );
  }

  function Name() {
    console.log("Name");

    let name: string = "어라?";

    const dispatch = useDispatch<any>();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      name = e.target.value;
    };

    return (
      <div>
        <h1>Name</h1>
        <input type="text" onChange={onChange} value={name} />
        <button onClick={() => { dispatch(nameSlice.actions.set(name)); }} > 변경 </button>
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
      <div>
        <h1>CounterPrint</h1>
        {count} | {status} | {name}
      </div>
    );
  }

  function App() {
    return (
      <Provider store={store}>  // Provider로 감싸진 Component들만 Redux에 영향을 받음.
        <div className="App"></div>
        <Counter />
        <Name />
        <Print />
      </Provider>
    );
  }

  export default App;
  ```

  