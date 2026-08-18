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
  padding: 16px 14px;
  background-color: $white;
  color: $black;
  border-radius: 9px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;
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
  color: $black;
}

.card-title-wrapper-01 {
  display: block;
  margin: 0 0 8px 0;
}

.card-title-wrapper-01-block {
  display: block;
  font-size: 13px;
  font-family: $helvetica;
  font-weight: 700;
  color: $black;
  line-height: 1.2;

  &:first-of-type {
    font-size: 24px;
    text-indent: -2px;
    line-height: 0.8;
    margin-bottom: 2px;
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
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.35;
  color: #333333;
  word-break: break-word;
}

.card-title-wrapper-03 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 32px;
  font-family: $sixcaps;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: $black;
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
    left: -2px;
  }
}
/* stylelint-enable */
</style>
