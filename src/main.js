import string from './css.js'
console.log(string)
//防抖动
function preventBehavior(e) {
    e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, { passive: false }, false);


const player = {
    ui: {
        code: document.querySelector('#code'),
    },
    duration: 50,
    string2: '',
    n: 0,
    start: true,
    events: {
        '#fast': 'fast',
        '#normal': 'normal',
        '#slow': 'slow',
        '#pause': 'pause'
    },
    init: () => {
        player.bindEvent()
        player.step()
    },
    bindEvent: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                document.querySelector(key).onclick = player[player.events[key]]
            }
        }
    },
    fast: () => { player.duration = 0 },
    normal: () => { player.duration = 50 },
    slow: () => { player.duration = 100 },
    pause: () => {
        if (player.start) {
            player.start = false
            pause.textContent = '继续'
        } else {
            player.start = true
            pause.textContent = '暂停'
            if (player.n < string.length) {
                player.step()
            }
            else return
        }
    },
    step: () => {
        if (player.start) {
            setTimeout(() => {
                if (string[player.n] === '\n') {
                    player.string2 += '<br>'
                }
                if (string[player.n] === ' ') {
                    player.string2 += '&nbsp'
                }
                else {
                    player.string2 += string[player.n]
                }
                style.innerHTML = string.substring(0, player.n)
                player.ui.code.innerHTML = player.string2
                player.ui.code.scrollTo(0, 9999)
                player.n += 1
                if (player.n < string.length) {
                    player.step()
                }
            }, player.duration)
        }
    }
}

player.init()