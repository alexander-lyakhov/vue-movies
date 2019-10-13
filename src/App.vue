<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<styles lang="scss" scoped>

#app {
  background: url(./assets/bg-01.jpg) 50% 0 no-repeat, url(./assets/bg-body.jpg) 50% 0 repeat-x;
  min-height: 100vh;
}

</styles>
