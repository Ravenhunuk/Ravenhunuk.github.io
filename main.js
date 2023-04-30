const hamburger = document.querySelector('.hamburger')
const navItems = document.querySelector('.navitems')

const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

hamburger.addEventListener('click', function () {
  navItems.classList.toggle('active')
  line1.classList.toggle('line-1-active')
  line2.classList.toggle('line-2-active')
  line3.classList.toggle('line-3-active')
})

navItems.addEventListener('click', function () {
  navItems.classList.remove('active')
})


const gallery = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg',]
const thumbWrapper = document.querySelector('.thumbnail')
close = document.querySelector('.close')

for (let item = 0; item < gallery.length; item++) {
  let thumbnail = document.createElement('img')
  thumbnail.src = `imgs/gallery/${gallery[item]}`
  thumbnail.addEventListener('click', () => {
    thumbnail.classList.add('image')
    close.classList.add('close-active')
    close.addEventListener('click', () => {
      thumbnail.classList.remove('image')
      close.classList.remove('close-active')
    })
  })
  thumbWrapper.append(thumbnail)
}

