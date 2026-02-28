<template>
  <div class="cal-wrap">
    <!-- 연도 / 월 헤더 -->
    <p class="cal-year">2026</p>
    <p class="cal-month">June</p>

    <!-- 요일 헤더 -->
    <table class="cal-table">
      <thead>
        <tr>
          <th class="dow sun">일</th>
          <th class="dow">월</th>
          <th class="dow">화</th>
          <th class="dow">수</th>
          <th class="dow">목</th>
          <th class="dow">금</th>
          <th class="dow sat">토</th>
        </tr>
      </thead>
      <tbody>
        <!-- 2026년 6월: 1일 월요일 시작 -->
        <!-- 주 1: 일요일 공백, 1~6일 -->
        <tr>
          <td class="day empty"></td>
          <td class="day">1</td>
          <td class="day">2</td>
          <td class="day">3</td>
          <td class="day">4</td>
          <td class="day">5</td>
          <td class="day sat">6</td>
        </tr>
        <!-- 주 2: 7~13일 -->
        <tr>
          <td class="day sun">7</td>
          <td class="day">8</td>
          <td class="day">9</td>
          <td class="day">10</td>
          <td class="day">11</td>
          <td class="day">12</td>
          <td class="day sat">13</td>
        </tr>
        <!-- 주 3: 14~20일 ← 20일이 결혼식 당일 -->
        <tr>
          <td class="day sun">14</td>
          <td class="day">15</td>
          <td class="day">16</td>
          <td class="day">17</td>
          <td class="day">18</td>
          <td class="day">19</td>
          <!-- 결혼식 당일: 핑크 하트로 감싸기 -->
          <td class="day sat">
            <div class="wedding-day">
              <span class="wedding-heart-bg">♥</span>
              <span class="wedding-num">20</span>
            </div>
          </td>
        </tr>
        <!-- 주 4: 21~27일 -->
        <tr>
          <td class="day sun">21</td>
          <td class="day">22</td>
          <td class="day">23</td>
          <td class="day">24</td>
          <td class="day">25</td>
          <td class="day">26</td>
          <td class="day sat">27</td>
        </tr>
        <!-- 주 5: 28~30일 -->
        <tr>
          <td class="day sun">28</td>
          <td class="day">29</td>
          <td class="day">30</td>
          <td class="day empty"></td>
          <td class="day empty"></td>
          <td class="day empty"></td>
          <td class="day empty"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WeddingCalendar'
}
</script>

<style scoped>
/* ============================================================
   깔끔한 미니멀 달력 스타일
   ============================================================ */
.cal-wrap {
  width: 100%;
  padding: 0 8px;
  text-align: center;
}

.cal-year {
  font-size: 13px;
  color: #999;
  letter-spacing: 3px;
  margin-bottom: 2px;
  font-family: 'Noto Serif KR', serif;
}

.cal-month {
  font-size: 22px;
  color: #1a1a1a;
  letter-spacing: 2px;
  margin: 16px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.cal-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

/* 요일 헤더 */
.dow {
  font-size: 11px;
  color: #aaa;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-bottom: 10px;
  text-align: center;
}
.dow.sun { color: #e8786a; }
.dow.sat { color: #6a9fe8; }

/* 날짜 셀 */
.day {
  text-align: center;
  padding: 6px 0;
  font-size: 14px;
  color: #333;
  position: relative;
  height: 40px;
  vertical-align: middle;
}
.day.empty { color: transparent; }
.day.sun   { color: #e8786a; }
.day.sat   { color: #6a9fe8; }

/* ============================================================
   결혼식 당일 (6월 20일): 핑크 하트로 숫자 감싸기
   ============================================================ */
.wedding-day {
  /* 하트와 숫자를 겹쳐서 표시하는 컨테이너 */
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

/* 하트 배경: 크게 깔아서 숫자를 감싸는 효과 */
.wedding-heart-bg {
  position: absolute;
  font-size: 50px;
  color: #f4a7b5;       /* 연한 핑크 하트 */
  line-height: 1;
  /* 심장 모양 특성상 살짝 위로 조정 */
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  animation: heartbeat 1.4s ease-in-out infinite;
}

/* 숫자: 하트 위에 흰색으로 표시 */
.wedding-num {
  position: relative;
  z-index: 2;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  /* 심장 모양 중앙 정렬 보정 */
  margin-top: 3px;
}

@keyframes heartbeat {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50%       { transform: translateX(-50%) scale(1.15); }
}
</style>
