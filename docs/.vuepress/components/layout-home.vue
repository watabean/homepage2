<template>
  <div class="home is-wide-lg">
    <section class="section is-hero">
      <div class="inner-soft">
        <div class="grid is-middle is-center is-gap-6x">
          <div class="col is-space">
            <p class="heading is-light is-weight-700" v-if="data.hero.heading1">
              <span class="text is-block is-hero-1">{{ data.hero.heading1 }}</span>
              <span class="text is-block is-hero-2" v-if="data.hero.heading2">{{ data.hero.heading2 }}</span>
            </p>
            <h1 class="texts is-light is-sm" v-if="data.hero.texts">
              <span class="text is-fablet-block" v-for="text in data.hero.texts">{{ text }}</span>
            </h1>
            <table-reception-hours />
          </div>
          <div class="col" v-if="data.hero.image">
            <img class="obj is-hero-illust" :src="$withBase(data.hero.image)" alt="hero">
          </div>
        </div>
      </div>
    </section>

    <section class="section is-about" v-if="data.about.heading">
      <div class="inner-vw is-space">
        <h2 class="heading is-primary is-strong is-center is-lg is-fablet-xl is-tablet-xxl">{{ data.about.heading }}</h2>
        <p class="texts is-sm is-center" v-if="data.about.texts1">
          <span class="text is-inline-block" v-for="text in data.about.texts1">{{ text }}</span>
          <br>
          <span class="text is-inline-block" v-for="text in data.about.texts2">{{ text }}</span>
        </p>
      </div>
    </section>

    <section class="section is-feature" v-for="feature in data.features">
      <div class="inner-vw">
        <div class="grid is-middle is-center is-gap-3x">
          <div class="col" v-if="feature.image">
            <img class="obj is-home-point-illust is-desktop-lg is-wide-xl" :src="$withBase(feature.image)" alt="feature">
          </div>
          <div class="col">
            <div class="group is-home-point-textbox is-space">
              <h2 class="heading is-xl" v-if="feature.heading">
                <span class="text">{{ feature.heading }}</span>
              </h2>
              <p class="texts is-sm" v-if="feature.text">{{ feature.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="section is-footer">
      <div class="inner">
        <div class="grid is-center is-gap-2x">
          <div class="col" v-if="data.footer.address">
            <p class="text is-sm is-light">
              <i :class="data.footer.address.icon" aria-hidden="true" v-if="data.footer.address"></i>
              <a class="text is-link-reverse" :href="data.footer.address.link" v-if="data.footer.address.name">{{ data.footer.address.name }}</a>
              <span class="text" v-else="data.footer.address.name">{{ data.footer.address.name }}</span>
            </p>
          </div>
          <div class="col" v-if="data.footer.tel">
            <p class="text is-sm is-light">
              <i :class="data.footer.tel.icon" aria-hidden="true" v-if="data.footer.tel.icon"></i>
              <a class="text is-link-reverse" :href="data.footer.tel.number" v-if="data.footer.tel.number">{{ data.footer.tel.number }}</a>
              <span class="text" v-else="data.footer.tel.number">{{ data.footer.tel.number }}</span>
            </p>
          </div>
          <div class="col" v-if="data.footer.copylight">
            <p class="text is-sm is-light">
              <i :class="data.footer.copylight.icon" aria-hidden="true" v-if="data.footer.copylight.icon"></i>
              <span class="text">{{ copylightYear }}&nbsp;</span>
              <a class="text is-link-reverse" :href="data.footer.copylight.link" v-if="data.footer.copylight.link">{{ data.footer.copylight.name }}</a>
              <span class="text" v-else="data.footer.copylight.link">{{ data.footer.copylight.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>
