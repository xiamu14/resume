<template>
  <div class="avatar-box">
    <div class="dot-box">
      <div
        v-for="(dotArray, index) in dotArrays"
        :key="index"
        class="dot-group"
      >
        <span v-for="(dot, index) in dotArray" :key="index" class="dot"></span>
      </div>
    </div>
    <img
      class="avatar-picture"
      src="../../assets/avatar.png"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Avatar",
  data() {
    return {
      dotNumbers: [9, 9],
    };
  },
  computed: {
    // TODO: compute dot arrary
    dotArrays() {
      var dotArrays = [];
      for (let j = 0; j < this.dotNumbers[0]; j++) {
        var dotArray = [];
        for (let i = 0; i < this.dotNumbers[1]; i++) {
          dotArray[i] = 0;
        }
        dotArrays.push(dotArray);
      }
      return dotArrays;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-box {
  position: relative;
}
.dot-box {
  width: 116px;
  height: 116px;
  .dot-group {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    .dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
      border-radius: 50%;
      background: rgba(90, 69, 245, 1);
    }
  }
}
.avatar-picture {
  position: absolute;
  top: 26px;
  left: 26px;
  width: 90px;
  height: 90px;
  object-fit: fill;
  /* border-radius: 50%; */
}
</style>
