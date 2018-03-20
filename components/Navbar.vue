<template>
  <div id="navbar">
    <ul>
      <li>
        <span v-on:click="displayList = !displayList" class="expandList">{{ displayList ? '-' : '+' }} Main Directory</span>
        <ul v-show="displayList" class="main-folder">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>
            <span v-on:click="displayWorks = !displayWorks" class="expandList">{{ displayWorks ? '-' : '+' }} Works</span>
            <ul v-show="displayWorks">
              <li>
                <nuxt-link to="/anomaly">anomaly</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/data-leak">data_leak</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/textures">textures</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/the-cloud">the_cloud</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/uploading">uploading</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/virtual-loneliness">virtual_loneliness</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/water-sampling">water_sampling</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://alheakvapor.store" target="_blank">Store 🡥</a>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      displayList: false,
      displayWorks: false
    }
  }
}
</script>

<style>
#navbar {
  position: absolute;
  top: 0;
  left: 0;
  padding-right: 18px;
  background-color: #000;
}

@media (max-width: 1243px) and (min-height: 802px), (max-height: 801px) {
  #navbar {
    top: 20px;
    border-top: 2px solid #000;
    border-right: 2px solid #452e17;
    border-bottom: 2px solid #452e17;
    border-left: 2px solid #000;
  }
}

@media (max-height: 801px) {
  #navbar {
    left: 135px;
  }
}

@media (max-width: 724px) {
  #navbar {
    top: 0;
    left: 0;
    width: 100vw;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid #963;
    border-left: 0;
  }
}

.nuxt-link-exact-active:before {
  content: '> ';
}

.expandList {
  cursor: pointer;
}

ul {
  list-style: none;
  padding-left: 18px;
}

.main-folder {
  padding-left: 18px;
}

li {
  position: relative;
  margin-top: 12px;
}

.main-folder li:before, .main-folder li:after {
  display: inline-block;
  width: 8px;
  height: 16px;
  position: absolute;
  content: '';
  border-left: 1px solid #963;
}

.main-folder li:before {
  height: 16px;
  top: -3px;
  left: -15px;
  border-bottom: 1px solid #963;
}

.main-folder li:after {
  height: 19px;
  top: 14px;
  left: -15px;
}

.main-folder li:last-child:after {
  height: 0;
}

a {
  text-decoration: none;
  color: #963;
}

a:hover {
  text-decoration: underline;
}
</style>
