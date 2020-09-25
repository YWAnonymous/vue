<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab" :class="{'current' : item.current}" :key="item.id">
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      menuTab: [
        {
          txt: "登录",
          current: true,
        },
        {
          txt: "注册",
          current: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#login {
  background-color: #344a5f;
  height: 100vh;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block; //这个是行级元素
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: blue;
  }
}
</style>
