<template>
  <fieldset>
    <legend>填寫地址</legend>
    <div class="input-group">
      <label for="title">稱謂</label>
      <select name="title" id="title" @change="$emit('input', {title: $event.target.value})">
        <option v-for="(gender, index) in genders" :key="index" :value="gender">
          {{ gender }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <label for="name">姓名</label>
      <input
        @input="$emit('input', { name: $event.target.value })"
        id="name"
        placeholder="請輸入姓名"
        type="text"
        required
      />
    </div>
    <div class="input-group">
      <label for="tel">電話</label>
      <input
        @input="$emit('input', { mobile: $event.target.value })"
        id="tel"
        placeholder="請輸入行動電話"
        type="tel"
        required
      />
    </div>
    <div class="input-group">
      <label for="email">Email</label>
      <input
        @input="$emit('input', { email: $event.target.value })"
        id="email"
        placeholder="請輸入電子郵件"
        type="email"
        required
      />
    </div>
    <div class="input-group">
      <label for="county">縣市</label>
      <select 
        @change="$emit('input', {county: $event.target.value})"
        name="county" id="county" required>
        <option value="">請選擇縣市</option>
        <option
          v-for="(county, index) in counties"
          :key="index"
          :value="county"
          placeholder="請選擇縣市"
        >
          {{ county }}
        </option>
      </select>
    </div>
    <div class="input-group">
      <label for="address">地址</label>
      <input
        @input="$emit('input', { address: $event.target.value })"
        id="address"
        placeholder="請輸入地址"
        type="text"
        required
      />
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "Step1",
  //isTrusted
  emits: {
    input: null
  },
  data() {
    return {
      genders: ["先生", "女士", "小姐", "無需稱謂"],
      counties: [
        "基隆市",
        "嘉義市",
        "台北市",
        "嘉義縣",
        "新北市",
        "台南市",
        "桃園縣",
        "高雄市",
        "新竹市",
        "屏東縣",
        "新竹縣",
        "台東縣",
        "苗栗縣",
        "花蓮縣",
        "台中市",
        "宜蘭縣",
        "彰化縣",
        "澎湖縣",
        "南投縣",
        "金門縣",
        "雲林縣",
        "連江縣",
      ],
      products: [
        { id: 1, name: "破壞補丁修身牛仔褲", price: 3999, quantity: 0 },
        { id: 2, name: "刷色直筒牛仔褲", price: 1299, quantity: 0 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoints.scss";
@use "@/assets/scss/_color.scss";

fieldset {
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  border: 0;
  text-align: left;
  font-size: 0;

  legend {
    font-weight: bold;
    font-size: 24px;
  }

  > div {
    flex: 1 0 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  > div:nth-child(2) {
    max-width: 40%;

    @include breakpoints.desktop {
      max-width: 35%;
    }
  }

  > div:nth-child(3) {
    max-width: 55%;

    @include breakpoints.desktop {
      max-width: 60%;
    }
  }

  @include breakpoints.desktop {
    > div:nth-child(4) {
      max-width: 45%;
    }
    > div:nth-child(5) {
      max-width: 50%;
    }

    > div:nth-child(6) {
      max-width: 35%;
    }
    > div:nth-child(7) {
      max-width: 60%;
    }
  }

  label {
    align-self: flex-start;
  }

  select {
    padding: 12px 18px;
  }

  input {
    padding: 12px 18px;
  }
}
</style>
