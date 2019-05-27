<template>
  <div class="personalpage-home" >
    <div v-for="item,index in showItems">
      <Card class="card">
        <img v-bind:src="avatarUrl" id="avatar">
        <div id="baseinf">
          <p id="name">{{name}}</p>
          <p id="time">{{item.time}}</p>
        </div>
        <div id="heart">
          <Rate count=1 v-model="item.isHeartChoose" icon="ios-heart" clearable=true id="heart-rate" @on-change="changeHeart(index)"></Rate>
          <p >{{item.heartCount}}</p>
        </div>
        <div id="content">
          <div id="content-text">
            <p>{{item.contentText}}</p>
          </div>
          <div v-for="contentPhoto in item.contentPhotos">
            <img v-bind:src="contentPhoto"  id="content-photo" >
          </div>
        </div>
      </Card>
    </div>
    <div id="page-change">
      <Page :total="dataCount" :page-size="pageSize" show-elevator @on-change="changePage"/>
    </div>

  </div>

</template>

<script>
    export default {
        name: "personalPageHome",
        created(){
          this.showItemFun();
        },
        data(){
          return{
            avatarUrl: require('../assets/avatar.png'),
            name: "Jack官方粉丝后援会",
            items:[
              {
                time: "2019年5月20日 17:20:00",
                isHeartChoose: 1,
                heartCount: 999,
                contentText: "呜呜呜，哥哥微博更新辣！",
                contentPhotos:["../../static/photo/Jack全球粉丝后援会/20190520/0.png",
                  "../../static/photo/Jack全球粉丝后援会/20190520/1.png"]
              },
              {
                time: "2019年5月20日 17:20:00",
                isHeartChoose: 0,
                heartCount: 999,
                contentText: "呜呜呜，哥哥微博更新辣！",
                contentPhotos:["../../static/photo/Jack全球粉丝后援会/20190520/0.png",
                  "../../static/photo/Jack全球粉丝后援会/20190520/1.png"],
              },
              {
                time: "2019年5月20日 17:20:00",
                isHeartChoose: 1,
                heartCount: 999,
                contentText: "呜呜呜，哥哥微博更新辣！",
                contentPhotos:["../../static/photo/Jack全球粉丝后援会/20190520/0.png",
                  "../../static/photo/Jack全球粉丝后援会/20190520/1.png"],
              },
              {
                time: "2019年5月20日 17:20:00",
                isHeartChoose: 1,
                heartCount: 222,
                contentText: "呜呜呜，哥哥微博更新辣！",
                contentPhotos:["../../static/photo/Jack全球粉丝后援会/20190520/0.png",
                  "../../static/photo/Jack全球粉丝后援会/20190520/1.png"]
              },
              {
                time: "2019年5月20日 17:20:00",
                isHeartChoose: 0,
                heartCount: 520,
                contentText: "呜呜呜，哥哥微博更新辣！",
                contentPhotos:["../../static/photo/Jack全球粉丝后援会/20190520/0.png",
                  "../../static/photo/Jack全球粉丝后援会/20190520/1.png"],
              }
            ],
            dataCount:0, //发帖总数
            pageSize: 5,   //每一页的帖子数
            showItems: []
          }
        },
        methods:{
          showItemFun:function(){
            this.dataCount = this.items.length;
            if(this.dataCount < this.pageSize){
              this.showItems = this.items;
            }
            else {
              this.showItems = this.items.slice(0,this.pageSize);
            }
          },
          changePage:function (index) {
            var _start = ( index - 1 ) * this.pageSize;
            var _end = index * this.pageSize;
            this.showItems = this.items.slice(_start, _end);
            document.body.scrollTop = document.documentElement.scrollTop = 0
          },
          changeHeart:function (index) {
            if(this.showItems[index].isHeartChoose == 1){
              this.showItems[index].heartCount ++;
            }
            else {
              this.showItems[index].heartCount --;
            }
          }
        }


    }


</script>

<style scoped>
  .card{
    width: 60%;
    margin: 10px auto 0 auto;
  }
  #avatar{
    width: 10%;
    height: 10%;
    border-radius: 50%;
    margin: 10px 0 0 10px;
    border: 1px solid white;
    display: inline-block;
  }
  #baseinf{
    display: inline-block;
    width: 80%;
    vertical-align: top;
    /*height: 30px;*/
  }
  #name{
    width: 300px;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    font-family: "Hiragino Sans GB";
    margin: 5px 0 0 5px;
    vertical-align: top;
  }
  #time{
    font-size: 13px;
    color: gray;
    margin: 0 0 0 5px;
    font-family: "Hiragino Sans GB";
  }
  #heart{
    display: inline-block;
    width: 6%;
    vertical-align: top;
  }
  #heart-rate{
    height: 1px;
  }
  #heart p{
    height: 1px;
    font-family: "Hiragino Sans GB";
  }
  #content{
    height: 230px;
    padding-left: 10%;
    margin: -55px 0px 0 12px;
  }
  #content-text{
    font-size: 17px;
    font-family: "Hiragino Sans GB";
    margin: 0 0 0 5px;
  }
  #content-photo{
    width: 150px;
    height: 150px;
    float: left;
    margin: -10px 10px 0 0;
  }
  #page-change{
    width: 60%;
    height: 60px;
    margin: 15px auto 15px auto;
    background-color: white;
    text-align: center;
    vertical-align: center;
  }
</style>
