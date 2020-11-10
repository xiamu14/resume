<template>
  <div class="section">
    <div class="section-title">
      <img class="decoration-picture" :src="decorationPicture" />
      <h1>{{ sectionTitle }}</h1>
    </div>
    <div class="section-info" v-for="(info, index) in dataset" :key="index">
      <div class="title"><h3>{{ info.title }}</h3></div>
      <div class="subtitle">
        <h5>
          <span>{{ info.subTitle }}</span>
          <span class="purple" v-if="info.duration">
            ({{info.duration[0]}} - {{info.duration[1]}})
          </span>
        </h5>
      </div>
      <div class="content">
        <div v-if="info.content.type === 'richText'">
          <div v-for="(item, index) in info.content.root" :key="index">
            <p v-if="item.type === 'p'">{{item.text}}</p>
            <div v-else-if="item.type === 'list'">
              <ol>
                <li v-for="(li, index) in item.dataset" :key="index">
                  <p v-if="li.type === 'p'">{{li.text}}</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Section",
  props: {
    sectionTitle: String,
    dataset: Array,
    decorationPicture: String,
  },
};
</script>

<style lang="scss" scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
    break-inside: avoid;
    .section-title {
      position: relative;
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding-top: 24px;
        .decoration-picture {
          position: relative;
          width: 70px;
          height: 70px;
        }
        > h1 {
          position: absolute;
          left: 40px;
          top: 0px;
        }
    }
    .section-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 50px;
    .subtitle {
        margin-bottom: 10px;
        .purple {
            color: rgba(90, 69, 245, 1);
        }
    }
    .content {
        font-size: 18px;
        text-align: left;
    }
    }
}
</style>
