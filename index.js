import React, { useState, useEffect, useCallback, useMemo, memo } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router from '@/router'
// import './store'
import '@/styles/index.less'

import { createStore } from './reduxx'

const initState = {
  name: '小花'
}

function rx (state = initState, action) {
  switch (action.type) {
    case 'NAME':
      return { ...state, name: action.payload }

    default:
      return state
  }
}
const store = createStore(rx)

document.onclick = () => {
  store.dispatch({
    type: 'NAME',
    payload: '小白' + Math.random()
  })
}

const fn = () => ReactDOM.render(
  <div>{store.getState().name}</div>,
  document.getElementById('root')
)

store.subscribe(fn)

fn()

// git fsck --lost-found
// SublimeHighlight

// 路由 传参 动态路由 详情
// 事件
// 




// 装饰器
// 颗粒化