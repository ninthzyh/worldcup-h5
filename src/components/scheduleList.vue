<template>
  <div class="schedule-list">
    <div class="schedule-item">
      <div class="item-left">
        <div class="team">
          <div class="team-icon"></div>
          <div class="team-name">英格兰</div>
        </div>
        <div class="team">
          <div class="team-icon"></div>
          <div class="team-name">英格兰</div>
        </div>
      </div>
      <div class="item-right">
        <div class="time">21:00</div>
        <div class="status">未开始</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/vw";
.schedule-list {
  padding: vw(8) vw(18) vw(16) vw(18);
  font-family: "PingFang SC";
  font-style: normal;
  color: #ffffff;
  font-size: vw(14);
  .schedule-item {
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(vw(8));
    border-radius: vw(16);
    padding: vw(20);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .item-left {
      .team {
        display: flex;
        align-items: center;
        .team-icon {
          width: vw(24);
          height: vw(24);
          border-radius: 50%;
          margin-right: vw(16);
          background: #fff;
        }
        .team-name {
          font-weight: 400;
          line-height: vw(20);
        }
      }
      .team:not(:last-child) {
        margin-bottom: vw(16);
      }
    }
    .item-right {
      border-left: 1px solid rgba(255, 255, 255, 0.24);
      padding: vw(13) vw(20) vw(13) vw(40);
      text-align: center;
      .time {
        line-height: vw(17);
        font-weight: 500;
        padding-bottom: vw(4);
      }
      .status {
        line-height: vw(17);
        font-weight: 400;
      }
    }
  }
}
</style>