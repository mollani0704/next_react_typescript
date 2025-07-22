<template>
  <div class="app-frame">
    <header class="app-header">My Mobile App</header>
    <main class="app-content">
      <slot></slot>
    </main>
    <footer class="app-footer">
      <nav>
        <button>홈</button>
        <button>메뉴</button>
        <button>설정</button>
      </nav>
    </footer>
  </div>
</template>
<script></script>
<style scoped>
.app-frame {
  max-width: 420px;
  min-width: 320px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background: white;
}

.app-header {
  height: 50px;
  background: #1e88e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.app-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.app-footer {
  height: 50px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ccc;
}
</style>
