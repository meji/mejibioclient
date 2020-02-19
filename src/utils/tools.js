import anime from 'animejs'

export const scrollAnchors = (e, respond = null) => {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    const targetID = e.target.getAttribute('data-href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 500);
}

export const linkContainer = (e, respond = null) => {
    const target = e.currentTarget.querySelector('h2').dataset.href
    return window.location.assign(target)
}

const split = {};
split.opacityIn = [0, 1];
split.opacityOut = [0, 1];
split.scaleIn = [0.2, 1];
split.scaleOut = 3;
split.durationIn = 800;
split.durationOut = 600;
split.delay = 500;
const animation = anime.timeline({ autoplay: false , complete: function(anim){console.log(animation)}});
export const animatione = ()=> {
    if (animation.completed) {
        animation.restart()
    }else if (!animation.began){
        animation.add({
            targets: '.split .meji',
            opacity: 0,
            scale: split.scaleOut,
            duration: split.durationOut,
            easing: "easeInExpo",
            delay: 1000
        })
            .add({
                targets: '.split .letters-1',
                opacity: split.opacityIn,
                scale: split.scaleIn,
                duration: split.durationIn
            }).add({
            targets: '.split .letters-1',
            opacity: 0,
            scale: split.scaleOut,
            duration: split.durationOut,
            easing: "easeInExpo",
            delay: split.delay
        }).add({
            targets: '.split .letters-2',
            opacity: split.opacityIn,
            scale: split.scaleIn,
            duration: split.durationIn
        }).add({
            targets: '.split .letters-2',
            opacity: 0,
            scale: split.scaleOut,
            duration: split.durationOut,
            easing: "easeInExpo",
            delay: split.delay
        }).add({
            targets: '.split .letters-3',
            opacity: split.opacityIn,
            scale: split.scaleIn,
            duration: split.durationIn
        }).add({
            targets: '.split .letters-3',
            opacity: 0,
            scale: split.scaleOut,
            duration: split.durationOut,
            easing: "easeInExpo",
            delay: split.delay
        })
            .add({
                targets: '.split .meji',
                opacity: split.opacityIn,
                scale: split.scaleIn,
                duration: split.durationIn
            })
        animation.play()
    }
}

export const isAuthenticated = () => {
    const token = localStorage.getItem('jwt');
    return fetch(process.env.REACT_APP_SERVER_URL + 'admin?token='+token).then(response =>{
          if(response.ok){
              return response
          }else{
              var error = new Error('Error '+response.status + ': '+ response.statusText)
              error.response = response;
              throw error;
          }
      },
      error => {
          var errmess = new Error(error.message);
          throw errmess
      })
      .then(response => response.json())
      .then(response =>  response.data)
      .catch(error => {
          console.log('Authenticacion:'+ error.message)
      })
}





