<template>
 <!--  <my-component></my-component> -->
  <div id="firstcomponents">
    <my-component></my-component>
    <h1>I am a title footer {{author}}</h1>
    <p>
    	<router-link id="book" to="/book">获取图书信息</router-link>
		  <router-link id="book" to="/chicken">获取鸡肉信息</router-link>
		  <router-view></router-view>
    </p>
    <footer-component></footer-component>
  </div>
</template>

<script type="text/javascript">
import myComponent from './header.vue'
import footerComponent from './footer.vue'

export default {
  
  data () {
    return {
      author: "微信公众号 gdy"
    }
  },
  components: {
    // <my-component> 将只在父模板可用
    'my-component': myComponent,
    'footer-component': footerComponent
  }
}
</script>
 
<style>

</style>
