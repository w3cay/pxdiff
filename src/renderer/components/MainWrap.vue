<template>
  <div id="wrapper">
    <div class="cover" id="drag" @click="isSlideOpen = true">
      <img class="coverPic" :style="{opacity: form.opacity / 100}" :src="form.path" alt />
    </div>
    <el-form ref="form" :model="form" label-width="80px" class="upload-layer">
      <el-upload class="upload" drag action :show-file-list="false" :http-request="this.handlePic">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
    </el-form>
    <!-- <el-dialog title="设置" :visible.sync="isSlideOpen" class="dialog" width="90%" >
    <div class="tool">

    </div>
    </el-dialog>-->
    <!-- <el-form-item label="透明度">
          <div class="slider-box">
            <el-slider v-model="form.opacity" class="slide-tool"></el-slider>
            {{form.opacity}}%
          </div>
    </el-form-item>-->
  </div>
</template>

<script>
const { ipcRenderer } = require("electron");
export default {
  name: "MainWrap",
  data() {
    return {
      isSlideOpen: true,
      form: {
        path: "",
        opacity: 50,
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created: () => {
  },
  mounted(){
    ipcRenderer.on("keyda", (event, arg) => {
      if(arg === 'Up') {
        this.form.opacity += 10;
      } else if('Down') {
        this.form.opacity -= 10
      }
    });
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    handlePic(e) {
      this.isSlideOpen = false;
      this.form.path = "file://" + e.file.path;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
    display: none;
}
body{
  overflow: hidden;
}

#wrapper {
  height: 100vh;
  width: 100%;
  border: 1px solid rgb(170, 128, 128);
  overflow: hidden;
}

div.dialog {
  margin-top: 0 !important;
}

.upload-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

.upload,
.el-upload,
.upload .el-upload-dragger {
  width: 100%;
  height: 100%;
  opacity: 0;
}

.cover {
  width: 100%;
  height: 100%;
}
.tool {
  padding: 20px;
}

.slider-box {
  display: flex;
}

.slide-tool {
  width: 100px;
  margin-right: 20px;
}

.coverPic {
  width: 100%;
  opacity: 0.5;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}
</style>
