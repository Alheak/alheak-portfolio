<template>
  <div id="navbar">
    <ul>
      <li>
        <span v-on:click="displayList = !displayList" class="expandList">{{ displayList ? '-' : '+' }} Main Directory</span>
        <ul v-if="displayList" class="main-folder">
          <li><router-link to="/">Home</router-link></li>
          <li>
            <span v-on:click="displayWorks = !displayWorks" class="expandList">{{ displayWorks ? '-' : '+' }} Works</span>
            <ul v-if="displayWorks">
              <li>
                <router-link to="/anomaly">anomaly.alhk</router-link>
              </li>
              <li>
                <router-link to="/water-sampling">water_sampling.alhk</router-link>
              </li>
              <li>
                <router-link to="/virtual-loneliness">virtual_loneliness.alhk</router-link>
              </li>
              <li>
                <router-link to="/data-leak">data_leak.alhk</router-link>
              </li>
              <li>
                <router-link to="/textures">textures.alhk</router-link>
              </li>
              <li>
                <router-link to="/the-cloud">the_cloud.alhk</router-link>
              </li>
              <li>
                <router-link to="/uploading">uploading.alhk</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://alheakvapor.store" target="_blank">Store 🡥</a>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
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

.expandList {
  cursor: pointer;
}

ul {
  list-style: none;
  padding-left: 18px;
}

.main-folder {
  padding-left: 10px;
}

li {
  margin-top: 12px;
}

.main-folder li:before {
  display: inline-block;
  width: 8px;
  height: 16px;
  position: relative;
  top: -5px;
  left: -8px;
  content: '';
  border-bottom: 1px solid #963;
  border-left: 1px solid #963;
}

a {
  text-decoration: none;
  color: #963;
}

a:hover {
  text-decoration: underline;
}
</style>
