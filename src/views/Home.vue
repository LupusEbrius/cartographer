<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <img class="carousel" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FlDhWEkW.jpg&f=1&nofb=1"/>
    <div class="home-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar neque tellus, et egestas metus mattis sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat dui id diam fermentum, a volutpat ipsum ornare. Donec condimentum nisi quis ex feugiat bibendum. Maecenas sit amet mauris eget lectus porta malesuada. Praesent scelerisque rhoncus risus, id scelerisque lorem efficitur ut. Donec semper augue eu lectus auctor, a posuere lorem ultrices. Pellentesque euismod purus sit amet tincidunt lacinia.

Phasellus consectetur pharetra nisi. Mauris nec ipsum quis lacus tincidunt ullamcorper a in nulla. Nunc eget arcu sit amet turpis vestibulum suscipit vel vitae nunc. Suspendisse maximus facilisis fermentum. Etiam non dictum nibh. Pellentesque ipsum sapien, aliquet vel orci a, rutrum luctus nunc. Vestibulum a nunc commodo, iaculis libero eu, porttitor lorem. Maecenas dignissim velit at enim laoreet, vehicula mattis ex eleifend. Donec sed massa turpis. Vestibulum mollis a nibh ut tempus. Cras nisl arcu, facilisis vitae velit ac, vestibulum mollis ante. Proin ac ipsum massa. Sed congue porta erat et hendrerit. Cras luctus lectus in dapibus sodales. Ut posuere mi vel blandit placerat.

Pellentesque vitae nisl non felis pellentesque tincidunt. Ut sed felis euismod, convallis eros vel, posuere elit. Phasellus finibus vel orci non convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor auctor finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra tristique facilisis. Integer rhoncus purus tellus, ac congue risus sodales ornare. Sed aliquam posuere vulputate. Praesent vitae diam dignissim, tincidunt tellus nec, congue nunc.

Sed gravida malesuada mauris a euismod. Etiam fermentum, diam non vestibulum gravida, sem eros bibendum ex, porta dictum turpis mauris sit amet enim. Ut id sollicitudin massa. Aenean elementum dui nec quam porttitor, feugiat interdum nunc consequat. Phasellus sed tempus tortor. Proin fringilla rhoncus quam, sit amet varius nulla molestie id. Cras ultricies vitae erat finibus porttitor. Aliquam in dui leo.

Mauris mollis nibh et ipsum accumsan elementum. Phasellus eu diam id mi interdum imperdiet eget sed metus. Mauris fringilla non velit eu venenatis. Integer erat urna, tincidunt a nisi at, tempor interdum lorem. Aenean eleifend fringilla nisi, a tristique tellus tincidunt sed. Ut eget eros bibendum, fermentum mauris ut, elementum magna. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vulputate arcu ac ipsum interdum volutpat fringilla vitae lorem. Proin interdum elementum vehicula. Sed pellentesque at quam rutrum rutrum.
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.home{
  width: 90%;
  margin: auto;
}
.home-text {
  box-sizing: border-box;
  padding: 10px;
  border: 1px #666 solid;
  box-shadow: 0px 0px 3px #555;
}

@media screen and (max-width: 800px) {
  // remove margins
  // fit full width
}

</style>
