<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <br>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password">
      <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <br>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">login</Button>
    </FormItem>
  </Form>
</template>
<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        var storage=window.localStorage;
        this.$refs[name].validate((valid) => {
          if (valid) {
            axios.get('http://localhost:8080/login', {
              params : {
                "name" : this.formInline.user,
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
              console.log(JSON.stringify(storage.getItem("registerTime")))
              this.$Message.success('Success!');
            }, error =>{
            })

          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
