<template>
  <!-- 화면 우측 하단에 고정된 플로팅 음악 플레이어 -->
  <div class="music-player">

    <!-- HTML5 오디오 (loop: 반복 재생) -->
    <audio
      ref="audio"
      :src="musicSrc"
      loop
      preload="none"
    />

    <!-- 재생/정지 플로팅 버튼 -->
    <button
      class="music-btn"
      :class="{ 'is-playing': isPlaying }"
      aria-label="배경음악 재생/정지"
      @click="togglePlay"
    >
      <!-- 회전하는 음표 아이콘 -->
      <span class="music-icon">♪</span>
    </button>

    <!-- 현재 상태 툴팁 라벨 -->
    <span class="music-label">{{ isPlaying ? '음악 켜짐' : '음악 꺼짐' }}</span>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
  props: {
    /**
     * 재생할 음악 파일의 URL 또는 경로
     * - 직접 파일을 제공하려면: require('@/static/music/bgm.mp3')
     * - 외부 URL도 사용 가능 (CORS 허용 필요)
     */
    musicSrc: {
      type: String,
      // 무료 피아노 BGM (공개 도메인 예시 URL)
      // 실제 서비스 시 static/music/ 폴더에 mp3 파일을 넣어 경로를 변경하세요.
      default: process.env.BASE_URL + 'bgm-wedding.mp3'
    }
  },
  data () {
    return {
      isPlaying: false
    }
  },
  mounted () {
    const startMusic = () => {
      const audio = this.$refs.audio

      if (!this.isPlaying) {
        audio.play().then(() => {
          this.isPlaying = true
        }).catch(() => {})
      }

      document.removeEventListener('click', startMusic)
      document.removeEventListener('touchstart', startMusic)
    }

    document.addEventListener('click', startMusic)
    document.addEventListener('touchstart', startMusic)
  },
  methods: {
    /**
     * 배경음악 재생/정지 토글
     * - 브라우저 정책상 최초 재생은 반드시 사용자 상호작용 후에만 가능
     */
    async togglePlay () {
      const audio = this.$refs.audio

      if (this.isPlaying) {
        audio.pause()
        this.isPlaying = false
      } else {
        try {
          await audio.play()
          this.isPlaying = true
        } catch (err) {
          // 자동재생 정책(AutoPlay Policy)으로 실패할 경우 콘솔에만 표시
          console.warn('음악 재생 실패:', err.message)
        }
      }
    }
  }
}
</script>

<style scoped>
/* 화면 우측 상단 고정 컨테이너 */
.music-player {
  position: fixed;
  top: 28px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

/* 원형 플로팅 버튼 */
.music-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(64deg, #f4a8b6, #ffffff);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  /* 튀어나온 입체감 섀도 */
  box-shadow: 0 4px 16px rgba(139, 94, 82, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.music-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(139, 94, 82, 0.55);
}

/* 음표 아이콘: 재생중일 때 회전 */
.music-icon {
  display: inline-block;
  transition: transform 0.3s;
}

.music-btn.is-playing .music-icon {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg);   }
  to   { transform: rotate(360deg); }
}

/* 상태 라벨 */
.music-label {
  font-size: 10px;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  /* 배경을 살짝 불투명하게 (가독성 확보) */
  border-radius: 999px;
  padding: 2px 8px;
}
</style>
