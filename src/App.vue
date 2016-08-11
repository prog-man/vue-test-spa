<template>
  <div class="container">


    <sidebar-layout>

      <ul>
        <li>
          <!-- использовать v-link директиву для навигации. -->
          <a v-link="{ path: '/' }">Home</a>
        </li>
        <li>
          <a v-link="{ path: '/foo' }">Go to Foo</a>
        </li>
        <li>
          <a v-link="{ path: '/bar' }">Go to Bar</a>
        </li>
      </ul>

    </sidebar-layout>



    <header-layout>

        <p>header</p>

    </header-layout>



    <div class="content">

       <router-view></router-view>

    </div>



    <footer-layout>

      <p>footer</p>

    </footer-layout>


  </div>

</template>

<script>
import HeaderLayout from './components/HeaderLayout'
import SidebarLayout from './components/SidebarLayout'
import FooterLayout from './components/FooterLayout'

export default {
  components: {
    HeaderLayout, SidebarLayout, FooterLayout
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin:0;
  padding:0;
}

body {
  display: flex;
  height: 100%;
}

#app {
  width:100%;
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  /*color: #42b983;*/
  text-decoration: none;
}

.content {
  height:100%;
  margin-top:-100px;
  margin-bottom:-100px;
  padding-top:100px;
  text-align:center;
}

</style>
