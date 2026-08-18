<template>
  <div class="card-article">
    <component :is="setTagName" :url="setUrl" :index="setIndex" :color="setColor" class="card-link">
      <span class="card-inner">
        <span class="card-title-wrapper-01">
          <span class="card-title-wrapper-01-block"> ・ </span>
          <span class="card-title-wrapper-01-block">
            {{ name }}
          </span>
        </span>
        <span class="card-title-wrapper-02">
          <span class="card-title-wrapper-02-block">{{ desc }}</span>
        </span>
        <span class="card-title-wrapper-03">
          <span class="pc-only">
            <AppTextAnimation :state="state" :rotate="$BASEROTATE.left" :text="title" :sp-animation="false" />
          </span>
          <span class="sp-only">
            {{ title }}
          </span>
        </span>
      </span>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * type : works/archiveで処理を切り替える
     * index : 案件に固有に振り渡している番号
     * id : 案件ID
     * name : 案件名
     * title : 案件タイトル
     * desc : 案件説明
     * modifier : 見た目を変更するクラス
     * state : テキストアニメーションの状態を変更するprops
     */
    type: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
  },
  computed: {
    setTagName() {
      if (this.type === 'works') {
        return 'AppPageTransitionImage'
      } else if (this.type === 'archive') {
        return 'AppPageTransitionBg'
      } else {
        return ''
      }
    },
    setUrl() {
      if (this.type === 'works') {
        return `/works/${this.id}`
      } else if (this.type === 'archive') {
        return '/archive'
      } else {
        return ''
      }
    },
    setIndex() {
      if (this.type === 'works') {
        return this.index
      } else {
        return ''
      }
    },
    setColor() {
      if (this.type === 'archive') {
        return '#000000'
      } else {
        return ''
      }
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
}
</style>
