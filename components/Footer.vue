<template>
  <div class="footer">
    <div class="top">
      <img src="../assets/blogLogo.svg" alt="footer img">
      <div class="link">
        <div class="wechart">
          <div class="qrCode"></div>
        </div>
        <a href="https://dribbble.com/geetest">
          <img src="../assets/dribbble.svg" alt="wechart link">
        </a>
        <a href="http://weibo.com/geetest">
          <img src="../assets/Weibo.svg" alt="wechart link">
        </a>
      </div>
    </div>
    <div class="line"/>
    <div class="company">武汉极意网络科技有限公司 鄂ICP备12016193号-1</div>
    <div class="copyright">Copyright © 2017 GEETSET</div>
  </div>
</template>

<style lang="scss">
$line-color: #eaedf1;
$company-color: #002059;
$copyright-color: #bfc7d5;

.footer {
  width: 1100px;
  margin: 0 auto;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;

    & > img {
      height: 32px;
    }

    .link {
      width: 108px;
      display: flex;
      justify-content: space-between;

      .wechart {
        width: 22px;
        height: 22px;
        cursor: pointer;
        background: url('../assets/Wechart.svg') no-repeat;
        background-size: 22px 18px;
        position: relative;
        transition: all 0.3s;

        .qrCode {
          width: 160px;
          height: 160px;
          position: absolute;
          bottom: 40px;
          right: -70px;
          pointer-events: none;
          opacity: 0;
          background: url('../assets/wechartCode.png') no-repeat;
          background-size: 160px;
          transition: all 0.3s;
          box-shadow: 0 0 10px 0 rgba(27, 34, 45, 0.25),
            0 6px 14px 0 rgba(127, 143, 172, 0.25);
        }

        &:hover {
          background: url('../assets/WechartHover.svg') no-repeat;
          background-size: 22px 18px;

          .qrCode {
            opacity: 1;
          }
        }
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: $line-color;
    margin: 10px 0 16px;
  }

  .company {
    font-size: 12px;
    line-height: 17px;
    opacity: 0.4;
    color: $company-color;
  }

  .copyright {
    font-size: 12px;
    line-height: 17px;
    opacity: 0.9;
    color: $copyright-color;
    margin-bottom: 58px;
  }
}
</style>
