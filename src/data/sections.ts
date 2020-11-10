interface P {
  type: "p";
  text: String;
}

interface List {
  type: "list";
  dataset: P[];
}

interface RichText {
  type: "richText";
  root: (P | List)[];
}

interface Section {
  sectionTitle: String;
  dataset: {
    title: String;
    subTitle?: String;
    duration?: [String, String];
    content: RichText | P | List;
  }[];
}

const sections: Section[] = [
  {
    sectionTitle: "工作经历",
    dataset: [
      {
        title: "深圳市星图互联科技有限公司",
        subTitle: "高级前端工程师",
        duration: ["2018", "至今"],
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text:
                "我任职与星图互联科技有限公司，担任研发部们前端组高级前端工程师。主要负责前端团队建设以及公司所有项目前端相关工作。",
            },
            {
              type: "p",
              text: "负责以下项目的前端研发：",
            },
            {
              type: "list",
              dataset: [
                {
                  type: "p",
                  text:
                    "鲜鱼堡、智慧社区两个项目的小程序和后台前端架构设计和代码开发(使用 Taro 框架，主要技术栈 React、Ant Design)",
                },
                {
                  type: "p",
                  text: "我爱猜歌王小程序(使用 wepy 框架，主要技术栈 vue2)",
                },
                {
                  type: "p",
                  text: "咕叽直播(hybrid 页面使用 vue 框架)",
                },
              ],
            },
            {
              type: "p",
              text: "前端团队建设包括：",
            },
            {
              type: "list",
              dataset: [
                {
                  type: "p",
                  text:
                    "制定基于 And Design 的组件库和 React 框架的中台 DSL 开发方案(使用 DSL 自动生成 CURD 功能的表格和复杂表单的代码)",
                },
                {
                  type: "p",
                  text:
                    "基于 eslint,prettier,typescript 制定并实施整洁安全的前端代码规范校验方案",
                },
                {
                  type: "p",
                  text:
                    "制定前端团队绩效考核标准、定期组织技术分享交流、促进团队成员代码开源",
                },
              ],
            },
          ],
        },
      },
      {
        title: "糗事百科",
        subTitle: "前端工程师",
        duration: ["2017", "2018"],
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text: "我任职果酱时代公司研发部门前端组，主要负责一下工作",
            },
            {
              type: "list",
              dataset: [
                {
                  type: "p",
                  text: "果酱直播 App 内 Hybrid 网页开发",
                },
                {
                  type: "p",
                  text:
                    "果酱直播 App 运营活动单页(包含 Hybrid , PC , Mobile 多端)开发",
                },
              ],
            },
          ],
        },
      },
      {
        title: "3W 孵化器",
        subTitle: "前端工程师实习/初级",
        duration: ["2015", "2017"],
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text:
                "我任职 3W 集团旗下创业服务平台的网站前端开发；主要开发了类似 36氪 next、ProductHunt 的 web App 产品(呈现方式是微信内网页)",
            },
          ],
        },
      },
    ],
  },
  {
    sectionTitle: "教育",
    dataset: [
      {
        title: "湖南商学院(本科)",
        subTitle: "电子信息工程学院",
        duration: ["2010", "2014"],
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text: "计算机与电子信息工程专业",
            },
          ],
        },
      },
    ],
  },
  {
    sectionTitle: "项目与技能",
    dataset: [
      {
        title: "一朝清单",
        subTitle: "https://www.oneeeday.work",
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text: "一朝清单是帮助用户制订计划并跟踪计划完成进度的工具网站。",
            },
            {
              type: "p",
              text: "技术栈：",
            },
            {
              type: "list",
              dataset: [
                {
                  type: "p",
                  text:
                    "1.后端使用 postgreSQL 数据库，express，typeorm, type-graphql 等工具，实现自动生成类型严格且自带校验功能的 graphql 接口",
                },
                {
                  type: "p",
                  text:
                    "2.前端使用 react,react-spring(动画库)，recoil(状态库)实现自适应 pc 端网站",
                },
              ],
            },
            {
              type: "p",
              text:
                "技术难点：SPA(单网页应用)中复杂层级间的状态管理需要做到状态定义精简，避免 re-render 等多余消耗。",
            },
          ],
        },
      },
      {
        title: "数据中台",
        subTitle: "http://fish-admin-beta.utoooo.com/",
        content: {
          type: "richText",
          root: [
            {
              type: "p",
              text: "产品概要：电商类产品的数据中台",
            },
            {
              type: "p",
              text: "技术栈：And Design, React, Typescript, Formily",
            },
            {
              type: "p",
              text:
                "技术产出：中台中存在大量重复的增删改查表格模块，开发了使用 DSL 描述表格字段，自动生成模块代码的命令行工具和桌面工具",
            },
          ],
        },
      },
      {
        title: "鲜鱼堡",
        subTitle: "小程序",
        content: {
          type: "richText",
          root: [{
            type: "p",
            text: "产品概要：电子商城小程序"
          }, {
            type: "p",
            text: "技术栈：Remax(基于 React 封装的小程序渲染库库)，Egg-UI(团队内部封装的UI组件库)"
          }, {
            type: "p",
            text: "技术难点：在小程序或移动端网页上使用类似 formily 表单库，因为 formily 的场景聚焦在中台，包含了大而全的功能，在移动端使用则过于庞大，所以在 Egg-UI 中封装了类似功能表单组件 AForm"
          }]
        }
      }
    ],
  },
  {
    sectionTitle: "开源项目",
    dataset: [
      {
        title: "独立开发",
        subTitle: "",
        content: {
          type: "richText",
          root: [
            {
              type: "list",
              dataset: [
                {
                  type: "p",
                  text: "AForm",
                },
                {
                  type: "p",
                  text: "AFetch",
                },
                {
                  type: "p",
                  text: "Retouch",
                },
              ],
            },
          ],
        },
      },
    ],
  },
];

export default sections;
