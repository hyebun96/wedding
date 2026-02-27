<template>
  <div class="panel-wrap">

    <!-- 신랑측 -->
    <div class="account-block">
      <button class="account-toggle groom" @click="openSr = !openSr">
        🤵🏻 신랑측
        <span class="arrow" :class="{ open: openSr }">⌄</span>
      </button>

      <v-expand-transition>
        <div v-show="openSr" class="account-card">
          <div class="account-row" v-for="item in groomAccounts" :key="item.label">
            <div class="account-section">
              <div class="label">{{ item.label }}</div>
              <div class="bank">{{ item.bank }} {{ item.number }}</div>
            </div>
            <div>
              <button class="copy-btn" @click="handleCopy(item.number)">
                복사
              </button>
            </div>
          </div>
        </div>
      </v-expand-transition>
    </div>

    <!-- 신부측 -->
    <div class="account-block">
      <button class="account-toggle bride" @click="openSb = !openSb">
        👰🏻‍♀️ 신부측
        <span class="arrow" :class="{ open: openSb }">⌄</span>
      </button>

      <v-expand-transition>
        <div v-show="openSb" class="account-card">
          <div class="account-row" v-for="item in brideAccounts" :key="item.label">
            <div class="account-section">
              <div class="label">{{ item.label }}</div>
              <div class="bank">{{ item.bank }} {{ item.number }}</div>
            </div>
            <div>
              <button class="copy-btn" @click="handleCopy(item.number)">
                복사
              </button>
            </div>
          </div>
        </div>
      </v-expand-transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WeddingPanel',
  data () {
    return {
      openSr: false,
      openSb: false,
      snackbar: false
    }
  },
  computed: {
    groomAccounts () {
      return [
        { label: '혼주 [부] 정규찬', bank: '농협', number: '207175-51-159870' },
        { label: '혼주 [모] 신진숙', bank: '농협', number: '207175-51-144388' },
        { label: '신랑 정우섭', bank: '우리', number: '1002-864-297453' }
      ]
    },
    brideAccounts () {
      return [
        { label: '혼주 [부] 정일현', bank: '농협', number: '574-02-021445' },
        { label: '혼주 [모] 장영미', bank: '농협', number: '351-0071-6566-83' },
        { label: '신부 정혜분', bank: '카카오뱅크', number: '3333-05-9024648' }
      ]
    }
  },
  methods: {
    async handleCopy (text) {
      await navigator.clipboard.writeText(text)
      this.snackbar = true
    }
  }
}
</script>

<style>
.panel-wrap {
  font-family: "Noto Serif KR", serif;
  max-width: 420px;
  margin: 0 auto;
}

.account-block {
  margin-bottom: 16px;
}

.account-toggle {
  width: 100%;
  background: #f5f5f5;
  border: none;
  padding: 14px;
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.account-toggle.groom {
  background: #eef1ff;
  padding-left: 30px;
}

.account-toggle.bride {
  background: #f9eef2;
  padding-left: 30px;
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}

.account-card {
  margin-top: 8px;
  background: #fff;
  border-radius: 10px;
  padding: 12px 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.account-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.account-row:last-child {
  border-bottom: none;
}

.account-section {
  width: 200px;
  padding-left: 20px ;
}

.label {
  font-size: 13px;
  color: #666;
  text-align: left;
}

.bank {
  font-size: 14px;
  font-weight: 500;
  margin-top: 3px;
  text-align: left;
}

.copy-btn {
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-family: 'Noto Serif KR', serif;
  font-size: 13px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.2s;
}
</style>
