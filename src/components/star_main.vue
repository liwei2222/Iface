<template>
  <div>
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="2">
          <Main Head >IFace</Main>
        </MenuItem>
        <div class="layout-nav">
          <MenuItem name="3">
            <Icon type="ios-globe" />
            <a href="http://localhost:8081/#/main">首页</a>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="logo-octocat" />
            我的
          </MenuItem>
        </div>
      </Menu>
    </Header>
      <div :style="{backgroundImage: 'url(' + imageUrl + ')',width : '100%',height : '600px',backgroundSize: 'cover'}">
        <div style="margin-left: 6%">
          <Row>
            <Col span="12">
            <br>
            <br>
              <font size="8"  color="black">
                {{starName}}
              </font>
            <br>
              <font size="3">
                <h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{introduce}}
                </h4>
              </font>
            <br>
            <br>
              <font size="3" color="black">
                <h4>
                  代表作品：{{workStr}}
                </h4>
              </font>
            <br>
            <Rate v-model="value" />
            <Icon type="ios-chatbubbles-outline" size="24"/>{{commentCount}}
            </Col>
            <Col span="12">

            </Col>
          </Row>
        </div>
      </div>
    <Divider orientation="left">星论坛</Divider>
    <div v-for = "item in commentObjects" style="margin-left: 10%;margin-right: 10%">
      <div style="height: 20px;width: 100%">
        <Row>
          <Col span="21">
            <Avatar :src=item.avatar />{{item.name}}:{{item.contentText}}
          </Col>
          <Col span="3">
            {{item.time}}
          </Col>
        </Row>
        <div v-for="contentPhoto in item.contentPhotos">
          <img style="width: 150px;
               height: 150px;
               float: left;
               margin: 10px 10px 0 0;"v-bind:src="contentPhoto"  id="content-photo" >
        </div>
      </div>
      <Divider orientation="left"></Divider>
    </div>
    <Form style="width: 50%;margin-left: 10%">
      <FormItem label="评论">
        <Input v-model="commentText" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder=""></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="sendComment()">提交</Button>
          <Upload multiple ref="upload" :before-upload="handleUpload" :show-upload-list="false"
                          :on-success="uploadSuccess" action="">
            <Button  icon="ios-cloud-upload-outline">浏览</Button>
          </Upload>
          <div v-for="(item, index) in file">Upload file: {{ item.name }}
            <a href="javascript:;" @click="delectFile(item.keyID)">X</a>
          </div>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
      name: "star_main",
      created () {
        this.init();
      },
      methods:{
        init() {
          axios.get('http://localhost:8080/getStar', {
            params : {
              "name" : this.$route.query.name
            }
          }).then((response) => {
            var res = response.data;
            console.log(res.url)
            this.imageUrl = res.url;
            this.starName = res.name;
            this.introduce = res.introduce;
            this.work = res.works;
            var list = this.work.split(",");
            this.workStr = "《" + list.join("》《") + "》";
            this.commentObjects = res.commentList;
            console.log(JSON.stringify(this.commentObjects))
            this.commentCount = this.commentObjects.length;
          }, error => {

          })
        },
        handleUpload(file) { // 保存需要上传的文件
          let keyID = Math.random().toString().substr(2);
          file['keyID'] = keyID;
          this.file.push(file);
          this.uploadFile.push(file)
          return false;
        },
        delectFile(keyID) { // 删除文件
          this.file = this.file.filter(item => {
            return item.keyID != keyID
          })
          this.uploadFile = this.uploadFile.filter(item => {
            return item.keyID != keyID
          })
        },
        upload() { // 上传文件
          if (this.uploadFile.length === 0) {
            this.$Message.error('未选择上传文件')
            return false
          }
          var sta = window.localStorage;
          var userName = sta.getItem("name");
          let data = new FormData();
          console.log(this.file)
          data.append("context",this.commentText);
          data.append("userName",userName);
          data.append("starName",this.$route.query.name);
          for(var j = 0; j < this.file.length; j++) {
            data.append("files", this.file[j]);
          }
          axios.post('http://localhost:8080/uploadCommit', data, {headers:{
              'Content-Type':'application/json;charset=utf-8'
            }})
            .then((response) => {
              this.init();
              this.commentText = "";
            })
          this.file = [];
        },
        uploadSuccess(response, file, fileList) { // 文件上传回调 上传成功后删除待上传文件
          console.log(response) // 后端返回数据
          console.log(file) // 当前上传文件
          console.log(fileList) // 整个input file 里的文件数组
        },
        sendComment() {
          if(this.file.length == 0) {
            var sta = window.localStorage;
            var userName = sta.getItem("name");
            let data = new FormData();
            data.append("context", this.commentText);
            data.append("userName", userName);
            data.append("starName", this.$route.query.name);
            axios.post('http://localhost:8080/comment', data, {
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              }
            })
              .then((response) => {
                this.init();
                this.commentText = "";
              })
          }
          this.upload();
        }
      },
      data() {
        return {
          file: [], // 总文件List
          uploadFile: [],
          backgroundImage: 'background-image',
          imageUrl: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ab9993cd229759ee555061ce80fa434e/b17eca8065380cd73240552da544ad3458828190.jpg",
          starName: "朱一龙",
          introduce: "朱一龙，1988年4月16日出生于湖北武汉，中国内地男演员，毕业于北京电影学院2006级表演系本科。2009年出演首部电影《再生缘》，后参演多部《周末王刚讲故事》（又名：《儿女传奇》）系列数字电影。2014年3月，在家庭情感轻喜剧《家宴》中饰演冯豆子；7月，在民国爱情剧《情定三生》中饰演豪门少爷迟瑞。2015年因在古装历史剧《芈月传》中饰演秦昭襄王嬴稷而受到广泛关注。2016年2月，在古装武侠剧《新萧十一郎》中饰演风采翩翩、文武兼备的无垢山庄少庄主连城璧；7月，在武侠剧《新边城浪子》中饰演黑衣黑刀傅红雪。2017年主演都市情感轻喜剧《御姐归来》。2018年6月主演奇幻网络剧《镇魂》，分饰沈巍、夜尊、黑袍使三角；9月，主演年代爱情剧《许你浮生若梦》；10月，悬疑冒险剧《...",
          work: "知否知否应是绿肥红瘦,镇魂,新边城浪子,情定三生",
          workStr:"",
          value:4,
          avatar:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          commentCount: 0,
          commentText: "",
          commentObjects:[
              {
                name:"liwei222",
                date:"2019-05-23 12:12:21",
                contentText: "好看～～",
                avatar:"https://i.loli.net/2017/08/21/599a521472424.jpg"

              },
              {
                name:"王燕楠",
                date:"2019-05-23 12:12:21",
                contentText: "超好看～～",
                avatar:"https://i.loli.net/2017/08/21/599a521472424.jpg"
              }
            ]
        }
      }

    }
</script>

<style scoped>
  .layout-nav{
    width: 420px;
    margin-left: 85%;
  }
</style>
