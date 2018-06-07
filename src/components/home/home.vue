<template>
    <div class="home">
        <!--头部-->
        <slide></slide>
        <div class="news">
            <i class="icon iconfont icon-15xiaoxi"></i>
            <div class="show-news"></div>
        </div>
        <!--招募令 商家认证-->
        <div class="sign">
            <div class="ling">
                <div class="l-q">
                    <i class="icon iconfont icon-zhaobiaogonggao"></i>
                </div>
                <div class="l-font">招募令</div>
            </div>
            <div class="reng">
                <div class="l-q">
                    <i class="icon iconfont icon-renzheng"></i>
                </div>
                <div class="l-font">认证商企</div>
            </div>
        </div>
        <!--标签页-->
        <div class="Tab">
            <router-link tag="div" class="nav-item" to="/home/near"><span>附近的</span><div class="xiabiao"></div></router-link>
            <router-link tag="div" class="nav-item" to="/home/newest"><span>最新的</span><div class="xiabiao"></div></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import slide from '../slide/slide'
export default {
    data(){
        return{
            data:{},
        }
    },
    created(){
        this.$ajax.get('../../../static/data.json')
        .then(response=>{
            this.data=response.data;
            console.log(this.data);
        }).catch(error=>{
            console.log('获取数据失败!')
        })
    },

    components:{
        slide
    }

       
    
}
</script>
<style scoped>
.home{
    position: absolute;
    top: 0px;
    left: 0px;;
    bottom: 69px;
    width: 100%;
    overflow: hidden;
}
.news{
    position: absolute;
    right: 10px;
    top: 15px;
    border: 1px solid #E6E2D5;
    width: 20px;
    height: 20px;
    background:#ffffff;
    z-index: 100;
    border-radius: 25px;
}
.icon-15xiaoxi{
    font-size: 12px;
    display: block;
    text-align: center;
    margin-top:5px;
}
.show-news{
    position: relative;
    top:-15px;
    left: 2px;
    width: 7px;
    height: 7px;
    border-radius: 25px;
    z-index: 200;
    background: gold;
}
.sign{
  display: flex; 
  width: 100%;
  height: 110px;
}
.ling{
    flex: auto;
    align-self:center;
}
.reng{
     flex: auto;
     align-self: center;
}
.l-q{
   height: 50px;
   width: 50px;
   border-radius: 18px;
   background:#FCD056;
   margin: auto
}
.l-font{
   margin-top: 4px;
   font-size: 12px;
   text-align: center;
}
.icon-zhaobiaogonggao{
    display: block;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
}
.icon-renzheng{
    display: block;
    font-size: 35px;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
}
.Tab{
    display: flex;
    position: relative;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #DEDDDA;
}
.nav-item{
    flex: auto;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;
}
.router-link-active .xiabiao{
    width: 22px;
    height: 3px;
    border-radius: 3px;
    background: gold;
    margin:3px auto;
    opacity: 1;    
}


</style>
