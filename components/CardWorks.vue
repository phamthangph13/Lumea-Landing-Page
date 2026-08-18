<template>
  <div class="card-article">
    <span class="card-shadow" :style="`box-shadow: 0 30px 60px 0 ${shadowColor};`"></span>
    <a :href="externalLink" target="_blank" rel="noopener" class="card-link">
      <span class="card-inner">
        <span class="card-title-wrapper-01">
          <span class="card-title-wrapper-01-block"> ・ </span>
          <span class="card-title-wrapper-01-block"> LUMÉA </span>
        </span>
        <span class="card-title-wrapper-02"> <span class="card-title-wrapper-02-block">HỆ SINH THÁI MÙI HƯƠNG VÀ NGHI THỨC CHĂM SÓC THÂN TÂM ĐƯƠNG ĐẠI.</span></span>
        <span class="card-title-wrapper-03">
          <span class="pc-only">
            <AppTextAnimation :state="state" :rotate="$BASEROTATE.left" :text="'KHÁM PHÁ'" :sp-animation="false" />
          </span>
          <span class="sp-only"> KHÁM PHÁ </span>
        </span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  /**
   * shadowColor : 影の色
   * externalLink : 外部リンク
   * state : テキストアニメーションの状態を変更するprops
   */
  props: {
    shadowColor: {
      type: String,
      default: '',
    },
    externalLink: {
      type: String,
      default: '',
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
  padding: 12px 13px;
  background-color: $white;
  border-radius: 7px;
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
  margin: 0 0 10px 0;
}

.card-title-wrapper-01-block {
  display: block;
  font-size: 12px;
  font-family: $helvetica;
  line-height: 1.2;

  &:first-of-type {
    font-size: 36px;
    text-indent: -4px;
    line-height: 0.6;
  }
}

.card-title-wrapper-02 {
  font-size: 10px;
}

.card-title-wrapper-02-block {
  display: block;
  width: 100%;
  font-size: 10px;
  font-family: $helvetica;
  letter-spacing: 0.02em;
  line-height: 1.35;
  word-break: break-word;
}

.card-title-wrapper-03 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 34px;
  font-family: $sixcaps;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.card-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 30px 60px 0 #101237;
  border-radius: 12px;
  opacity: 0.3;
}

/* stylelint-disable */
.is-windows .card-title-wrapper-01-block {
  &:first-of-type {
    position: relative;
    left: -8px;
  }
}
/* stylelint-enable */
</style>
