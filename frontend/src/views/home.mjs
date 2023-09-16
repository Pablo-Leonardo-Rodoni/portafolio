export default () => {

  const Home = `
    
<div>
<section class="container_home">
  <div class="card_home">
    <div class="content_home">
    <p class="logo_home">Rodoni Devs</p>
      <div class="h6_home">Front end dev</div>
      <div class="hover_content_home">
        <p>Welcome to My Digital World!

I'm delighted to welcome you to my online space, where a passion for programming and web development merge with constant curiosity and a thirst for learning and growth.

</p>
      </div>
    </div>
  </div>       
</section>
</div>

<div>
<div class="card_home_skill">
  <div class="header_home_skill">My Skills</div>
  <div class="body_home_skill">
    <div class="skill_home_skill">
      <div class="skill-name_home_skill astro">Astro</div>
      <div class="skill-level_home_skill">
        <div style="width: 90%" class="skill-percent_home_skill"></div>
      </div>      
      <div class="skill-percent-number_home_skill">90%</div>
    </div>
    <div class="skill_home_skill">
      <div class="skill-name_home_skill php">PHP</div>
      <div class="skill-level_home_skill">
        <div style="width: 90%" class="skill-percent_home_skill"></div>
      </div>      
      <div class="skill-percent-number_home_skill">90%</div>
    </div>
    <div class="skill_home_skill">
      <div class="skill-name_home_skill html">HTML</div>
      <div class="skill-level_home_skill">
        <div style="width: 90%" class="skill-percent_home_skill"></div>
      </div>      
      <div class="skill-percent-number_home_skill">90%</div>
    </div>
    <div class="skill_home_skill">
      <div class="skill-name_home_skill css">CSS</div>
      <div class="skill-level_home_skill">
        <div style="width: 80%" class="skill-percent_home_skill"></div>
      </div>
      <div class="skill-percent-number_home_skill">80%</div>
    </div>
    <div class="skill_home_skill">
      <div class="skill-name_home_skill js">JavaScript</div>
      <div class="skill-level_home_skill">
        <div style="width: 75%" class="skill-percent_home_skill"></div>
      </div>
      <div class="skill-percent-number_home_skill">75%</div>
    </div>
  </div>
</div>

</div>


  
    `;

  const homeEl = document.createElement('div')
  homeEl.classList.add('home_layout')
  homeEl.innerHTML = Home

  return homeEl
}