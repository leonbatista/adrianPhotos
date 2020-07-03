const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
      document.documentElement.scrollTop = 0;
      
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')

    })
    tab.classList.add('active')
    target.classList.add('active')

  })
})

const button = document.getElementById('home-button');
const gallery = document.getElementById('gallerytab');
const home = document.getElementById('hometab')
const gallerycont = document.getElementById('gallery');
const homecont = document.getElementById('home-text');
button.addEventListener("click",function(){ 
    home.classList.remove('active')
    gallery.classList.add('active')
    homecont.classList.remove('active')
    gallerycont.classList.add('active')
})

const submit = document.getElementById('sub-button');
const name = document.getElementById('text-field')
const emailtext = document.getElementById('text-email')
const textarea = document.getElementById('text-area')
submit.addEventListener('click',function(){
    if(name.value != "" && textarea.value != ""){
      submit.type = 'reset'
    }
    console.log(name.value)
    console.log(textarea.value)
})

