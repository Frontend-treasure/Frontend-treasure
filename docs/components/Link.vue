<template>
  <section class="container">
    <a
      href="https://www.bilibili.com/bangumi/play/ss36198/?spm_id_from=333.999.0.0"
      target="_blank"
    >
      <div class="card">
        <div class="photo">
          <img src="/animate/1.jpg" />
        </div>
        <h1>宫村</h1>
        <h2>宫村伊澄</h2>
      </div>
    </a>
    <a
      href="https://www.bilibili.com/bangumi/play/ss36198/?spm_id_from=333.999.0.0"
      target="_blank"
    >
      <div class="card">
        <div class="photo">
          <img src="/animate/2.jpg" />
        </div>
        <h1>堀</h1>
        <h2>堀京子</h2>
      </div>
    </a>
    <a
      href="https://www.bilibili.com/bangumi/play/ss26274/?spm_id_from=333.999.0.0"
      target="_blank"
    >
      <div class="card">
        <div class="photo">
          <img src="/animate/3.jpg" />
        </div>
        <h1>辉夜</h1>
        <h2>四宫辉夜</h2>
      </div>
    </a>
    <a
      href="https://www.bilibili.com/bangumi/play/ss21542?spm_id_from=333.337.0.0"
      target="_blank"
    >
      <div class="card">
        <div class="photo">
          <img src="/animate/4.jpg" />
        </div>
        <h1>薇尔莉特</h1>
        <h2>薇尔莉特·伊芙加登</h2>
      </div>
    </a>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  display: flex;
  gap: 3rem;
  min-width: 1440px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .card {
    position: relative;
    // width: 300px;
    // height: 450px;
    width: 150px;
    height: 225px;
    // margin: 20px;
    background-color: #21434e;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
    h1 {
      font-size: 1.2rem;
      color: #fff;
      position: absolute;
      top: 370px;
      transition: 0.5s;
    }
    h2 {
      margin-top: 180px;
      width: 80%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
    a {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 8px 32px;
      border-radius: 8px;
      &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
    &:hover {
      cursor: pointer;
      h1 {
        top: 140px;
      }
      .photo {
        top: 30px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        // &
      }
    }
    & .photo {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 0%;
      overflow: hidden;
      transition: 0.5s;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent 50%, #222);
      }
    }
  }
}
</style>
