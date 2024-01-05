<template>
    <div class="member">
        <img src="../assets/images/loading2.svg" alt="" class="position-absolute start-50 top-50 translate-middle z-1" v-if="loading">
        <teleport to='#logBtn' v-if="isLogin">
          <button class="btn btn-outline-primary fs-md-4 fs-6" @click="logout">登出</button>
        </teleport>
        <div class="section" v-if="!isLogin">
            <div class="container">
                <div class="row full-height justify-content-center">
                    <div class="col-12 text-center align-self-center py-5">
                        <div class="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 class="mb-0 pb-3 fs-md-4 fs-6"><span>Log In </span><span>Sign Up</span></h6>
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div class="card-3d-wrap mx-auto">
                                <div class="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="center-wrap">
                                            <v-form class="section text-center" @submit="onSubmit" v-slot="{errors}">
                                                <h4 class="mb-4 pb-3 fs-md-4 fs-6">Log In</h4>
                                                <div class="form-group">
                                                    <v-field type="email" name="email" :class="{'is-invalid':errors['email']}" class="form-style" placeholder="Your Email" autocomplete="off" rules="email|required" v-model="user.username"></v-field>
                                                    <error-message name="email" class="invalid-feedback"></error-message>
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	
                                                <div class="form-group mt-2">
                                                    <v-field type="password" name="密碼" :class="{'is-invalid': errors['密碼']}" class="form-style" placeholder="Your Password" autocomplete="off" :rules="isPwd" v-model="user.password"></v-field>
                                                    <error-message name="密碼" class="invalid-feedback"></error-message>
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button type="submit" class="btn mt-4">submit</button>
                                                <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                                            </v-form>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <v-form class="section text-center" @submit="onSubmitSingUp" v-slot="{errors}">
                                                <h4 class="mb-4 pb-3 fs-md-4 fs-6">Sign Up</h4>
                                                <div class="form-group">
                                                    <v-field type="text" name="姓名" :class="{'is-invalid': errors['姓名']}" class="form-style" placeholder="Your Full Name" autocomplete="off" rules="required" v-model="signUser.fullname"></v-field>
                                                    <error-message name="姓名" class="invalid-feedback"></error-message>
                                                    <i class="input-icon uil uil-user"></i>
                                                </div>	
                                                <div class="form-group mt-2">
                                                    <v-field type="email" name="信箱" :class="{'is-invalid': errors['信箱']}" class="form-style" placeholder="Your Email" autocomplete="off" rules="email|required" v-model="signUser.username"></v-field>
                                                    <error-message name="信箱" class="invalid-feedback"></error-message>
                                                    <i class="input-icon uil uil-at"></i>
                                                </div>	
                                                <div class="form-group mt-2">
                                                    <v-field type="password" name="密碼" :class="{'is-invalid': errors['密碼']}" class="form-style" placeholder="Your Password" autocomplete="off" :rules="isPwd" v-model="signUser.password"></v-field>
                                                    <error-message name="密碼" class="invalid-feedback"></error-message>
                                                    <i class="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button type="submit" class="btn mt-4">submit</button>
                                            </v-form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// vee-validate 相關變數
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email,regex } from '@vee-validate/rules';
// 各國語言
import { localize, setLocale } from '@vee-validate/i18n';
// 下載語言
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import ar from '@vee-validate/i18n/dist/locale/ar.json';


defineRule('required', required);
defineRule('email', email);
defineRule('regex', regex);
// 設定所在地區
setLocale('zh_TW');
// 載入需要使用到的語言
configure({
  // Generates an English message locale generator
  generateMessage: localize({
    zh_TW,
    ar,
  }),
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default {
    data(){
        return {
          signUser:{
              "fullname": "",
              "username": "",
              "password": "",
          },
          user:{
              "username": "", //tsai19911026@gmail.com
              "password": ""
          },
          loading: false,
        }
    },
    props: ['isLogin'],
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage,
    },
    methods: {
        isMemberPage(){
          if(location.href.split('#/')[1]==='member'){
            this.$emit('emit-member',false);
          }else{
            this.$emit('emit-member',true);
          }
        },
        async onSubmit(){
            try {
                this.loading=true;
                const result=(await this.axios.post(`${import.meta.env.VITE_HEX_API}v2/admin/signin`,this.user)).data;
                console.log(result);
                document.cookie=`hexToken=${result.token};expires=${result.required}`;
                this.axios.defaults.headers.common['Authorization'] = result.token;
                this.user.username='';
                this.user.password='';
                this.loading=false;
                Swal.fire({
                  icon: "success",
                  title: "Login Successful",
                  showConfirmButton: false,
                  timer: 800,
                });
                this.isMemberPage();
            } catch (err) {
                console.log(err);
                this.loading=false;
                this.logout();
            }
        },
        onSubmitSingUp(){
          this.signUser.fullname='';
          this.signUser.username='';
          this.signUser.password='';
          Swal.fire({
              icon: "info",
              title: "尚未開放註冊",
              showConfirmButton: false,
              timer: 800
            });
        },
        async logout(){
          try {
            this.loading=true;
            const result=(await this.axios.post(`${import.meta.env.VITE_HEX_API}/v2/logout`));
            console.log(result);
            document.cookie=`hexToken='';expires=Thu, 01 Jan 1970 00:00:00 UTC`;
            this.loading=false;
            Swal.fire({
              icon: "success",
              title: "LogOut Successful",
              showConfirmButton: false,
              timer: 800
            });
            this.isMemberPage();
          } catch (err) {
            console.log(err);
            this.loading=false;
          }
        },
        isPwd(value){
            const reg=new RegExp('^[\\w]{8,}$');
            if(!reg.test(value)){
                return '密碼為包含英文加數字，最少 8 碼';
            }else{
                return true;
            }
        }
    },
    created(){
        this.isMemberPage();
        // Swal.fire({
        //   icon: "success",
        //   title: "Login Successful",
        //   showConfirmButton: false,
        //   // timer: 1500,
        // });
    }
}
</script>
<style lang="scss">
@import '@sweetalert2/theme-dark/dark.scss';
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}
h4 {
  font-weight: 600;
}
h6 span{
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}
.section{
  position: relative;
  width: 100%;
  display: block;
}
.full-height{
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label{
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before{
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #102770;
  font-family: 'unicons';
  content: '\eb4f';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}


.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 500px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;    
  top: 0;
  left: 0;  
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out; 
}
.card-front, .card-back {
  width: 100%;
  height: 100%;
  background-color: #2a2b38;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}
.center-wrap{
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}


.form-group{ 
  position: relative;
  display: block;
    margin: 0;
    padding: 0;
}
.form-style {
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-moz-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:-moz-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input::-webkit-input-placeholder  {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-ms-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus:-moz-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.form-group input:focus::-webkit-input-placeholder  {
  opacity: 0;
  -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
</style>