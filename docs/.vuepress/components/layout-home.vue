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

    <section class="section is-feature" v-for="feature in data.features" id="feature">
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

    <section class="section is-introduce" v-if="data.about.heading" id="introduce">
      <div class="inner-vw">
        <div class="grid is-middle is-center is-gap-3x">
          <div class="col">
            <img class="obj is-home-point-illust is-desktop-lg is-wide-xl" 
            :src="$withBase('/img/illust-feature-4.svg')" alt="feature">
          </div>
          <div class="col">
            <div class="group is-home-point-textbox is-space">
              <p class="texts is-sm is-left">
                みなさまこんにちは。院長の渡辺静司です。
                私は多治見に生まれ、高校まで多治見で過ごした後、北海道大学歯学部を卒業しました。
                これまでの経験を生かし、生まれ育った多治見で地域の皆さまのお口の悩みに少しでもお力になることができれば幸いです。
              </p>
              <p class="texts is-sm is-left">
                基本的な治療をしっかり行えば、歯を抜くことなく十分治療できることの方が多いと考えています。
                患者さんのお口の中は多種多様で一つとして同じものはありません。また、患者さん一人一人のお口の中への関心も人それぞれです。
                患者さんとお話をさせていただき、お口の中を拝見いたしまして、患者さんに治療方針を提示させていただき、納得いただけたら治療に入ります。
                そこで別の方法をご希望の場合には、次の治療方針を示させていただき、必ず患者さんの了解を得た上で治療を行うようにしています。
                従って、些細なことでもご質問いただければ幸いです。
              </p>
              <p class="texts is-sm is-left">
                当医院では患者さんからの申し出がない限り、「保険外診療」を勧めません。
                難しい外科処置や審美など、見た目に格好いい部分ばかりが日の目を浴びますが、もっと基本的に大事なことがあると考えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-access" v-if="data.about.heading" id="access">
      <div class="inner-vw is-middle is-space is-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.0210378748666!2d137.11590512185376!3d35.34328134514579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60036a8ca00ae373%3A0xdc96c37a1d1b13db!2z44KP44Gf44Gq44G55q2v56eR!5e0!3m2!1sja!2sjp!4v1495246659013" width="800" height="600" frameborder="0" style="border:0;display:block;margin:auto;" allowfullscreen></iframe>
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
    copylightYear() {
      const _now = new Date();
      return _now.getFullYear();
    }
  }
};
</script>
