<template>
  <div class="card-article">
    <div class="card-inner">
      <div class="card-title-wrapper-01">
        <span v-for="(char, index) of name" :key="index" class="card-title-wrapper-01-block" v-text="char"></span>
      </div>
      <ul class="card-title-wrapper-02">
        <li v-for="(char, index) of info" :key="index" class="card-title-wrapper-02-block">
          <a :href="char.link" target="_blank" rel="noopener">{{ char.text }}</a>
        </li>
      </ul>
      <div class="card-title-wrapper-03">
        <span class="pc-only">
          <a v-if="title.link" :href="title.link" target="_blank" rel="noopener" class="card-title-wrapper-03-link">
            <span v-if="title.subtext" class="card-sub-title">
              <AppTextAnimation :state="state" :start="0.1" :rotate="$BASEROTATE.left" :text="title.subtext" :sp-animation="false" />
            </span>
            <AppTextAnimation :state="state" :start="0.25" :rotate="$BASEROTATE.left" :text="title.text" :sp-animation="false" />
          </a>
          <span v-else class="card-title-wrapper-03-link">
            <span v-if="title.subtext" class="card-sub-title">
              <AppTextAnimation :state="state" :start="0.1" :rotate="$BASEROTATE.left" :text="title.subtext" :sp-animation="false" />
            </span>
            <AppTextAnimation :state="state" :start="0.25" :rotate="$BASEROTATE.left" :text="title.text" :sp-animation="false" />
          </span>
        </span>
        <span class="sp-only">
          <a :href="title.link" target="_blank" rel="noopener">
            <span v-if="title.subtext" class="card-sub-title">
              {{ title.subtext }}
            </span>
            {{ title.text }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * name : 名前
     * title : タイトル
     * subtitle : サブタイトル
     * info : 各種SNS
     * state : テキストアニメーションの状態を変更するprops
     */
    name: {
      type: Array,
      required: true,
    },
    title: {
      type: Object,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    },
    state: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card-article {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 18px;
  background-color: $white;
  color: $black;
  border-radius: 14px;
  overflow: hidden;

  @include sp() {
    padding: 18px 14px;
    border-radius: 7px;
  }
}

.card-inner {
  display: block;
  position: relative;
  height: 100%;
}

.card-link {
  display: block;
  width: 100%;
  height: 100%;
  text-align: left;
  line-height: 1;
}

.card-title-wrapper-01 {
  display: block;
  margin: 0 0 24px 0;

  @include sp() {
    margin: 0 0 18px 0;
  }
}

.card-title-wrapper-01-block {
  display: block;
  font-size: 14px;
  font-family: $helvetica;
  font-weight: 700;
  line-height: 1.25;

  @include sp() {
    font-size: 12px;
  }

  &:first-of-type {
    font-size: 26px;
    text-indent: -2px;
    line-height: 1;

    @include sp() {
      display: inline-block;
      margin: 0 0 0 -2px;
      font-size: 20px;
      line-height: 0.9;
      text-indent: 0;
    }
  }
}

.card-title-wrapper-02 {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.card-title-wrapper-02-block {
  display: block;
  width: auto;
  max-width: 100%;
  font-size: 11px;
  font-family: $helvetica;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.45;
  word-break: break-word;

  @include sp() {
    font-size: 10px;
  }

  & a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}

.card-title-wrapper-03 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  font-size: 34px;
  font-family: $sixcaps;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @include sp() {
    font-size: 26px;
  }

  & .card-sub-title {
    display: block;
    margin-bottom: 2px;
    font-size: 10px;
    font-family: $helvetica;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #9e4732;
    text-transform: uppercase;

    @include sp() {
      font-size: 9px;
    }
  }
}
</style>
