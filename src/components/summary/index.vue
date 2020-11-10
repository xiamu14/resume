<template>
  <div class="summary-box">
    <div class="person-info-box">
      <Avatar />
      <div class="person-info">
        <h2>夏木</h2>
        <h4><span class="purple">前端工程师</span> / 5 年工作经验</h4>
      </div>
    </div>
    <div class="person-description-box">
      <div
        v-for="(description, index) in descriptions"
        :key="index"
        class="description-box"
      >
        <div class="description">
          <span class="name">{{ description.key }}: </span>
          <span>{{ description.content }}</span>
        </div>
        <div class="split" v-if="index < descriptions.length - 1"></div>
      </div>
    </div>
    <div class="section-box">
      <div v-for="(section, index) in sections" :key="index">
        <Section
          :sectionTitle="section.sectionTitle"
          :dataset="section.dataset"
          :decorationPicture="icons[index]"
        />
      </div>
    </div>
    <!-- decoration icon -->
    <img class="decoration1" src="../../assets/icon5.svg" />
    <img class="decoration2" src="../../assets/icon6.svg" />
  </div>
</template>

<script lang="ts">
import Avatar from "../avatar/index.vue";
import Section from "../section/index.vue";
import sections from "../../data/sections";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";
import Icon3 from "../../assets/icon3.svg";
import Icon4 from "../../assets/icon4.svg";

export default {
  name: "Summary",
  data() {
    return {
      descriptions: [
        { key: "phone", content: "13543256448", type: "telephone" },
        {
          key: "email",
          content: "544652471@qq.com",
          type: "email",
        },
        {
          key: "github",
          content: "https://github.com/xiamu14",
          type: "link",
        },
      ],
      icons: [Icon1, Icon2, Icon3, Icon4],
      sections,
    };
  },
  components: {
    Avatar,
    Section,
  },
};
</script>

<style lang="scss" scoped>
.summary-box {
  position: relative;
  padding-bottom: 100px;
}
.person-info-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .person-info {
    position: relative;
    top: 14px;
    text-align: left;
    margin-left: 24px;
    .purple {
      color: rgba(90, 69, 245, 1);
    }
  }
}
.person-description-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  .description-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    .description {
      .name {
        text-transform: capitalize;
        color: rgba(127, 127, 127, 1);
      }
    }
    .split {
      width: 2px;
      height: 20px;
      background: rgba(90, 69, 245, 1);
      border-radius: 1px;
      margin: 0 30px 0 30px;
    }
  }
}
.section-box {
  margin-top: 42px;
  column-count: 2;
  column-gap: 100px;
}
.decoration1,
.decoration2 {
  position: absolute;
}
.decoration1 {
  width: 60px;
  height: 60px;
  right: 0;
  top: 0;
}
.decoration2 {
  left: 0;
  bottom: 0;
}
</style>
