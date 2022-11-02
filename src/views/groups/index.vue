<template>
  <div class="groups">
    <div class="groups-content">
      <div class="group-item" v-for="(item,index) in groupList" :key="index">
        <div class="group-title">{{item.groupName}}</div>
        <div class="table">
          <div class="table-header">
            <div class="label-first"><span>#</span>球队</div>
            <div class="label">场次</div>
            <div class="label">胜</div>
            <div class="label">平</div>
            <div class="label">负</div>
            <div class="label">积分</div>
          </div>
          <div class="table-content" v-for="(it,idx) in item.dataList" :key="idx">
            <div class="rows-first">
              <div class="index">{{idx+1}}</div>
              <national-flag :width="`${$vw(24)}`" :height="`${$vw(24)}`" :margin="`0 ${$vw(13)}`" :img="it.teamFlag" />
              <div class="team-name">{{it.teamName}}</div>
            </div>
            <div class="rows-other">{{it.matchesPlayed}}</div>
            <div class="rows-other">{{it.matchesWon}}</div>
            <div class="rows-other">{{it.matchesDrawn}}</div>
            <div class="rows-other">{{it.matchesLost}}</div>
            <div class="rows-other">{{it.points}}</div>
          </div>
        </div>
      </div>
      <div class="group-logo"></div>
    </div>
    <div class="tips">
      <div class="legend"></div>晋级淘汰赛资格
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
import NationalFlag from "../../components/NationalFlag";

export default {
  components: {
    NationalFlag,
  },
  data() {
    return {
      groupList: [
        {
          groupName: "A组",
          dataList: [
            {
              teamId: "9l06impjllgop0gte8fldb4zo",
              teamName: "乌拉圭",
              rankNum: 1,
              rankOrder: 1,
              points: 9,
              matchesPlayed: 3,
              matchesWon: 3,
              matchesLost: 0,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "f0frccyrlq2jjihdraoie2e2d",
              teamName: "俄罗斯",
              rankNum: 2,
              rankOrder: 2,
              points: 6,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 1,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "9l4imoomrnyceg5u3kdxf5l5r",
              teamName: "沙特阿拉伯",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "3669sbeijslw88073qlw1cbcp",
              teamName: "埃及",
              rankNum: 4,
              rankOrder: 4,
              points: 0,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 3,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "B组",
          dataList: [
            {
              teamId: "eh7yt2x2wck51oixw8012ux5j",
              teamName: "西班牙",
              rankNum: 1,
              rankOrder: 1,
              points: 5,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 0,
              matchesDrawn: 2,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "8gxg8f7p9299jbrz30u8bsc7g",
              teamName: "葡萄牙",
              rankNum: 2,
              rankOrder: 2,
              points: 5,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 0,
              matchesDrawn: 2,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "cubclbw5k5gdqdau95bnav0nn",
              teamName: "伊朗",
              rankNum: 3,
              rankOrder: 3,
              points: 4,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 1,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "avggs3u2b5cu8i1dnzknhth52",
              teamName: "摩洛哥",
              rankNum: 4,
              rankOrder: 4,
              points: 1,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 2,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "C组",
          dataList: [
            {
              teamId: "4pz87gsel7183b7kcadw1dwzv",
              teamName: "法国",
              rankNum: 1,
              rankOrder: 1,
              points: 7,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 0,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "akblgvrthxxgta4ou9lnslxgb",
              teamName: "丹麦",
              rankNum: 2,
              rankOrder: 2,
              points: 5,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 0,
              matchesDrawn: 2,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "a9sendamrqqz1uv4jc89mfum8",
              teamName: "秘鲁",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "bl4fd8cxe6kjvjx8br82gkhnq",
              teamName: "澳大利亚",
              rankNum: 4,
              rankOrder: 4,
              points: 1,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 2,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "D组",
          dataList: [
            {
              teamId: "4njsfszcgd9m765d6suktsz2a",
              teamName: "克罗地亚",
              rankNum: 1,
              rankOrder: 1,
              points: 9,
              matchesPlayed: 3,
              matchesWon: 3,
              matchesLost: 0,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "ak48fkypnql8y4n69cvcq5ghc",
              teamName: "阿根廷",
              rankNum: 2,
              rankOrder: 2,
              points: 4,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 1,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "ao3zo8i0kn3grl47nol24gck0",
              teamName: "尼日利亚",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "5gv6rrm6m6ixf8nff08vx7i9m",
              teamName: "冰岛",
              rankNum: 4,
              rankOrder: 4,
              points: 1,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 2,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "E组",
          dataList: [
            {
              teamId: "ajab3nmpoltsoeqcuoyi4pwzx",
              teamName: "巴西",
              rankNum: 1,
              rankOrder: 1,
              points: 7,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 0,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "339wxbt07ltnva7hop6m5o477",
              teamName: "瑞士",
              rankNum: 2,
              rankOrder: 2,
              points: 5,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 0,
              matchesDrawn: 2,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "2ome9qbio8c3r9lmhx2hg6kif",
              teamName: "塞尔维亚",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "bfgqfm4qa3mal7fll74wd04mu",
              teamName: "哥斯达黎加",
              rankNum: 4,
              rankOrder: 4,
              points: 1,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 2,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "F组",
          dataList: [
            {
              teamId: "4w1ktgu1nbbgqfe3ssbb4fg5v",
              teamName: "瑞典",
              rankNum: 1,
              rankOrder: 1,
              points: 6,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 1,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "4vofb84dzb5fyc81n2ssws6ah",
              teamName: "墨西哥",
              rankNum: 2,
              rankOrder: 2,
              points: 6,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 1,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "1yghbv1c71b37eenutbwnvvq",
              teamName: "韩国",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "3l2t2db0c5ow2f7s7bhr6mij4",
              teamName: "德国",
              rankNum: 4,
              rankOrder: 4,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "G组",
          dataList: [
            {
              teamId: "pfvmhackqyhhk02majd2tb8l",
              teamName: "比利时",
              rankNum: 1,
              rankOrder: 1,
              points: 9,
              matchesPlayed: 3,
              matchesWon: 3,
              matchesLost: 0,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "ck8m1cn23sukwsurgx5qakttk",
              teamName: "英格兰",
              rankNum: 2,
              rankOrder: 2,
              points: 6,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 1,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "ctp7ovvf34m7fzshua9ogbr6i",
              teamName: "突尼斯",
              rankNum: 3,
              rankOrder: 3,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "8856r86rattc8kxn6a0l9tb2t",
              teamName: "巴拿马",
              rankNum: 4,
              rankOrder: 4,
              points: 0,
              matchesPlayed: 3,
              matchesWon: 0,
              matchesLost: 3,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
        {
          groupName: "H组",
          dataList: [
            {
              teamId: "7km4szeh6fs5bbdgypshh0snd",
              teamName: "哥伦比亚",
              rankNum: 1,
              rankOrder: 1,
              points: 6,
              matchesPlayed: 3,
              matchesWon: 2,
              matchesLost: 1,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "6duaxcbrofil112qfq4v895go",
              teamName: "日本",
              rankNum: 2,
              rankOrder: 2,
              points: 4,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 1,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: true,
            },
            {
              teamId: "2wk1549tkz80oet8226euj7jp",
              teamName: "塞内加尔",
              rankNum: 3,
              rankOrder: 3,
              points: 4,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 1,
              matchesDrawn: 1,
              teamFlag: null,
              riseFlag: false,
            },
            {
              teamId: "ba25ib8pofxr85hkbs8lt7kw7",
              teamName: "波兰",
              rankNum: 4,
              rankOrder: 4,
              points: 3,
              matchesPlayed: 3,
              matchesWon: 1,
              matchesLost: 2,
              matchesDrawn: 0,
              teamFlag: null,
              riseFlag: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@/assets/vw";
.groups {
  height: calc(100vh - #{vw(136)});
  font-family: "PingFang SC";
  font-style: normal;
  color: #fff;
  position: relative;

  .groups-content {
    padding: vw(56) vw(24) 0 vw(24);
    height: calc(100% - #{vw(116)});
    width: calc(100% - #{vw(48)});
    overflow: auto;
    position: absolute;
    z-index: 1;
    .group-logo {
      width: vw(56);
      height: vw(56);
      background: url("~@/assets/images/group-logo.svg") no-repeat;
      position: absolute;
      top: vw(28);
      left: calc((100% - #{vw(56)}) / 2);
    }
    .group-item {
      background: rgba(0, 0, 0, 0.04);
      border: vw(1) solid rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(vw(8));
      border-radius: vw(16);
      font-family: "PingFang SC";
      font-style: normal;
      &:not(:last-child) {
        margin-bottom: vw(16);
      }
      .group-title {
        font-weight: 600;
        font-size: vw(14);
        line-height: vw(24);
        padding: vw(12) vw(16);
        border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
      }
      .table {
        .table-header {
          font-weight: 400;
          font-size: vw(12);
          line-height: vw(24);
          display: flex;
          align-items: center;
          text-align: center;
          padding: vw(12) vw(12) vw(12) vw(16);
          border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
          .label-first {
            flex-basis: 125px;
            text-align: left;
            > span {
              margin-right: vw(14);
            }
          }
          .label {
            flex: 1;
            text-align: center;
          }
        }
        .table-content {
          display: flex;
          align-items: center;
          padding: vw(12) vw(12) vw(12) vw(16);
          line-height: vw(24);
          font-weight: 500;
          font-family: "Formular";
          font-size: vw(14);
          &:not(:last-child) {
            border-bottom: vw(1) solid rgba(255, 255, 255, 0.12);
          }
          .rows-first {
            flex-basis: 125px;
            display: flex;
            align-items: center;
            .index {
              font-family: "Formular";
            }
            .team-name {
              font-family: "PingFang SC";
              font-weight: 400;
              font-size: vw(12);
            }
          }
          .rows-other {
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
  .tips {
    font-weight: 400;
    font-size: vw(10);
    line-height: vw(16);
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    padding: vw(16) vw(24) vw(28) vw(24);
    position: absolute;
    bottom: 0;
    .legend {
      width: vw(8);
      height: vw(8);
      background: #bd223b;
      border-radius: 50%;
      margin-right: vw(4);
    }
  }
  .bg {
    width: 100%;
    height: vw(375);
    background: url("~@/assets/images/bg.svg") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: vw(152);
    z-index: 0;
  }
}
</style>