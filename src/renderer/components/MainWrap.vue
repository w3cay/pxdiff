<template>
  <div id="wrapper">
    <div class="cover" id="drag" @click="isSlideOpen = true">
      <img class="coverPic" :style="{opacity: form.opacity / 100}" :src="form.path" alt />
    </div>
    <el-dialog title="设置" :visible.sync="isSlideOpen" class="dialog" width="90%" >
    <div class="tool">
      <el-form ref="form" :model="form" label-width="80px">
        <el-upload
          class="upload"
          drag
          action=""
          :show-file-list="false"
          :http-request="this.handlePic"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </el-upload>
        <el-form-item label="透明度">
          <div class="slider-box">
            <el-slider v-model="form.opacity" class="slide-tool"></el-slider>
            {{form.opacity}}%
          </div>
        </el-form-item>
      </el-form>
    </div>
    </el-dialog>

  </div>
</template>

<script>
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

body {
}

#wrapper {
  height: 100vh;
  width: 100%;
  border: 1px solid rgb(170, 128, 128);
}

div.dialog {
  margin-top: 0 !important;
}

.drawer {
  /* background: #fff; */
}

.cover {
  width: 100%;
  height: 100%;
}
.tool {
  padding: 20px;
}

.upload {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}

.upload .el-upload-dragger {
  width: 200px;
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
  min-width: 500px;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
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

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
