<template>
  <div>
    <h1>Pagination or 下拉刷新、加载数据</h1>
    <ul class="show-area" style="min-height: 100px"></ul>
    <button id="page-btn">加载更多</button>
  </div>
</template>

<script src="../jquery.min.js">
  ;(function(){
    getData();
    var m=0,n=2;
    $('.page-btn-nick').click(getData);
    function getData(){
      $.ajax('pagination.html').then(function(response){//测试url写本页面
        var obj={developer:[{name:'nick'},{name:'ljy'},{name:'xzl'},{name:'jeson'},{name:'yst'},{name:'zhw'},{name:'wqq'}]}
        response=obj.developer;//假设请求到的数据是obj
        m++;
        var data='',elm='';
        if(m>(response.length%n==0?response.length/n:parseInt(response.length/n))){
          data=response.slice(n*(m-1));
          $('.page-btn-nick').html('没有更多了');
          $('.page-btn-nick').attr('disabled','disabled');
        }else{
          data=response.slice(n*(m-1),n*m);
        }
        var len=data.length;
        for(var i= 0;i<len;i++){
          elm+="<li>"+data[i].name+"</li>";
        }
        $('.show-area').append(elm);
      },function(err){
        console.log(err);
      });
    }

    $(".show-area").on("touchstart", function(e) {
      e.preventDefault();
      startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(".show-area").on("touchmove", function(e) {
      e.preventDefault();
      moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;

      if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
        alert("left 2 right");
      }
      else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
        alert("right 2 left");
      }
      else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
        alert("top 2 bottom");
        getData();
      }
      else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
        alert("bottom 2 top");
      }
      else{
        alert("just touch");
      }
    });
  }());
</script>

<style scoped>

</style>
