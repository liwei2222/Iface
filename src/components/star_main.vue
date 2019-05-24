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
            首页
          </MenuItem>
          <MenuItem name="4">
            <Icon type="logo-octocat" />
            我的
          </MenuItem>
        </div>
      </Menu>
    </Header>
      <div :style="{backgroundImage: 'url(' + imageUrl + ')',width : '100%',height : '600px',backgroundSize: 'cover'}">
        <div style="margin-left: 6%;top">
          <Row>
            <Col span="12">
            <br>
            <br>
              >
            </Col>
            <Col span="12">

            </Col>
          </Row>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
      name: "star_main",
      data() {
        return {
          backgroundImage: 'background-image',
          imageUrl: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D452/sign=ab9993cd229759ee555061ce80fa434e/b17eca8065380cd73240552da544ad3458828190.jpg"

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
