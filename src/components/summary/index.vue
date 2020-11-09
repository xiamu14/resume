<template>
  <div>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Avatar from "../avatar/index.vue";

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
    };
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
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
    min-width: 360px;
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
    }
  }
}
</style>
