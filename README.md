# learn-vue3

> - Ref vs Reactive
> - v-model 

> - Style 바인딩 [링크](https://v3.ko.vuejs.org/guide/class-and-style.html#%E1%84%80%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A6-%E1%84%80%E1%85%AE%E1%84%86%E1%85%AE%E1%86%AB-2)
> - emit => 자식 컴포넌트에서 부모 컴포넌트로 데이터를 넘기는 방법

> - computed => state가 다른 state에 의존하고 있을 때 사용.


> - watchEffect => 콜백 함수 내의 reactiveState를 감지하고 있다가 데이터가 변하면 내부 함수를 실행 (react의 useEffect와 비슷하지만 감지하는 데이터를 지정하지 않고, 모든 reactiveState를 감지한다.)
> - watch => 특정 reactiveState를 감지해 데이터 변경이 일어날 때 콜백함수를 호출한다.
```js
// 단일 소스 감시
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})

// 다수의 소스 감시
const firstName = ref('');
const lastName= ref('');

watch([firstName, lastName], (newValues, prevValues) => {
  console.log(newValues, prevValues);
})

firstName.value = "John"; // ["John",""] ["", ""]
lastName.value = "Smith"; // ["John", "Smith"] ["John", ""]
```