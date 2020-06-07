<template>
  <div id="wrapper">
    <div style="cover" id="drag">
      <img
        class="coverPic"
        :style="{opacity: form.opacity / 100}"
        :src="form.path"
        alt
      />
    </div>
    <div class="tool">
      <el-form ref="form" :model="form" label-width="80px">
        <el-upload
          class="upload"
          drag
          action=""
          :http-request="this.handlePic"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <el-form-item label="尺寸">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="透明度">
          <div class="slider-box">
            <el-slider v-model="form.opacity" class="slide-tool"></el-slider>
            {{form.opacity}}%
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWrap",
  data() {
    return {
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
      console.log(e.file.path);
      this.form.path = 'file://' + e.file.path;
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
  font-family: "Source Sans Pro", sans-serif;
  /* background: transparent; */
}

#wrapper {
  /* background: transparent; */
  height: 100vh;
  width: 100vw;
  /* opacity: 0; */
  border: 1px solid rgb(170, 128, 128);
  display: flex;
}

.cover {
  flex: 1;
}
.tool {
  width: 500px;
  opacity: 1;
  background: #fff;
  padding: 20px;
  border: 1px solid #2c3e50;
}

.upload {
  margin-bottom: 30px;
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
