<style scoped>
  .layout{
    border: 1px solid #faf4e5;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  #head{
    border-left: 3px solid midnightblue;
    border-top: 2px solid midnightblue;
    border-right: 3px solid midnightblue;

  }
  #menu{
    width: 100%;

  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #f7fbfd;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    margin-left: 85%;
  }
  .layout-logo{
    margin-left: 5%;
  }
  .layout-footer-center{
    text-align: center;
  }

  #main-background{
    min-height:700px;
    background-size: 100%;
  }
  #search{
    height: 100%;
    width: 100%;

    text-align: center;
  }
  #input{
    width : 600px;
    margin: 300px auto 200px auto;
  }

  .idol-card{
    width:100%;
    height:300px;
    text-align: center
  }
  .img-responsive {
    /*display: inline-block;*/
    height: 220px;
    max-width: 100%;
    margin-top: 10px;
  }
  .idol-card a{
    color: midnightblue;
    font-family: "Hiragino Sans GB";
  }
</style>
<template>
  <div>
    <Layout>
      <div id="head">
        <Menu mode="horizontal" theme="light" active-name="2"  @on-select="menuFun" id="menu">
            <MenuItem name="1" style="margin-left: 100px">
              <Main Head style="">IFace</Main>
            </MenuItem>
            <MenuItem name="2" >
              <Icon type="ios-globe" style="padding-left: 10px"/>
              <a href="http://localhost:8081/#/main" style="padding-right: 10px">首页</a>
            </MenuItem>
          <div class="layout-nav">
            <router-link to="/personalPage">
              <MenuItem name="3" v-if="ifLogin">
                <Icon type="ios-paw"></Icon>
                我的
              </MenuItem>
            </router-link>
            <router-link to="/login" v-if="!ifLogin">
              <MenuItem name="4">
                登录
              </MenuItem>
            </router-link>
            <router-link to="/register" v-if="!ifLogin">
              <MenuItem name="5">
                注册
              </MenuItem>
            </router-link>
            <MenuItem name="logout" v-if="ifLogin">
              <Icon type="log-out"></Icon>
              退出
            </MenuItem>
          </div>
        </Menu>
      </div>


      <div id="main-background" :style="mainBackgroundDiv">
        <div id="search" >
          <i-input icon="ios-search" v-model="inputValue" id="input" :style="" @on-enter="search()" @on-click="search()" placeholder="" >
            <Upload
              slot="prepend"

              ref="upload"
              name="upfile"
              :before-upload="handleUpload"
              :show-upload-list="false"
              :on-success="uploadSuccess"
              :format="['jpg','jpeg','png']"
              action="//localhost:8080/uploadPic">
              <Button icon="ios-cloud-upload-outline">Upload Pic</Button>
            </Upload>
          </i-input>
        </div>

        <div style="height: 500px">
          <!--<Divider />-->
          <Carousel autoplay >
            <CarouselItem >
              <Row :gutter="16" style="margin-left: 10px; margin-right: 10px">
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=9d87a218b03eb1355bc7b6be941fa8cb/d50735fae6cd7b8983dcb473032442a7d8330e89.jpg">
                    <br>
                    <center><a href="http://localhost:8081/#/star?name=王俊凯" target="_blank">王俊凯</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive"  src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ac536930aa4bd1131bcdb63768aea488/1c950a7b02087bf46e17daaaf5d3572c10dfcffe.jpg">
                    <center><a href="http://localhost:8081/#/star?name=金秀贤" target="_blank">金秀贤</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=939771c9c6134954611ee961644f92dd/d31b0ef41bd5ad6e108cada28ccb39dbb6fd3c05.jpg">
                    <center><a href="http://localhost:8081/#/star?name=易烊千玺" target="_blank">易烊千玺</a></center>
                  </Card>
                </Col>
              </Row>
            </CarouselItem>
            <CarouselItem>
              <Row :gutter="16" style="margin-left: 10px; margin-right: 10px">
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('黄伟霆')" src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=34e70c29db1b0ef473e8995befc451a1/a8773912b31bb051683cf72f3f7adab44aede099.jpg">
                    <br>
                    <center><a href="http://localhost:8081/#/star?name=黄伟霆" target="_blank">陈伟霆</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('黄子韬')" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=304eec52cc134954611ee961644f92dd/d31b0ef41bd5ad6eb355303986cb39dbb7fd3cb0.jpg">
                    <center><a href="http://localhost:8081/#/star?name=黄子韬" target="_blank">黄子韬</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('朱一龙')" src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ab9993cd229759ee555061ce80fa434e/b17eca8065380cd73240552da544ad3458828190.jpg">
                    <center><a href="http://localhost:8081/#/star?name=朱一龙" target="_blank">朱一龙</a></center>
                  </Card>
                </Col>
              </Row>
            </CarouselItem>
            <CarouselItem>
              <Row :gutter="16" style="margin-left: 10px; margin-right: 10px">
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('陈乔恩')" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=11a33191db1b0ef473e8995befc551a1/a8773912b31bb0514d78ca973f7adab44aede035.jpg">
                    <br>
                    <center><a href="http://localhost:8081/#/star?name=陈乔恩" target="_blank">陈乔恩</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('马天宇')" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=060798e5a14bd1131bcdb63768aea488/1c950a7b02087bf4c4432b7ffed3572c10dfcffd.jpg">
                    <center><a href="http://localhost:8081/#/star?name=马天宇" target="_blank">马天宇</a></center>
                  </Card>
                </Col>
                <Col span="8">
                  <Card class="idol-card">
                    <img class="img-responsive" v-on:click="toStar('吴宣仪')" src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ff1901ff0133874483c52e79630ed937/203fb80e7bec54e73fec45b1b4389b504fc26a18.jpg">
                    <center><a href="http://localhost:8081/#/star?name=吴宣仪" target="_blank">吴宣仪</a></center>
                  </Card>
                </Col>
              </Row>
            </CarouselItem>
          </Carousel>
          <!--<Divider />-->
        </div>
      </div>

      <Footer class="layout-footer-center">
        <div id="white-div">
          <p>-详情请咨询-</p>
          <span>联系电话：15957135591 </span>
          <span> 邮箱：SimonWYN@163.com</span>
          <div id="mine">
            <p>浙江工业大学计算机科学与技术学院、软件学院</p>
            <p>计科1501班 王燕楠</p>
          </div>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    name:'main',
    created(){
      this.ifLoginFun()
    },
    data(){
      return{
        ifLogin:'',
        storage:'',
        inputValue:'',
        mainBackgroundDiv:{
          backgroundImage: 'url('+require('../assets/main.jpg')+')' ,
        },
      }
    },
    methods: {
      search() {
        console.log("search: "+this.inputValue);
        this.$router.push({name: 'star',query:{ name: this.inputValue}});
        // this.$router.push('/star?name='+this.inputValue);
      },
      menuFun(name){
        if(name == 'logout'){
          this.ifLogin = false;
          window.localStorage.clear();
          this.storage = '';
        }
      },
      ifLoginFun(){
        this.storage=window.localStorage;
        console.log("ifLoginFun: Create"+JSON.stringify(window.localStorage))
        console.log("ifLoginFun: Create"+JSON.stringify(this.storage.getItem('name')))
        if(this.storage.getItem("name")) {
          this.ifLogin = true;
        }
        else {
          this.ifLogin = false;
        }
      },
      toStar(name){
        console.log(name)
        this.$router.push('/star?name='+name)
      },
      handleUpload(file){
        console.log("handleUpload:")
        console.log(file)
      },
      uploadSuccess(res, file, fileList){
        console.log("uploadSuccess:")
        console.log(res)
        console.log(file)
        console.log(fileList)
      }
    }

  }
</script>
