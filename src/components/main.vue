<style scoped>
  .layout{
    border: 1px solid #faf4e5;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .img-responsive {
    display: inline-block;
    height: 200px;
    max-width: 100%;
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
    width: 420px;
    margin-left: 85%;
  }
  .layout-logo{
    margin-left: 5%;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <MenuItem name="2">
              <Main Head style="size:">IFace</Main>
            </MenuItem>
          <div class="layout-nav">
            <MenuItem name="3">
              <Icon type="ios-globe" />
              首页
            </MenuItem>
            <MenuItem name="4">
              <Icon type="logo-octocat" />
              我的
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 10px'}">
        <Card style="background:#f9fffd ;min-height:700px">
          <br>
          <br>
          <center><Input search enter-button size="large" :style="{width : '500px'}" placeholder="Enter something..." /></center>
          <br>
          <br>
          <br>

          <div>
            <Divider />
            <Carousel autoplay v-model="value2" autoplay-speed="5000" radius-dot="true" loop>
              <CarouselItem>
                <Row :gutter="16">
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=9d87a218b03eb1355bc7b6be941fa8cb/d50735fae6cd7b8983dcb473032442a7d8330e89.jpg">
                    <br>
                    <center><h3>王俊凯</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ac536930aa4bd1131bcdb63768aea488/1c950a7b02087bf46e17daaaf5d3572c10dfcffe.jpg">
                    <center><h3>金秀贤</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=939771c9c6134954611ee961644f92dd/d31b0ef41bd5ad6e108cada28ccb39dbb6fd3c05.jpg">
                    <center><h3>易烊千玺</h3></center>
                  </Card>
                  </Col>
                </Row>
              </CarouselItem>
              <CarouselItem>
                <Row :gutter="16">
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=34e70c29db1b0ef473e8995befc451a1/a8773912b31bb051683cf72f3f7adab44aede099.jpg">
                    <br>
                    <center><h3>黄伟霆</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=304eec52cc134954611ee961644f92dd/d31b0ef41bd5ad6eb355303986cb39dbb7fd3cb0.jpg">
                    <center><h3>黄子韬</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ab9993cd229759ee555061ce80fa434e/b17eca8065380cd73240552da544ad3458828190.jpg">
                    <center><h3>朱一龙</h3></center>
                  </Card>
                  </Col>
                </Row>
              </CarouselItem>
              <CarouselItem>
                <Row :gutter="16">
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=11a33191db1b0ef473e8995befc551a1/a8773912b31bb0514d78ca973f7adab44aede035.jpg">
                    <br>
                    <center><h3>陈乔恩</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=060798e5a14bd1131bcdb63768aea488/1c950a7b02087bf4c4432b7ffed3572c10dfcffd.jpg">
                    <center><h3>马天宇</h3></center>
                  </Card>
                  </Col>
                  <Col span="8">
                  <Card style="width:100%;height:300px">
                    <img class="img-responsive"  src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ff1901ff0133874483c52e79630ed937/203fb80e7bec54e73fec45b1b4389b504fc26a18.jpg">
                    <center><h3>吴宣仪</h3></center>
                  </Card>
                  </Col>
                </Row>
              </CarouselItem>
            </Carousel>
            <Divider />
          </div>
        </Card>
      </Content>
      <Footer class="layout-footer-center"></Footer>
    </Layout>
  </div>
</template>
<script>
  export default {

  }
</script>
