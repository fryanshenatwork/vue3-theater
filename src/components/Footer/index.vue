<script setup>
import data from './api.json'
import { computed } from 'vue'


const filteredData = computed(() => {
  return data.footerNavigatorL1S
    .map(({
      id,
      title,
      footerNavigatorL2S
    }) => ({
      id,
      title,
      footerNavigatorL2S: footerNavigatorL2S.filter(e => e.url)
    }))
    .filter(e => e.footerNavigatorL2S.length)
})

console.log(
  filteredData
)
</script>

<template>
  <footer class="footer">
    <div class="navigator-wrapper">
      <div
        class="navigator"
        v-for="item in filteredData"
      >
        <h5>{{  item.title }}</h5>
        <ul>
          <li v-for="inner in item.footerNavigatorL2S">
            <a :href="inner.url">{{ inner.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cpr">© {{ new Date().getFullYear() }} Cinema.</div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  display: block;
  background: #305C44;
  color: white;

  .cpr {
    display: block;
    width: 100%;
    background: #2F513E;
    padding: 1em 1.25em;
    font-size: 12px;
  }

  .navigator-wrapper {
    display: flex;
    padding: 4em 1.25em;

    .navigator {
      width: 180px;
      h5 {
        color: white;
        font-size: 1.2em;
        padding-bottom: 1.3em;
      }

      ul { 
        li {
          padding: .7em 0;
          a {
            color: white;
            opacity: .5;
            text-decoration: none;

            &:hover {
              opacity: .8;
            }
          }
        }
      }
    }
  }
}
</style>