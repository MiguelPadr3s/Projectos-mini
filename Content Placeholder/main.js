const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML ='<img src="https://blog.richersounds.com/wp-content/uploads/2019/03/image-1024x576.jpeg" alt="">'
    title.innerHTML = 'Bounty hunter and Demon killer'
    excerpt.innerHTML = 'Name your job and if its intresting enough ill take it, even better if it has demons!'
    profile_img.innerHTML = '<img src="https://assetsio.gnwcdn.com/devil-may-cry-5-najlepsze-umiejtnoci-na-pocztek-nero-v-dante-1553366284550.jpg?width=45&height=45&fit=crop&quality=100&format=png&enable=upscale&auto=webp" alt="">'
    name.innerHTML = 'Dante Son of Sparda'
    date.innerHTML = 'Oct 27, 1973'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}