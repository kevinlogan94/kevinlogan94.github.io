<template>
  <section class="hero is-primary software">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" v-scroll-animation>Software Engineering</h1>
<!--        <h2 class="subtitle has-text-centered" v-scroll-animation>-->
<!--          Enterprise and Start-Up Projects-->
<!--        </h2>-->
        <section class="section">
          <div class="container">
            <div class="tile is-ancestor">
              <div class="tile is-vertical">
                <div class="tile">
                  <Project
                      title="NaviStone"
                      time-period="2020 - Present"
                      subtitle="Full-Stack Engineer, Software Engineering Manager"
                      img="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/CFI.png?alt=media&token=d6baf6d7-c8d0-4486-86df-1f69de0c4c6d"
                      imgAlt="Client Facing Interface Project"
                      description="At NaviStone, you can find my team and I working on our customer facing platform. This gives our customers a dashboard to interact with our services."
                  />
                  <Project
                      title="Fifth Third Bank"
                      subtitle="Angular and UI Developer"
                      time-period="2018 - 2020"
                      img="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/ROB.png?alt=media&token=8a95a607-102b-45b3-9046-99b7a5a2a919"
                      imgAlt="Responsive Online Banking Project"
                      description="At Fifth Third Bank, I focused on the online banking application and building new features like Offers, Products, Lost & Stolen Card, and Check Order."
                  />
                </div>
                <div class="tile">
                  <Project
                      title="TCS"
                      subtitle="UI and React Developer, UX Designer"
                      time-period="2016"
                      img="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/TCS.png?alt=media&token=d99696bd-26c0-47c9-8e44-eaa475243dfd"
                      imgAlt="TCS Project"
                      description="At TCS, I offered customers a smoother check-in process by designing and building their front desk application. Features included incorporating employee directory and badge sign-in."
                  />
                  <Project
                      title="Hasbro"
                      subtitle="UI, PHP, and JQuery Developer"
                      time-period="2017"
                      img="https://firebasestorage.googleapis.com/v0/b/personal-web-application.appspot.com/o/Hasbro.png?alt=media&token=ae6cbdc5-26bf-419f-8b40-22b85e82baac"
                      imgAlt="Hasbro Project"
                      description="At Hasbro, I got to build a creative and fun user experience by completing full site redesigns. My primary focus was on Transformers, My Little Pony, and Littlest Pet Shop."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import Project from "@/components/Project.vue";
</script>
