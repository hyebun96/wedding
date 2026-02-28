<template>
  <div class="gallery-wrap">
    <!-- 3열 그리드 갤러리 -->
    <div class="gallery-grid">
      <div
        v-for="(src, i) in visibleImages"
        :key="i"
        class="gallery-cell"
        @click="openLightbox(i)"
      >
        <img :src="src" :alt="`웨딩 사진 ${i + 1}`" loading="lazy" />
      </div>
    </div>

    <!-- 더 보기 버튼: 처음엔 6장만, 클릭하면 전체 표시 -->
    <button v-if="!showAll" class="more-btn" @click="showAll = true">
      더 보기 <span class="more-arrow">∨</span>
    </button>

    <!-- 라이트박스 (전체화면 뷰어) -->
    <transition name="lb-fade">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lb-close" @click="closeLightbox">✕</button>
        <button class="lb-prev" @click="prev">‹</button>

        <div class="lb-img-wrap">
          <img :src="images[currentIdx]" :alt="`웨딩 사진 ${currentIdx + 1}`" />
          <p class="lb-counter">{{ currentIdx + 1 }} / {{ images.length }}</p>
        </div>

        <button class="lb-next" @click="next">›</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WeddingGallery',
  data () {
    return {
      showAll: false,
      lightboxOpen: false,
      currentIdx: 1,
      images: [
        require('@/assets/photo/1.jpg'),
        require('@/assets/photo/2.jpg'),
        require('@/assets/photo/3.jpg'),
        require('@/assets/photo/4.jpg'),
        require('@/assets/photo/5.jpg'),
        require('@/assets/photo/6.jpg'),
        require('@/assets/photo/7.jpg'),
        require('@/assets/photo/8.jpg'),
        require('@/assets/photo/9.jpg'),
        require('@/assets/photo/10.jpg'),
        require('@/assets/photo/11.jpg'),
        require('@/assets/photo/12.jpg'),
        require('@/assets/photo/13.jpg'),
        require('@/assets/photo/14.jpg'),
        require('@/assets/photo/15.jpg'),
        require('@/assets/photo/16.jpg'),
        require('@/assets/photo/17.jpg'),
        require('@/assets/photo/18.jpg'),
        require('@/assets/photo/19.jpg'),
        require('@/assets/photo/20.jpg')
      ]
    }
  },
  computed: {
    // showAll이 false면 처음 6장만, true면 전부 표시
    visibleImages () {
      return this.showAll ? this.images : this.images.slice(0, 9)
    }
  },
  methods: {
    openLightbox (idx) {
      // '더 보기' 전 단계에서 클릭한 경우 실제 이미지 인덱스와 동일
      this.currentIdx = idx
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox () {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prev () {
      this.currentIdx = (this.currentIdx - 1 + this.images.length) % this.images.length
    },
    next () {
      this.currentIdx = (this.currentIdx + 1) % this.images.length
    }
  }
}
</script>

<style scoped>
/* ============================================================
   갤러리 그리드 (3열, 간격 2px, 참고 이미지 스타일)
   ============================================================ */
.gallery-wrap {
  width: 100%;
  padding: 2% 2%;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.gallery-cell {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  cursor: pointer;
  padding: 2px;
}

.gallery-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.gallery-cell:hover img {
  transform: scale(1.06);
}

/* ============================================================
   더 보기 버튼
   ============================================================ */
.more-btn {
  display: block;
  margin: 28px auto 0;
  background: none;
  border: none;
  font-family: 'Noto Serif KR', serif;
  font-size: 15px;
  color: #333;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 8px 20px;
}

.more-arrow {
  display: inline-block;
  margin-left: 6px;
  font-size: 13px;
  color: #999;
}

/* ============================================================
   라이트박스
   ============================================================ */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-img-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
}

.lb-img-wrap img {
  max-width: 90vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 2px;
}

.lb-counter {
  margin-top: 10px;
  color: rgba(255,255,255,0.55);
  font-size: 12px;
  letter-spacing: 1px;
}

.lb-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.75;
}
.lb-close:hover { opacity: 1; }

.lb-prev, .lb-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.12);
  border: none;
  color: #fff;
  font-size: 40px;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.lb-prev { left: 10px; }
.lb-next { right: 10px; }
.lb-prev:hover, .lb-next:hover { background: rgba(255,255,255,0.25); }

/* 페이드 트랜지션 */
.lb-fade-enter-active, .lb-fade-leave-active { transition: opacity 0.2s; }
.lb-fade-enter, .lb-fade-leave-to { opacity: 0; }
</style>
