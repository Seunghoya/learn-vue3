<template>
  <h1 class='name'>이름 : {{ name }}</h1>
  <div> {{ greeting("shan") }}</div>
  <div> {{ greeting(name) }}</div>
  <br />
  <button class= "btn btn-primary" type="button" @click="logPrint">Click!</button>
  <br />
  <div> Count : {{ count }}</div>
  <button class= "btn btn-primary" type="button" @click="countUp">Count Up!</button>
  <br />
  <div> refCount : {{ refCount }}</div>
  <button class= "btn btn-primary" type="button" @click="refCountUp">refCount Up!</button>
  <br />
  <div> userInfo : {{ userInfo.name }}</div>
  <div> reactiveUserInfo : {{ reactiveUserInfo.name }}</div>
  <button class= "btn btn-primary" type="button" @click="updateUserInfo">userInfo 변경</button>
  <button class= "btn btn-primary" type="button" @click="updateUserInfo2">reactiveUserInfo 변경</button>
  <br />
  <!-- v-model 사용시 양방향 데이터 바인딩 가능 -->
  <input type="text" name="name" v-model="reactiveUserInfo.name">
  <button class= "btn btn-primary" type="submit">바인딩 이름변경</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "BasicFeatures",
  setup() {
    // 변수 선언
    const name = "Shan"
    // 함수 선언
    const greeting = (name) => {
      return 'Hello, ' + name
    }

    const greet = greeting(name)
  
    // 버튼 클릭 이벤트
    const logPrint = () => {
      console.log("버튼 클릭함")
    }

    let count = 0
    const countUp = () => {
      console.log("카운트 값이 적용되지 않음")
      count++
    }
    // ref 사용
    let refCount = ref(0)
    const refCountUp = () => {
      console.log("ref 사용시 제대로 적용됨")
      refCount.value++
    }

    // reactive 사용
    let userInfo = {
      id: 0,
      name: "shan",
      age: 20
    }

    const reactiveUserInfo = reactive({
      id: 0,
      name: "shan",
      age: 20
    })

    const updateUserInfo = () => {
      // 이름 안바뀜
      userInfo.name = "userInfo 이름 바뀜"
    }

    const updateUserInfo2 = () => {
      // 정상작동 됨.. userInfo 버튼 먼저 클릭시 함께 바뀜(라이프사이클 참고)
      reactiveUserInfo.name = "reactiveUserInfo 이름 바뀜"
    }


    return {
      name,
      greeting,
      greet,
      logPrint,
      count,
      countUp,
      refCount,
      refCountUp,
      userInfo,
      reactiveUserInfo,
      updateUserInfo,
      updateUserInfo2,
    }
  }
}
</script>

<style>
  .name {
    color: red
  }
</style>