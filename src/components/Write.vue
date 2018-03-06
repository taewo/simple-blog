<template lang="html">
  <div>

    <el-input
      type="textarea"
      :rows="2"
      placeholder="글을 담아주세요."
      v-model="posting">
    </el-input>
    <el-input placeholder="이름을 입력해주세요." v-model="name"></el-input>

    <div style="margin: 20px 0">
      <el-button type="primary" @click="submit" plain>제출</el-button>
      <el-button type="warning" @click="cancel" plain>취소</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Write',
  data() {
    return {
      posting: "",
      name: "",
    }
  },
  methods: {
    submit() {
      const result = {
        ID: this.name,
        POSTING: this.posting,
      }
      this.$store.commit('ADD_DATA', result)
      this.$router.push('/')
    },
    cancel() {
      console.log('cancel', this);
      this.$router.push('/')

    }
  }
}
</script>

<style lang="css">
</style>
