<template>
  <div id="login" :style="loginbackgroundDiv">
    <Card id="card" >
      <h2 id="welcome">Welcome to IFace!</h2>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" id="form" >
        <FormItem prop="user" label="用户名">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>

        <FormItem prop="password" label="密码">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>

        <FormItem prop="validation" label="验证码" >
          <Input v-model="formInline.validation" placeholder="请输入验证码" id="validation-code"  @on-enter="handleSubmit('formInline')"></Input>
        </FormItem>

        <label v-on:click="changeValCode" id="val-label" style="">{{this.validationCode}}</label>
        <br/>

        <FormItem>
          <Button type="info" shape="circle" @click="handleSubmit('formInline')" id="button-login">Login</Button>
          <Button type="info" shape="circle" @click="clickRegister" id="button-register" ghost >Register</Button>
        </FormItem>
      </Form>
    </Card>

  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name:'login',
    created(){
      this.generatedCode();
    },
    data () {
      return {
        formInline: {
          user: '',
          password: '',
          validation: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          validation:[
            {required:true, message: 'Please fill in the validation', trigger: 'blur'}
          ]
        },
        validationCode:'',
        loginbackgroundDiv:{
          backgroundImage:' url('+require("../assets/loginbackground1.jpg")+')',
        }
      }
    },
    methods: {
      handleSubmit(loginForm) {
        let valcodestatus = this.checkValCode();
        if(valcodestatus)
        {
          var storage = window.localStorage;
          console.log(this.$refs[loginForm]);
          this.$refs[loginForm].validate((valid) => {
            if (valid) {
              axios.get('http://localhost:8080/login', {
                params: {
                  "name": this.formInline.user,
                  "password": this.formInline.password
                }
              }).then((response) => {
                var res = response.data;
                storage.setItem("name", this.formInline.user);
                storage.setItem("password", this.formInline.password);
                storage.setItem("signature", res.sign);
                storage.setItem("avatarUrl", res.pic);
                storage.setItem("sex", res.sex);
                storage.setItem("registerTime", res.created);
                console.log("login:"+JSON.stringify(storage.getItem("registerTime")))
                this.$Message.success('Success!');
                this.$router.push('/main');
              }, error => {
              });
            }
            else {
              this.$Message.error('Fail!');
            }
          })
        }
        else {
          this.$Message.error('Please enter the correct verification code!')
          this.$set(this.formInline, 'validation', '')
          this.$set(this.formInline, 'password', '')
        }

      },
      generatedCode() {
        const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let code = ''
        for (let i = 0; i < 4; i++) {
          let index = Math.floor(Math.random() * 36)
          code += random[index]
        }
        this.validationCode = code;
      },
      changeValCode() {
        this.generatedCode();
      },
      checkValCode() {
        let vcode = this.formInline.validation
        vcode = vcode.toUpperCase()
        let ccode = this.validationCode
        ccode = ccode.toUpperCase()
        if (vcode !== ccode) {
          return 0
        } else {
          return 1
        }
      },
      clickRegister:function () {
        this.$router.push("/register")
      }
    }
  }
</script>

<style>
  #login{
    width: 100%;
    height: 100%;
    position: fixed;
    /*background-color: pink;*/
  }
  #card{
    width: 30%;
    margin: 8% auto;
    text-align: center;
    /*background-color: rgba(255,255,255,0.7);*/
    box-shadow: 0 0 3px lavender;
  }
  #welcome{
    margin-top:5%;
    font-family: "Bradley Hand ITC";
    font-weight: bold;
    color: darkslategrey;
  }
  #form{
    /*width: 60%;*/
    height: 380px;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 3%;
    /*margin: 10%, 30%, 0 ,30%;*/
  }
  #button-login{
    margin-right: 15px;
    width: 30%;
    margin-top: 15px;
  }
  #button-register{
    margin-left: 15px;
    width: 30%;
    margin-top: 15px;
  }
</style>
