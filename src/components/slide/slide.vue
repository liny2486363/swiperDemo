<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in data.data.slide" >
                <img :src="str" alt="">
            </div>
        </div>
        <div class="swiper-pagination "></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/js/swiper.min.js';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        data(){
          return{
              data:{}
          }  
        },
        created(){
        this.$ajax.get('../../../static/data.json')
        .then(response=>{
            this.data=response.data;
            this.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
                pagination:{el:'.swiper-pagination'},
                autoplay:true,
                loop: true,
                speed: 500,
                autoplay: {
                     disableOnInteraction: false,
                  }
                })
            })
        }).catch(error=>{
            console.log('获取数据失败!')
        })
       }
    }
</script>

<style lang="less">
  .swiper-container {
        width: 100%;
        height: 150px;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.3rem;
            height: 0.3rem;
            display: inline-block;         
        }
    }
</style>