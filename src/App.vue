<template>
  <div class="page">

    <!-- =====================================================
         1. 히어로 섹션: 커버 사진
         ===================================================== -->
    <section class="hero">
      <div class="hero-img"></div>
      <div class="hero-dim"></div>
    </section>

    <!-- =====================================================
         2. 날짜 & D-Day 섹션 (메인사진 바로 아래)
         ===================================================== -->
    <section class="dday-section">
      <p class="dday-tag">{{ dDay }}</p>
      <p class="dday-date">2026. 06. 20  토요일</p>
      <p class="dday-time">오전 11시</p>
      <p class="dday-place">수원 호텔 라뷔포레 (구 호텔리츠 컨벤션)</p>
    </section>

    <!-- =====================================================
         3. 이름 & 초대 섹션
         ===================================================== -->
    <section class="invite-section">
      <p class="couple-label">우리 결혼합니다</p>

      <!-- 커플 이름: 크게 강조 -->
      <div class="couple-names">
        <div class="name-block">
          <span class="name-han">우섭</span>
          <span class="name-en">Woo Seop</span>
        </div>
        <div class="name-ampersand">&amp;</div>
        <div class="name-block">
          <span class="name-han">혜분</span>
          <span class="name-en">Hye Bun</span>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- 초대 문구 -->
      <p class="invite-msg">
        두 사람이 하나가 될 새 인생을 시작합니다.<br>
        사랑으로 가득 채워 즐거움은 나누고,<br>
        어려움은 이겨내 함께 나아가는 삶을 꾸리겠습니다.<br>
        <br>
        부디 걸음하시어 축복하여 주시면<br>
        더없는 기쁨이 되겠습니다.
      </p>
    </section>

    <div class="thin-line"></div>

    <!-- =====================================================
         4. 신랑신부 정보 섹션
         ===================================================== -->
    <section class="profile-section">
      <p class="section-title">소개</p>

      <!-- 신랑 프로필 -->
      <div class="profile-card">
        <div class="profile-role groom-role">
          <img :src="require('@/assets/photo/9.jpg')" alt="groom" />
        </div>
        <div class="profile-info">
          <span class="profile-parents">정규찬 · 신진숙</span> 의 차남
          <p class="profile-name">우섭</p>
        </div>
      </div>

      <!-- 구분선 -->
      <div class="profile-sep">♥</div>

      <!-- 신부 프로필 -->
      <div class="profile-card">
        <div class="profile-role bride-role">
          <img :src="require('@/assets/photo/16.jpg')" alt="groom" />
        </div>
        <div class="profile-info">
          <span class="profile-parents">정일현 · 장영미</span> 의 차녀
          <p class="profile-name">혜분</p>
          <p class="profile-family">
          </p>
        </div>
      </div>
    </section>

    <div class="thin-line"></div>

    <!-- =====================================================
         5. 날짜·달력 섹션
         ===================================================== -->
    <section class="date-section">
      <p class="section-title">일정</p>

      <div class="date-card main-date">
        <p class="dc-label">본식</p>
        <p class="dc-date">2026년 6월 20일 (토)</p>
        <p class="dc-time">오전 11시</p>
        <p class="dc-place">수원 호텔 라뷔포레 (구 호텔리츠 컨벤션)</p>
      </div>

      <!-- 새 달력 컴포넌트 -->
      <div class="cal-box">
        <WeddingCalendar />
      </div>

    </section>

    <div class="thin-line"></div>

    <!-- =====================================================
         6. 갤러리 섹션
         ===================================================== -->
    <section class="gallery-section">
      <p class="section-title">갤러리</p>
      <WeddingGallery/>
    </section>

    <div class="thin-line"></div>

    <!-- =====================================================
         7. 영상 섹션
         ===================================================== -->
<!--    <section class="video-section">-->
<!--      <p class="section-title">영상</p>-->
<!--      <video-->
<!--        width="100%"-->
<!--        :poster="require('@/assets/photo/5.jpg')"-->
<!--        controls-->
<!--        playsinline-->
<!--        class="wedding-video"-->
<!--      >-->
<!--&lt;!&ndash;        <source :src="require('@/assets/mp4/welcome.mp4')" type="video/mp4" />&ndash;&gt;-->
<!--      </video>-->
<!--    </section>-->

<!--    <div class="thin-line"></div>-->

    <!-- =====================================================
         8. 오시는 길 섹션
         ===================================================== -->
    <section class="map-section">
      <p class="section-title">오시는 길</p>
      <p class="map-addr-main">경기 수원시 팔달구 권광로 134번길 46</p>
      <p class="map-addr-sub">수원 호텔 라뷔포레 7층 ((구) 호텔리츠 컨벤션)</p>

      <!-- 카카오 지도 -->
      <div class="map-box">
        <KakaoMap ref="map" />
      </div>

      <!-- 주소 복사 버튼 -->
      <button class="copy-btn" @click="handleCopy(location)">주소 복사</button>

      <!-- 내비게이션 앱 -->
      <div ref="kakaoMap">
        <div class="nav-apps">
          <a href="https://naver.me/GXg5Xpyg" class="nav-item">
            <img :src="require('@/assets/icon/naver-map.png')" alt="네이버" />
            <span>네이버</span>
          </a>
          <a href="https://place.map.kakao.com/14722874" class="nav-item">
            <img :src="require('@/assets/icon/kakao-map.png')" alt="카카오" />
            <span>카카오</span>
          </a>
          <a href="https://maps.app.goo.gl/isCvhKh4uGXCJR2q7" class="nav-item">
            <img :src="require('@/assets/icon/google-map.png')" alt="구글" />
            <span>구글</span>
          </a>
        </div>
      </div>

      <!-- 교통 안내 -->
      <div class="transport">
        <div class="trans-row">
          <div>
            <b>🅿️ 주차</b><br>
            인근 주차장 동시주차 500대 가능
          </div>
        </div>
        <div class="trans-row">
          <div>
            <b>🚃 지하철</b><br>
            ✓ 분당선<br>
            수원시청역 1번출구에서 도보 5분거리<br>
            ✓ 1호선 / ktx 이용시,<br>
            수원역에서 분당선 환승후, 수원시청역 하차<br>
          </div>
        </div>
        <div class="trans-row">
          <div>
            <b>🚌 버스</b><br>
            ✓ 수원시청역 5번 출구, 수원시청 하차<br>
            92, 92-1, 61, 81<br>
            ✓ 수원시청역 3번 출구, 서울보증보험 하차<br>
            3002, 4000, 80, 202<br>
            ✓ 수원시청역 2번 출구, 벽산그랜드코아 하차 <br>
           13-1, 80, 99-2, 202<br>
            ✓ 수원시청역 1번출구, 파비오더씨타 하차<br>
            11-1, 61, 80, 81
          </div>
        </div>
      </div>
    </section>

    <div class="thin-line"></div>

    <!-- =====================================================
         9. 마음 전하기 섹션
         ===================================================== -->
    <section class="panel-section">
      <p class="section-title">마음 전하기</p>
      <p class="panel-sub">신랑 신부에게 축하 메시지를 남겨주세요</p>
      <WeddingPanel />
    </section>

    <!-- =====================================================
         10. 푸터
         ===================================================== -->
    <footer class="footer">
      <div class="footer-img"></div>
      <div class="footer-dim"></div>
      <p class="footer-heart">♥</p>
      <p class="footer-text">
        언제나 곁을 따뜻하게 지켜주신<br>
        양가 부모님과 사랑으로 응원해주신<br>
        모든 분들께 감사드립니다.
      </p>
    </footer>

    <!-- 주소 복사 알림 -->

  </div>
</template>

<!----------- script ----------->
<script>
import WeddingPanel from '@/components/WeddingPanel.vue'
import WeddingCalendar from '@/components/WeddingCalendar.vue'
import WeddingGallery from '@/components/WeddingGallery.vue'
import KakaoMap from '@/components/KakaoMap.vue'
import dayjs from 'dayjs'

export default {
  name: 'IndexPage',
  data () {
    return {
      dDay: '',
      location: '경기 수원시 팔달구 권광로 134번길 46',
      scrollTimeout: null
    }
  },
  created () {
    this.setDDay()
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 결혼식(2026-06-20) 기준 D-Day 계산
    setDDay () {
      const now = dayjs()
      const weddingDay = dayjs('2026-06-20')
      const diff = Math.floor(now.diff(weddingDay, 'day', true))
      if (diff === 0) {
        this.dDay = 'D-DAY'
      } else if (diff > 0) {
        this.dDay = `D+${diff}`
      } else {
        this.dDay = `D${diff}`
      }
    },
    // 스크롤 중 지도 터치 차단 (실수로 지도 드래그 방지)
    handleScroll () {
      const mapComponent = this.$refs.map

      if (!mapComponent || !mapComponent.setPointerEvents) {
        return
      }

      window.clearTimeout(this.scrollTimeout)

      mapComponent.setPointerEvents('none')

      this.scrollTimeout = window.setTimeout(() => {
        mapComponent.setPointerEvents('')
      }, 300)
    },
    async handleCopy (text) {
      try {
        await navigator.clipboard.writeText(text)
        alert('복사되었습니다.')
      } catch (err) {
        console.error(err)
      }
    }
  },
  components: {
    WeddingGallery,
    WeddingPanel,
    WeddingCalendar,
    KakaoMap
  }
}
</script>

<!------------- style ------------->
<style lang="scss">
/* ============================================================
   의존 폰트 (Google Fonts)
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');

/* ============================================================
   전역 리셋 & 기본값
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
.v-application,
.v-main__wrap {
  background: #ffffff !important;
  font-family: 'Noto Serif KR', serif;
  color: #1a1a1a;
}

/* 전체 청첩장 래퍼 */
.page {
  max-width: 480px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}

/* ============================================================
   공통: 구분선, 섹션 제목
   ============================================================ */
.thin-line {
  width: 100%;
  height: 1px;
  background: #efefef;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 13px;
  letter-spacing: 4px;
  color: #aaa;
  text-align: center;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.section-divider {
  width: 32px;
  height: 1px;
  background: #ddd;
  margin: 24px auto;
}

/* ============================================================
   1. 히어로 (커버 사진)
   ============================================================ */
.hero {
  position: relative;
  width: 100%;
  /* 세로가 긴 모바일 커버 (4:5 비율) */
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.hero-img {
  position: absolute;
  inset: 1px;
  background: url('~@/assets/photo/18.jpg') center 30% / cover no-repeat;
}

/* 아래쪽 자연스러운 페이드 */
.hero-dim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(255, 255, 255, 0.7) 90%,
      #fff 100%
  );
}

/* ============================================================
   2. D-Day & 날짜 섹션
   ============================================================ */
.dday-section {
  padding: 32px 24px 36px;
  text-align: center;
  background: #fff;
}

.dday-tag {
  display: inline-block;
  font-family: 'Playfair Display', serif;
  font-size: 12px;
  letter-spacing: 3px;
  color: #fff;
  background: #1a1a1a;
  padding: 5px 16px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.dday-date {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.dday-dot {
  font-size: 12px;
  color: #bbb;
  margin: 0 6px;
}

.dday-time {
  font-size: 14px;
  color: #666;
  margin-bottom: 6px;
  letter-spacing: 1px;
}

.dday-place {
  font-size: 13px;
  color: #999;
  letter-spacing: 0.5px;
}

/* ============================================================
   3. 이름 & 초대 섹션
   ============================================================ */
.invite-section {
  padding: 80px 32px;
  text-align: center;
  background: #fff;
}

.couple-label {
  font-size: 12px;
  letter-spacing: 3px;
  color: #bbb;
  margin-bottom: 28px;
}

.couple-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.name-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.name-han {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 4px;
  color: #1a1a1a;
}

.name-en {
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #bbb;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.name-ampersand {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-style: italic;
  color: #ddd;
  margin-top: -8px;
}

.invite-msg {
  font-size: 14px;
  line-height: 2.2;
  color: #555;
  letter-spacing: 0.3px;
}

/* ============================================================
   4. 신랑신부 정보 섹션
   ============================================================ */
.profile-section {
  padding: 60px 32px;
  text-align: center;
  background: #fafafa;
}

.profile-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 16px 0;
}

.profile-role {
  width: 120px;          /* 원하는 크기 */
  height: 120px;
  border-radius: 50%;    /* 완전 원형 */
  overflow: hidden;      /* 이미지 잘라냄 */
}

.groom-role img{
  width: 100%;
  height: 100%;
  object-fit: cover;     /* 비율 유지 + 꽉 채움 */
  display: block;
  background: #1a1a1a;
  color: #fff;
}

.bride-role img{
  width: 100%;
  height: 100%;
  object-fit: cover;     /* 비율 유지 + 꽉 채움 */
  object-position: 0% 22%;
  display: block;
  background: #f7eef0;
  color: #c47d8a;
}

.profile-name {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #1a1a1a;
  margin-bottom: 4px;
  margin-top: 5px;
}

.profile-family {
  font-size: 13px;
  color: #999;
  letter-spacing: 0.5px;
}

.profile-parents {
  font-size: 15px;
  color: #777;
}

.profile-sep {
  font-size: 16px;
  color: #e8c0c8;
  text-align: center;
  padding: 4px 0;
  letter-spacing: 0;
}

/* ============================================================
   5. 날짜·달력 섹션
   ============================================================ */
.date-section {
  padding: 70px 24px;
  text-align: center;
  background: #fff;
}

.date-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 22px 20px;
  margin-bottom: 16px;
  text-align: center;
}

.main-date {
  /* 본식 카드: 약간 강조 */
  border: 1px solid #f0f0f0;
}

.dc-label {
  font-size: 11px;
  letter-spacing: 2px;
  color: #bbb;
  margin-bottom: 10px;
}

.dc-date {
  font-size: 17px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 4px;
  letter-spacing: 1px;
}

.dc-time {
  font-size: 14px;
  color: #777;
  margin-bottom: 4px;
}

.dc-place {
  font-size: 13px;
  color: #aaa;
}

.cal-box {
  padding: 16px 8px 24px;
}

/* ============================================================
   6. 갤러리 섹션
   ============================================================ */
.gallery-section {
  padding: 60px 0;
  background: #fafafa;

  .section-title {
    padding: 0 24px;
  }
}

/* ============================================================
   7. 영상 섹션
   ============================================================ */
.video-section {
  padding: 44px 24px;
  text-align: center;
  background: #fafafa;
}

.wedding-video {
  width: 100%;
  border-radius: 10px;
  background: #000;
}

/* ============================================================
   8. 오시는 길
   ============================================================ */
.map-section {
  padding: 60px 24px;
  text-align: center;
  background: #fff;
}

.map-addr-main {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.map-addr-sub {
  font-size: 13px;
  color: #aaa;
  margin-bottom: 20px;
}

.map-box {
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.copy-btn:hover {
  background: #444;
}

.nav-apps {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 28px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: #777;
  font-size: 12px;
  letter-spacing: 0.5px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}

.transport {
  background: #fafafa;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.trans-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13px;
  line-height: 1.8;
  color: #666;
}

/* ============================================================
   9. 마음 전하기
   ============================================================ */
.panel-section {
  padding: 50px 24px;
  text-align: center;
  margin-bottom: 25px ;
}

.panel-sub {
  font-size: 13px;
  color: #bbb;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}

/* ============================================================
   10. 푸터
   ============================================================ */
.footer {
  position: relative;   /* 🔥 이게 핵심 */
  overflow: hidden;     /* 넘침 방지 */
  padding: 63% 34px; /* 위아래 여백 늘리기 */
  color: #fff;
  aspect-ratio: 4 / 5;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
}

.footer-img {
  position: absolute;
  inset: 1px;
  background-size: 115%;
  background: url(http://localhost:8080/img/2.c2277319.jpg) center bottom /cover no-repeat;
  z-index: 0;
}

.footer-dim {
  position: absolute;
  inset: 0;
  z-index: 19;
  background: linear-gradient(
      to top, transparent 68%, rgba(255, 255, 255, 0.7) 90%, #fff 100%
  );
}

.footer-heart,
.footer-text,
.footer-names {
  position: relative;
  z-index: 2;
}

.footer-heart {
  font-size: 18px;
  color: #c47d8a;
  margin-bottom: 20px;
}

.footer-text {
  font-size: 13px;
  line-height: 2.2;
  margin-bottom: 20px;
  letter-spacing: 0.3px;
}
</style>
