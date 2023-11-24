<template>
  <div class="box">
    <el-card v-for="project in projects" :key="project.title" class="project-card">
      <div class="tit">
        <span>{{ project.title }}</span>
        <span style="float: right">{{ project.date }}</span>
      </div>
      <div v-if="project.img.length" class="carousel-container">
        <div class="left-icon" @click="leftSlid(project)">
          <img src="@/img/left.png" alt="" />
        </div>
        <div class="carousel-images">
          <img v-for="(image, index) in project.img" :key="index" :src="image.src" :alt="image.alt" :style="{ display: index === project.currentSlide ? 'block' : 'none' }" />
        </div>
        <div class="right-icon" @click="rightSlid(project)">
          <img src="@/img/right.png" alt="" />
        </div>
      </div>
      <div class="tech">
        <div v-for="tech in project.technicUsed" :key="tech" class="tech-nei">
          <el-tag type="success">{{ tech }}</el-tag>
        </div>
      </div>
      <div style="clear: both"></div>
      <div :class="{ 'expandable-content': true, expanded: project.showDetails }">
        <div v-for="detail in project.details" :key="detail">• {{ detail }}</div>
      </div>
      <div v-if="project.showDetails" class="open" @click="project.showDetails = !project.showDetails">close</div>
      <div v-if="!project.showDetails" class="close" @click="project.showDetails = !project.showDetails">show more</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideInterval: null,
      projects: [
        {
          title: 'E-Cafeteria Management System',
          date: '10/2022-04/2023',
          img: [{ src: 'canteen1.jpg' }, { src: 'can1.png' }, { src: 'can2.png' }, { src: 'can3.png' }, { src: 'can4.png' }],
          currentSlide: 0,
          showDetails: false,
          technicUsed: ['Python', 'Yolov5', 'Vue', 'Echarts', 'HTML+CSS', 'JavaScript', 'MySQL', 'Linux'],
          details: [
            'Satisfied the need for reducing the time students wait in line during meal times by collaborating with professor’s research group',
            'Visualized the data to provide visual and accurate analysis results for the cafeteria manager by MySQL',
            'Achieved the interaction of front-end and back-end interfaces by using Ajax, allowing for asynchronous page refresh and reducing the workload',
            'Labeled the images and augmented data through image enhancement techniques',
          ],
        },
        {
          title: 'A Tracing System for the Pandemic',
          date: '02/2022-12/2022',
          showDetails: false,
          technicUsed: ['Python', 'Flask', 'Algorithm', 'Vue', 'HTML+CSS', 'JavaScript', 'MySQL', 'K-means', 'Big Data'],
          img: [{ src: 'suyuan1.png' }, { src: 'suyuan2.png' }, { src: 'suyuan3.png' }, { src: 'suyuan4.png' }, { src: 'suyuan5.png' }, { src: 'suyuan6.png' }],
          currentSlide: 0,
          details: [
            'Designed the page lay out to increase user experience when using different facilities by modifying Element UI',
            'Analyzed several clustering methods, including DBSCAN and K-Means, to select the K-means++ algorithm with high iteration speed and accuracy',
            'Split words to extract required location and time by applying the Hanlp algorithm',
            'Built a tracing system using the K-means++ algorithm, allowing investigators and regular users to input information and receive notifications',
            'Added threads to the flask and used the spiders to update the database automatically',
            'Utilized the K-means++ algorithm, presenting the clustered results to users for accessing relevant information',
            'Deployed the entire front-end and back-end on a Linux server to test the functionality',
          ],
        },
        // ... other projects
      ],
    };
  },
  methods: {
    leftSlid(project) {
      project.currentSlide = (project.img.length + project.currentSlide - 1) % project.img.length;
    },
    rightSlid(project) {
      project.currentSlide = (project.currentSlide + 1) % project.img.length;
    },
  },
  // created() {
  //   this.startCarousel();
  // },
  // unmounted() {
  //   this.stopCarousel();
  // },
  // methods: {
  //   startCarousel() {
  //     this.slideInterval = setInterval(() => {
  //       this.nextSlide();
  //     }, 5000); // 设置为5秒
  //   },
  //   stopCarousel() {
  //     clearInterval(this.slideInterval);
  //   },
  //   nextSlide() {
  //     this.currentSlide = (this.currentSlide + 1) % this.images.length;
  //   },
  // },
};
</script>

<style scoped>
.project-card {
  margin-bottom: 20px;
  float: left;
  width: 675px;
  margin-left: 12px;
  margin-right: 25px;
  /* Add any other styling you'd like here */
}

.box {
  margin-top: 20px;
}
.carousel-container {
  position: relative; /* 为了使用绝对定位 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 根据需要设置宽度和高度 */
}

.carousel-images img {
  height: 250px;
  width: auto;
  transition: opacity 1s ease-in-out;
}

.left-icon,
.right-icon {
  position: absolute; /* 使用绝对定位 */
  top: 50%; /* 定位到容器的中间 */
  transform: translateY(-50%); /* 垂直居中调整 */
  z-index: 10;
}

.left-icon {
  left: 10px; /* 调整为适当的距离 */
}

.right-icon {
  right: 10px; /* 调整为适当的距离 */
}

.left-icon img,
.right-icon img {
  width: 30px;
  height: 30px;
}

.left-icon:hover,
.right-icon:hover {
  cursor: pointer;
}
.left-icon img {
  width: 30px;
  height: 30px;
}
/* .right-icon {
  z-index: 10;
} */
.right-icon:hover {
  cursor: pointer;
}
.right-icon img {
  width: 30px;
  height: 30px;
}
.tit {
  margin-bottom: 10px;
}
.tech-nei {
  float: left;
  margin: 5px 10px;
}

.open,
.close {
  color: aqua;
}

.open,
.close:hover {
  cursor: pointer;
}

.expandable-content {
  overflow: hidden;
  transition: height 0.5s ease-out;
  height: 0; /* 初始高度设置为 0 */
}

.expanded {
  height: auto; /* 需要动态计算高度 */
}
</style>
