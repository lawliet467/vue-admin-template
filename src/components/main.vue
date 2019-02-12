<template>
    <div id="main">
        <x-header></x-header>
        <x-menu></x-menu>
        <x-tabs></x-tabs>
    </div>
</template>

<script>
  import xMenu from './menu'
  import xHeader from './header'
  import xTabs from './tabs'

  export default {
    components: {
      XMenu: xMenu,
      XHeader: xHeader,
      XTabs: xTabs,
    }
  }
</script>
