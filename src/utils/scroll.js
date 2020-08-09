const scroll={
   isEnd:false,
   start(callback){
     let timer=null;
     callback && window.addEventListener('scroll',()=>{
         if(timer){
             clearTimeout(timer);
         }
        //  设置定时器在多次滚动时只定时请求给服务器，函数防抖
         timer=setTimeout(()=>{
             //往上滚动时元素被遮住的距离
             const scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
             //元素的实际高度
             const scrollHeight=document.documentElement.scrollHeight;
             //可视区界面的高度
             const clientHeight=document.documentElement.clientHeight;
             //已经滚动到元素底部时发送请求
             if(!this.isEnd && scrollHeight==scrollTop+clientHeight){
                 window.scrollTo(0,scrollTop-100);
                 callback()
             }
         },300)
     })
   },
   end(){
       this.isEnd=true;
   }
}

export default scroll