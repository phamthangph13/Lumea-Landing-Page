<template>
  <div class="card-article">
    <AppPageTransitionBg url="/about" color="#f0efeb" class="card-link">
      <span class="card-inner">
        <span class="card-title-wrapper-01">
          <span v-for="(char, index) of name" :key="index" class="card-title-wrapper-01-block" v-text="char"></span>
        </span>
        <span class="card-title-wrapper-02">
          <span v-for="(char, index) of desc" :key="index" class="card-title-wrapper-02-block" v-text="char"></span>
        </span>
        <span class="card-title-wrapper-03">
          <span class="pc-only">
            <span v-if="subtitle" class="card-sub-title">
              <span>{{ subtitle }}</span>
            </span>
            <span>{{ title }}</span>
          </span>
          <span class="sp-only">
            <span v-if="subtitle" class="card-sub-title">
              {{ subtitle }}
            </span>
            {{ title }}
          </span>
        </span>
      </span>
    </AppPageTransitionBg>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * name : 案件名
     * title : 案件タイトル
     * subtitle : 案件サブタイトル
     * desc : 案件説明
     * state : テキストアニメーションの状態を変更するprops
     */
    name: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    desc: {
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

<style scoped lang="scss">
.card-article {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 18px;
  background-color: $thinPink;
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
  color: $white;

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
  color: $darkPink;
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
}

.card-title-wrapper-03 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: $darkPink;
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
    color: $white;
    text-transform: uppercase;

    @include sp() {
      font-size: 9px;
    }
  }
}
</style>
