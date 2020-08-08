<template>
    <div>
        <el-form ref="form" :model="playlist" label-width="80px">
            <el-form-item label="歌单名称">
                <el-input v-model="playlist.name"></el-input>
            </el-form-item>>
            <el-form-item label="描述">
                <el-input v-model="playlist.copywrite"></el-input>
            </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">更新</el-button>
            <el-button @click="onCancel">取消</el-button>
        </el-form-item>
        </el-form>   
    </div>
</template>
<script>
import {fetchById} from '@/api/playlist'
export default {
    data(){
        return {
            playlist:{}
        }
    },
    created(){
       //获取歌单的id和具体信息
       fetchById({
           id:this.$$router.params.id
       }).then((res)=>{
        //    console.log(res);
        this.playlist=res.data;
       })
    }
}
</script>
<style>

</style>