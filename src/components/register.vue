<template>
  <div id="register" :style="registerDiv">
    <Card id="register-card">
      <p id="card-title">Register</p>
      <Form ref="formInline" :model="formInline" :rules="rulesInline" label-position="right">
        <FormItem label="UserName" prop="userName" class="form-item">
          <Input v-model="formInline.userName" class="input"></Input>
        </FormItem>
        <FormItem label="Password" prop="password" class="form-item">
          <Input v-model="formInline.password" class="input" type="password"></Input>
        </FormItem>
        <FormItem label="Confirm Password" prop="passwordV" class="form-item">
          <Input v-model="formInline.passwordV" class="inputV" type="password"></Input>
        </FormItem>
        <FormItem label="Gender" prop="gender" class="form-item">
          <RadioGroup v-model="formInline.gender" id="radio-gender">
            <Radio label="female">female</Radio>
            <Radio label="male">male</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="info" shape="circle" @click="clickLogin" ghost id="button-login">Login</Button>
          <Button type="info" shape="circle" @click="handleSubmitR('formInline')" id="button-register">Register</Button>
        </FormItem>
      </Form>
    </Card>
  </div>



</template>

<script>
  import axios from 'axios';

  export default {
    name: "register",
    data(){
      return{
        formInline:{
          userName:'',
          password:'',
          passwordV:'',
          gender:'',
        },
        rulesInline:{
          userName:[
            { required: true, message:'Please fill in the user name.', trigger:'blur'},
          ],
          password:[
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          passwordV:[
            { required: true, message: 'Please fill in the confirm password.', trigger: 'blur' },
          ],
          gender:[
            { required: true, message: 'Please select a gender.', trigger: 'change'},
          ],
        },
        registerDiv:{
          backgroundImage:' url('+require("../assets/loginbackground1.jpg")+')',
        },
      }
    },
    methods:{
      clickLogin:function () {
        this.$router.push('/login')
      },
      handleSubmitR:function(registerForm) {
        if(this.passwordConfirm())
        {
          this.$refs[registerForm].validate((valid) => {
            if (valid) {
              axios.get('http://localhost:8080/register', {
                params: {
                  "name": this.formInline.userName,
                  "password": this.formInline.password,
                  "gender": this.formInline.gender
                }
              }).then((response) => {

                ////

              }, error => {
              });
              this.$Message.success('success register!')
              this.$router.push("/login")
            }
            else {
              this.$Message.error('Fail!');
            }
          })
        }
        else {
          this.$Message.error('The Confirm Password must be same with Password')
          this.$set(this.formInline, 'passwordV', '')
        }

      },
      passwordConfirm:function () {
        if(this.formInline.password == this.formInline.passwordV){
          return true;
        }
        else return false;
      }
    }
  }

</script>

<style scoped>
  #register{
    width: 100%;
    height: 100%;
    /*background-color: pink;*/
    position: fixed;
  }
  #register-card{
    width: 30%;
    margin: 8% auto;
    text-align: center;
    box-shadow: 0 0 3px lavender;
  }
  #card-title{
    font-size: 30px;
    font-family: Broadway;
    font-weight: bold;
    color: darkslategrey;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .form-item{
    margin-left: 50px;
    margin-right: 50px;
  }
  /*.input{*/
    /*width: 60%;*/
  /*}*/
  /*.inputV{*/
    /*width: 49%;*/
  /*}*/
  #radio-gender{
    margin-right: 150px;
  }
  #button-login{
    margin-right: 15px;
    width: 20%;
    margin-top: 5px;
  }
  #button-register{
    margin-left: 15px;
    width: 20%;
    margin-top: 5px;
  }

</style>
